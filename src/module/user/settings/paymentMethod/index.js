import React, { useState } from 'react'

import { Icon } from '@iconify/react/dist/iconify.js'
import { Button, Collapse, Flex, Modal, Typography, Select, Input, Form, Row, Col } from 'antd';
import { DownOutlined } from "@ant-design/icons";
import { PaymentStyle } from './style';
import { Wrapper } from '../style';

const { Title } = Typography;
const { Panel } = Collapse;
const { Option } = Select;


function PaymentMethod() {
    
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

    const customExpandIcon = ({ isActive }) => (
        <Icon icon="solar:round-alt-arrow-down-line-duotone" width={25} className='' style={{transform: `rotate(${isActive ? '180deg' : '0deg'})`}}></Icon>
      );


  return (
    <PaymentStyle>

<Flex wrap justify='space-between' className='mt-5 mb-4 '>
             <Title className='d-flex align-items-center mb-0' level={4}><Icon icon="solar:card-2-line-duotone" width={25} className='me-1'></Icon>Your Payment Methods
             </Title>
             <Button onClick={showModal} variant="solid" color="primary" className=" px-4" size="large">
                <Icon icon="solar:add-circle-line-duotone" width={26}></Icon> Add New Card
                </Button>
             </Flex>

             <div className='seprator my-3'></div>


            <div className='mt-10 mb-4'>
             <Title className='d-flex align-items-center' level={4}><Icon icon="solar:question-circle-line-duotone" width={25} className='me-1'></Icon>Frequently asked questions
             </Title>
             </div>

             <div className=' mt-5'>
      <Collapse className='cus-accordination' expandIcon={customExpandIcon} accordion>
        <Panel
          header="Why must I replace certain payment methods with another one?"
          key="1"
        >
          <p className='mb-0'>
            If you are prompted to replace a payment method upon deletion, that
            is because it is being utilized for renewals of at least one active
            subscription within your companies.
          </p>
        </Panel>
        <div className='seprator my-3'></div>
        <Panel
          header="How can I link a payment method to one of my companies?"
          key="2"
        >
          <p className='mb-0'>
            You may link any one of your payment methods to a company by
            navigating towards its company view and going into Settings ➝
            Payment Methods.
          </p>
        </Panel>
      </Collapse>
    </div>
          

    <Modal
        title="Your Payment Methods"
        centered
        visible={isModalOpen}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <Wrapper>
        <Form className='mt-4' layout="vertical" onFinish={onFinish}>
        <div className='seprator mt-3 mb-4'></div>
          <h6 className='mb-4' style={{fontWeight:400}}>Credit Card Information</h6>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="cardHolder"
                className='fw-bold'
                label="Cardholder Full Name"
                rules={[{ required: true, message: 'Please enter your full name' }]}
              >
                <Input placeholder="Full Name" size='large'/>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="cardNumber"
                label="Card Number"
                className='fw-bold'
                rules={[{ required: true, message: 'Please enter your card number' }]}
              >
                <Input placeholder="1234 5678 9012 3456" size='large'/>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="expiryDate"
                label="Expiry Date"
                className='fw-bold'
                rules={[{ required: true, message: 'Please enter the expiry date' }]}
              >
                <Input placeholder="MM/YY" size='large'/>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                name="cvv"
                label="CVV/CVC"
                className='fw-bold'
                rules={[{ required: true, message: 'Please enter the CVV/CVC' }]}
              >
                <Input placeholder="3 digits" size='large'/>
              </Form.Item>
            </Col>
          </Row>
            <div className='seprator mt-0 mb-4'></div>
          <h6 className='mb-4' style={{fontWeight:400}}>Billing Address</h6>
          <Row gutter={16}>
          <Col span={24}>
          <Form.Item
                name="country"
                label="Country"
                className='fw-bold'
                rules={[{ required: true, message: 'Please select your country' }]}
              >
                <Select allowClear size='large' placeholder="Select Country">
                  <Option value="USA" selected>United States of America</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="UK">United Kingdom</Option>
                </Select>
              </Form.Item>
            </Col>
          <Col span={12}>

          <Form.Item
            name="streetAddress"
            label="Street Address"
            className='fw-bold'
            rules={[{ required: true, message: 'Please enter your street address' }]}
          >
            <Input placeholder="Street Address" size='large'/>
          </Form.Item>
            </Col>
            <Col span={12}>
          <Form.Item name="addressCont"  className='fw-bold' label="Address (Cont) (Optional)">
            <Input placeholder="Address (Cont)"  size='large'/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="city"
            label="City"
            className='fw-bold'
            rules={[{ required: true, message: 'Please enter your city' }]}
          >
            <Input placeholder="City" size='large'/>
          </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
            name="state"
            label="State"
            className='fw-bold'
            rules={[{ required: true, message: 'Please enter your state' }]}
          >
            <Input placeholder="State" size='large'/>
          </Form.Item>
          </Col>
          <Col span={8}>
          <Form.Item
            name="zipCode"
            label="ZIP Code"
            className='fw-bold'
            rules={[{ required: true, message: 'Please enter your ZIP Code' }]}
          >
            <Input placeholder="ZIP Code" size='large'/>
          </Form.Item>
          </Col>
        </Row>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button size='large' className='px-7' onClick={handleCancel} style={{ marginRight: '10px' }}>
              Cancel
            </Button>
            <Button size='large' className='px-7' type="primary" htmlType="submit">
              Save
            </Button>
          </div>
        </Form>
        </Wrapper>
      </Modal>

    </PaymentStyle>
  )
}

export default PaymentMethod