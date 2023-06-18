import React, { useState } from "react";
import useSWR from "swr";
import Layout from "../../components/profile/Layout";
import Loading from "../../components/profile/Loading";
import Transactions from "../../components/profile/orders/transactions/Transactions";
import { Context } from "../../context";
const transactions = () => {
  const [pageNumber, setpageNumber] = useState(0);

  const { data, error } = useSWR(
    `http://localhost:3000/api/profile/transaction?page=${pageNumber}`
  );

  if (data) {
    console.log(data);
    data.transactions.map((item) => console.log(item));
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
        {data ? <Transactions data={data} /> : <Loading />}
      </Context.Provider>
    </Layout>
  );
};

export default transactions;
