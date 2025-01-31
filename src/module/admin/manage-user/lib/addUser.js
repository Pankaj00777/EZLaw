import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, Upload, Avatar, Row, Col, message  } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Wrapper } from "../style";


const AddUser = ({ isModalVisible, setIsModalVisible, selectedUser, onSaveUser }) => {

    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState(null);

  // Set form values if editing an existing user
  useEffect(() => {
    if (selectedUser?.admin) {
      form.setFieldsValue({
        name: selectedUser.admin.name || '',
        email: selectedUser.admin.email || '',
        mobile: selectedUser.mobile || '',
        status: selectedUser.status || 'active', // Default to 'active' if no status is provided
      });
    }
  }, [selectedUser, form]);


  // Handle File Upload
  const handleUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = () => setImageUrl(reader.result);
    reader.readAsDataURL(file.originFileObj);
  };

 // Handle form submit
 const handleSubmit = async (values) => {
    setIsLoading(true);

    try {
      const userData = {
        key: selectedUser ? selectedUser.key : `${1 + 1}`, // If editing, keep the same key, otherwise generate a new one
        admin: {
          name: values.name,
          email: values.email,
          avatar: 'assets/images/blank.png', // You can handle the avatar upload here as well
        },
        mobile: values.mobile,
        createdAt: selectedUser ? selectedUser.createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: values.status,
      };

      onSaveUser(userData); // Save the user data
      message.success(selectedUser ? 'User updated successfully!' : 'User added successfully!');
      setIsModalVisible(false); // Close modal after saving
    } catch (error) {
      message.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Close modal without saving
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onReset = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <Modal
        title={selectedUser ? 'Edit User' : 'Add New User'}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={600}
    >
    <Wrapper>
    <Form layout="vertical" 
    form={form}
    onFinish={handleSubmit}
    initialValues={{ status: 'active' }} // Default status is 'active'
    >

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Upload
          accept=".png,.jpg,.jpeg"
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleUpload}
        >
          {imageUrl ? (
            <Avatar size={100} src={imageUrl} />
          ) : (
            <div
              style={{
                border: "1px dashed #d9d9d9",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <PlusOutlined style={{ fontSize: "24px", color: "#999" }} />
            </div>
          )}
        </Upload>
        <p style={{ color: "#999" }}>Allowed file types: png, jpg, jpeg.</p>
      </div>
          <Row gutter={16}>
            <Col span={12}>
                <Form.Item name="name" label="Name" className="fw-bold" rules={[{ required: true }]}>
                    <Input size="large" className="form-control" placeholder="Enter your name" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="email" label="Email" className="fw-bold" rules={[{ required: true }]}>
                    <Input size="large" className="form-control" placeholder="Enter your email" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="password" label="Password" className="fw-bold" rules={[{ required: true }]}>
                    <Input.Password className="form-control" size="large" placeholder="Enter password" />
                </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item name="confirmPassword" label="Confirm Password" className="fw-bold" 
                 dependencies={['password']} // This ensures validation relies on the "password" field
                 rules={[
                   { required: true, message: 'Please confirm your password!' },
                   ({ getFieldValue }) => ({
                     validator(_, value) {
                       if (!value || getFieldValue('password') === value) {
                         return Promise.resolve();
                       }
                       return Promise.reject(new Error('Passwords do not match!'));
                     },
                   }),
                 ]}
                 >
                <Input.Password className="form-control" size="large" placeholder="Confirm password" />
            </Form.Item>
            </Col>
          </Row>

        <Form.Item name="mobile" className="fw-bold" label="Contact No" rules={[{ required: true }]}>
          <Input className="form-control" size="large" placeholder="Enter your contact number" />
        </Form.Item>

        <Form.Item name="address" className="fw-bold" label="Address">
          <Input.TextArea rows={3} size="large" placeholder="Enter your address" />
        </Form.Item>

        <Form.Item className="mb-0">
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button className="me-3 px-5" size="large" color="default" variant="filled" onClick={handleCancel}>
              Close
            </Button>
            <Button size="large" loading={isLoading} className="px-5" type="primary" htmlType="submit">
            {selectedUser ? 'Save Changes' : 'Add User'}
            </Button>
          </div>
        </Form.Item>
      </Form>
      </Wrapper>
    </Modal>
  );
};

export default AddUser;
