// Module.js (updated to include Outlet for child routes)
import React, { useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme, Grid, Flex, Spin } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom"; // For rendering nested routes
import Sidebar from "./layout/sidebar";
import { BreadCus, Wrapper } from "./style";
import { Icon } from "@iconify/react/dist/iconify.js";
import HeaderInner from "./layout/header";
import { Admin } from "../routes/Admin";
import { User } from "../routes/User";
import BreadcrumbCus from "../components/breadcrumb";

const { Header, Sider, Content } = Layout;

const { useBreakpoint } = Grid;

const Module = (props) => {

  const { user, setData, userToken, loginType } = props;

  const navigate = useNavigate();
  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [isTokenChecking, setIsTokenChecking] = useState(true);
  // Overlay visibility
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
    setShowOverlay(!showOverlay); // Toggle overlay visibility when sidebar is opened/closed
  };

  const screens = useBreakpoint(); // Detect screen sizes

  // Handle responsive behavior based on screen size
  const isMobile = !screens.md; // True if screen is smaller than 'md' (768px)

  console.log(isMobile,'isMobile')
  console.log(screens,'screens')

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true); // Open by default on mobile
      setShowOverlay(false); // Show overlay on mobile
    } else {
      setCollapsed(false); // Collapse on larger screens
      setShowOverlay(true); // Hide overlay on larger screens
    }
  }, [isMobile]);

  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: isMobile ? "fixed" : "fixed", // Mobile: overlay effect
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "auto",
    transform: isMobile && collapsed ? "translateX(-100%)" : "translateX(0)",
    zIndex: isMobile ? 1000 : "auto",
    borderRadius: "0 30px 30px 0",
  };

  const handleLogout = () => {
    setData({});
    navigate("/sign-in");
  };

  useEffect(() => {
    if (Object.keys(user)?.length === 0) {
      handleLogout();
    }

    if (userToken) {
      setIsTokenChecking(false);
      const path =
        location?.pathname == "/"
          ? user?.loginType == "admin"
            ? `/manage-user`
            : "/dashboard"
          : `${location?.pathname}${location?.search}`;
      navigate(`${path}`, { replace: true });
    } else {
      navigate("/sign-in");
    }
  }, []);

  return (
    <>
      {isTokenChecking ? (
        <Wrapper className="h-100">
          <Flex
            align="center"
            className=" flx-loading h-100"
            justify="center"
            gap="middle"
          >
            {/* <Spin size="large" /> */}
            {/* <Flex><img src="assets/images/logo-wrappixel.svg" style={{width:'200px'}} alt="" /></Flex> */}
            <img
              src="assets/images/ezlaw_icon.png"
              className="text"
              style={{ maxWidth: "40%", width: "13%" }}
              alt=""
            />
          </Flex>
        </Wrapper>
      ) : (
        <Wrapper className="h-100" style={{ height: "100%" }}>
          <Layout>
            <Sider
              user={user}
              type={loginType}
              trigger={null}
              width={300}
              collapsible
              // collapsed={collapsed}
              collapsed={isMobile ? false : collapsed}
              collapsedWidth={isMobile ? 0 : 80}
              setCollapsed={setCollapsed}
              theme="light"
              style={siderStyle}
            >
              <div className="demo-logo-vertical">
                <img
                  style={{ width: collapsed ? "40px" : "170px" }}
                  alt="Logo"
                  src={
                    collapsed
                      ? "../assets/images/ezlaw_icon.png"
                      : "../assets/images/ezlaw_lg.png"
                  }
                />
              </div>
              <Button
                onClick={toggleSidebar}
                icon={
                  collapsed ? (
                    ""
                  ) : (
                    <Icon icon="ic:baseline-close" width={22}></Icon>
                  )
                }
                style={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  zIndex: 1100, // Make sure button stays on top
                }}
                className="sid-btn"
                color="default"
                variant="filled"
              />
              <Sidebar
                user={user}
                isMobile={isMobile}
                loginType={loginType}
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
                setCollapsed={setCollapsed}
              />
            </Sider>

            {/* Overlay */}
            {isMobile && showOverlay && (
              <div
                className="sidebar-overlay"
                onClick={toggleSidebar} // Close the sidebar when overlay is clicked
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
                  zIndex: 999, // Ensure overlay is above content
                }}
              />
            )}

            <Layout
              style={{
                marginInlineStart: isMobile
                  ? "0"
                  : collapsed
                  ? "80px"
                  : "300px",
                // marginInlineStart: collapsed ? "80px" : "300px",
                transition: "margin-inline-start 0.3s ease",
              }}
            >
              <Flex className="back-bg "></Flex>
              <Header>
                <HeaderInner
                  user={user}
                  setData={setData}
                  collapsed={collapsed}
                  setCollapsed={setCollapsed}
                  toggleSidebar={toggleSidebar}
                  handleLogout={handleLogout}
                />
              </Header>
              <BreadCus>
              <BreadcrumbCus className=""/>
              </BreadCus>
              <Content
                style={{ margin: "20px 20px", minHeight: 280 }}
                className=""
              >
                <Outlet /> {/* Render child routes here */}
              </Content>
            </Layout>
          </Layout>
        </Wrapper>
      )}
    </>
  );
};

export default Module;
