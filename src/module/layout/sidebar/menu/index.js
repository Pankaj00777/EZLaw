import React from 'react';
import { AdminMenu } from './admin';
import { UserMenu } from './user';
import { NavLink, Link } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';
export const FindMenu = (loginType, toggleSidebar) => {

  console.log(toggleSidebar, 'toggleSidebar')
  
  const menu = loginType === 'admin' ? AdminMenu : loginType === 'user' ? UserMenu : [];

  return menu.map((item) => ({
    ...item,
    icon: (
      <div className="">
        <Icon icon={item.icon} width={25}/>
      </div>
    ),
    label: item.children ? (
      <span className='menu-label'>{item.label}</span>
    ) : (
      <NavLink className="" to={item.key}>{item.label}</NavLink>
    ),
    // label: <NavLink className="bdr"  to={item.key}>{item.label}</NavLink>,
    children: item.children?.map((child) => ({
      ...child,
      icon: <div className="dot-inner"></div>,
      label: <Link className="" to={child.key}>{child.label}</Link>,
    })),
  }));
};

export default FindMenu;
