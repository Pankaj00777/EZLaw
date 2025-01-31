import React, {useState} from 'react'
import { Wrapper } from './style';
import { Button, Card, Input, Flex, Table, Popconfirm, Badge, Pagination, ConfigProvider, message } from 'antd';
import { SearchOutlined, } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
import AddUser from './lib/addUser';
import { Types } from '../../../config';
import { DefaultAdminPage,  DefaultUserPage} from '../../../config';
import { MakeApiCall } from '../../../apis';

const { Search } = Input;

function ManageUser(props) {

  const { setData, userData } = props;
  
  console.log(props, 'props')

  const navigate = useNavigate();

  const findRoutes = {
    admin: DefaultAdminPage,
    user: DefaultUserPage,
  };


  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

// Data for the table
const [list, setList] = useState([
  {
    key: '1',
    admin: {
      name: 'Emma Smith',
      email: 'admin@demo.com',
      avatar: 'assets/images/blank.png',
    },
    mobile: '(415) 555‑0132',
    createdAt: 'Jan 01, 2024, 6:44 AM',
    updatedAt: 'Jan 07, 2024, 6:44 AM',
    status: 'active',
  },
  {
    key: '2',
    admin: {
      name: 'John Doe',
      email: 'admin2@demo.com',
      avatar: 'assets/images/blank.png',
    },
    mobile: '(415) 555‑0133',
    createdAt: 'Jan 02, 2024, 7:00 AM',
    updatedAt: 'Jan 08, 2024, 7:30 AM',
    status: 'inactive',
  },
  {
    key: '3',
    admin: {
      name: 'Jane Doe',
      email: 'admin3@demo.com',
      avatar: 'assets/images/blank.png',
    },
    mobile: '(415) 555‑0134',
    createdAt: 'Jan 03, 2024, 8:00 AM',
    updatedAt: 'Jan 09, 2024, 8:30 AM',
    status: 'active',
  },
]);

// Columns for the table
const columns = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
    render: (text) => <div>{text}</div>,
  },
  {
    title: 'Admin',
    dataIndex: 'admin',
    key: 'admin',
    render: (admin) => (
      <div className="d-flex align-items-center">
        <div className="symbol symbol-circle symbol-50px shadow-sm overflow-hidden me-3">
          <img src={admin.avatar} className='profile-symbol-50' alt={admin.name} />
        </div>
        <div className="d-flex flex-column">
          <Link href="#" className="text-dark mb-0 fw-bolder">{admin.name}</Link>
          <span style={{opacity:'0.75'}}>{admin.email}</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Mobile No',
    dataIndex: 'mobile',
    key: 'mobile',
  },
  {
    title: 'Switch User',
    key: 'switchUser',
    dataIndex: 'switchUser',
    render: (_, record) => (
      <Link onClick={() => SwitchAccount(record)} className="d-flex align-items-center justify-content-center text-dark">
        <Icon icon="streamline:link-chain-solid" width={20}></Icon>
        <span className="fw-bold text-dark ms-2">Switch Account</span>
      </Link>
    ),
  },
 {
  title: 'Status',
  dataIndex: 'status',
  render: (status) => (
    <div style={{ textAlign: 'center' }}>
      <Badge status={status === 'active' ? 'success' : 'error'} text={status === 'active' ? 'Active' : 'Inactive'} />
    </div>
  ),
},

  {
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Updated at',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <div>
          <Button className="btn-icon shadow-sm"  onClick={() => handleEdit(record)}
            type="link"
            // onClick={() => {
            //   setSelectedRow({view: true });
            //   setIsModalVisible(true);
            // }}
          >
            <Icon icon="solar:pen-broken" width={22} />
          </Button>
          <Popconfirm
            placement="left"
            title="Are you sure you want to delete?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link"  className="ms-2 btn-icon bg-light">
              <Icon
                icon="solar:trash-bin-2-broken"
                style={{ color: "#ff5454" }}
                width={22}
              />
            </Button>
          </Popconfirm>
        </div>
    ),
  },
];





const handleEdit = (record) => {
  console.log(record, 'record')
  setSelectedRow(record); // Set the selected row data for editing
  setIsModalVisible(true); // Open the modal
};

