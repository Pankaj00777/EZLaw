import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    html,body, .ant-layout{
    height:100%;
        background: #f5f5f5;
    font-family: "Roboto", sans-serif;
    }
    .bdr{border:1px solid red}
    body{
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    .text-center{text-align:center}
   .root{
    /* height: 100%; */
    flex: 1;
    display: flex;
    flex-direction: column !important;
}

    .ant-card-head-title, .ant-card-title {font-size: 18px;font-family: "Roboto", sans-serif;font-weight: 600;}

.ant-btn-lg {
    font-size: 13.88px !important;
    line-height: 1.5;
    height: 40px;
    padding: 7px 15px;
    border-radius: 8px;
    font-weight: 500;
}
.ant-input-lg{font-size: 13.88px !important;font-weight: 400;}
.ant-select-lg{font-size: 13.88px !important;font-weight: 400;}
.ant-input-outlined:focus, .ant-input-outlined:focus-within {
    border-color: #613cea;
    box-shadow: none;
    outline: 0;
    background-color: #ffffff;
}
.ant-input-outlined:hover {
    border-color: #b3b3b3 !important;
    background-color: #ffffff;
}

.ant-card .ant-card-head {
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 70px;
    margin-bottom: -1px;
    padding: 0 24px;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 16px;
    background: transparent;
    border-bottom: 1px dashed #ede8e8;
    border-radius: 8px 8px 0 0;
}
.ant-input-affix-wrapper .ant-input-prefix {
    margin-inline-end: 10px;
}


.ant-table-wrapper .ant-table-tbody >tr >th, .ant-table-wrapper .ant-table-tbody >tr >td {
    border-bottom: 1px dashed #eaeaf3;
}
.ant-table-wrapper .ant-table-thead >tr>th, .ant-table-wrapper .ant-table-thead >tr>td{
    border-bottom: 1px dashed #eaeaf3;
}


// .profile-symbol-50{ width:50px; height:50px;border-radius: 50%;object-fit: cover;}

 a {color: #025497;}
 a:hover { color: #004882;}

.ant-table-wrapper .ant-table-tbody tr:last-child th, .ant-table-wrapper .ant-table-tbody tr:last-child td {
    border-bottom: 1px dashed #fff;
}
.ant-table-wrapper .ant-table-thead >tr>th, .ant-table-wrapper .ant-table-thead >tr>td {
    background: #02549710;
}
::-webkit-scrollbar { background: #f7f7f7; width: 7px; height: 7px; }
::-webkit-scrollbar-thumb { background-color: #ddd; }
::-webkit-scrollbar-thumb:hover { background-color: #7c7c7c; }


.ant-table-wrapper .ant-table-ping-right:not(.ant-table-has-fix-right) .ant-table-container::after {
    box-shadow: inset -10px 0 8px -8px rgba(5, 5, 5, 0.0);
}
.ant-table-wrapper .ant-table-ping-left:not(.ant-table-has-fix-left) .ant-table-container::before {
    box-shadow: inset 10px 0 8px -8px rgba(5, 5, 5, 0.0);
}

.ant-table-wrapper .ant-table {
    scrollbar-color: unset;
}


.btn-icon{
    width:35px;height:35px;padding: 4px 4px;
}
.shadow-sm {
    box-shadow: 0 .1rem 1rem .25rem rgba(0, 0, 0, .05) !important;
}
.bg-light {
    background-color: #F9F9F9;
}
.symbol {
    display: inline-flex;
    flex-shrink: 0;
    position: relative;
    border-radius: .475rem;
}
.symbol.symbol-circle, .symbol.symbol-circle .symbol-label, .symbol.symbol-circle>img {
    border-radius: 50%;
}
.symbol.symbol-50px>img {
    width: 50px;
    height: 50px;
}
.ant-pagination li:last-child {
    margin-left: auto;
}
.ant-pagination .ant-pagination-item-active{
    // border-color: #613cea;
}
.ant-pagination .ant-pagination-item-active a {
    color: #ffffff;
}

.ant-pagination .ant-pagination-item a {
    font-weight: 500;
}


.pgi-custom .ant-card-body {
    padding: 14px 24px;
    border-radius: 0 0 8px 8px;
}
.ant-pagination .ant-pagination-item-active:hover a {
    color: #ffffff;
}
.ant-pagination .ant-pagination-item-active:hover {
    // border-color: #613cea;
}

.form-control {
    display: block;
    width: 100%;
    padding: .675rem 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #5E6278;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #E1E3EA;
    appearance: none;
    border-radius: .475rem;
    box-shadow: none;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.ant-btn-variant-solid {
    color: #fff;
    background: #025497;
}
.ant-btn-variant-solid:not(:disabled):not(.ant-btn-disabled):hover {
    background: #013b6a;
    color: #fff;
}
.ant-btn-variant-link {
    color: #025497;
    box-shadow: none;
}
.ant-input::placeholder {
    color: #b3b3b3 !important;
}
.ant-form-item-explain-error {
    font-size: 12px;
    font-weight: 500;
}

.ant-input-outlined:hover {
    border-color: #b3b3b3 !important;
    background-color: #ffffff;
}
.ant-select-lg{
    min-height: 43px !important;
}
.ant-input-outlined:hover {
    border-color: #4096ff;
    background-color: #ffffff;
}
.ant-input:placeholder-shown {
    text-overflow: ellipsis;
}
.ant-select-lg .ant-select-selection-item{
    font-size: 13.88px !important;
    font-weight: 500;
}
.ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector{
    border-color: #b3b3b3 !important;
    background-color: #ffffff;
    box-shadow:none !important
}
.ant-select-single.ant-select-lg .ant-select-selector .ant-select-selection-item, .ant-select-single.ant-select-lg .ant-select-selector .ant-select-selection-placeholder {
    line-height: 28px;
}
  .ant-select-single.ant-select-lg:not(.ant-select-customize-input) .ant-select-selector {
    height: 40px;
}
.ant-select-outlined:hover .ant-select-selector{
    border-color: #b3b3b3 !important;
    background-color: #ffffff;
    box-shadow:none !important
}
    .ant-select-focused.ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer) .ant-select-selector {
    border-color: #b3b3b3 !important;
    box-shadow: none !important;
    outline: 0;
}
.ant-select-dropdown .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    background-color: #9b8ffa2e;
}
  .ant-input-password-large {
    display: flex;
}



@media only screen and (max-width: 576px) {
      .ant-pagination .ant-pagination-total-text{
        display: none;
    }
}


.ant-btn-color-primary {
    box-shadow: none;
    // box-shadow: 0px 3px 7px rgba(7, 67, 91, 0.25);
}

.ant-table-wrapper .ant-table-thead th.ant-table-column-sort {
    background: #eff4f8;
}

.ant-card {
    border-radius: 15px;
}
.ant-modal .ant-modal-title {
    font-size: 18px;
}

.ant-select-single.ant-select-lg .ant-select-selector .ant-select-selection-item, .ant-select-single.ant-select-lg .ant-select-selector .ant-select-selection-placeholder {
    line-height: 28px;
    font-size: 14px;
}













    h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-weight: 600;
  line-height: 1.2;
}

h1, .h1 {
  font-size: calc(1.3rem + 0.6vw);
}
@media (min-width: 1200px) {
  h1, .h1 {
    font-size: 1.75rem;
  }
}

h2, .h2 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h2, .h2 {
    font-size: 1.5rem;
  }
}

h3, .h3 {
  font-size: calc(1.26rem + 0.12vw);
}
@media (min-width: 1200px) {
  h3, .h3 {
    font-size: 1.35rem;
  }
}

h4, .h4 {  font-size: 1.25rem;}
h5, .h5 {  font-size: 1.15rem;}
h6, .h6 {  font-size: 1.075rem;}
p {  margin-top: 0;  margin-bottom: 1rem;}
.position-static {  position: static !important;}
.position-relative {  position: relative !important;}
.position-absolute {position: absolute !important;}
.position-fixed {position: fixed !important;}
.position-sticky {position: sticky !important;}
.d-flex {  display: flex !important;}
.d-inline-flex {  display: inline-flex !important;}
.d-none {  display: none !important;}
.w-unset {  width: unset !important;}

.w-25 {  width: 25% !important;}
.w-50 {width: 50% !important;}
.w-75 {width: 75% !important;}
.w-100 {width: 100% !important;}
.w-auto {width: auto !important;}
.w-1px {width: 1px !important;}
.w-2px {width: 2px !important;}
.w-3px {width: 3px !important;}
.w-4px {width: 4px !important;}
.w-5px {width: 5px !important;}
.w-6px {width: 6px !important;}
.w-7px {width: 7px !important;}
.w-8px {width: 8px !important;}
.w-9px {width: 9px !important;}
.w-10px {width: 10px !important;}
.w-15px {width: 15px !important;}
.w-20px {width: 20px !important;}
.w-25px {width: 25px !important;}
.w-30px {width: 30px !important;}
.w-35px {width: 35px !important;}
.w-40px {width: 40px !important;}
.w-45px {width: 45px !important;}
.w-50px {width: 50px !important;}
.w-55px {width: 55px !important;}
.w-60px {width: 60px !important;}
.w-65px {width: 65px !important;}
.w-70px {width: 70px !important;}
.w-75px {width: 75px !important;}
.w-80px {width: 80px !important;}
.w-85px {width: 85px !important;}
.w-90px {width: 90px !important;}
.w-95px {width: 95px !important;}
.w-100px {width: 100px !important;}
.w-125px {width: 125px !important;}
.w-150px {width: 150px !important;}
.w-175px {width: 175px !important;}
.w-200px {width: 200px !important;}
.w-225px {width: 225px !important;}
.w-250px {width: 250px !important;}
.w-275px {width: 275px !important;}
.w-300px {width: 300px !important;}
.w-325px {width: 325px !important;}
.w-350px {width: 350px !important;}
.w-375px {width: 375px !important;}
.w-400px {width: 400px !important;}
.w-425px {width: 425px !important;}
.w-450px {width: 450px !important;}
.w-475px {width: 475px !important;}
.w-500px {width: 500px !important;}
.w-550px {width: 550px !important;}
.w-600px {width: 600px !important;}
.w-650px {width: 650px !important;}
.w-700px {width: 700px !important;}
.w-750px {width: 750px !important;}
.w-800px {width: 800px !important;}
.w-850px {width: 850px !important;}
.w-900px {width: 900px !important;}
.w-950px {width: 950px !important;}
.w-1000px {width: 1000px !important;}

.mw-unset {max-width: unset !important;}
.mw-25 {max-width: 25% !important;}
.mw-50 {max-width: 50% !important;}
.mw-75 {max-width: 75% !important;}
.mw-100 {max-width: 100% !important;}
.mw-auto {max-width: auto !important;}
.mw-1px {max-width: 1px !important;}
.mw-2px {max-width: 2px !important;}
.mw-3px {max-width: 3px !important;}
.mw-4px {max-width: 4px !important;}
.mw-5px {max-width: 5px !important;}
.mw-6px {max-width: 6px !important;}
.mw-7px {max-width: 7px !important;}
.mw-8px {max-width: 8px !important;}
.mw-9px {max-width: 9px !important;}
.mw-10px {max-width: 10px !important;}
.mw-15px {max-width: 15px !important;}
.mw-20px {max-width: 20px !important;}
.mw-25px {max-width: 25px !important;}
.mw-30px {max-width: 30px !important;}
.mw-35px {max-width: 35px !important;}
.mw-40px {max-width: 40px !important;}
.mw-45px {max-width: 45px !important;}
.mw-50px {max-width: 50px !important;}
.mw-55px {max-width: 55px !important;}
.mw-60px {max-width: 60px !important;}
.mw-65px {max-width: 65px !important;}
.mw-70px {max-width: 70px !important;}
.mw-75px {max-width: 75px !important;}
.mw-80px {max-width: 80px !important;}
.mw-85px {max-width: 85px !important;}
.mw-90px {max-width: 90px !important;}
.mw-95px {max-width: 95px !important;}
.mw-100px {max-width: 100px !important;}
.mw-125px {max-width: 125px !important;}
.mw-150px {max-width: 150px !important;}
.mw-175px {max-width: 175px !important;}
.mw-200px {max-width: 200px !important;}
.mw-225px {max-width: 225px !important;}
.mw-250px {max-width: 250px !important;}
.mw-275px {max-width: 275px !important;}
.mw-300px {max-width: 300px !important;}
.mw-325px {max-width: 325px !important;}
.mw-350px {max-width: 350px !important;}
.mw-375px {max-width: 375px !important;}
.mw-400px {max-width: 400px !important;}
.mw-425px {max-width: 425px !important;}
.mw-450px {max-width: 450px !important;}
.mw-475px {max-width: 475px !important;}
.mw-500px {max-width: 500px !important;}
.mw-550px {max-width: 550px !important;}
.mw-600px {max-width: 600px !important;}
.mw-650px {max-width: 650px !important;}
.mw-700px {max-width: 700px !important;}
.mw-750px {max-width: 750px !important;}
.mw-800px {max-width: 800px !important;}
.mw-850px {max-width: 850px !important;}
.mw-900px {max-width: 900px !important;}
.mw-950px {max-width: 950px !important;}
.mw-1000px {max-width: 1000px !important;}
.vw-100 {width: 100vw !important;}

.min-vw-100 { min-width: 100vw !important;}

.h-unset {height: unset !important;}

.h-25 {height: 25% !important;}

.h-50 {height: 50% !important;}

.h-75 {height: 75% !important;}
.h-100 {height: 100% !important;}
.h-auto {height: auto !important;}
.h-1px {height: 1px !important;}
.h-2px {height: 2px !important;}
.h-3px {height: 3px !important;}
.h-4px {height: 4px !important;}
.h-5px {height: 5px !important;}
.h-6px {height: 6px !important;}
.h-7px {height: 7px !important;}
.h-8px {height: 8px !important;}
.h-9px {height: 9px !important;}
.h-10px {height: 10px !important;}
.h-15px {height: 15px !important;}
.h-20px {height: 20px !important;}
.h-25px {height: 25px !important;}
.h-30px {height: 30px !important;}
.h-35px {height: 35px !important;}
.h-40px {height: 40px !important;}
.h-45px {height: 45px !important;}
.h-50px {height: 50px !important;}
.h-55px {height: 55px !important;}
.h-60px {height: 60px !important;}
.h-65px {height: 65px !important;}
.h-70px {height: 70px !important;}
.h-75px {height: 75px !important;}
.h-80px {height: 80px !important;}
.h-85px {height: 85px !important;}
.h-90px {height: 90px !important;}
.h-95px {height: 95px !important;}
.h-100px {height: 100px !important;}
.h-125px {height: 125px !important;}
.h-150px {height: 150px !important;}
.h-175px {height: 175px !important;}
.h-200px {height: 200px !important;}
.h-225px {height: 225px !important;}
.h-250px {height: 250px !important;}
.h-275px {height: 275px !important;}
.h-300px {height: 300px !important;}
.h-325px {height: 325px !important;}
.h-350px {height: 350px !important;}
.h-375px {height: 375px !important;}
.h-400px {height: 400px !important;}
.h-425px {height: 425px !important;}
.h-450px {height: 450px !important;}
.h-475px {height: 475px !important;}
.h-500px {height: 500px !important;}
.h-550px {height: 550px !important;}
.h-600px {height: 600px !important;}
.h-650px {height: 650px !important;}
.h-700px {height: 700px !important;}
.h-750px {height: 750px !important;}
.h-800px {height: 800px !important;}
.h-850px {height: 850px !important;}
.h-900px {height: 900px !important;}
.h-950px {height: 950px !important;}
.h-1000px {height: 1000px !important;}


.mh-unset {max-height: unset !important;}
.mh-25 {max-height: 25% !important;}
.mh-50 {max-height: 50% !important;}
.mh-75 {max-height: 75% !important;}
.mh-100 {max-height: 100% !important;}
.mh-auto {max-height: auto !important;}
.mh-1px {max-height: 1px !important;}
.mh-2px {max-height: 2px !important;}
.mh-3px {max-height: 3px !important;}
.mh-4px {max-height: 4px !important;}
.mh-5px {max-height: 5px !important;}
.mh-6px {max-height: 6px !important;}
.mh-7px {max-height: 7px !important;}
.mh-8px {max-height: 8px !important;}
.mh-9px {max-height: 9px !important;}
.mh-10px {max-height: 10px !important;}
.mh-15px {max-height: 15px !important;}
.mh-20px {max-height: 20px !important;}
.mh-25px {max-height: 25px !important;}
.mh-30px {max-height: 30px !important;}
.mh-35px {max-height: 35px !important;}
.mh-40px {max-height: 40px !important;}
.mh-45px {max-height: 45px !important;}
.mh-50px {max-height: 50px !important;}
.mh-55px {max-height: 55px !important;}
.mh-60px {max-height: 60px !important;}
.mh-65px {max-height: 65px !important;}
.mh-70px {max-height: 70px !important;}
.mh-75px {max-height: 75px !important;}
.mh-80px {max-height: 80px !important;}
.mh-85px {max-height: 85px !important;}
.mh-90px {max-height: 90px !important;}
.mh-95px {max-height: 95px !important;}
.mh-100px {max-height: 100px !important;}
.mh-125px {max-height: 125px !important;}
.mh-150px {max-height: 150px !important;}
.mh-175px {max-height: 175px !important;}
.mh-200px {max-height: 200px !important;}
.mh-225px {max-height: 225px !important;}
.mh-250px {max-height: 250px !important;}
.mh-275px {max-height: 275px !important;}
.mh-300px {max-height: 300px !important;}
.mh-325px {max-height: 325px !important;}
.mh-350px {max-height: 350px !important;}
.mh-375px {max-height: 375px !important;}
.mh-400px {max-height: 400px !important;}
.mh-425px {max-height: 425px !important;}
.mh-450px {max-height: 450px !important;}
.mh-475px {max-height: 475px !important;}
.mh-500px {max-height: 500px !important;}
.mh-550px {max-height: 550px !important;}
.mh-600px {max-height: 600px !important;}
.mh-650px {max-height: 650px !important;}
.mh-700px {max-height: 700px !important;}
.mh-750px {max-height: 750px !important;}
.mh-800px {max-height: 800px !important;}
.mh-850px {max-height: 850px !important;}
.mh-900px {max-height: 900px !important;}
.mh-950px {max-height: 950px !important;}
.mh-1000px {max-height: 1000px !important;}





.vh-100 {
  height: 100vh !important;}

.min-vh-100 {
  min-height: 100vh !important;}

.flex-fill {
  flex: 1 1 auto !important;}

.flex-row {
  flex-direction: row !important;}

.flex-column {
  flex-direction: column !important;}

.flex-row-reverse {
  flex-direction: row-reverse !important;}

.flex-column-reverse {
  flex-direction: column-reverse !important;}

.flex-grow-0 {
  flex-grow: 0 !important;}

.flex-grow-1 {
  flex-grow: 1 !important;}

.flex-shrink-0 {
  flex-shrink: 0 !important;}

.flex-shrink-1 {
  flex-shrink: 1 !important;}

.flex-wrap {
  flex-wrap: wrap !important;}

.flex-nowrap {
  flex-wrap: nowrap !important;}

.flex-wrap-reverse {
  flex-wrap: wrap-reverse !important;}

.justify-content-start {
  justify-content: flex-start !important;}

.justify-content-end {
  justify-content: flex-end !important;}

.justify-content-center {
  justify-content: center !important;}

.justify-content-between {
  justify-content: space-between !important;}

.justify-content-around {
  justify-content: space-around !important;}

.justify-content-evenly {
  justify-content: space-evenly !important;}

.align-items-start {
  align-items: flex-start !important;}

.align-items-end {
  align-items: flex-end !important;}

.align-items-center {
  align-items: center !important;}

.align-items-baseline {
  align-items: baseline !important;}

.align-items-stretch {
  align-items: stretch !important;}

.align-content-start {
  align-content: flex-start !important;}

.align-content-end {
  align-content: flex-end !important;}

.align-content-center {
  align-content: center !important;}

.align-content-between {
  align-content: space-between !important;}

.align-content-around {
  align-content: space-around !important;}

.align-content-stretch {
  align-content: stretch !important;}

.align-self-auto {
  align-self: auto !important;}

.align-self-start {
  align-self: flex-start !important;}

.align-self-end {
  align-self: flex-end !important;}

.align-self-center {
  align-self: center !important;}

.align-self-baseline {
  align-self: baseline !important;}

.align-self-stretch {
  align-self: stretch !important;}
.m-0 {
  margin: 0 !important;}

.m-1 {
  margin: 0.25rem !important;}

.m-2 {
  margin: 0.5rem !important;}

.m-3 {
  margin: 0.75rem !important;}

.m-4 {
  margin: 1rem !important;}

.m-5 {
  margin: 1.25rem !important;}

.m-6 {
  margin: 1.5rem !important;}

.m-7 {
  margin: 1.75rem !important;}

.m-8 {
  margin: 2rem !important;}

.m-9 {
  margin: 2.25rem !important;}

.m-10 {
  margin: 2.5rem !important;}

.m-11 {
  margin: 2.75rem !important;}

.m-12 {
  margin: 3rem !important;}

.m-13 {
  margin: 3.25rem !important;}

.m-14 {
  margin: 3.5rem !important;}

.m-15 {
  margin: 3.75rem !important;}

.m-16 {
  margin: 4rem !important;}

.m-17 {
  margin: 4.25rem !important;}

.m-18 {
  margin: 4.5rem !important;}

.m-19 {
  margin: 4.75rem !important;}

.m-20 {
  margin: 5rem !important;}

.m-auto {
  margin: auto !important;}

.mx-0 {
  margin-right: 0 !important;
  margin-left: 0 !important;}

.mx-1 {
  margin-right: 0.25rem !important;
  margin-left: 0.25rem !important;}

.mx-2 {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;}

.mx-3 {
  margin-right: 0.75rem !important;
  margin-left: 0.75rem !important;}

.mx-4 {
  margin-right: 1rem !important;
  margin-left: 1rem !important;}

.mx-5 {
  margin-right: 1.25rem !important;
  margin-left: 1.25rem !important;}

.mx-6 {
  margin-right: 1.5rem !important;
  margin-left: 1.5rem !important;}

.mx-7 {
  margin-right: 1.75rem !important;
  margin-left: 1.75rem !important;}

.mx-8 {
  margin-right: 2rem !important;
  margin-left: 2rem !important;}

.mx-9 {
  margin-right: 2.25rem !important;
  margin-left: 2.25rem !important;}

.mx-10 {
  margin-right: 2.5rem !important;
  margin-left: 2.5rem !important;}

.mx-11 {
  margin-right: 2.75rem !important;
  margin-left: 2.75rem !important;}

.mx-12 {
  margin-right: 3rem !important;
  margin-left: 3rem !important;}

.mx-13 {
  margin-right: 3.25rem !important;
  margin-left: 3.25rem !important;}

.mx-14 {
  margin-right: 3.5rem !important;
  margin-left: 3.5rem !important;}

.mx-15 {
  margin-right: 3.75rem !important;
  margin-left: 3.75rem !important;}

.mx-16 {
  margin-right: 4rem !important;
  margin-left: 4rem !important;}

.mx-17 {
  margin-right: 4.25rem !important;
  margin-left: 4.25rem !important;}

.mx-18 {
  margin-right: 4.5rem !important;
  margin-left: 4.5rem !important;}

.mx-19 {
  margin-right: 4.75rem !important;
  margin-left: 4.75rem !important;}

.mx-20 {
  margin-right: 5rem !important;
  margin-left: 5rem !important;}

.mx-auto {
  margin-right: auto !important;
  margin-left: auto !important;}

.my-0 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;}

.my-1 {
  margin-top: 0.25rem !important;
  margin-bottom: 0.25rem !important;}

.my-2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0.5rem !important;}

.my-3 {
  margin-top: 0.75rem !important;
  margin-bottom: 0.75rem !important;}

.my-4 {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;}

.my-5 {
  margin-top: 1.25rem !important;
  margin-bottom: 1.25rem !important;}

.my-6 {
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;}

.my-7 {
  margin-top: 1.75rem !important;
  margin-bottom: 1.75rem !important;}

.my-8 {
  margin-top: 2rem !important;
  margin-bottom: 2rem !important;}

.my-9 {
  margin-top: 2.25rem !important;
  margin-bottom: 2.25rem !important;}

.my-10 {
  margin-top: 2.5rem !important;
  margin-bottom: 2.5rem !important;}

.my-11 {
  margin-top: 2.75rem !important;
  margin-bottom: 2.75rem !important;}

.my-12 {
  margin-top: 3rem !important;
  margin-bottom: 3rem !important;}

.my-13 {
  margin-top: 3.25rem !important;
  margin-bottom: 3.25rem !important;}

.my-14 {
  margin-top: 3.5rem !important;
  margin-bottom: 3.5rem !important;}

.my-15 {
  margin-top: 3.75rem !important;
  margin-bottom: 3.75rem !important;}

.my-16 {
  margin-top: 4rem !important;
  margin-bottom: 4rem !important;}

.my-17 {
  margin-top: 4.25rem !important;
  margin-bottom: 4.25rem !important;}

.my-18 {
  margin-top: 4.5rem !important;
  margin-bottom: 4.5rem !important;}

.my-19 {
  margin-top: 4.75rem !important;
  margin-bottom: 4.75rem !important;}

.my-20 {
  margin-top: 5rem !important;
  margin-bottom: 5rem !important;}

.my-auto {
  margin-top: auto !important;
  margin-bottom: auto !important;}

.mt-0 {
  margin-top: 0 !important;}

.mt-1 {
  margin-top: 0.25rem !important;}

.mt-2 {
  margin-top: 0.5rem !important;}

.mt-3 {
  margin-top: 0.75rem !important;}

.mt-4 {
  margin-top: 1rem !important;}

.mt-5 {
  margin-top: 1.25rem !important;}

.mt-6 {
  margin-top: 1.5rem !important;}

.mt-7 {
  margin-top: 1.75rem !important;}

.mt-8 {
  margin-top: 2rem !important;}

.mt-9 {
  margin-top: 2.25rem !important;}

.mt-10 {
  margin-top: 2.5rem !important;}

.mt-11 {
  margin-top: 2.75rem !important;}

.mt-12 {
  margin-top: 3rem !important;}

.mt-13 {
  margin-top: 3.25rem !important;}

.mt-14 {
  margin-top: 3.5rem !important;}

.mt-15 {
  margin-top: 3.75rem !important;}

.mt-16 {
  margin-top: 4rem !important;}

.mt-17 {
  margin-top: 4.25rem !important;}

.mt-18 {
  margin-top: 4.5rem !important;}

.mt-19 {
  margin-top: 4.75rem !important;}

.mt-20 {
  margin-top: 5rem !important;}

.mt-auto {
  margin-top: auto !important;}

.me-0 {
  margin-right: 0 !important;}

.me-1 {
  margin-right: 0.25rem !important;}

.me-2 {
  margin-right: 0.5rem !important;}

.me-3 {
  margin-right: 0.75rem !important;}

.me-4 {
  margin-right: 1rem !important;}

.me-5 {
  margin-right: 1.25rem !important;}

.me-6 {
  margin-right: 1.5rem !important;}

.me-7 {
  margin-right: 1.75rem !important;}

.me-8 {
  margin-right: 2rem !important;}

.me-9 {
  margin-right: 2.25rem !important;}

.me-10 {
  margin-right: 2.5rem !important;}

.me-11 {
  margin-right: 2.75rem !important;}

.me-12 {
  margin-right: 3rem !important;}

.me-13 {
  margin-right: 3.25rem !important;}

.me-14 {
  margin-right: 3.5rem !important;}

.me-15 {
  margin-right: 3.75rem !important;}

.me-16 {
  margin-right: 4rem !important;}

.me-17 {
  margin-right: 4.25rem !important;}

.me-18 {
  margin-right: 4.5rem !important;}

.me-19 {
  margin-right: 4.75rem !important;}

.me-20 {
  margin-right: 5rem !important;}

.me-auto {
  margin-right: auto !important;}

.mb-0 {
  margin-bottom: 0 !important;}

.mb-1 {
  margin-bottom: 0.25rem !important;}

.mb-2 {
  margin-bottom: 0.5rem !important;}

.mb-3 {
  margin-bottom: 0.75rem !important;}

.mb-4 {
  margin-bottom: 1rem !important;}

.mb-5 {
  margin-bottom: 1.25rem !important;}

.mb-6 {
  margin-bottom: 1.5rem !important;}

.mb-7 {
  margin-bottom: 1.75rem !important;}

.mb-8 {
  margin-bottom: 2rem !important;}

.mb-9 {
  margin-bottom: 2.25rem !important;}

.mb-10 {
  margin-bottom: 2.5rem !important;}

.mb-11 {
  margin-bottom: 2.75rem !important;}

.mb-12 {
  margin-bottom: 3rem !important;}

.mb-13 {
  margin-bottom: 3.25rem !important;}

.mb-14 {
  margin-bottom: 3.5rem !important;}

.mb-15 {
  margin-bottom: 3.75rem !important;}

.mb-16 {
  margin-bottom: 4rem !important;}

.mb-17 {
  margin-bottom: 4.25rem !important;}

.mb-18 {
  margin-bottom: 4.5rem !important;}

.mb-19 {
  margin-bottom: 4.75rem !important;}

.mb-20 {
  margin-bottom: 5rem !important;}

.mb-auto {
  margin-bottom: auto !important;}

.ms-0 {
  margin-left: 0 !important;}

.ms-1 {
  margin-left: 0.25rem !important;}

.ms-2 {
  margin-left: 0.5rem !important;}

.ms-3 {
  margin-left: 0.75rem !important;}

.ms-4 {
  margin-left: 1rem !important;}

.ms-5 {
  margin-left: 1.25rem !important;}

.ms-6 {
  margin-left: 1.5rem !important;}

.ms-7 {
  margin-left: 1.75rem !important;}

.ms-8 {
  margin-left: 2rem !important;}

.ms-9 {
  margin-left: 2.25rem !important;}

.ms-10 {
  margin-left: 2.5rem !important;}

.ms-11 {
  margin-left: 2.75rem !important;}

.ms-12 {
  margin-left: 3rem !important;}

.ms-13 {
  margin-left: 3.25rem !important;}

.ms-14 {
  margin-left: 3.5rem !important;}

.ms-15 {
  margin-left: 3.75rem !important;}

.ms-16 {
  margin-left: 4rem !important;}

.ms-17 {
  margin-left: 4.25rem !important;}

.ms-18 {
  margin-left: 4.5rem !important;}

.ms-19 {
  margin-left: 4.75rem !important;}

.ms-20 {
  margin-left: 5rem !important;}

.ms-auto {
  margin-left: auto !important;}

.m-n1 {
  margin: -0.25rem !important;}

.m-n2 {
  margin: -0.5rem !important;}

.m-n3 {
  margin: -0.75rem !important;}

.m-n4 {
  margin: -1rem !important;}

.m-n5 {
  margin: -1.25rem !important;}

.m-n6 {
  margin: -1.5rem !important;}

.m-n7 {
  margin: -1.75rem !important;}

.m-n8 {
  margin: -2rem !important;}

.m-n9 {
  margin: -2.25rem !important;}

.m-n10 {
  margin: -2.5rem !important;}

.m-n11 {
  margin: -2.75rem !important;}

.m-n12 {
  margin: -3rem !important;}

.m-n13 {
  margin: -3.25rem !important;}

.m-n14 {
  margin: -3.5rem !important;}

.m-n15 {
  margin: -3.75rem !important;}

.m-n16 {
  margin: -4rem !important;}

.m-n17 {
  margin: -4.25rem !important;}

.m-n18 {
  margin: -4.5rem !important;}

.m-n19 {
  margin: -4.75rem !important;}

.m-n20 {
  margin: -5rem !important;}

.mx-n1 {
  margin-right: -0.25rem !important;
  margin-left: -0.25rem !important;}

.mx-n2 {
  margin-right: -0.5rem !important;
  margin-left: -0.5rem !important;}

.mx-n3 {
  margin-right: -0.75rem !important;
  margin-left: -0.75rem !important;}

.mx-n4 {
  margin-right: -1rem !important;
  margin-left: -1rem !important;}

.mx-n5 {
  margin-right: -1.25rem !important;
  margin-left: -1.25rem !important;}

.mx-n6 {
  margin-right: -1.5rem !important;
  margin-left: -1.5rem !important;}

.mx-n7 {
  margin-right: -1.75rem !important;
  margin-left: -1.75rem !important;}

.mx-n8 {
  margin-right: -2rem !important;
  margin-left: -2rem !important;}

.mx-n9 {
  margin-right: -2.25rem !important;
  margin-left: -2.25rem !important;}

.mx-n10 {
  margin-right: -2.5rem !important;
  margin-left: -2.5rem !important;}

.mx-n11 {
  margin-right: -2.75rem !important;
  margin-left: -2.75rem !important;}

.mx-n12 {
  margin-right: -3rem !important;
  margin-left: -3rem !important;}

.mx-n13 {
  margin-right: -3.25rem !important;
  margin-left: -3.25rem !important;}

.mx-n14 {
  margin-right: -3.5rem !important;
  margin-left: -3.5rem !important;}

.mx-n15 {
  margin-right: -3.75rem !important;
  margin-left: -3.75rem !important;}

.mx-n16 {
  margin-right: -4rem !important;
  margin-left: -4rem !important;}

.mx-n17 {
  margin-right: -4.25rem !important;
  margin-left: -4.25rem !important;}

.mx-n18 {
  margin-right: -4.5rem !important;
  margin-left: -4.5rem !important;}

.mx-n19 {
  margin-right: -4.75rem !important;
  margin-left: -4.75rem !important;}

.mx-n20 {
  margin-right: -5rem !important;
  margin-left: -5rem !important;}

.my-n1 {
  margin-top: -0.25rem !important;
  margin-bottom: -0.25rem !important;}

.my-n2 {
  margin-top: -0.5rem !important;
  margin-bottom: -0.5rem !important;}

.my-n3 {
  margin-top: -0.75rem !important;
  margin-bottom: -0.75rem !important;}

.my-n4 {
  margin-top: -1rem !important;
  margin-bottom: -1rem !important;}

.my-n5 {
  margin-top: -1.25rem !important;
  margin-bottom: -1.25rem !important;}

.my-n6 {
  margin-top: -1.5rem !important;
  margin-bottom: -1.5rem !important;}

.my-n7 {
  margin-top: -1.75rem !important;
  margin-bottom: -1.75rem !important;}

.my-n8 {
  margin-top: -2rem !important;
  margin-bottom: -2rem !important;}

.my-n9 {
  margin-top: -2.25rem !important;
  margin-bottom: -2.25rem !important;}

.my-n10 {
  margin-top: -2.5rem !important;
  margin-bottom: -2.5rem !important;}

.my-n11 {
  margin-top: -2.75rem !important;
  margin-bottom: -2.75rem !important;}

.my-n12 {
  margin-top: -3rem !important;
  margin-bottom: -3rem !important;}

.my-n13 {
  margin-top: -3.25rem !important;
  margin-bottom: -3.25rem !important;}

.my-n14 {
  margin-top: -3.5rem !important;
  margin-bottom: -3.5rem !important;}

.my-n15 {
  margin-top: -3.75rem !important;
  margin-bottom: -3.75rem !important;}

.my-n16 {
  margin-top: -4rem !important;
  margin-bottom: -4rem !important;}

.my-n17 {
  margin-top: -4.25rem !important;
  margin-bottom: -4.25rem !important;}

.my-n18 {
  margin-top: -4.5rem !important;
  margin-bottom: -4.5rem !important;}

.my-n19 {
  margin-top: -4.75rem !important;
  margin-bottom: -4.75rem !important;}

.my-n20 {
  margin-top: -5rem !important;
  margin-bottom: -5rem !important;}

.mt-n1 {
  margin-top: -0.25rem !important;}

.mt-n2 {
  margin-top: -0.5rem !important;}

.mt-n3 {
  margin-top: -0.75rem !important;}

.mt-n4 {
  margin-top: -1rem !important;}

.mt-n5 {
  margin-top: -1.25rem !important;}

.mt-n6 {
  margin-top: -1.5rem !important;}

.mt-n7 {
  margin-top: -1.75rem !important;}

.mt-n8 {
  margin-top: -2rem !important;}

.mt-n9 {
  margin-top: -2.25rem !important;}

.mt-n10 {
  margin-top: -2.5rem !important;}

.mt-n11 {
  margin-top: -2.75rem !important;}

.mt-n12 {
  margin-top: -3rem !important;}

.mt-n13 {
  margin-top: -3.25rem !important;}

.mt-n14 {
  margin-top: -3.5rem !important;}

.mt-n15 {
  margin-top: -3.75rem !important;}

.mt-n16 {
  margin-top: -4rem !important;}

.mt-n17 {
  margin-top: -4.25rem !important;}

.mt-n18 {
  margin-top: -4.5rem !important;}

.mt-n19 {
  margin-top: -4.75rem !important;}

.mt-n20 {
  margin-top: -5rem !important;}

.me-n1 {
  margin-right: -0.25rem !important;}

.me-n2 {
  margin-right: -0.5rem !important;}

.me-n3 {
  margin-right: -0.75rem !important;}

.me-n4 {
  margin-right: -1rem !important;}

.me-n5 {
  margin-right: -1.25rem !important;}

.me-n6 {
  margin-right: -1.5rem !important;}

.me-n7 {
  margin-right: -1.75rem !important;}

.me-n8 {
  margin-right: -2rem !important;}

.me-n9 {
  margin-right: -2.25rem !important;}

.me-n10 {
  margin-right: -2.5rem !important;}

.me-n11 {
  margin-right: -2.75rem !important;}

.me-n12 {
  margin-right: -3rem !important;}

.me-n13 {
  margin-right: -3.25rem !important;}

.me-n14 {
  margin-right: -3.5rem !important;}

.me-n15 {
  margin-right: -3.75rem !important;}

.me-n16 {
  margin-right: -4rem !important;}

.me-n17 {
  margin-right: -4.25rem !important;}

.me-n18 {
  margin-right: -4.5rem !important;}

.me-n19 {
  margin-right: -4.75rem !important;}

.me-n20 {
  margin-right: -5rem !important;}

.mb-n1 {
  margin-bottom: -0.25rem !important;}

.mb-n2 {
  margin-bottom: -0.5rem !important;}

.mb-n3 {
  margin-bottom: -0.75rem !important;}

.mb-n4 {
  margin-bottom: -1rem !important;}

.mb-n5 {
  margin-bottom: -1.25rem !important;}

.mb-n6 {
  margin-bottom: -1.5rem !important;}

.mb-n7 {
  margin-bottom: -1.75rem !important;}

.mb-n8 {
  margin-bottom: -2rem !important;}

.mb-n9 {
  margin-bottom: -2.25rem !important;}

.mb-n10 {
  margin-bottom: -2.5rem !important;}

.mb-n11 {
  margin-bottom: -2.75rem !important;}

.mb-n12 {
  margin-bottom: -3rem !important;}

.mb-n13 {
  margin-bottom: -3.25rem !important;}

.mb-n14 {
  margin-bottom: -3.5rem !important;}

.mb-n15 {
  margin-bottom: -3.75rem !important;}

.mb-n16 {
  margin-bottom: -4rem !important;}

.mb-n17 {
  margin-bottom: -4.25rem !important;}

.mb-n18 {
  margin-bottom: -4.5rem !important;}

.mb-n19 {
  margin-bottom: -4.75rem !important;}

.mb-n20 {
  margin-bottom: -5rem !important;}

.ms-n1 {
  margin-left: -0.25rem !important;}

.ms-n2 {
  margin-left: -0.5rem !important;}

.ms-n3 {
  margin-left: -0.75rem !important;}

.ms-n4 {
  margin-left: -1rem !important;}

.ms-n5 {
  margin-left: -1.25rem !important;}

.ms-n6 {
  margin-left: -1.5rem !important;}

.ms-n7 {
  margin-left: -1.75rem !important;}

.ms-n8 {
  margin-left: -2rem !important;}

.ms-n9 {
  margin-left: -2.25rem !important;}

.ms-n10 {
  margin-left: -2.5rem !important;}

.ms-n11 {
  margin-left: -2.75rem !important;}

.ms-n12 {
  margin-left: -3rem !important;}

.ms-n13 {
  margin-left: -3.25rem !important;}

.ms-n14 {
  margin-left: -3.5rem !important;}

.ms-n15 {
  margin-left: -3.75rem !important;}

.ms-n16 {
  margin-left: -4rem !important;}

.ms-n17 {
  margin-left: -4.25rem !important;}

.ms-n18 {
  margin-left: -4.5rem !important;}

.ms-n19 {
  margin-left: -4.75rem !important;}

.ms-n20 {
  margin-left: -5rem !important;}

.p-0 {
  padding: 0 !important;}

.p-1 {
  padding: 0.25rem !important;}

.p-2 {
  padding: 0.5rem !important;}

.p-3 {
  padding: 0.75rem !important;}

.p-4 {
  padding: 1rem !important;}

.p-5 {
  padding: 1.25rem !important;}

.p-6 {
  padding: 1.5rem !important;}

.p-7 {
  padding: 1.75rem !important;}

.p-8 {
  padding: 2rem !important;}

.p-9 {
  padding: 2.25rem !important;}

.p-10 {
  padding: 2.5rem !important;}

.p-11 {
  padding: 2.75rem !important;}

.p-12 {
  padding: 3rem !important;}

.p-13 {
  padding: 3.25rem !important;}

.p-14 {
  padding: 3.5rem !important;}

.p-15 {
  padding: 3.75rem !important;}

.p-16 {
  padding: 4rem !important;}

.p-17 {
  padding: 4.25rem !important;}

.p-18 {
  padding: 4.5rem !important;}

.p-19 {
  padding: 4.75rem !important;}

.p-20 {
  padding: 5rem !important;}

.px-0 {
  padding-right: 0 !important;
  padding-left: 0 !important;}

.px-1 {
  padding-right: 0.25rem !important;
  padding-left: 0.25rem !important;}

.px-2 {
  padding-right: 0.5rem !important;
  padding-left: 0.5rem !important;}

.px-3 {
  padding-right: 0.75rem !important;
  padding-left: 0.75rem !important;}

.px-4 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;}

