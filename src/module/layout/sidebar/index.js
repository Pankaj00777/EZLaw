import React, { useState, useEffect } from "react";
import { Wrapper } from "./style";
import { Menu, Typography, Divider, Space, Flex, Avatar } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import FindMenu from "./menu";


const { Text, Title } = Typography;

function Sidebar({ collapsed, setCollapsed, loginType, user, toggleSidebar,isMobile }) {

  console.log(isMobile,'isMobile ---------')
  const { email, name, photo } = user?.user?.user_data;

  const navigate = useNavigate();
  const location = useLocation();

  const [current, setCurrent] = useState(location?.pathname?.replace("/", ""));
  const [openKeys, setOpenKeys] = useState("");

  useEffect(() => {
    setCurrent(location?.pathname?.replace("/", ""));
    const pathParts = location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 1) {
      setOpenKeys([pathParts.slice(0, -1).join("/")]);
    } else {
      setOpenKeys([]);
    }
  }, [location]);





  return (
    <Wrapper className="" trigger={null} collapsible collapsed={collapsed}>
      <Flex
        className={`mb-4 ${collapsed ? "p-2" : "p-5"}`}
        style={{
          background: "url(../assets/images/bg.png)",
          minHeight: 100,
          backgroundSize: "240%",
          backgroundPosition: "center",
        }}
      >
        {collapsed ? (
          <Avatar
            src={photo || "../assets/images/blank.png"}
            size={64}
            className=" profile-img-sidebar"
            alt="Profile Image"
          />
        ) : (
          <>
            <Avatar
              src={photo || "../assets/images/blank.png"}
              size={64}
              className="me-3 profile-img-sidebar"
              alt="Profile Image"
            />
            <div>
              <Title level={5} className="mb-0 mt-2">
                {name}
              </Title>
              <Text className="mb-0 mt-1">{email}</Text>
            </div>
          </>
        )}
      </Flex>

      <Space
        className=""
        direction="vertical"
        size="small"
        style={{
          padding: "0px 15px",
          width: "100%",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Text style={{ fontSize: "15px", fontWeight: "500", color: "#6c6c6c" }}>
          {loginType === "admin" ? "Admin" : "User"}
        </Text>
        <Divider
          style={{ margin: "0", borderBlockStart: "1px dashed #c9c9c9" }}
        />
      </Space>

      <Menu
        theme="light"
        mode="inline"
        className=""
        selectedKeys={[current]}
        openKeys={openKeys}
        onOpenChange={(keys) => setOpenKeys(keys)}
        onClick={(e) => {
          setCurrent(e.key);
          // setVisible(false);
          if (!collapsed && isMobile) {
            toggleSidebar();
          }
        }}
        items={FindMenu(loginType)}
      />
    </Wrapper>
  );
}

export default Sidebar;
