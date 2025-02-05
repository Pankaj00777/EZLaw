import React from 'react'
import { Wrapper } from './style'
import { Avatar, Card, Col, Descriptions, Divider, List, Row } from "antd";
import { primaryColor } from '../../../config';

function CompanyInfo() {

    const companyDetails = [
        { label: "Company Name", value: "IYSHIPPING LLC" },
        { label: "Company Address", value: "13120 Georgetown Drive, Palos Park, Illinois 60462 US" },
        { label: "State Status", value: "Active/Good Standing" },
        { label: "NAICS Code", value: "Transportation and Warehousing (48)" },
        { label: "NAICS Subcode", value: "Freight Transportation Arrangement (488510)" },
        { label: "Formation State", value: "Illinois" },
        { label: "Entity Type", value: "LLC" },
        { label: "Formation Date", value: "Jun. 19, 2023" },
        { label: "Entity ID", value: "13388563" },
        { label: "EIN (Tax ID Number)", value: "93-1958316" }
      ];
      
      const contactDetails = [
        { label: "Name", value: "Ibrahem Abourahma" },
        { label: "Mailing Address", value: "13120 Georgetown Drive, Palos Park IL 60462 US" },
        { label: "Mobile Phone", value: "+1 (708) 491-1152" },
        { label: "Email Address", value: "iyshipping1@gmail.com" }
      ];
      
      const agentDetails = [
        { label: "Agent Name", value: "Ibrahem Abourahma" },
        { label: "Address", value: "13120 Georgetown Drive, Palos Park IL 60462" }
      ];
      
      const memberDetails = [
        { key:'1', label: "Ibrahem Abourahma", value: "13120 Georgetown Drive, Palos Park IL 60462, US,", ownership:"(50% Ownership)" },
        { key:'2', label: "Yazan Asfour", value: "6677 South County Line Road, Burr Ridge IL 60527, US", ownership:"(50% Ownership)" }
      ];
      
  return (
    <Wrapper>

        <Row gutter={[30,20]}>
            <Col className='' span={12}>
            <Card title="Company Info" style={{position:'sticky', top:100}}>
        <List
          dataSource={companyDetails}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                // avatar={<Avatar src= />}
                title={<span style={{fontWeight:400}}>{item.label}</span>}
              />
              <div style={{fontWeight:600}}>{item.value}</div>
            </List.Item>
          )}
        />
      </Card>
      </Col>
            <Col className='' span={12}>
            <Card title="Contact Info" >
      <List
          dataSource={contactDetails}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                // avatar={<Avatar src= />}
                title={<span style={{fontWeight:400}}>{item.label}</span>}
              />
              <div style={{fontWeight:600}}>{item.value}</div>
            </List.Item>
          )}
        />
      </Card>

      <Divider />

      <Card title="Agent Info" >
      <List
          dataSource={agentDetails}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <List.Item.Meta
                // avatar={<Avatar src= />}
                title={<span style={{fontWeight:400}}>{item.label}</span>}
              />
              <div style={{fontWeight:600}}>{item.value}</div>
            </List.Item>
          )}
        />
      </Card>

      <Divider />

      <Card title="Member Info" >
      <List
          dataSource={memberDetails}
          renderItem={(item, index) => (
            <Card type="inner" styles={{background:"#f7f7f7"}} className='mb-4'>
            <List.Item style={{border:'none',padding:0}} key={index}>
              <List.Item.Meta
                avatar={<Avatar style={{backgroundColor: primaryColor, verticalAlign: 'middle',}}size="large">
                    {item.key}
                  </Avatar>}
                title={<span style={{fontWeight:600}}>{item.label}</span>}
                description={item.value}
              />
              <div style={{fontWeight:600}}>{item.ownership}</div>
            </List.Item>
            </Card>

          )}
        />
      </Card>
            </Col>
        </Row>
        {/* <div style={{ maxWidth: "800px", margin: "auto" }}>
      

    </div> */}
    </Wrapper>
  )
}

export default CompanyInfo