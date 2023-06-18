import React from "react";
import BodyOrderTable from "./BodyOrdersTable";
import HeaderOrdersTable from "./HeaderOrdersTable";
import OrderPagination from "../OrderPagination";
import OrderModal from "../modal/OrderModal";
import { useContext } from "react";
import { Context } from "../../../../context";

const MainOrdersTable = () => {
  const { datas, pageNumber, setpageNumber } = useContext(Context);

  return (
    <>
      <table className="table table-dark p-5">
        <HeaderOrdersTable />
        <tbody>
          {datas.orders.map((item, index) => (
            <>
              <BodyOrderTable order={item} index={index} />
              <OrderModal order={item} />
            </>
          ))}
        </tbody>
      </table>
      <OrderPagination />
    </>
  );
};

export default MainOrdersTable;
