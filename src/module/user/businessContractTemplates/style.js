import styled from "styled-components";

export const Wrapper = styled.div`
    .ant-collapse {
    background-color: rgb(0 0 0 / 0%);
        border: none;
        }
  .ant-collapse>.ant-collapse-item {
  border-bottom:none !important;
    // margin-bottom: 20px;
    border-radius: 10px;
    background-color: #fff;
}
.ant-collapse>.ant-collapse-item >.ant-collapse-header {
    padding: 17px 15px;
    color: rgba(0, 0, 0, 0.88);
}
.ant-collapse>.ant-collapse-item .ant-collapse-header-text {
    font-size: 15.4px;
    font-weight: 500;
}
.ant-collapse .ant-collapse-content {
    border-top: 1px dashed #d9d9d9;
}
    .seprator{
    border-bottom: 1px dashed #d9d9d9;
}
`;