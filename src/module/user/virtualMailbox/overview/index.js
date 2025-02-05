import React from 'react'
import { Wrapper } from './style'
import { Avatar, Button, Card, Col, ConfigProvider, Empty, List, Pagination, Row, Table, Tag, Typography } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';


const { Meta } = Card;
const { Title, Paragraph } = Typography;

function VirtualMailBoxOverview() {

    const dataSource = [];
      
      const getStatusTag = (status) => {
        const statusColors = {
          Completed: 'green',
          Pending: 'orange',
          Cancelled: 'red',
        };
        return <Tag color={statusColors[status] || 'default'}>{status}</Tag>;
      };

      const columns = [
        {
          title: 'Company Name',
          dataIndex: 'companyName',
          key: 'companyName',
          render: (_, record) => (
          <List.Item.Meta style={{maxWidth: "310px"}} className=' d-flex align-items-center'
              avatar={<Avatar size={32} className='avt-cus me-0'>{record?.companyName?.substring(0, 2) || '-'}</Avatar>}
              title={<span className='main-title fs-8'>{record?.companyName}</span>}
            />
          ),
        },
        {
          title: 'Document Type',
          dataIndex: 'orderNo',
          key: 'orderNo',
        },
        {
          title: 'Received date',
          dataIndex: 'orderType',
          key: 'orderType',
        },
       
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (status) => getStatusTag(status),
        },
      ];


  return (
      <Wrapper>
      <Card title="Virtual Mailbox"
      extra={<> <Button color="default" variant="filled" size='large' className='fw-bold' icon={<Icon icon="solar:file-download-line-duotone" style={{color:'#025497'}} width={22}></Icon>}>Import</Button></>      }
      >
         <div className="table-responsive">
         <Table
            columns={columns}
            dataSource={dataSource}
            rowKey="key"
            scroll={{ x: 'max-content' }}
            pagination={false}
            locale={{
              emptyText: (
                <Empty
                //   image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" // Custom empty state icon
                //   imageStyle={{ height: 100 }}
                //   description={<span className='fs-5 fw-bold' style={{color:"#000"}}>No data found</span>}
                >
                </Empty>
              ),
            }}
          />
        </div>
      </Card>
      <Card className='mt-2 pgi-custom'>
      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              itemActiveBg: '#025497', // Active page background
              itemActiveColor: '#000', // Active page background
              itemBg: '#f5f5f5', // Background of all items
              itemActiveColorDisabled: 'rgba(0, 0, 0, 0.25)', // Text color for disabled active
              itemActiveBgDisabled: 'rgba(0, 0, 0, 0.15)', // Background for disabled active
              itemSize: 33, // Custom size of pagination items
              itemSizeSM: 30, // Custom size for small pagination
              itemInputBg: '#f5f5f5', // Input background color
            },
          },
        }}
      >
    <Pagination
      total={75}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
  </ConfigProvider>
      </Card>
     
    </Wrapper>
  )
}

export default VirtualMailBoxOverview