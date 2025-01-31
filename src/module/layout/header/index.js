import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Flex, Menu, Dropdown, Avatar, Space, } from "antd";
import { dummyImage } from "../../../config";
import { Wrapper } from "./style";
import { Link, useNavigate, useLocation } from "react-router-dom";

import BreadcrumbCus from "../../../components/breadcrumb";
import { DefaultAdminPage } from "../../../config";
import { DefaultUserPage } from "../../../config";

function HeaderInner({collapsed, setCollapsed, setData, toggleSidebar, user, handleLogout}) {

  const { email, name, photo } = user?.user?.user_data;

  const navigate = useNavigate();

  const findRoutes = {
    admin: DefaultAdminPage,
    user: DefaultUserPage,
  };

  const menu = (
    <Wrapper>
    <Menu className="custom-dropdown-menu">
      <Flex className="profile-header" align="center">
        <Avatar size={60} src={photo || "../assets/images/blank.png"} className=""/>
        <div className="ms-3 ">
          <h4 className="fs-5 mb-1">{name}</h4>
          <p className="mb-0">{email}</p>
        </div>
      </Flex>
      <Menu.Divider className="mt-4"/>
      <Menu.Item className="py-3 ps-5 fw-semibold"  key="profile">My Profile</Menu.Item>

      <Menu.Item  className="py-3 ps-5 fw-semibold" key="settings">Account Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item className="mt-3" key="signout" >
        <Button type="text" className="fs-7" onClick={handleLogout} style={{background: '#000', color: '#fff', height: '40px',borderRadius:'50px'}} block>
          Sign Out
          <Icon icon='solar:arrow-right-broken' width={24}></Icon>
        </Button>
      </Menu.Item>
    </Menu>
    </Wrapper>
  );


  

  return (
    <Wrapper>
      <Flex className="" align="center" justify='space-between'>
        <Flex align="center" className="h-65px ">
        <Button
          type="text"
          onClick={toggleSidebar}
          icon={
            collapsed ? (
              <Icon icon="ri:align-left" width={21}></Icon>
            ) : (
              <Icon icon="ri:align-right" width={21}></Icon>
            )
          }
          // onClick={() => setCollapsed(!collapsed)}
          className="toggle-btn"
          // style={{position:collapsed ? "absolute" : "absolute"}}
          // className={` ${collapsed ? "toggle-btn1 " : "toggle-btn"}`}
        />
        <Flex className="header-logo text-light">
          <img src="../assets/images/logo-wrappixel.png" className="ms-3 w-50px" alt="" />
        </Flex>
        <BreadcrumbCus className="bdr"/>
        
        </Flex>
        <Flex className="text-light ">
        <Space className=" back" align="center">
        {user?.admin && (
          <Button
          onClick={() => {
            setData(user?.admin);
            navigate(findRoutes?.[user?.admin?.loginType]);
          }}
          className="back-button me-2 pe-5"
          size="large"
          ><Icon icon='solar:arrow-left-broken' width={24}></Icon> Back to admin</Button>
        )}
        </Space>
        <Dropdown overlay={menu} trigger={['hover']}>
        <Space className="cursor-pointer">
          <img size={45} className="pro-img" src={photo || "../assets/images/blank.png"} />
        </Space>
      </Dropdown>
        </Flex>
      </Flex>
    </Wrapper>
  );
}

export default HeaderInner;
