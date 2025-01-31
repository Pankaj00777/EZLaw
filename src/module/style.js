import styled from "styled-components";

export const Wrapper = styled.div`
    .bdr{border:1px solid red}

    .h-100{height:100%}

    .demo-logo-vertical{padding:20px 20px;min-height: 79px;}
    .ant-menu{border-inline-end: 1px solid rgba(5, 5, 5, 0.0) !important;}
    .ant-menu-light .ant-menu-item-selected,.ant-menu-light>.ant-menu .ant-menu-item-selected{background-image: linear-gradient(45deg, #013b6a, #0f5d9c);}

    .ant-menu-light .ant-menu-item-selected a,.ant-menu-light>.ant-menu .ant-menu-item-selected a{color:#fff;}
    
    .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title, 
    .ant-menu-vertical .ant-menu-submenu-title {text-overflow: unset !important;}
    .ant-layout-sider {border-right: 1px dashed #c5c5c5;}
    
.toggle-btn {
    border-radius: 60%;
    width: 45px;
    height: 45px;
     background: rgb(255 255 255 / 25%);
    color: rgb(255 255 255 / 100%);
    position: relative;
}
.toggle-btn2 {
    right: 20px;
    top: 20px;
    border-radius: 60%;
    width: 40px;
    height: 40px;
    background-color: #f5f5f5;
}
.toggle-btn1 {
    right: 20px;
    top: 60px;
    border-radius: 60%;
    width: 40px;
    height: 40px;
    background-color: #f5f5f5;
}
.ant-btn-variant-text:not(:disabled):not(.ant-btn-disabled):hover {
    color: rgb(255 255 255 / 100%);
    background: rgb(255 255 255 / 25%);
}
.sid-btn{display:none}

@media (max-width: 768px) {
  .ant-layout-sider {
    width: 100vw !important;
    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
  }
.sid-btn{display:block}
    
}

.flx-loading{
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, #0c56921a, #8fc9fa00);
}
.flx-loading div{
    font-size: 41px;
    margin-bottom: -70px;
    z-index: 9;
    font-weight: 700;
    font-family: nunito;
}
.ant-layout-header {
    height: 65px;
    padding: 0 10px;
    color: rgba(0, 0, 0, 0.88);
    line-height: 31px;
    background: #001529;
    margin: 20px 20px 0 20px;
    border-radius: 40px;
    box-shadow: 0 0 14px #00000033;
    position:sticky;
    top: 20px;
    z-index: 9;
}
.back-bg {
    display: block;
    position: absolute;
    width: 100%;
    height: 96px;
    background: rgb(245 245 245 / 50%);
    position: fixed;
    top: 0;
    z-index: 9;
    backdrop-filter: blur(6px);
}
`;


export const BreadCus = styled.div`
    // border:1px solid red;
    display:none;
    @media (max-width: 767.98px) {
        margin-top:10px;
        display:block;
        margin: 10px 20px 0 20px;
        .head {color:#000 !important;margin-left: 0 !important;font-size: 21px !important;}
        .head span{display:none}
        .ant-breadcrumb li span{color: rgba(0, 0, 0, 0.75) !important;}
        .ant-breadcrumb li span a{color: rgba(0, 0, 0, 0.75) !important;}
        .ant-breadcrumb{border:1px solid red;display:none}

    }
`;