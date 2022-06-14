import React from "react";
import { Outlet } from "react-router-dom";
import { NavMenu } from "../../components/NavMenu/Loadable";

export const ProtectedRoute = () => {
  return (
    <>
      <Outlet />
      <NavMenu />
    </>
  );
};