const handleDelete = (key) => {
  console.log(key, 'key')
  const filteredData = list.filter((item) => item.key !== key); // Remove the user from data
  setData(filteredData); // Update state
};

const handleSaveUser = (updatedUser) => {
  if (selectedRow) {
    // Edit existing user
    setData((prevData) =>
      prevData.map((item) =>
        item.key === updatedUser.key ? updatedUser : item
      )
    );
  } else {
    // Add new user
    setData((prevData) => [...prevData, updatedUser]);
  }
  setIsModalVisible(false); // Close the modal
};


const SwitchAccount = async (record) => {
  console.log(record, 'id')
  // const response = await MakeApiCall(
  //   `switch-user`,
  //   "post",
  //   {
  //     id: id,
  //   },
  //   true,
  //   {},
  //   userData?.token
  // );
  const response_ = {
    code: 200,
    status: true,
    message: "Data Found.",
    data: {
      auth_token_data: {
        access_token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJhdWQiOiIiLCJqdGkiOiIiLCJpYXQiOjE3Mjk4MzE4MTYuODI4NTE2LCJleHAiOjE3Mjk4MzU3MTYuODI4NTE2LCJ1aWQiOjJ9.3JbmOuHaWe7_UOT3-ih80OMQcy6J3ZGxVGeGTUcO0NI",
        expire_in: 1729835716,
      },
      user_data: {
        id: 2,
        rds_credential_id: null,
        server_credential_id: null,
        parent: 0,
        name: "John User",
        first_name: null,
        last_name: null,
        seller_name: "John User",
        seller_id: null,
        user_type: 2,
        email: "Johnuser@gmail.com",
        photo: null,
        db_name: "John_db_tq2kpibvua_John_user",
        contact_no: null,
        address: null,
        city: null,
        country: null,
        postal_code: null,
        company_registration_number: null,
        company_name: null,
        invoice_number: null,
        status: 1,
        pending_reports: 1,
        user_status: 0,
        amazon_advertising_client_id: null,
        amazon_advertising_client_secret: null,
        amazon_advertising_return_url: null,
        amazon_advertising_response: null,
        amazon_advertising_access_token: null,
        amazon_advertising_refresh_token: null,
        amazon_advertising_region: null,
        amazon_advertising_access_token_expiry: null,
        amazon_advertising_token_type: null,
        created_at: 1724760496,
        updated_at: 1729818004,
        deleted_at: null,
        deleted_by: null,
        is_user_credential: 1,
      },
    },
    error: [],
  };
  console.log(response_?.status === true, 'response_?.status === true')
  console.log(response_, 'response_')

  if (response_?.status === true) {
    const type = Types?.[response_?.data?.user_data?.user_type];
    const obj = {
      admin: userData,
      user: response_?.data,
      loginType: type,
      token: response_?.data?.auth_token_data?.access_token,
    };
    console.log(obj, 'obj---------');
    console.log(findRoutes?.[type], 'findRoutes?.[type]');
    setData(obj);
    // userData(obj);
    navigate(findRoutes?.[type]);
  } else {
    // message.warning(response_?.message);
  }
};

  return (
    <Wrapper>
      <Card title="User Lists"
      extra={
        <Flex gap={10} wrap>
           <Input
            placeholder="Search by name or email..."
            allowClear
            prefix={<SearchOutlined />}
            size="large"
            className='w-225px'
            onChange={(e) => console.log('Search input:', e.target.value)}
          />
          <Button color="default" variant="solid" size='large' className='px-5 '
          onClick={() => {
            setSelectedRow(null); // Clear selected row for new user
            setIsModalVisible(true);
          }}
          >Add New</Button>
        </Flex>
      }
      >
         <div className="table-responsive">
         <Table
          columns={columns}
          dataSource={list}  // Ensure dataSource is properly structured
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
              itemActiveBg: '#613cea', // Active page background
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

      <AddUser 
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        selectedUser={selectedRow} // Pass selected user for editing
        onSaveUser={handleSaveUser} // Callback for saving user
      />
    </Wrapper>
  )
}

export default ManageUser