.px-5 {
  padding-right: 1.25rem !important;
  padding-left: 1.25rem !important;}

.px-6 {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;}

.px-7 {
  padding-right: 1.75rem !important;
  padding-left: 1.75rem !important;}

.px-8 {
  padding-right: 2rem !important;
  padding-left: 2rem !important;}

.px-9 {
  padding-right: 2.25rem !important;
  padding-left: 2.25rem !important;}

.px-10 {
  padding-right: 2.5rem !important;
  padding-left: 2.5rem !important;}

.px-11 {
  padding-right: 2.75rem !important;
  padding-left: 2.75rem !important;}

.px-12 {
  padding-right: 3rem !important;
  padding-left: 3rem !important;}

.px-13 {
  padding-right: 3.25rem !important;
  padding-left: 3.25rem !important;}

.px-14 {
  padding-right: 3.5rem !important;
  padding-left: 3.5rem !important;}

.px-15 {
  padding-right: 3.75rem !important;
  padding-left: 3.75rem !important;}

.px-16 {
  padding-right: 4rem !important;
  padding-left: 4rem !important;}

.px-17 {
  padding-right: 4.25rem !important;
  padding-left: 4.25rem !important;}

.px-18 {
  padding-right: 4.5rem !important;
  padding-left: 4.5rem !important;}

