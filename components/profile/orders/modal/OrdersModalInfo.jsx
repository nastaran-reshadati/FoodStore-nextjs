import React from "react";

const OrdersModalInfo = ({ order, index }) => {
  return (
    <tr index={index}>
      <td>
        <img
          style={{ width: "70px", height: "65px" }}
          src={order.product_primary_image}
          alt="تصویر محصول"
        />
      </td>
      <td className="lineHeight-50">{order.product_name}</td>
      <td className="lineHeight-50">
        {order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
      </td>
      <td className="lineHeight-50">{order.quantity}</td>
      <td className="lineHeight-50">
        {order.subtotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
      </td>
    </tr>
  );
};

export default OrdersModalInfo;
