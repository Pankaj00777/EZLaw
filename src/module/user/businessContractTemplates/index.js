import React from 'react'
import { Wrapper } from './style'
import { Avatar, Card, Col, Collapse, Flex, Row, Typography } from 'antd';
import { Icon } from '@iconify/react/dist/iconify.js';
import { primaryColor } from '../../../config';

const { Panel } = Collapse;
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;


function BusinessContractTemplates() {

    const customExpandIcon = ({ isActive }) => (
        <Icon icon="solar:round-alt-arrow-down-line-duotone" width={25} className='' style={{transform: `rotate(${isActive ? '180deg' : '0deg'})`}}></Icon>
      );
      const agreements = [
        {
          header: "Operating Agreement",
          description:
            "The operating agreement for a limited liability company is a private agreement between the members/owners of the LLC, and it details ownership, rights, and responsibilities of the LLC members. It provides members a detailed framework for various business and functional scenarios that may arise.",
        },
        {
          header: "Non-Compete Agreement",
          description:
            "A non-compete agreement is a contract between an employee and employer that restricts the employee's ability to engage in business which competes with his/her current employer.",
        },
        {
          header: "Non-Disclosure Agreement (NDA)",
          description:
            "An NDA is a legally binding contract in which a person or business promises to treat specific information as a trade secret and not disclose it to others.",
        },
        {
          header: "Independent Contractor Agreement",
          description:
            "An independent contractor agreement details the working relationship between a business and a consultant. It’s important for an employer to detail the relationship in order to avoid a costly dispute down the road.",
        },
        {
          header: "Employment Agreement",
          description:
            "An employment agreement is a binding contract between an employer and employee. It’s helpful to use this agreement if you are hiring a new employee and want to specify rights and obligations like salary, benefits, and hours.",
        },
        {
          header: "Employment Offer Letter",
          description:
            "An offer letter is a step closer to working for a new employer as it lists the basic terms of the employment position offered by a company.",
        },
        {
          header: "Intellectual Property Assignment Agreement",
          description:
            "This IP assignment agreement is intended to protect a company's intellectual property rights in works created or developed by an employee or contractor.",
        },
        {
          header: "Release Of Liability",
          description:
            "A release is a legal document between two parties — the person promising not to sue and the person or company who is potentially liable. This document can cover broad claims that are filed in common dispute cases.",
        },
        {
          header: "83(B) Election Form",
          description:
            "An 83(b) election form is a letter sent to the IRS which informs them that you’d like to be taxed on your equity on the date the equity was granted to you instead of the date it vests.",
        },
        {
          header: "Terms Of Service",
          description:
            "Terms of service govern the behavior of a user when they use your website. The terms provide your company a framework to restrict or terminate users' access if they violate the contract.",
        },
        {
          header: "Privacy Policy",
          description:
            "A privacy policy discloses how a website gathers, uses, discloses and manages a user's data. This policy is so important that it’s required by law in the U.S. for websites that collect user data.",
        },
        {
          header: "Sales Agreement",
          description:
            "A sales agreement lets both parties know what to expect during the sale of goods or services. It helps parties better understand the details of the agreement, while minimizing the chances of a dispute later on.",
        },
        {
          header: "General Corporate Resolution",
          description:
            "A resolution is a declaration from a company's board of directors authorizing company representatives to take certain actions.",
        },
        {
          header: "Demand Letter",
          description:
            "A demand letter is a formal notice to a person / company that they owe a sum of money from a past transaction. They are used in business because they serve to avoid expensive litigation.",
        },
        {
          header: "Letter Of Intent For A Business Venture",
          description:
            "A letter of intent is used to notify potential partners about your interest in developing a business relationship. A letter of intent outlines the material terms and conditions of the proposed agreement.",
        },
        {
          header: "Joint Venture Agreement",
          description:
            "A joint venture agreement describes an arrangement between two companies attempting to form a new entity to their mutual benefit. It sets out the rights and obligations for both parties.",
        },
        {
          header: "Memorandum Of Understanding (MOU)",
          description:
            "An MOU describes an agreement between two or more parties. It often is the first stage in the formation of a formal contract and it lists the expectations between the parties as they work together toward a common objective.",
        },
        {
          header: "Consulting Agreement",
          description:
            "A consulting agreement is between a consultant and a client who wish to retain certain services of the consultant for a specified time and rate.",
        },
        {
          header: "Organization Meeting Minutes",
          description:
            "Meeting minutes keep an official record of what was done or talked about at formal meetings, including any decisions made or actions taken. They are recorded during a formal meeting of the board of directors or shareholders of a corporation, such as annual meetings.",
        },
        {
          header: "Partnership Agreement",
          description:
            "A partnership agreement details the relationship between business partners and their individual obligations and contributions to the partnership.",
        },
        {
          header: "Cease & Desist Letter (Trademark Infringement)",
          description:
            "Cease and desist letters are used by businesses as a way to protect their trademark. It’s advisable to send this type of letter to another business or person who is infringing on your trademark.",
        },
        {
          header: "Founder Agreement",
          description:
            "A founders agreement forces co-founders to hash out the often difficult and controversial details in the early stages of the company so that the company is primed for success.TIP: The most important provisions are the role and responsibilities of each founder and the vesting schedule.",
        },
        {
          header: "Service Agreement",
          description:
            "A service agreement is used between two people or businesses where one agrees to provide a specified service to the other. This agreement should clearly set out the rights and obligations of both parties, along with clear terms of the agreement to prevent potential disputes from arising.",
        },
        {
          header: "Employee Termination Letter",
          description:
            "A termination letter is handy for ending an employment relationship, while setting forth the details and reasons for the termination, and specifying the exit procedures. This letter should be clear and concise, and include all relevant information about the arrangement. A well-crafted letter can help protect employers from future lawsuits resulting from the termination.",
        },
        {
          header: "Website Linking Agreement",
          description:
            "A Website Linking Agreement sets out terms for a business that permits a licensee to link to its website and display its trademarks on the licensee's website. It is used as a preventative device to avoid later disputes between the websites.",
        },
        {
          header: "Bill of Sale",
          description:
            "A bill of sale is a contract which transfers ownership of an item from seller to the buyer. A bill of sale occurs after the parties execute the sales agreement and serves as evidence that full consideration has been provided between the parties.",
        },
        {
          header: "Collaboration Agreement",
          description:
            "This type of agreement specifies the terms and conditions between two parties that team up on a product or company, including the type of work they plan to undertake together, the allocation of responsibilities, and how any profits may be divided.",
        },
      ];

      
  return (
    <Wrapper>
        <Row>
        <Col>
            <Title style={{fontWeight:400, lineHeight:'32px'}} className='mb-5' level={4}>We give you easy access to legal templates to assist with various business affairs.<br></br>
            You can download them directly to your computer and edit them.</Title>
        </Col>
        <Col span={24}>
          <Card className='box-info'>
            <Flex align="center" justify="space-between">
              <Meta
              className=' d-flex align-items-center'
                avatar={
                  <Avatar
                    style={{ backgroundColor: "rgb(218 230 241)" }}
                    size={55}
                    icon={
                      <Icon
                        icon="solar:shield-warning-line-duotone"
                        style={{ color: primaryColor }}
                        width={27}
                      ></Icon>
                    }
                  />
                }
                // title="Virtual Mailbox and Mail Scanning Service"
                description={
                  <span className=' d-flex' >
                   It's important to note that these documents are not customized for your particular situation. If you're using these documents for serious matters, it's highly recommended that you customize and edit them to fit your situation. It's also advised that an attorney review your edited agreement.
                  </span>
                }
              />
              <>
                
              </>
            </Flex>
          </Card>
        </Col>
      </Row>
          <div className=' mt-5'>
            <Collapse className='cus-accordination' expandIcon={customExpandIcon} accordion>
            {agreements.map((agreement, index) => (
                <>
                <Panel header={agreement.header} key={index}>
                    <p className='mb-0'>{agreement.description}</p>
                </Panel>
                {index !== agreements.length - 1 && <div className='seprator my-3'></div>}
                </>
            ))}
            </Collapse>
    </div>
    </Wrapper>
  )
}

export default BusinessContractTemplates