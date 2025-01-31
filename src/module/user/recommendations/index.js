import React from "react";
import { Wrapper } from "./style";
import { Alert, Button, Card, Col, Row, Typography } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Title, Paragraph } = Typography;

function Recommendations() {
  return (
    <Wrapper>
        <Row className="mb-5" gutter={[25, 25]}>
          <Col xs={24} sm={24} md={24} lg={24} className="">
          <Card  className="box-info ">
            <img style={{position: 'absolute', width: '340px', right: 0, borderBottomRightRadius:'17px'}} src='../assets/images/23673006_6770951.svg' alt="" />
            <Row>
                <Col span={16}>
                <Title className="d-flex align-items-center " style={{color:'#025497'}} level={5}><Icon className="me-2" icon='solar:chat-line-line-duotone' width={22}></Icon> Recommendations</Title>
                <Title className="mb-0" level={3}>Congratulations!</Title>
                <Title className="mt-2" style={{fontWeight:300}} level={3}>
                    We've identified <strong>3 services</strong> that can provide value for your business.
                </Title>
                    <Paragraph style={{opacity:'.7'}}>
                        We are driven by providing ongoing value to our clients by bringing on great partners with
                        services and resources that make it easier to run your business.
                    </Paragraph>
                    <Paragraph style={{opacity:'.7'}}>
                        We don't believe that one size fits all, therefore our recommendations are a curated list
                        based on your business type, industry, and other qualified information that help us provide
                        only services relevant to your business.
                    </Paragraph>
                    <Paragraph>
                        <strong>Good your business</strong>
                    </Paragraph>
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
              <Button size="large" type="primary">Subscribe</Button>,
              <Button size="large" color="default" variant="text">
                Learn More{" "}
                <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon>
              </Button>,
            ]}
          >
            <div className="icon">
              <Icon icon="solar:shield-keyhole-line-duotone" width={28}></Icon>
            </div>
            <h3>Bizee State Filings</h3>
            <p>
              {" "}
              <Meta description="Easily manage your state filings with one subscription. Stay compliant while saving time and money." />
            </p>
          </Card>
        </Col>
       
        <Col xs={24} sm={12} md={8} lg={8} className="">
          <Card
            hoverable
            actions={[<Button size="large" color="default" variant="text">Learn More <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon></Button>]}
          >

            <div className="icon">
              <Icon icon="solar:calculator-minimalistic-line-duotone" width={28}></Icon>
            </div>
            <h3>Simplify Your Tax</h3>
            <p>
            <Meta description="Receive a free, no-obligation, 30-minute consultation with a certified tax professional." />
            </p>

            
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className="">
          <Card
            hoverable
            actions={[<Button color="default" variant="text" size="large">Learn More <Icon icon="solar:arrow-right-line-duotone" width={20}></Icon></Button>]}
          >
            <div className="icon">
              <Icon icon="solar:dollar-minimalistic-line-duotone" width={28}></Icon>
            </div>
            <h3>Business Banking</h3>
            <p>
            <Meta description="Opening a business bank account for your new endeavor doesn’t just serve to legitimize your business it helps to protect your personal assets." />
            </p>

            
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={8} className="">
          <Card
            hoverable
            actions={[
              <Button size="large" type="primary">File Your Boir Report Today</Button>,
            ]}
          >
            <div className="icon">
              <Icon icon="solar:file-text-line-duotone" width={28}></Icon>
            </div>
            <h3>File Your BOI Report Today</h3>
            <p>
              <Meta description="The federal government requires you to submit a BOR (Beneficial Ownership Information Report) within 90 days of starting your business. We’ll help you do it fast and easy." />
            </p>
            <Alert style={{fontSize:'11px',borderStyle:'dashed'}} message="*There has been an injunction for this requirement as of December
              3rd, we continue to advise our clients to file as the litigation
              is still pending in the courts." type="error" />
           
          </Card>
        </Col>
      </Row>
    </Wrapper>
  );
}

export default Recommendations;