.px-19 {
  padding-right: 4.75rem !important;
  padding-left: 4.75rem !important;}

.px-20 {
  padding-right: 5rem !important;
  padding-left: 5rem !important;}

.py-0 {
  padding-top: 0 !important;
  padding-bottom: 0 !important;}

.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;}

.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;}

.py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;}

.py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;}

.py-5 {
  padding-top: 1.25rem !important;
  padding-bottom: 1.25rem !important;}

.py-6 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;}

.py-7 {
  padding-top: 1.75rem !important;
  padding-bottom: 1.75rem !important;}

.py-8 {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;}

.py-9 {
  padding-top: 2.25rem !important;
  padding-bottom: 2.25rem !important;}

.py-10 {
  padding-top: 2.5rem !important;
  padding-bottom: 2.5rem !important;}

.py-11 {
  padding-top: 2.75rem !important;
  padding-bottom: 2.75rem !important;}

.py-12 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;}

.py-13 {
  padding-top: 3.25rem !important;
  padding-bottom: 3.25rem !important;}

.py-14 {
  padding-top: 3.5rem !important;
  padding-bottom: 3.5rem !important;}

.py-15 {
  padding-top: 3.75rem !important;
  padding-bottom: 3.75rem !important;}

.py-16 {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;}

.py-17 {
  padding-top: 4.25rem !important;
  padding-bottom: 4.25rem !important;}

