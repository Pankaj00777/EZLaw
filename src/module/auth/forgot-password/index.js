import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Typography, Flex, message,} from 'antd';
import { Wrapper } from './style';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import { MakeApiCall } from '../../../apis';
import { DefaultAdminPage, DefaultUserPage, Types } from '../../../config';
import { useDispatch, useSelector } from "react-redux";


import { setData } from '../../../redux/action'; 


const findRoutes = {
  admin: DefaultAdminPage,
  user: DefaultUserPage,
};


const { Title, Text } = Typography;

const ForgotPassword = () => {

  const [form] = Form.useForm();
  

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const userToken = user?.token;
  const loginType = user?.loginType;

  
  console.log(user, 'user');
  console.log(userToken, 'userToken');
  

  const navigate = useNavigate();


  const [submitLoading, setSubmitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [currentStep, setCurrentStep] = useState("password");
  const [registrationData, setRegistrationData] = useState(null);

  const [token, setToken] = useState("");
  const location = useLocation();


//   useEffect(() => {
//     if (user && user.loginType) {
//       console.log(findRoutes[user.loginType], 'findRoutes[user.loginType]');
//         navigate(findRoutes[user.loginType]); 
//     }
// }, [user, navigate]);

useEffect(() => {
  const params = new URLSearchParams(location.search);
  const extractedToken = params.get("token");

  if (extractedToken) {
    setCurrentStep("password");
    setToken(extractedToken);

    params.delete("token");
  } else {
    setCurrentStep("email");
  }
}, [location]);

  // const handleLogin = (data) => {
  //   const type = Types?.[data?.data?.user_data?.user_type];
  //   dispatch(
  //     setData({
  //       user: data?.data,
  //       loginType: type,
  //       token: data?.data?.auth_token_data?.access_token,
  //     })
  //   );
  //   navigate(findRoutes?.[type] || "/sign-in");
  // };


  // const onFinish = async (values) => {
  //   setSubmitLoading(true);
  //   try {
  //     const response = await MakeApiCall("login", "post", { ...values });
  //     const response_ = {
  //       code: 200,
  //       status: true,
  //       message: "User data found.",
  //       data: {
  //         auth_token_data: {
  //           access_token:
  //             "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJhdWQiOiIiLCJqdGkiOiIiLCJpYXQiOjE3Mjk4MzE2NzguNzM1MjA3LCJleHAiOjE3Mjk4MzU1NzguNzM1MjA3LCJ1aWQiOjF9.qRaVxLYypw1Wo1Ku_9jhpCfvlKiybng94v1aKBf0Cgg",
  //           expire_in: 1729835578,
  //         },
  //         user_data: {
  //           id: 1,
  //           rds_credential_id: null,
  //           server_credential_id: null,
  //           parent: 0,
  //           name: "Admin",
  //           first_name: null,
  //           last_name: null,
  //           seller_name: "",
  //           seller_id: null,
  //           user_type:1,
  //           email: "admin@gmail.com",
  //           photo: null,
  //           db_name: null,
  //           contact_no: null,
  //           address: null,
  //           city: null,
  //           country: null,
  //           postal_code: null,
  //           company_registration_number: null,
  //           company_name: null,
  //           invoice_number: null,
  //           status: 1,
  //           pending_reports: 0,
  //           user_status: 0,
  //           amazon_advertising_client_id: null,
  //           amazon_advertising_client_secret: null,
  //           amazon_advertising_return_url: null,
  //           amazon_advertising_response: null,
  //           amazon_advertising_access_token: null,
  //           amazon_advertising_refresh_token: null,
  //           amazon_advertising_region: null,
  //           amazon_advertising_access_token_expiry: null,
  //           amazon_advertising_token_type: null,
  //           created_at: 1724757649,
  //           updated_at: 1724757649,
  //           deleted_at: null,
  //           deleted_by: null,
  //         },
  //       },
  //       error: [],
  //     };
  //     if (response_?.status === true) {
  //       handleLogin(response_);
  //     } else {
  //       console.error(response_?.message);
  //     }
  //   } catch (error) {
  //     console.error("Error during login:", error);
  //   } finally {
  //     setSubmitLoading(false);
  //   }
  // };


  if (userToken || redirect) {
    return (
      navigate( loginType === 'admin' ? `/manage-user` : "/dashboard")
    );
  }




  const handleEmailSubmit = async (values) => {
    console.log(values, "values");
    setSubmitLoading(true);
    setRegistrationData(values);
    const response = await MakeApiCall("forgot-password", "post", {
      email: values?.email,
    });

    if (response?.status === true) {
      setSubmitLoading(false);
      message.success(response?.message);
      form.resetFields();
      //   setCurrentStep("otp");
    } else {
      setSubmitLoading(false);
      message.destroy();
      message.error(response?.message);
    }
  };

  const handlePasswordReset = async (values) => {
    console.log(values, "values");
    setSubmitLoading(true);
    const response = await MakeApiCall(`reset-password?token=${token}`, "put", {
      password: values?.password,
      confirm_password: values?.confirm_password,
    });

    if (response?.status === true) {
      setSubmitLoading(false);
      message.success(response?.message);
      navigate("/sign-in");
    } else {
      setSubmitLoading(false);
      message.destroy();
      message.error(response?.message);
    }
  };



  const renderEmailStep = () => (
    // <Form
    //   form={form}
    //   onFinish={handleEmailSubmit}
    //   layout="vertical"
    //   style={{ paddingInline: "20px", width: "100%" }}
    // >
       <Form form={form}  initialValues={{ remember: true }} onFinish={handleEmailSubmit} className="form w-100 ">
                <div className="text-center mb-10 ">
                  <Title className="mb-3 fs-2 fw-bold" data-kt-translate="sign-in-title">Forgot your password</Title>
                  <Text type="secondary" className="fw-semibold fs-7" data-kt-translate="general-desc">Please enter the email address you'd like your password reset information sent to</Text>
                </div>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email!" },
        ]}
      >
        <Input
          className='form-control h-60px'
          size="large"
          variant="filled"
          placeholder="Enter email address"
        />
      </Form.Item>

      <Form.Item>
        <Button loading={submitLoading} className='h-50px' color='primary' variant='solid' size="large" htmlType="submit" block>
            Request reset link
            <Icon icon="line-md:arrow-right" width={20}></Icon>
        </Button>
      </Form.Item>
    </Form>
  );

  const renderPasswordStep = () => (

    <Form form={form}  initialValues={{ remember: true }} onFinish={handlePasswordReset} className="form w-100 ">
                <div className="text-center mb-10 ">
                  <Title className="mb-3 fs-2 fw-bold" data-kt-translate="sign-in-title">Enter your new password</Title>
                  <Text type="secondary" className="fw-medium fs-7" data-kt-translate="general-desc">Please enter the email address you'd like your password reset information sent to</Text>
                </div>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Please input your new password!" },
          { min: 8, message: "Password must be at least 8 characters!" },
        ]}
      >
        <Input.Password
          placeholder="New Password"
          className='form-control h-60px'
          size="large"
          variant="filled"
        />
      </Form.Item>

      <Form.Item
        name="confirm_password"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Passwords do not match!");
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
          className='form-control h-60px'
          size="large"
          variant="filled"
        />
      </Form.Item>

      <Form.Item>
        <Button loading={submitLoading} className='h-50px' color='primary' variant='solid' size="large" htmlType="submit" block>
        Reset Password
            <Icon icon="line-md:arrow-right" width={20}></Icon>
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Wrapper className='h-100'>
      {/* <Row className='h-100'>
        <Col span={12} className=''>s</Col>
        <Col span={12}  className="d-none  d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-end bgi-no-repeat" style={{backgroundImage: 'url(../assets/images/bew-bg.png)'}}>s</Col>
      </Row> */}
    <Flex  className=" flex-row flex-column-fluid h-100 sign-in-main" style={{position:'relative', zIndex:'1'}}>
     
      <Flex className="  flex-column flex-column-fluid flex-center w-lg-60 p-10  my-auto ">
        <Flex className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-350px box-l p-15 pt-13 pb-10 rounded-4 sign-in" style={{}}>
          <Flex className='mb-5' justify='center'>
            <img alt="Logo" src="../assets/images/ezlaw_icon.png" className="theme-light-show w-80px" />
          </Flex>
          {currentStep === "email"
                  ? renderEmailStep()
                  : renderPasswordStep()}

          {/* <Form name="signin"  initialValues={{ remember: true }} onFinish={onFinish} className="form w-100 ">
                <div className="text-center mb-10 ">
                  <Title className="mb-3 fs-2 fw-bold" data-kt-translate="sign-in-title">Forgot your password</Title>
                  <Text type="secondary" className="fw-semibold fs-7" data-kt-translate="general-desc">Please enter the email address you'd like your password reset information sent to</Text>
                </div>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!",
                    },
                  ]}
                >
                  <Input
                    className='form-control h-60px'
                    size="large"
                    variant="filled"
                    placeholder="Enter email address"
                  />
                </Form.Item>
                <Flex className>
                  <Button loading={submitLoading} className='h-50px' color='primary' variant='solid' size="large" htmlType="submit" block>
                    Request reset link
                    <Icon icon="line-md:arrow-right" width={20}></Icon>
                  </Button>
                </Flex>
           </Form> */}
            <Flex justify='center' align='center' className=" py-2  mt-0">
                <Text type='secondary' className=" fw-semibold fs-7 me-2" >Back to</Text>
                <Link to="/sign-in" className="link-dark fs-7 fw-bold">Sign In</Link>
            </Flex>
        </Flex>
      </Flex>
      <Flex className="d-none  d-lg-flex flex-lg-row-fluid w-50 bg-cover" style={{backgroundImage: 'url(./assets/images/bew-bg.png)'}} />
    </Flex>
    <img src="assets/images/bg-layer.png" style={{position: 'absolute', top:'0',height:'100%', width:'100%', opacity:'0.5'}} alt />

    </Wrapper>
  );
};

export default ForgotPassword;
