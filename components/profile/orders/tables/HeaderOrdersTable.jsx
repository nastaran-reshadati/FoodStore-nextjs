import React from "react";

const HeaderOrdersTable = ({orders}) => {
  return (
    <thead className="text-center">
      <tr>
        <th scope="col">شماره سفارش</th>
        <th scope="col">آدرس</th>
        <th scope="col">وضعیت</th>
        <th scope="col">وضعیت پرداخت</th>
        <th scope="col">قیمت کل</th>
        <th scope="col">تاریخ</th>
      </tr>
    </thead>
  );
};

export default HeaderOrdersTable;
