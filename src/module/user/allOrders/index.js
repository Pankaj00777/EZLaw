import React from 'react'
import { Wrapper } from './style'
import { Avatar, Button, Card, ConfigProvider, List, Pagination, Table, Tag } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';


function AllOrders() {

    const dataSource = [
        {
            key: '1',
            companyName: 'IYSHIPPING LLC',
            orderNo: '224052525257',
            orderType: 'Annual Report (IL)',
            amount: '$176.00',
            receipt: 'receipt',
            orderDate: 'May 25, 2024',
            status: 'Completed',
          },
          {
            key: '2',
            companyName: 'XYZ Trading Corp.',
            orderNo: '223061634329',
            orderType: 'LLC FILING (CA)',
            amount: '$376.00',
            receipt: 'receipt',
            orderDate: 'Jun 16, 2023',
            status: 'Pending',
          },
          {
            key: '3',
            companyName: 'Global Tech INC.',
            orderNo: '225012345678',
            orderType: 'Business License (NY)',
            amount: '$250.00',
            receipt: 'receipt',
            orderDate: 'Jan 12, 2025',
            status: 'Cancelled',
          },
      ];
      
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
          title: 'Order No.',
          dataIndex: 'orderNo',
          key: 'orderNo',
        },
        {
          title: 'Order Type',
          dataIndex: 'orderType',
          key: 'orderType',
        },
        {
          title: 'Amount',
          dataIndex: 'amount',
          key: 'amount',
        },
        {
          title: 'Receipt',
          dataIndex: 'receipt',
          key: 'receipt',
          className:'text-center',
          render: (item) => (
            <Button color="default" variant="text" icon={<Icon icon="solar:file-text-line-duotone" style={{color:'#025497'}} width={22}></Icon>} />
          ),
        },
        {
          title: 'Order Date',
          dataIndex: 'orderDate',
          key: 'orderDate',
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
      <Card title="Order History"
      extra={<> <Button color="default" variant="filled" size='large' className='fw-bold' icon={<Icon icon="solar:file-download-line-duotone" style={{color:'#025497'}} width={22}></Icon>}>Import</Button></>      }
      >
         <div className="table-responsive">
         <Table
          columns={columns}
          dataSource={dataSource}
          rowKey="key"
          scroll={{ x: 'max-content' }}
          pagination={false} // You can adjust pagination as needed
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

export default AllOrders