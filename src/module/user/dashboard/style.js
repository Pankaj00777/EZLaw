import styled from "styled-components";

export const Wrapper = styled.div`
    .ant-tabs-top >.ant-tabs-nav::before, .ant-tabs-bottom >.ant-tabs-nav::before, .ant-tabs-top >div>.ant-tabs-nav::before, .ant-tabs-bottom >div>.ant-tabs-nav::before {
        border-bottom: 1px dashed #d9d9d9;
    }
    .ant-tabs .ant-tabs-tab-btn {
    font-size: 16px;
    font-weight: 500;
}
    .cus-card-box{}
    .cus-card-box svg{color:#025497;width:50px;height:50px;margin-bottom:15px}
    .cus-card-box h3{font-size:18px;}
    .cus-card-box p{opacity:0.75}
    .cus-card-box a{color:#025497;font-weight:500}
    .cus-card-box a svg{width:22px;height:22px;margin-bottom:0;margin-left:5px}

    .compliance .ant-card {min-height: 252px;}
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #025497;
    text-shadow: none !important;
}
.ant-card-hoverable:hover {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 0%), 0 3px 16px 0 rgb(0 0 0 / 0%), 0 7px 12px 4px rgb(0 0 0 / 5%);
}
    .ant-table-wrapper .ant-table-thead>tr>th, .ant-table-wrapper .ant-table-thead>tr>td {
    background: #f5f5f5;
}
.ant-segmented .ant-segmented-group{
background:#fff;
border-radius:5px
    }
.ant-segmented .ant-segmented-item-label {
    min-height: 28px;
    line-height: 28px;
    padding: 3px 8px;
}
`;