.py-18 {
  padding-top: 4.5rem !important;
  padding-bottom: 4.5rem !important;}

.py-19 {
  padding-top: 4.75rem !important;
  padding-bottom: 4.75rem !important;}

.py-20 {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;}

.pt-0 {
  padding-top: 0 !important;}

.pt-1 {
  padding-top: 0.25rem !important;}

.pt-2 {
  padding-top: 0.5rem !important;}

.pt-3 {
  padding-top: 0.75rem !important;}

.pt-4 {
  padding-top: 1rem !important;}

.pt-5 {
  padding-top: 1.25rem !important;}

.pt-6 {
  padding-top: 1.5rem !important;}

.pt-7 {
  padding-top: 1.75rem !important;}

.pt-8 {
  padding-top: 2rem !important;}

.pt-9 {
  padding-top: 2.25rem !important;}

.pt-10 {
  padding-top: 2.5rem !important;}

.pt-11 {
  padding-top: 2.75rem !important;}

.pt-12 {
  padding-top: 3rem !important;}

.pt-13 {
  padding-top: 3.25rem !important;}

.pt-14 {
  padding-top: 3.5rem !important;}

.pt-15 {
  padding-top: 3.75rem !important;}

.pt-16 {
  padding-top: 4rem !important;}

.pt-17 {
  padding-top: 4.25rem !important;}

