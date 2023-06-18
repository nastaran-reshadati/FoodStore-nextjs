import Link from "next/link";
import { useContext } from "react";
import React from "react";
import AuthContext from "../../../context/AuthContext";

const RightSectionLayout = () => {
  const { logOut } = useContext(AuthContext);
  const clicked = () => {
    console.log("clickkkkk");
  };
  return (
    <ul className="list-group text-center my-4">
      <li className="list-item py-3 pointer">
        <Link href="/user/profile">اطلاعات کاربر</Link>
      </li>
      <li className="list-item py-3 pointer">
        <Link href="/user/address">آدرس ها</Link>
      </li>

      <li className="list-item py-3 pointer">
        <Link href="/user/orders">سفارشات</Link>
      </li>

      <li className="list-item py-3 pointer">
        <Link href="/user/transactions">تراکنش ها</Link>
      </li>

      <li className="list-item py-3 pointer" onClick={logOut}>
        <Link href="/">خروج</Link>
      </li>
    </ul>
  );
};

export default RightSectionLayout;
