import React from "react";
import OrdersModalInfo from "./OrdersModalInfo";

const OrderModal = ({ order }) => {
  return (
    <tr
      className="modal fade"
      id={`modal-${order.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ position: "absolute", right: "600px", width: "1000px" }}
    >
      <td className="modal-dialog p-0">
        <span className="modal-content ">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">تصویر</th>
                <th scope="col">نام</th>
                <th scope="col">قیمت</th>
                <th scope="col">تعداد</th>
                <th scope="col">قیمت کل</th>
              </tr>
            </thead>
            <tbody>
              {order.order_items.map((item, index) => (
                <OrdersModalInfo order={item} index={index} />
              ))}
            </tbody>
          </table>
        </span>
      </td>
    </tr>
  );
};

export default OrderModal;