.pt-18 {
  padding-top: 4.5rem !important;}

.pt-19 {
  padding-top: 4.75rem !important;}

.pt-20 {
  padding-top: 5rem !important;}

.pe-0 {
  padding-right: 0 !important;}

.pe-1 {
  padding-right: 0.25rem !important;}

.pe-2 {
  padding-right: 0.5rem !important;}

.pe-3 {
  padding-right: 0.75rem !important;}

.pe-4 {
  padding-right: 1rem !important;}

.pe-5 {
  padding-right: 1.25rem !important;}

.pe-6 {
  padding-right: 1.5rem !important;}

.pe-7 {
  padding-right: 1.75rem !important;}

.pe-8 {
  padding-right: 2rem !important;}

.pe-9 {
  padding-right: 2.25rem !important;}

.pe-10 {
  padding-right: 2.5rem !important;}

.pe-11 {
  padding-right: 2.75rem !important;}

.pe-12 {
  padding-right: 3rem !important;}

.pe-13 {
  padding-right: 3.25rem !important;}

.pe-14 {
  padding-right: 3.5rem !important;}

.pe-15 {
  padding-right: 3.75rem !important;}

.pe-16 {
  padding-right: 4rem !important;}

.pe-17 {
  padding-right: 4.25rem !important;}

