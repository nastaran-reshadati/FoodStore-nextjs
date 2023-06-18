import React, { useState } from "react";
import Layout from "../../components/profile/Layout";
import useSWR from "swr";
import Loading from "../../components/profile/Loading";

import MainOrdersTable from "../../components/profile/orders/tables";
import { Context } from "../../context";

const orders = () => {
  const [pageNumber, setpageNumber] = useState(0);
  const { data, error } = useSWR(
    `http://localhost:3000/api/profile/order?page=${pageNumber}`
  );
  if (data) {
    console.log( pageNumber);
  }

  return (
    <Layout>
      <Context.Provider
        value={{
          pageNumber: pageNumber,
          setpageNumber: setpageNumber,
          datas: data,
        }}
      >
        {data ? <MainOrdersTable /> : <Loading />}
      </Context.Provider>
    </Layout>
  );
};

export default orders;
