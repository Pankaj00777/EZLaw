import React, { useState } from 'react'

import { Descriptions, Tabs, Card, List, Typography, Space, Button, Flex, Avatar, Skeleton, Modal,  Input, Form, Row, Col  } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import { Wrapper } from '../style';
// import Icon, { EditOutlined, SettingOutlined, WalletOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Text } = Typography;

const clientData = [
    {
      name: "John Doe",
      addedDate: "Jan. 23, 2025",
      mobile: "(650) 843-9881",
      clientId: "1282630",
      email: "jmd.coder@gmail.com",
    },
    {
      name: "Cody Fishers",
      addedDate: "Jan. 23, 2025",
      mobile: "(650) 843-9881",
      clientId: "1282630",
      email: "jmd.coder@gmail.com",
    },
  ];
  
  const companyData = [
    {
      companyName: "IYSHIPPING LLC",
      primaryContact: "Ibrahem Abourahma",
      mobile: "(708) 491-1152",
      email: "iyshipping1@gmail.com",
    },
    {
      companyName: "IYSHIPPING LLC",
      primaryContact: "Ibrahem Abourahma",
      mobile: "(708) 491-1152",
      email: "iyshipping1@gmail.com",
    },
  ];

function MyProfile() {

    // const [initLoading, setInitLoading] = useState(false);
//   const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    setIsModalOpen(false);
  };


  return (
    <>
    <div className='mt-4 mb-4'>
    <Title className='d-flex align-items-center' level={4}><Icon icon="solar:users-group-rounded-line-duotone" width={25} className='me-1'></Icon>Client List</Title>
    </div>
    <List
      className="demo-loadmore-list"
    //   loading={initLoading}
      itemLayout="horizontal"
    //   loadMore={loadMore}
      dataSource={clientData}
      renderItem={(item) => (
        <Card className='mb-5 hover-elevate-up'>
        <List.Item
         actions={[<Link className='' onClick={showModal} key=""><Icon icon="solar:pen-line-duotone" width={20} className='me-1 d-flex'></Icon></Link>, ]}
        >
          {/* <Skeleton avatar title={false} active> */}
            <List.Item.Meta style={{maxWidth: "310px"}} className=' d-flex align-items-center'
              avatar={<Avatar size={40} style={{backgroundColor: '#025497',fontSize:'17px'}} className='me-0'>{item.name?.charAt(0) || '-'}</Avatar>}
              title={<span className='main-title'>{item.name}</span>}
              description={<span>Added: <b style={{color:'#333'}}>{item.addedDate}</b></span>}
            />
            <div className=' min-w-200px'>
                <div className='mb-1' style={{opacity:'.5'}}>Mobile Phone</div>
                <h6 className='mb-0' style={{fontSize:'14px'}}>{item.mobile}</h6>
           </div>
           <div className='min-w-200px'>
                <div className='mb-1' style={{opacity:'.5'}}>Client ID</div>
                <h6 className='mb-0' style={{fontSize:'14px'}}>{item.clientId}</h6>
           </div>
           <div className='min-w-200px'>
                <div className='mb-1' style={{opacity:'.5'}}>Email</div>
                <h6 className='mb-0' style={{fontSize:'14px'}}>{item.email}</h6>
           </div>
          {/* </Skeleton> */}
        </List.Item>
        </Card>
      )}
    />
        

          {/* Company Section */}

          <div className='mt-10 mb-4'>
             <Title className='d-flex align-items-center' level={4}><Icon icon="solar:buildings-2-line-duotone" width={25} className='me-1'></Icon>Companies List</Title>
          </div>
          <List
      className="demo-loadmore-list"
    //   loading={initLoading}
      itemLayout="horizontal"
    //   loadMore={loadMore}
      dataSource={companyData}
      renderItem={(item) => (
        <Card  className='mb-5 hover-elevate-up'>
        <List.Item
         actions={[<Link className='' key=""><Icon icon="solar:card-outline" width={24} className='me-1 d-flex'></Icon></Link>, <Link className='d-flex' key=""><Icon icon="solar:settings-linear" width={23} className='me-1 d-flex'></Icon></Link>]}
        >
          {/* <Skeleton avatar title={false} active> */}
            <List.Item.Meta style={{maxWidth: "310px"}} className=' d-flex align-items-center'
              avatar={<Avatar size={40} style={{backgroundColor: '#000',fontSize:'17px'}} className='me-0'>{item.companyName?.charAt(0) || '-'}</Avatar>}
              title={<span className='main-title'>{item.companyName}</span>}
            //   description={<span>Added: <b style={{color:'#333'}}>{item.addedDate}</b></span>}
            />
            <div className=' min-w-200px'>
                <div className='mb-1' style={{opacity:'.5'}}>Primary Contact</div>
                <h6 className='mb-0' style={{fontSize:'14px'}}>{item.primaryContact}</h6>
           </div>
           <div className='min-w-200px'>
                <div className='mb-1' style={{opacity:'.5'}}>Mobile phone</div>
                <h6 className='mb-0' style={{fontSize:'14px'}}>{item.mobile}</h6>
           </div>
           <div className='min-w-200px'>
                <div className='mb-1' style={{opacity:'.5'}}>Email Address</div>
                <h6 className='mb-0' style={{fontSize:'14px'}}>{item.email}</h6>
           </div>
          {/* </Skeleton> */}
        </List.Item>
        </Card>
      )}
    />

<Modal
        title="User Information"
        visible={isModalOpen}
        centered
        width={600}
        // onOk={handleOk}
        onCancel={handleCancel}
        // okText="Submit"
        footer={null}
        cancelText="Cancel"
      >
        <Form
          layout="vertical"
          name="userForm"
          className='mt-5'
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: ''
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="firstName"
                label="First Name"
                className='fw-bold'
                rules={[{ required: true, message: 'Please input your first name!' }]}
              >
                <Input className='form-control' size='large'/>
              </Form.Item>
            </Col>
            
            <Col span={12}>
              <Form.Item
                name="lastName"
                label="Last Name"
                className='fw-bold'
                rules={[{ required: true, message: 'Please input your last name!' }]}
              >
                <Input className='form-control' size='large'/>
              </Form.Item>
            </Col>
            
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                className='fw-bold'
                rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}
              >
                <Input className='form-control' size='large'/>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                name="mobileNumber"
                label="Mobile Number"
                className='fw-bold'
                rules={[{ required: true, message: 'Please input your mobile number!' }]}
              >
                <Input className='form-control' size='large'/>
              </Form.Item>
            </Col>
            <Col span={24}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' className='px-7' onClick={handleCancel} style={{ marginRight: '10px' }}>
              Cancel
            </Button>
            <Button size='large' className='px-7' type="primary" htmlType="submit">
              Save
            </Button>
          </div>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default MyProfile