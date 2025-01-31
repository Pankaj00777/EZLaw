import React, { useState } from 'react';
import { Tabs, Button, Card, Row, Col } from 'antd';
import { EditOutlined, SyncOutlined, CloseOutlined, MailOutlined, FontSizeOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

const { TabPane } = Tabs;

function CompanyServices() {

  const [currentTab, setCurrentTab] = useState('1');



  const handleTabChange = (key) => {
    setCurrentTab(key);
  };

  const data = [
    {
      icon: <Icon icon='solar:text-selection-line-duotone'></Icon>,
      title: "Assumed Business Name",
      description: "Filed if a company requires assumed business/fictitious name.",
    },
    {
      icon: <Icon icon='solar:clapperboard-edit-line-duotone'></Icon>,
      title: "Amendment",
      description: "Filed when a company updates its membership details.",
    },
    {
      icon: <Icon icon='solar:refresh-circle-line-duotone'></Icon>,
      title: "Reinstatement",
      description: "Used to formally restore a company to good standing.",
    },
    {
      icon: <Icon icon='solar:shield-cross-line-duotone'></Icon>,
      title: "Dissolution",
      description: "Used to formally terminate the existence of an entity.",
    },
    {
      icon: <Icon icon='solar:rocket-line-duotone'></Icon>,
      title: "Virtual Address",
      description: "To assist clients in maintaining privacy, we offer a business address.",
    },
  ];

  const compliance = [
    {
      icon: <Icon icon='solar:user-id-line-duotone'></Icon>,
      title: "Certificate of Good Standing",
      description: "Required by government and private agencies to validate a company’s status before facilitating specified transactions.",
    },
    {
      icon: <Icon icon='solar:globus-line-duotone'></Icon>,
      title: "Foreign Qualification",
      description: "Filed when you want to expand your business to new states.",
    },
    {
      icon: <Icon icon='solar:text-cross-square-line-duotone'></Icon>,
      title: "Trademark Name Search",
      description: "Take steps to protect your brand and valuable company assets such as your name, logo, and tagline.",
    },
    {
      icon: <Icon icon='solar:clipboard-check-line-duotone'></Icon>,
      title: "Licenses & Permits",
      description: "Identify all the business licenses and permits required to keep your business compliant.",
    },
    {
      icon: <Icon icon='solar:file-check-line-duotone'></Icon>,
      title: "Submit your 90-Day BOI Report",
      description: "The federal government requires you to submit a BOIR (Beneficial Ownership Information Report) within 90 days of starting your business. We'll  help you do it fast and easy.",
      note:'*There has been an injunction for this requirement as of December 3rd, we continue to advise our clients to file as the litigation is still pending in the courts.'
    },
  ];

  const registeredAgent = [
    {
      icon: <Icon icon='solar:user-check-rounded-line-duotone'></Icon>,
      title: "New Registered Agent Service",
      description: "Click here if you have existing registered agent service and would like to renew it.",
    },
    {
      icon: <Icon icon='solar:users-group-rounded-line-duotone'></Icon>,
      title: "Change Registered Agent",
      description: "Use to update the registered agent on file with the state of formation.",
    },
   
  ];
  const filings = [
    {
      icon: <Icon icon='solar:user-id-line-duotone'></Icon>,
      title: "Form 2553",
      description: "The 2553 is the IRS form filed by a business entity in order to obtain the S-Corporation tax classification.",
    },
    {
      icon: <Icon icon='solar:globus-line-duotone'></Icon>,
      title: "EIN / Tax ID Number",
      description: "An EIN is required to open a bank account, file taxes and submit payroll taxes.",
    },
   
  ];

  return (
    <>
    
      <Tabs className='mt-3' type='line' activeKey={currentTab} onChange={handleTabChange}>
        <TabPane tab="Company Changes" key="1">
            <Row className='cus-card-box' gutter={[25, 25]} >
                {data.map((item, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    <Card hoverable>
                        <div >{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div>
                        <Link to className='d-flex align-items-center'>
                            Learn More <Icon icon='solar:arrow-right-line-duotone' width={18}></Icon>
                        </Link>
                        </div>
                    </Card>
                    </Col>
                ))}
            </Row>
        </TabPane>

        <TabPane tab="Compliance" key="2">
        <Row className='cus-card-box compliance' gutter={[25, 25]} >
                {compliance.map((item, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    <Card hoverable>
                        <div >{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div>
                        <Link to className='d-flex align-items-center'>
                            Learn More <Icon icon='solar:arrow-right-line-duotone' width={18}></Icon>
                        </Link>
                        </div>
                    </Card>
                    </Col>
                ))}
            </Row>
        </TabPane>
        <TabPane tab="Registered Agent" key="3">
            <Row className='cus-card-box compliance' gutter={[25, 25]} >
            {registeredAgent.map((item, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    <Card hoverable>
                        <div >{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div>
                        <Link to className='d-flex align-items-center'>
                            Learn More <Icon icon='solar:arrow-right-line-duotone' width={18}></Icon>
                        </Link>
                        </div>
                    </Card>
                    </Col>
                ))}
            </Row>  
        </TabPane>
        <TabPane tab="IRS Filings" key="4">
        <Row className='cus-card-box compliance' gutter={[25, 25]} >
            {filings.map((item, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                    <Card hoverable>
                        <div >{item.icon}</div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div>
                        <Link to className='d-flex align-items-center'>
                            Learn More <Icon icon='solar:arrow-right-line-duotone' width={18}></Icon>
                        </Link>
                        </div>
                    </Card>
                    </Col>
                ))}
            </Row> 
        </TabPane>
        <TabPane tab="Business Formation Kit" key="5">
       
        </TabPane>
      </Tabs>

    </>
  )
}

export default CompanyServices