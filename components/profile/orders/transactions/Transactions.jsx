import React from "react";
import OrderPagination from "../OrderPagination";
const Transactions = ({ data }) => {
  console.log(data.transactions);
  return (
    <>
      <table className="table text-light mt-5">
        <thead>
          <tr className="text-center">
            <th scope="col">شماره سفارش</th>
            <th scope="col">مبلغ</th>
            <th scope="col">وضعیت</th>
            <th scope="col">شماره پیگیری</th>
            <th scope="col">تاریخ</th>
          </tr>
        </thead>
        <tbody>
          {data.transactions.map((item, index) => (
            <tr className="text-center" key={index}>
              <th scope="row">{item.id}</th>
              <td>
                {item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                تومان
              </td>
              <td
                className={
                  item.status == "موفق" ? "text-success" : "text-danger"
                }
              >
                {item.status}
              </td>
              <td>{item.trans_id ? item.trans_id : "-"}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <OrderPagination />
    </>
  );
};

export default Transactions;
