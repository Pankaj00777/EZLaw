import styled from "styled-components";

export const Wrapper = styled.div`
    .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-item, .ant-menu-inline .ant-menu-submenu-title, .ant-menu-vertical .ant-menu-submenu-title {
    height: 40px;
    line-height: 40px;
    padding-inline: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-inline: 14px;
    margin-block: 14px;
    width: calc(100% - 28px);
}
.ant-menu .ant-menu-item{padding-left:12px !important;margin-block: 10px !important;height: 43px;}
.ant-menu-item-selected .ant-menu-item-icon {color:#fff;}
.ant-menu-item-selected .ant-menu-title-content a {color:#fff !important;font-weight: 500;font-size: 15px !important;}
.ant-menu .ant-menu-title-content a {color:#333;font-weight: 500;font-size: 15px !important;}

.ant-menu .ant-menu-item .ant-menu-item-icon, .ant-menu .ant-menu-submenu-title .ant-menu-item-icon {vertical-align: -0.559em;}

.profile-img-sidebar {width: 55px;height: 55px;border-radius: 50%; object-fit: cover;}
.ant-menu-submenu-title{padding-left:12px !important}
.dot-inner{width: 3px !important;height: 2px !important;background-color: #cdcdcd;    margin-left: 15px !important;} 

.ant-menu-inline .ant-menu-item, .ant-menu-vertical.ant-menu-item, .ant-menu-inline .ant-menu-submenu-title, 
.ant-menu-vertical .ant-menu-submenu-title {margin-block: 5px;height: 43px;}
.ant-menu-submenu .ant-menu .ant-menu-item {padding-left: 12px !important; margin-block: 2px !important; height: 43px;}

.ant-menu-submenu .ant-menu .ant-menu-title-content a,{color: #333;font-weight: 500;font-size: 14px !important;}

.ant-menu-submenu .ant-menu-submenu-title  .menu-label {color: #333;font-weight: 500;font-size: 14px !important;}
.ant-menu-submenu-selected .ant-menu .ant-menu-item-selected .dot-inner { background-color: #fff !important;}
.ant-menu-submenu-selected .ant-menu-item-icon, .ant-menu-submenu-selected .ant-menu-submenu-arrow {color: #613cea;}
.ant-menu-light:not(.ant-menu-horizontal) .ant-menu-submenu-title:active, .ant-menu-light>.ant-menu:not(.ant-menu-horizontal) .ant-menu-submenu-title:active {    background-color: #edebfe !important;}
.ant-menu .ant-menu-submenu-title .ant-menu-item-icon svg {    color: #707070;}



`;