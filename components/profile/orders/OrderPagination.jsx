import React from "react";
import { useContext } from "react";
import { Context } from "../../../context";

const OrderPagination = () => {
  const { datas, pageNumber, setpageNumber } = useContext(Context);
  console.log(pageNumber);
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {datas.meta.links.slice(1, -1).map((item, index) => (
          <li
            key={index}
            className={
              item.active ? "active-page mx-1" : "pagination-item mx-1"
            }
          >
            <button onClick={() => setpageNumber(+item.label)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default OrderPagination;
