import { useRouter } from "next/router";
import React from "react";
import RightSectionLayout from "./orders/RightSectionLayout";
const Layout = ({ children }) => {
  return (
    <div className="container my-1">
      <div className="row">
        <div
          className="col-xs-12 col-s-12 col-md-3 col-lg-3 col-xl-3 p-3 my-5 pointer"
          style={{ background: "#fff", height: "540px", borderRadius: "25px" }}
        >
          <RightSectionLayout />
        </div>
        <div className="col-xs-12 col-s-12 col-md-9 col-lg-9 col-xl-9 p-3 pointer">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
