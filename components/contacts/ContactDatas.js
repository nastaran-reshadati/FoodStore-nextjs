import React from "react";
import ContactsForm from "./ContactsForm";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./ContactMap"), { ssr: false });

const ContactDatas = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-6 col-lg-6">
          <ContactsForm />
        </div>
        <div className="col-xs-12 col-md-6 col-lg-6">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactDatas;