.pe-18 {
  padding-right: 4.5rem !important;}

.pe-19 {
  padding-right: 4.75rem !important;}

.pe-20 {
  padding-right: 5rem !important;}

.pb-0 {
  padding-bottom: 0 !important;}

.pb-1 {
  padding-bottom: 0.25rem !important;}

.pb-2 {
  padding-bottom: 0.5rem !important;}

.pb-3 {
  padding-bottom: 0.75rem !important;}

.pb-4 {
  padding-bottom: 1rem !important;}

.pb-5 {
  padding-bottom: 1.25rem !important;}

.pb-6 {
  padding-bottom: 1.5rem !important;}

.pb-7 {
  padding-bottom: 1.75rem !important;}

.pb-8 {
  padding-bottom: 2rem !important;}

.pb-9 {
  padding-bottom: 2.25rem !important;}

.pb-10 {
  padding-bottom: 2.5rem !important;}

.pb-11 {
  padding-bottom: 2.75rem !important;}

.pb-12 {
  padding-bottom: 3rem !important;}

.pb-13 {
  padding-bottom: 3.25rem !important;}

.pb-14 {
  padding-bottom: 3.5rem !important;}

.pb-15 {
  padding-bottom: 3.75rem !important;}

.pb-16 {
  padding-bottom: 4rem !important;}

