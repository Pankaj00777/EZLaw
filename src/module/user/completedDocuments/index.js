import React from "react";
import { Wrapper } from "./style";
import { Alert, Button, Card, Col, Row, Typography } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

function CompletedDocuments() {
  return (
    <Wrapper>
        <Row className="mb-5" gutter={[25, 25]}>
          <Col xs={24} sm={24} md={24} lg={24} className="">
          <Card  className="box-info ">
            <img style={{position: 'absolute', width: '277px', right: '110px', borderBottomRightRadius:'17px'}} src='../assets/images/document.png' alt="" />
            <Row>
                <Col span={16}>
                <Title className="d-flex align-items-center " style={{color:'#025497'}} level={5}><Icon className="me-2" icon='solar:document-add-line-duotone' width={22}></Icon> Completed Documents</Title>
                <Title className="mb-0" level={3}>Congratulations!</Title>
                <Title className="mt-2" style={{fontWeight:300}} level={3}>
                Here are each of your <strong>completed company documents</strong>.
                </Title>
                    <Paragraph style={{opacity:'.7'}}>
                    This is your document repository where all of your company documents are stored.
                    </Paragraph>
                    <Paragraph style={{opacity:'.7'}}>
                       You can access these documents 24/7 and will be the location where any future documentation we fulfill on your behalf will be safely stored.
                    </Paragraph>
                    {/* <Paragraph>
                        <strong>Good your business</strong>
                    </Paragraph> */}
                    </Col>
            </Row>
          </Card>
            </Col>
        </Row>
      <Row className="cus-card-box" gutter={[25, 25]}>
        <Col xs={24} sm={12} md={8} lg={8} className="">
          <Card
            hoverable
            actions={[
              <Button size="large" color="default" variant="text">
                View PDF{" "}
                <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon>
              </Button>,
            ]}
          >
            <div className="icon">
              <Icon icon="solar:ruler-cross-pen-line-duotone" width={28}></Icon>
            </div>
            <h3>Filed Articles</h3>
            <p className="mb-0">
              {" "}
              <Meta description="A set of formal documents filed with the Secretary of State to legally document the creation of a new business entity." />
            </p>
          </Card>
        </Col>
       
        <Col xs={24} sm={12} md={8} lg={8} className="">
          <Card
            hoverable
            actions={[<Button size="large" color="default" variant="text"> View PDF <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon></Button>]}
          >

            <div className="icon">
              <Icon icon="solar:user-id-line-duotone" width={28}></Icon>
            </div>
            <h3>EIN / Tax ID Number</h3>
            <p className="mb-0">
            <Meta description="A 9-digit number that is assigned by the IRS and used to identify taxpayers in a business entity." />
            </p>

            
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className="">
          <Card
            hoverable
            actions={[<Button color="default" variant="text" size="large"> View PDF <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon></Button>]}
          >
            <div className="icon">
              <Icon icon="solar:file-check-line-duotone" width={28}></Icon>
            </div>
            <h3>Filed 2024 Annual Report - (IL)</h3>
            <p className="mb-0">
            <Meta description="A filing required by the Secretary of state that details a company’s activities throughout the prior year." />
            </p>

            
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className="">
          <Card
            hoverable
            actions={[<Button color="default" variant="text" size="large"> View PDF <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon></Button>]}
          >
            <div className="icon">
              <Icon icon="solar:file-text-line-duotone" width={28}></Icon>
            </div>
            <h3>Statement of the Organizer</h3>
            <p className="mb-0">
              <Meta description="A document signed by the Organizer which identifies the initial members of the Limited Liability Company." />
            </p>
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default CompletedDocuments;
