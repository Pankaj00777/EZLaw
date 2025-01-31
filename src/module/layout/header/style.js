import styled from "styled-components";

export const Wrapper = styled.div`

    .pro-img{width: 45px;height: 45px;border-radius: 50%;}
    .cursor-pointer{position: relative;cursor:pointer}
    .cursor-pointer .ant-space-item, .back .ant-space-item{display:flex; align-items:center}
    .ant-dropdown-menu{width: 250px;padding: 1.5rem 1rem !important;}
    .back-button {border: 1px solid #8d70f8 !important;background-color: #8d70f8;color: #fff;border-radius: 40px;}

    .ant-btn-variant-outlined:not(:disabled):not(.ant-btn-disabled):hover, .ant-btn-variant-dashed:not(:disabled):not(.ant-btn-disabled):hover {
    color: #ffffff;border-color: #40505f !important;background: #40505f;box-shadow: 0 0 20px #dad0ff30;transform: translateX(-10px);}
    .header-logo{display:none}
    @media (max-width: 767.98px) {
        
    .header-logo{display:flex}
        .cus-breadcrumb{display:none;}
        .back-button{width: 45px;height: 45px;padding: 0 !important;}
        .back-button span {display: none;}
    }
     @media (min-width: 767.98px) and (max-width: 1300px) {
     .cus-breadcrumb .head{display:none}
     }

    
`;