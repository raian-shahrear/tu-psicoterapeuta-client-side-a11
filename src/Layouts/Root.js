import React from "react";
import NavBar from "../Pages/Shared/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="lg:w-11/12 mx-auto px-8 md:px-24 lg:px-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
