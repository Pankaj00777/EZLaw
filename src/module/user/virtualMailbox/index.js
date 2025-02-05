import React from "react";
import { Wrapper } from "./style";
import { Avatar,  Button,  Card,  Col,  ConfigProvider,  Empty,  Flex,  List,  Pagination,  Row,  Table,  Tag,  Typography,} from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { primaryColor } from "../../../config";
import { InboxOutlined, FileSearchOutlined, UploadOutlined, NotificationOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

function VirtualMailBox() {
  const dataSource = [];

  const getStatusTag = (status) => {
    const statusColors = {
      Completed: "green",
      Pending: "orange",
      Cancelled: "red",
    };
    return <Tag color={statusColors[status] || "default"}>{status}</Tag>;
  };

  const columns = [
    {
      title: "Company Name",
      dataIndex: "companyName",
      key: "companyName",
      render: (_, record) => (
        <List.Item.Meta
          style={{ maxWidth: "310px" }}
          className=" d-flex align-items-center"
          avatar={
            <Avatar size={32} className="avt-cus me-0">
              {record?.companyName?.substring(0, 2) || "-"}
            </Avatar>
          }
          title={<span className="main-title fs-8">{record?.companyName}</span>}
        />
      ),
    },
    {
      title: "Document Type",
      dataIndex: "orderNo",
      key: "orderNo",
    },
    {
      title: "Received date",
      dataIndex: "orderType",
      key: "orderType",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => getStatusTag(status),
    },
  ];

  const steps = [
    {
      key: 1,
      icon: <><Icon icon='solar:mailbox-bold-duotone' width={27} style={{ color: "#1890ff" }} ></Icon></>,
      title: "Mail is sent to your Virtual Address",
    },
    {
      key: 2,
      icon: <><Icon icon='solar:inbox-line-bold-duotone' width={27} style={{ color: "#faad14" }} ></Icon></>,
      title: "Mail is scanned",
    },
    {
      key: 3,
      icon: <><Icon icon='solar:object-scan-bold' width={27} style={{ color: "#52c41a" }} ></Icon></>,
      title: "Documents are uploaded to your dashboard",
    },
    {
      key: 4,
      icon: <><Icon icon='solar:file-text-bold-duotone' width={27} style={{ color: "#eb2f96" }} ></Icon></>,
      title: "You are notified when documents are available",
    },
  ];
  
  const notices = [
    {
      key: 1,
      title: "We do not accept packages.",
    },
    {
      key: 2,
      title: "There is NO in-person support at this address.",
      description: "You can not pick up or drop off mail. Items that can't be scanned will be returned to the sender.",
    },
    {
      key: 3,
      title: "Packages cannot be received at your virtual address.",
      description: "However, letters and large envelopes containing documents for scanning are acceptable.",
    },
    {
      key: 4,
      title: "Your virtual address cannot be used as a registered agent's address.",
      description: "If you require a registered agent, learn more about that separate service.",
    },
  ];

  return (
    <Wrapper>
      <Card
        title="Virtual Mailbox"
        extra={
          <>
            {" "}
            <Button
              color="default"
              variant="filled"
              size="large"
              className="fw-bold"
              icon={
                <Icon
                  icon="solar:file-download-line-duotone"
                  style={{ color: "#025497" }}
                  width={22}
                ></Icon>
              }
            >
              Import
            </Button>
          </>
        }
      >
        <div className="table-responsive">
          <Table
            columns={columns}
            dataSource={dataSource}
            rowKey="key"
            scroll={{ x: "max-content" }}
            pagination={false}
            locale={{
              emptyText: (
                <Empty
                //   image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" // Custom empty state icon
                //   imageStyle={{ height: 100 }}
                //   description={<span className='fs-5 fw-bold' style={{color:"#000"}}>No data found</span>}
                ></Empty>
              ),
            }}
          />
        </div>
      </Card>
      <Card className="mt-2 pgi-custom">
        <ConfigProvider
          theme={{
            components: {
              Pagination: {
                itemActiveBg: "#025497", // Active page background
                itemActiveColor: "#000", // Active page background
                itemBg: "#f5f5f5", // Background of all items
                itemActiveColorDisabled: "rgba(0, 0, 0, 0.25)", // Text color for disabled active
                itemActiveBgDisabled: "rgba(0, 0, 0, 0.15)", // Background for disabled active
                itemSize: 33, // Custom size of pagination items
                itemSizeSM: 30, // Custom size for small pagination
                itemInputBg: "#f5f5f5", // Input background color
              },
            },
          }}
        >
          <Pagination
            total={75}
            showTotal={(total, range) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
            defaultPageSize={20}
            defaultCurrent={1}
          />
        </ConfigProvider>
      </Card>

      <Row className="mb-5 mt-5" gutter={[25, 25]}>
        <Col xs={24} sm={24} md={24} lg={24} className="">
          <Card className="box-info ">
            <img
              style={{
                position: "absolute",
                width: "447px",
                right: "110px",
                bottom: "-14px",
                borderBottomRightRadius: "17px",
              }}
              src="../assets/images/mailscan.png"
              alt=""
            />
            <Row>
              <Col span={16}>
                <Title
                  className="d-flex align-items-center "
                  style={{ color: "#025497" }}
                  level={5}
                >
                  <Icon
                    className="me-2"
                    icon="solar:mailbox-line-duotone"
                    width={22}
                  ></Icon>{" "}
                  View and manage your virtual mailboxes
                </Title>
                {/* <Title className="mb-0" level={3}>Congratulations!</Title> */}
                <Title className="mt-4" style={{ fontWeight: 300 }} level={3}>
                  <strong>Virtual Mailbox and Mail Scanning Service</strong>.
                </Title>
                <Paragraph style={{ opacity: ".7" }}>
                  Get a Fixed Street Address and Access to Your Correspondence
                  Anywhere
                </Paragraph>

                <Button
                  color="primary"
                  variant="solid"
                  size="large"
                  className="px-4 mt-5"
                >
                  Get Started{" "}
                  <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5" gutter={[24, 24]}>
      {/* Left Section - How it works */}
      <Col xs={24} md={12}>
        <Card title="Here is how it works.">
          <Text className="mb-5">
            Your company’s mail will be directed to your virtual address. Once received, we’ll scan it, <strong>upload it to your dashboard</strong>, and notify you when available.
          </Text>
          <List
            itemLayout="horizontal"
            dataSource={steps}
            className="mt-5 mb-5 list-step"
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta className=" d-flex align-items-center" avatar={item.icon} title={item.title} />
              </List.Item>
            )}
          />
        </Card>
      </Col>

      {/* Right Section - Important Information */}
      <Col xs={24} md={12}>
        <Card title='Important things to know about the Virtual Address service'>
          <List
            dataSource={notices}
            className=""
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<ExclamationCircleOutlined style={{ fontSize: "20px", color: "#ff4d4f" }} />}
                  title={<Text strong>{item.title}</Text>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
        </Card>
      </Col>
    </Row>


      <Row gutter={[16, 16]} className="mb-5 cus-card-grid">
        <Col span={12}>
          <Card
            bodyStyle={{
              backgroundColor: "#fff",
              borderRadius: "11px",
              padding: "15px",
            }}
          >
            <Flex align="center">
              <Avatar
                style={{ backgroundColor: "rgb(218 230 241)" }}
                size={45}
                icon={
                  <Icon
                    icon="solar:global-line-duotone"
                    style={{ color: primaryColor }}
                    width={25}
                  ></Icon>
                }
              />
              <Paragraph className="mb-0 ms-3" style={{ opacity: ".7" }}>
                This is truly a virtual address. Please do not show up in person
                for any reason.
              </Paragraph>
            </Flex>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            bodyStyle={{
              backgroundColor: "#fff",
              borderRadius: "11px",
              padding: "15px",
            }}
          >
            <Flex align="center">
              <Avatar
                style={{ backgroundColor: "rgb(218 230 241)" }}
                size={45}
                icon={
                  <Icon
                    icon="solar:bell-bing-line-duotone"
                    style={{ color: primaryColor }}
                    width={25}
                  ></Icon>
                }
              />
              <Paragraph className="mb-0 ms-3" style={{ opacity: ".7" }}>
                You will receive a notification when mail is uploaded to your dashboard.
              </Paragraph>
            </Flex>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mb-5 cus-card-grid">
        <Col span={12}>
          <Card
            bodyStyle={{
              backgroundColor: "#fff",
              borderRadius: "11px",
              padding: "15px",
            }}
          >
            <Flex align="center">
            <div>
              <Avatar
                style={{ backgroundColor: "rgb(218 230 241)" }}
                size={45}
                icon={
                  <Icon
                    icon="solar:inbox-line-line-duotone"
                    style={{ color: primaryColor }}
                    width={25}
                  ></Icon>
                }
              />
              </div>
              <div className=" ms-3">
                <b>Packages cannot be sent to or received at your virtual address.</b>
              <Paragraph className="mb-0" style={{ opacity: ".7" }}>
                You cannot show up in person to pick up mail. There is no in person support, so please do not show up at this address.
              </Paragraph>
              </div>
            </Flex>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            bodyStyle={{
              backgroundColor: "#fff",
              borderRadius: "11px",
              padding: "15px",
            }}
          >
            <Flex align="center">
              <div>
              <Avatar
                style={{ backgroundColor: "rgb(218 230 241)" }}
                size={45}
                icon={
                  <Icon
                    icon="solar:gallery-edit-line-duotone"
                    style={{ color: primaryColor }}
                    width={25}
                  ></Icon>
                }
              />
              </div>
              <Paragraph className="mb-0 ms-3" style={{ opacity: ".7" }}>
              You are required to sign and notarize Form 1583 in order for us to be able to open and scan your mail. We'll walk you through the process.
              </Paragraph>
            </Flex>
          </Card>
        </Col>
      </Row>


      <Row gutter={[16, 16]} className="mb-5 cus-card-grid">
        <Col span={12}>
          <Card
            bodyStyle={{
              backgroundColor: "#fff",
              borderRadius: "11px",
              padding: "15px",
            }}
          >
            <Flex align="center">
            <div>
              <Avatar
                style={{ backgroundColor: "rgb(218 230 241)" }}
                size={45}
                icon={
                  <Icon
                    icon="solar:user-cross-broken"
                    style={{ color: primaryColor }}
                    width={25}
                  ></Icon>
                }
              />
              </div>
              <Paragraph className="mb-0 ms-3" style={{ opacity: ".7" }}>
                You cannot show up in person to pick up mail. There is no in person support, so please do not show up at this address.
              </Paragraph>
            </Flex>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            bodyStyle={{
              backgroundColor: "#fff",
              borderRadius: "11px",
              padding: "15px",
            }}
          >
            <Flex align="center">
              <div>
              <Avatar
                style={{ backgroundColor: "rgb(218 230 241)" }}
                size={45}
                icon={
                  <Icon
                    icon="solar:user-block-rounded-line-duotone"
                    style={{ color: primaryColor }}
                    width={25}
                  ></Icon>
                }
              />
              </div>
              <Paragraph className="mb-0 ms-3" style={{ opacity: ".7" }}>
              Your Virtual Address cannot be used as a registered agent's address. However if you require a registered agent, you can learn more about that separate service here.
              </Paragraph>
            </Flex>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Card>
            <Flex align="center" justify="space-between">
              <Meta
                avatar={
                  <Avatar
                    style={{ backgroundColor: "rgb(218 230 241)" }}
                    size={55}
                    icon={
                      <Icon
                        icon="solar:inbox-line-bold-duotone"
                        style={{ color: primaryColor }}
                        width={27}
                      ></Icon>
                    }
                  />
                }
                title="Virtual Mailbox and Mail Scanning Service"
                description={
                  <span style={{ opacity: ".7" }}>
                    Get a Fixed Street Address and Access to Your Correspondence
                    Anywhere
                  </span>
                }
              />
              <>
                <Button
                  color="primary"
                  variant="solid"
                  size="large"
                  className="px-4 mt-0"
                >
                  Get Started{" "}
                  <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon>
                </Button>
              </>
            </Flex>
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default VirtualMailBox;
