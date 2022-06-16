import React from "react";
import "./style.scss";

import homeIcon from "../../assets/svg-icons/home-icon.svg";
import userIcon from "../../assets/svg-icons/user-icon.svg";
import {useNavigate} from 'react-router-dom'
import { routes } from "../../utils/urlRoutes";

export const NavMenu = () => {
  const navigate = useNavigate()
  return (
    <div className="footer-menu">
      <div onClick={() => navigate(routes.toHostels)} className="menu-item">
        <img src={homeIcon} alt="" className="icon-20" />
        <label htmlFor="menu-label">my hostels</label>
      </div>
      <div onClick={() => navigate(routes.toTenantPage)} className="menu-item">
        <img src={userIcon} alt="" className="icon-20" />
        <label htmlFor="menu-label">tenants</label>
      </div>
      <div onClick={() => navigate(routes.toRequestPage)} className="menu-item">
        <img src="" alt="" className="icon-20" />
        <label htmlFor="menu-label">requests</label>
      </div>
    </div>
  );
};
