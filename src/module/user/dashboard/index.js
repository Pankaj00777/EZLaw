import React, { useState } from 'react'
import { Button, Card, Col, Flex, Row, Table, Tag, Typography, Avatar, Tooltip, ConfigProvider, Segmented  } from 'antd'
import { Wrapper } from './style'
import CompanyServices from './lib/companyServices';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';


function Dashboard() {


  const [view, setView] = useState('Kanban'); // State to toggle between views


  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: (a, b) => a.state.localeCompare(b.state),
    },
    {
      title: "Order No.",
      dataIndex: "orderNo",
      key: "orderNo",
      sorter: (a, b) => a.orderNo.localeCompare(b.orderNo),
    },
    {
      title: "Email Address",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status.includes("Active") ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "",
      key: "action",
      render: () => <Button  color="primary"  size="large" className="px-4" variant="dashed">View Company</Button>,
    },
  ];

  const data = [
    {
      key: "1",
      companyName: "Test Company LLC",
      state: "IL",
      orderNo: "223061634329",
      email: "iyshipping1@gmail.com",
      status: "Active/Good Standing",
    },
    {
      key: "2",
      companyName: "Test Company LLC",
      state: "IL",
      orderNo: "223061634329",
      email: "iyshipping1@gmail.com",
      status: "Active/Good Standing",
    },
  ];

  const customTheme = {
    components: {
      Segmented: {
        itemActiveBg: '#02549725',   // Active item background (light red)
        itemColor: '#000',         // Default item text color
        itemHoverBg: '#02549725',      // Hover background (lighter red)
        itemHoverColor: '#025497',    // Hover text color
        itemSelectedBg: '#025497',                    // Selected item background color (red)
        itemSelectedColor: 'white',               // Selected item text color (white)
        trackBg: '#fff',                       // Background for the Segmented container
        trackPadding: 4,    
        fontSize: 20,                // Padding for the Segmented container
      },
    },
  };

  return (
    <Wrapper>
     <Flex className='mb-5 ' style={{flexDirection:'row', justifyContent:'space-between'}} wrap>
      <div>
          <h2 className='ant-card-title mb-1'>Company Overview</h2>
        <div className='fs-8 fw-normal' style={{opacity:'.5'}}>Access detailed information and account specifics.</div>
      </div>
  
   {/* Segmented Control for Views */}
   <div className="segmented-controls">
   <ConfigProvider theme={customTheme}>
        <Segmented
        value={view}
        onChange={(value) => setView(value)} // Updates the view state to either 'List' or 'Kanban'
          options={[
            {
              value: 'List',
              icon: <BarsOutlined />,
            },
            {
              value: 'Kanban',
              icon: <AppstoreOutlined />,
            },
          ]}
        />
        </ConfigProvider>
      </div>
     </Flex>
      
     {view === 'Kanban' ? ( 
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
          {/* <Card hoverable>
            {item.companyName}
          </Card> */}
           <Card className='mb-3' title={<Flex align='center' style={{fontSize:'16px'}}><Avatar style={{backgroundColor: '#025497',fontSize:'17px'}} className='me-3'>{item.companyName?.charAt(0) || '-'}</Avatar> {item.companyName}</Flex>} bordered >
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Typography.Text strong>State: </Typography.Text>
                <Typography.Text>{item.state}</Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text strong>Order No: </Typography.Text>
                <Typography.Text>{item.orderNo}</Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text strong>Email: </Typography.Text>
                <Typography.Text>{item.email}</Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text strong>Status: </Typography.Text>
                <Tag color={item.status.includes("Active") ? "green" : "red"}>{item.status}</Tag>
              </Col>
              <Tooltip placement="top" title='View Company'>
              <Button color="default" variant="solid" shape="circle" style={{position:'absolute', bottom:10, right:10}}>
                <Icon icon='solar:arrow-right-up-outline' width={22}></Icon>
          </Button>
          </Tooltip>
            </Row>
          </Card>
          </Col>
      ))}
    </Row>

) : (
      <div className="table-responsive">
         <Table
          columns={columns}
          dataSource={data}
          rowKey="key"
          scroll={{ x: 'max-content' }}
          pagination={false} // You can adjust pagination as needed
        />
        </div>
  )}
   <div className='mt-7'>
          <h2 className='ant-card-title mb-1'>Request Services for Unregistered Companies on EZLaw</h2>
        <div className='fs-8 fw-normal' style={{opacity:'.5'}}>Let us take care of the paperwork for you.</div>
      </div>
    <CompanyServices />
    </Wrapper>
  )
}

export default Dashboard