.pb-17 {
  padding-bottom: 4.25rem !important;}

.pb-18 {
  padding-bottom: 4.5rem !important;}

.pb-19 {
  padding-bottom: 4.75rem !important;}

.pb-20 {
  padding-bottom: 5rem !important;}

.ps-0 {
  padding-left: 0 !important;}

.ps-1 {
  padding-left: 0.25rem !important;}

.ps-2 {
  padding-left: 0.5rem !important;}

.ps-3 {
  padding-left: 0.75rem !important;}

.ps-4 {
  padding-left: 1rem !important;}

.ps-5 {
  padding-left: 1.25rem !important;}

.ps-6 {
  padding-left: 1.5rem !important;}

.ps-7 {
  padding-left: 1.75rem !important;}

.ps-8 {
  padding-left: 2rem !important;}

.ps-9 {
  padding-left: 2.25rem !important;}

.ps-10 {
  padding-left: 2.5rem !important;}

.ps-11 {
  padding-left: 2.75rem !important;}

.ps-12 {
  padding-left: 3rem !important;}

.ps-13 {
  padding-left: 3.25rem !important;}

.ps-14 {
  padding-left: 3.5rem !important;}

.ps-15 {
  padding-left: 3.75rem !important;}

.ps-16 {
  padding-left: 4rem !important;}

.ps-17 {
  padding-left: 4.25rem !important;}

.ps-18 {
  padding-left: 4.5rem !important;}

.ps-19 {
  padding-left: 4.75rem !important;}

.ps-20 {
  padding-left: 5rem !important;}

.gap-0 {
  gap: 0 !important;}

.gap-1 {
  gap: 0.25rem !important;}

.gap-2 {
  gap: 0.5rem !important;}

.gap-3 {
  gap: 0.75rem !important;}

.gap-4 {
  gap: 1rem !important;}

.gap-5 {
  gap: 1.25rem !important;}

.gap-6 {
  gap: 1.5rem !important;}

.gap-7 {
  gap: 1.75rem !important;}

.gap-8 {
  gap: 2rem !important;}

.gap-9 {
  gap: 2.25rem !important;}

.gap-10 {
  gap: 2.5rem !important;}

.gap-11 {
  gap: 2.75rem !important;}

.gap-12 {
  gap: 3rem !important;}

.gap-13 {
  gap: 3.25rem !important;}

.gap-14 {
  gap: 3.5rem !important;}

.gap-15 {
  gap: 3.75rem !important;}

.gap-16 {
  gap: 4rem !important;}

.gap-17 {
  gap: 4.25rem !important;}

.gap-18 {
  gap: 4.5rem !important;}

.gap-19 {
  gap: 4.75rem !important;}

.gap-20 {
  gap: 5rem !important;}
.fs-1 {
  font-size: calc(1.3rem + 0.6vw) !important;}

.fs-2 {
  font-size: calc(1.275rem + 0.3vw) !important;}

.fs-3 {
  font-size: calc(1.26rem + 0.12vw) !important;}

.fs-4 {
  font-size: 1.25rem !important;}

.fs-5 {
  font-size: 1.15rem !important;}

.fs-6 {
  font-size: 1.075rem !important;}

.fs-7 {
  font-size: 0.95rem !important;}

.fs-8 {
  font-size: 0.85rem !important;}

.fs-9 {
  font-size: 0.75rem !important;}

.fs-10 {
  font-size: 0.5rem !important;}

.fs-sm {
  font-size: 0.95rem !important;}

.fs-base {
  font-size: 1rem !important;}

.fs-lg {
  font-size: 1.075rem !important;}

.fs-xl {
  font-size: 1.21rem !important;}

.fs-fluid {
  font-size: 100% !important;}

.fs-2x {
  font-size: calc(1.325rem + 0.9vw) !important;}

.fs-2qx {
  font-size: calc(1.35rem + 1.2vw) !important;}

.fs-2hx {
  font-size: calc(1.375rem + 1.5vw) !important;}

.fs-2tx {
  font-size: calc(1.4rem + 1.8vw) !important;}

.fs-3x {
  font-size: calc(1.425rem + 2.1vw) !important;}

.fs-3qx {
  font-size: calc(1.45rem + 2.4vw) !important;}

.fs-3hx {
  font-size: calc(1.475rem + 2.7vw) !important;}

.fs-3tx {
  font-size: calc(1.5rem + 3vw) !important;}

.fs-4x {
  font-size: calc(1.525rem + 3.3vw) !important;}

.fs-4qx {
  font-size: calc(1.55rem + 3.6vw) !important;}

.fs-4hx {
  font-size: calc(1.575rem + 3.9vw) !important;}

.fs-4tx {
  font-size: calc(1.6rem + 4.2vw) !important;}

.fs-5x {
  font-size: calc(1.625rem + 4.5vw) !important;}

.fs-5qx {
  font-size: calc(1.65rem + 4.8vw) !important;}

.fs-5hx {
  font-size: calc(1.675rem + 5.1vw) !important;}

.fs-5tx {
  font-size: calc(1.7rem + 5.4vw) !important;}

.fs-6x {
  font-size: calc(1.725rem + 5.7vw) !important;}

.fs-6qx {
  font-size: calc(1.75rem + 6vw) !important;}

.fs-6hx {
  font-size: calc(1.775rem + 6.3vw) !important;}

.fs-6tx {
  font-size: calc(1.8rem + 6.6vw) !important;}

.fs-7x {
  font-size: calc(1.825rem + 6.9vw) !important;}

.fs-7qx {
  font-size: calc(1.85rem + 7.2vw) !important;}

.fs-7hx {
  font-size: calc(1.875rem + 7.5vw) !important;}

.fs-7tx {
  font-size: calc(1.9rem + 7.8vw) !important;}

.fst-italic {
  font-style: italic !important;}

