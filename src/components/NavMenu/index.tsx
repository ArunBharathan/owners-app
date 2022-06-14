import React from "react";
import "./style.scss";

import homeIcon from "../../assets/svg-icons/home-icon.svg";
import userIcon from "../../assets/svg-icons/user-icon.svg";

export const NavMenu = () => {
  return (
    <div className="footer-menu">
      <div className="menu-item">
        <img src={homeIcon} alt="" className="icon-20" />
        <label htmlFor="menu-label">my hostels</label>
      </div>
      <div className="menu-item">
        <img src={userIcon} alt="" className="icon-20" />
        <label htmlFor="menu-label">tenants</label>
      </div>
      <div className="menu-item">
        <img src="" alt="" className="icon-20" />
        <label htmlFor="menu-label">requests</label>
      </div>
    </div>
  );
};
