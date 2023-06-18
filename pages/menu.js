import Menu from "../components/menu/Menu";
import axios from "axios";
import { Context } from "context";
import { handleErrorMessage } from "helpers/helper";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { GetDatas, GetMenu, GetProductsPage } from "repository/AxiosRepository";

const menu = ({ categories, error, products }) => {
  const [productsDatas, setProductsDatas] = useState(products);

  useEffect(() => {
    error && toast.error(error);
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          productsCategories: categories,
          productsDatas: productsDatas,
          setProductsDatas: setProductsDatas,
        }}
      >
        <Menu />
      </Context.Provider>
    </div>
  );
};

export async function getServerSideProps({ resolvedUrl } , context) {
  try {
    console.log("**********", context, "**********");

    const response = await GetDatas("categories");
    const res = await GetProductsPage(`${resolvedUrl}`);
    // "SERVER_ADDRESS": "http://localhost:8000/api/menu"
    // "http://localhost:8000/api/menu"

    return {
      props: {
        categories: response.data.data,
        products: res.data.data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: handleErrorMessage(err),
      },
    };
  }
}

export default menu;
