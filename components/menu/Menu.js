import React, { useContext, useState } from "react";

import FilteredProducts from "./FilteredProducts";
import { Context } from "context";

import ProductsCart from "../products.js/ProductsCart";
import { handleErrorMessage } from "helpers/helper";
import { GetDatas } from "repository/AxiosRepository";
import gif from "../../public/images/Spinner.gif";
import Image from "next/image";
import { useRouter } from "next/router";

const Menu = () => {
  const { productsDatas, setProductsDatas } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState("");

  const route = useRouter();

  const handlePagination = async (value) => {
    console.log(value);
    console.log(route);

    if (!value.hasOwnProperty("page")) {
      console.log("yesss");
      delete route.query.page;
    }
    const routeQuery = { ...route.query, ...value };

    const query = new URLSearchParams(routeQuery).toString();
    try {
      setLoading(true);
      const response = await GetDatas(`menu?${query}`);
      setProductsDatas(response.data.data);
      route.push(`/menu?${query}`, undefined, { shallow: true });

      setLoading(false);
    } catch (error) {
      handleErrorMessage(error);
      setLoading(false);
    }
  };

  return (
    <div className="container my-5 py-3">
      <div className="row">
        <div className=" col-xs-12 col-s-12 com-md-3 col-lg-3 col-xl-3 bg-filter">
          <FilteredProducts
            search={search}
            setSearch={setSearch}
            handlePagination={handlePagination}
            categories={categories}
            setCategories={setCategories}
          />
        </div>

        {productsDatas && productsDatas.products.length > 0 ? (
          <>
            {" "}
            {loading ? (
              <div className="col-xs-6 col-s-6 com-md-10 col-lg-9 col-xl-9 gifLoading">
                <Image src={gif} />
              </div>
            ) : (
              <div className="col-xs-6 col-s-6 com-md-10 col-lg-9 col-xl-9 productsMenuWrapper">
                <div className="row">
                  {productsDatas &&
                    productsDatas.products.map((item) => (
                      <div className="col-xs-12 col-s-12 col-md-4 col-lg-4 col-xl-4">
                        <ProductsCart product={item} />
                      </div>
                    ))}

                  <nav className="d-flex justify-content-center mt-5">
                    <ul className="pagination">
                      {productsDatas.meta.links
                        .slice(1, -1)
                        .map((item, index) => (
                          <li
                            key={index}
                            className={
                              item.active
                                ? "active-page mx-1"
                                : "pagination-item mx-1"
                            }
                          >
                            <button
                              onClick={() =>
                                handlePagination({ page: item.label })
                              }
                            >
                              {item.label}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="col-xs-6 col-s-6 com-md-10 col-lg-9 col-xl-9 productsMenuWrapper">
            <div className="d-flex align-items-center justify-content-center h-100">
              <h3
                className="text-center"
                style={{ color: "red", marginTop: "60px" }}
              >
                محصولی یافت نشد!
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
