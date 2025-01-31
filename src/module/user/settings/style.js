import styled from "styled-components";

export const Wrapper = styled.div`
.ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    text-shadow:none !important;
}
.demo-loadmore-list .ant-card .ant-card-body {
    padding: 5px 24px;
    border-radius: 0 0 8px 8px;
    }
.ant-list-item-meta-title{
    font-size: 15px;
    margin-bottom:0 !important;
}
    .hover-elevate-up {
    transition: transform .3s ease;
}
    .hover-elevate-up:hover {
    transform: translateY(-2.5%);
    transition: transform .3s ease;
    will-change: transform;
    box-shadow:0px 10px 14px 0px rgba(0, 0, 0, 0.02)
}
    .ant-typography {
    font-size: 16px !important;
}
.ant-tabs-top >.ant-tabs-nav::before, .ant-tabs-bottom >.ant-tabs-nav::before, .ant-tabs-top >div>.ant-tabs-nav::before, .ant-tabs-bottom >div>.ant-tabs-nav::before {
    border-bottom: 1px dashed #d9d9d9;
}
.seprator{
    border-bottom: 1px dashed #d9d9d9;
}
`;