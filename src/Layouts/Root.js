import React from "react";
import NavBar from "../Pages/Shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
  return (
    <div>
      <NavBar />
      <div className="lg:w-11/12 mx-auto px-4 md:px-24 lg:px-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
