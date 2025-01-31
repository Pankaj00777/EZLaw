import React from "react";
import { Wrapper } from "./style";
import { Button, Flex, Space, Tabs } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import MyProfile from "./myProfile";
import PaymentMethod from "./paymentMethod";

const { TabPane } = Tabs;

function Settings() {
  return (
    <Wrapper>
      {/* <Flex className="mb-7" wrap align="center" gap={10}>
        <Button variant="solid" color="primary" className=" px-6" size="large">
          <Icon icon="solar:user-id-line-duotone" width={26}></Icon> My Profile
        </Button>
        <Button className=" px-6" size="large">
          <Icon icon="solar:card-line-duotone" width={26}></Icon> Payment Method
        </Button>
      </Flex> */}

      <Tabs defaultActiveKey="1">
        <TabPane tab={<Flex align="center" className="px-4"><Icon icon="solar:user-id-line-duotone" className="me-2" width={26}></Icon> <Space style={{fontSize:'16px',fontWeight:600}}>My Profile</Space></Flex>} key="1">
          <MyProfile />
        </TabPane>
        <TabPane tab={<Flex align="center" className="px-4"><Icon icon="solar:card-line-duotone" className="me-2" width={26}></Icon> <Space style={{fontSize:'16px',fontWeight:600}}>Payment Method</Space></Flex>} key="2">
          <PaymentMethod />
        </TabPane>
      </Tabs>

    </Wrapper>
  );
}

export default Settings;
