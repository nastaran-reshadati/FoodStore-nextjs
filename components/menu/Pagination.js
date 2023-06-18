import axios from "axios";
import { Context } from "context";
import { handleErrorMessage } from "helpers/helper";
import React, { useContext, useState } from "react";
import { GetDatas } from "repository/AxiosRepository";

const Pagination = () => {
  const { productsDatas, setProductsDatas, setLoading } = useContext(Context);
  const [loading, setloading] = useState(second);

  const handlePagination = async (page) => {
    const query = new URLSearchParams(page).toString();
    try {
      setLoading(true);
      const response = await GetDatas(`menu?${query}`);
      setProductsDatas(response.data.data);
      setLoading(false);
    } catch (error) {
      handleErrorMessage(error);
      setLoading(false);
    }
  };
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {productsDatas.meta.links.slice(1, 3).map((item, index) => (
          <li
            key={index}
            className={
              item.active ? "active-page mx-1" : "pagination-item mx-1"
            }
          >
            <button onClick={() => handlePagination({ page: item.label })}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
