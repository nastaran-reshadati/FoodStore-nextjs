import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const ProductTypes = ({ item, index }) => {
  return (
    <ul className="ProductsType d-flex justify-content-center align-items-center">
      {datas.tabList.map((item, index) => (
        <Tab key={index} className="mx-5 my-4">
          {item}
        </Tab>
      ))}
    </ul>
  );
};

export default ProductTypes;