.fst-normal {
  font-style: normal !important;}

.fw-lighter {
  font-weight: lighter !important;}

.fw-light {
  font-weight: 300 !important;}

.fw-normal {
  font-weight: 400 !important;}

.fw-medium {
  font-weight: 500 !important;}

.fw-semibold {
  font-weight: 500 !important;}

.fw-bold {
  font-weight: 600 !important;}

.fw-bolder {
  font-weight: 700 !important;}

.lh-0 {
  line-height: 0 !important;}

.lh-1 {
  line-height: 1 !important;}

.lh-sm {
  line-height: 1.25 !important;}

.lh-base {
  line-height: 1.5 !important;}

.lh-lg {
  line-height: 1.75 !important;}

.lh-xl {
  line-height: 2 !important;}

.lh-xxl {
  line-height: 2.25 !important;}

.text-start {
  text-align: left !important;}

.text-end {
  text-align: right !important;}

.text-center {
  text-align: center !important;}

.text-decoration-none {
  text-decoration: none !important;}

.text-decoration-underline {
  text-decoration: underline !important;}

.text-decoration-line-through {
  text-decoration: line-through !important;}

.text-lowercase {
  text-transform: lowercase !important;}

.text-uppercase {
  text-transform: uppercase !important;}

.text-capitalize {
  text-transform: capitalize !important;}

.text-wrap {
  white-space: normal !important;}

.text-nowrap {
  white-space: nowrap !important;}
  .min-w-25 {
  min-width: 25% !important;}

.min-w-50 {
  min-width: 50% !important;}

.min-w-75 {
  min-width: 75% !important;}

.min-w-100 {
  min-width: 100% !important;}

.min-w-auto {
  min-width: auto !important;}

.min-w-1px {
  min-width: 1px !important;}

.min-w-2px {
  min-width: 2px !important;}

.min-w-3px {
  min-width: 3px !important;}

.min-w-4px {
  min-width: 4px !important;}

.min-w-5px {
  min-width: 5px !important;}

.min-w-6px {
  min-width: 6px !important;}

.min-w-7px {
  min-width: 7px !important;}

.min-w-8px {
  min-width: 8px !important;}

.min-w-9px {
  min-width: 9px !important;}

.min-w-10px {
  min-width: 10px !important;}

.min-w-15px {
  min-width: 15px !important;}

.min-w-20px {
  min-width: 20px !important;}

.min-w-25px {
  min-width: 25px !important;}

.min-w-30px {
  min-width: 30px !important;}

.min-w-35px {
  min-width: 35px !important;}

.min-w-40px {
  min-width: 40px !important;}

.min-w-45px {
  min-width: 45px !important;}

.min-w-50px {
  min-width: 50px !important;}

.min-w-55px {
  min-width: 55px !important;}

.min-w-60px {
  min-width: 60px !important;}

.min-w-65px {
  min-width: 65px !important;}

.min-w-70px {
  min-width: 70px !important;}

.min-w-75px {
  min-width: 75px !important;}

.min-w-80px {
  min-width: 80px !important;}

.min-w-85px {
  min-width: 85px !important;}

.min-w-90px {
  min-width: 90px !important;}

.min-w-95px {
  min-width: 95px !important;}

.min-w-100px {
  min-width: 100px !important;}

.min-w-125px {
  min-width: 125px !important;}

.min-w-150px {
  min-width: 150px !important;}

.min-w-175px {
  min-width: 175px !important;}

.min-w-200px {
  min-width: 200px !important;}

.min-w-225px {
  min-width: 225px !important;}

.min-w-250px {
  min-width: 250px !important;}

.min-w-275px {
  min-width: 275px !important;}

.min-w-300px {
  min-width: 300px !important;}

.min-w-325px {
  min-width: 325px !important;}

.min-w-350px {
  min-width: 350px !important;}

.min-w-375px {
  min-width: 375px !important;}

.min-w-400px {
  min-width: 400px !important;}

.min-w-425px {
  min-width: 425px !important;}

.min-w-450px {
  min-width: 450px !important;}

.min-w-475px {
  min-width: 475px !important;}

.min-w-500px {
  min-width: 500px !important;}

.min-w-550px {
  min-width: 550px !important;}

.min-w-600px {
  min-width: 600px !important;}

.min-w-650px {
  min-width: 650px !important;}

.min-w-700px {
  min-width: 700px !important;}

.min-w-750px {
  min-width: 750px !important;}

.min-w-800px {
  min-width: 800px !important;}

.min-w-850px {
  min-width: 850px !important;}

.min-w-900px {
  min-width: 900px !important;}

.min-w-950px {
  min-width: 950px !important;}

.min-w-1000px {
  min-width: 1000px !important;}

.min-h-unset {
  min-height: unset !important;}

.min-h-25 {
  min-height: 25% !important;}

.min-h-50 {
  min-height: 50% !important;}

.min-h-75 {
  min-height: 75% !important;}

.min-h-100 {
  min-height: 100% !important;}

.min-h-auto {
  min-height: auto !important;}

.min-h-1px {
  min-height: 1px !important;}

.min-h-2px {
  min-height: 2px !important;}

.min-h-3px {
  min-height: 3px !important;}

.min-h-4px {
  min-height: 4px !important;}

.min-h-5px {
  min-height: 5px !important;}

.min-h-6px {
  min-height: 6px !important;}

.min-h-7px {
  min-height: 7px !important;}

.min-h-8px {
  min-height: 8px !important;}

.min-h-9px {
  min-height: 9px !important;}

.min-h-10px {
  min-height: 10px !important;}

.min-h-15px {
  min-height: 15px !important;}

.min-h-20px {
  min-height: 20px !important;}

.min-h-25px {
  min-height: 25px !important;}

.min-h-30px {
  min-height: 30px !important;}

.min-h-35px {
  min-height: 35px !important;}

.min-h-40px {
  min-height: 40px !important;}

.min-h-45px {
  min-height: 45px !important;}

.min-h-50px {
  min-height: 50px !important;}

.min-h-55px {
  min-height: 55px !important;}

.min-h-60px {
  min-height: 60px !important;}

.min-h-65px {
  min-height: 65px !important;}

.min-h-70px {
  min-height: 70px !important;}

.min-h-75px {
  min-height: 75px !important;}

.min-h-80px {
  min-height: 80px !important;}

.min-h-85px {
  min-height: 85px !important;}

.min-h-90px {
  min-height: 90px !important;}

.min-h-95px {
  min-height: 95px !important;}

.min-h-100px {
  min-height: 100px !important;}

.min-h-125px {
  min-height: 125px !important;}

.min-h-150px {
  min-height: 150px !important;}

.min-h-175px {
  min-height: 175px !important;}

.min-h-200px {
  min-height: 200px !important;}

.min-h-225px {
  min-height: 225px !important;}

.min-h-250px {
  min-height: 250px !important;}

.min-h-275px {
  min-height: 275px !important;}

.min-h-300px {
  min-height: 300px !important;}

.min-h-325px {
  min-height: 325px !important;}

.min-h-350px {
  min-height: 350px !important;}

.min-h-375px {
  min-height: 375px !important;}

.min-h-400px {
  min-height: 400px !important;}

.min-h-425px {
  min-height: 425px !important;}

.min-h-450px {
  min-height: 450px !important;}

.min-h-475px {
  min-height: 475px !important;}

.min-h-500px {
  min-height: 500px !important;}

.min-h-550px {
  min-height: 550px !important;}

.min-h-600px {
  min-height: 600px !important;}

.min-h-650px {
  min-height: 650px !important;}

.min-h-700px {
  min-height: 700px !important;}

.min-h-750px {  min-height: 750px !important;}

.min-h-800px {  min-height: 800px !important;}

.min-h-850px {
  min-height: 850px !important;}

.min-h-900px {  min-height: 900px !important;}

.min-h-950px {  min-height: 950px !important;}

.min-h-1000px {  min-height: 1000px !important;}


`;

export default GlobalStyles;