import React from "react";
import OrderModal from "../modal/OrderModal";

const BodyOrdersTable = ({ order, index }) => {
  return (
       <tr className="text-center" key={index}>
        <th>{order.id}</th>
        <td>{order.address_title}</td>
        <td>{order.status} </td>
        <td
          className={
            order.payment_status == "موفق" ? "text-success" : "text-danger"
          }
        >
          {order.payment_status}
        </td>
        <td>
          {order.paying_amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
          تومان
        </td>

        <td>{order.created_at}</td>
        <td>
          <button
            type="button"
            className="btn order_btn "
            data-bs-toggle="modal"
            data-bs-target={`#modal-${order.id}`}
          >
            محصولات
          </button>
        </td>
      </tr>
     
   
  );
};

export default BodyOrdersTable;
