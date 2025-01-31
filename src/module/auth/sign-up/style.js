import styled from "styled-components";

export const Wrapper = styled.div`
background-color: #ededed;
.d-lg-flex{display:flex !important}
.w-lg-60 {width: 50%;}
.flex-column-fluid { flex: 1 0 auto;}
.flex-row {flex-direction: row !important;}
.bg-cover{background-size: cover;background-repeat: no-repeat;background-position: center right;}

.box-l {
    background-color: #ddd;
    position: relative;
    border: 2px solid transparent;
    /* background: linear-gradient(71deg, #ededed, #ededed, #ededed); */
    // background: #fff;
    background-clip: padding-box;
    border-radius: 20px !important;
    padding: 40px;
}
.box-l::before {
    content: '';
    background: #fff;
    /* background: linear-gradient(71deg, #f5f5f5, #f3f3f3, #f5f5f5); */
    position: absolute;
    content: "";
    z-index: -1;
    border-radius: 20px;
    box-shadow: 0 0 75px #dddddddb;
}
.flex-center {
    justify-content: center;
    align-items: center;
}
input:-internal-autofill-selected{
background-color: light-dark(rgb(0, 0, 0), rgba(70, 90, 126, 0.4)) !important;
}
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset !important; /* Background color */
  -webkit-text-fill-color: #000 !important; /* Text color */
  transition: background-color 5000s ease-in-out 0s; /* Prevent flicker */
}
.ant-input-filled:hover {
    background: rgb(255 255 255 / 100%) !important;
}

input:-moz-autofill {
  box-shadow: 0 0 0px 1000px white inset !important;
  color: #000 !important;
}
  .ant-input-password-large {
    display: flex;
}
.ant-input-affix-wrapper{padding: 0;padding: .775rem 1rem;}
.ant-input-filled:hover {background: rgb(255 255 255 / 6%);}

.ant-input-lg {
    font-size: 15px !important;
}

@media (max-width: 992px) {
.d-none{display:none !important ;}
.sign-in{padding: 35px !important;}
.sign-in-main{padding:0 10px}
}


`;