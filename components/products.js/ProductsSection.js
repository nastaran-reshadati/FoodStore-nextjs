import Image from "next/image";
import React, { useContext, useState } from "react";

import ProductTitle from "./ProductTitle";
import ProductsData from "./ProductsData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Context } from "context";

const ProductsSection = () => {
  const { ProductsDatas } = useContext(Context);
  return (
    <>
      <div className="Product__main-container">
        <ProductTitle />
        <Tabs selectedTabClassName=" product-active">
          <TabList>
            <ul className="ProductsType d-flex justify-content-center align-items-center">
              {ProductsDatas.tabList.map((item, index) => (
                <Tab
                  style={{ cursor: "pointer" }}
                  key={index}
                  className="mx-5 my-4"
                >
                  {item}
                </Tab>
              ))}
            </ul>
          </TabList>
          <div className="container">
            {ProductsDatas.tabPanel.map((items, index) => (
              <TabPanel>
                <ProductsData products={items} index={index} />
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    </>
  );
};

export default ProductsSection;
