import React, {useState} from 'react';
import { Form, Input, Button, Typography, Flex, Row, Col } from 'antd';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const { Title, Text } = Typography;

const SignUp = () => {

  const [submitLoading, setSubmitLoading] = useState(false);


  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Wrapper className='h-100'>
      {/* <Row className='h-100'>
        <Col span={12} className='bdr'>s</Col>
        <Col span={12}  className="d-none bdr d-lg-flex flex-lg-row-fluid w-50 bgi-size-cover bgi-position-y-center bgi-position-x-end bgi-no-repeat" style={{backgroundImage: 'url(../assets/images/bew-bg.png)'}}>s</Col>
      </Row> */}
    <Flex  className=" flex-row flex-column-fluid h-100 sign-in-main" style={{position:'relative', zIndex:'1'}}>
     
      <Flex className="  flex-column flex-column-fluid flex-center w-lg-60 p-10   my-auto ">
        <Flex className="d-flex justify-content-between flex-column-fluid flex-column w-100 mw-350px box-l p-15 pt-13 pb-10 rounded-4 sign-in" style={{}}>
          <Flex className='mb-7' justify='center'>
            <img alt="Logo" src="../assets/images/ezlaw_icon.png" className="theme-light-show w-80px" />
          </Flex>
          <Form name="register"  initialValues={{ remember: true }} onFinish={onFinish} className="form w-100 ">
                <div className="text-center mb-5 ">
                  <Title className="mb-3 fs-2 fw-bold" data-kt-translate="sign-in-title">Create an account</Title>
                  <Text type="secondary" className="fw-medium fs-7" data-kt-translate="general-desc">Enter your details to view all insights</Text>
                </div>

                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input
                   className='form-control h-45px'
                    size="large"
                    variant="filled"
                    placeholder="Name"
                  />
                </Form.Item>

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
                    size="large"
                     className='form-control h-45px'
                    variant="filled"
                    placeholder="Email"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password
                  className='form-control h-45px'
                    size="large"
                    variant="filled"
                    placeholder="Password"
                  />
                </Form.Item>

                <Form.Item
                  name="confirm_password"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("The two passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                  className='form-control h-45px'
                    size="large"
                    variant="filled"
                    placeholder="Confirm Password"
                  />
                </Form.Item>

                <Flex className>
                  {/* <button id="kt_sign_in_submit" className="btn btn-dark me-2 flex-shrink-0 w-100 h-50px">
                    <span className="indicator-label d-flex justify-content-center" data-kt-translate="sign-in-submit">Sign In <i className="ki-outline ki-arrow-right fs-1 ms-2" /></span>
                    <span className="indicator-progress">
                      <span data-kt-translate="general-progress">Please wait...</span>
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button> */}
                  <Button className='h-45px' color='primary' variant='solid' size="large" htmlType="submit" block>
                    Sign Up
                    <Icon icon="line-md:arrow-right" width={20}></Icon>
                  </Button>
                </Flex>
           </Form>
            <Flex justify='center' align='center' className=" py-2  mt-5">
                <Text type='secondary' className=" fw-normal fs-7 me-2" >Already have an Account?</Text>
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

export default SignUp;
