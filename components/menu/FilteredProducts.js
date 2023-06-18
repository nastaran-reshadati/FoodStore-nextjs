import React, { useContext, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import style from "./menu.module.css";
import ProductsCategoriesList from "./ProductsCategoriesList";
import { Context } from "context";
import { useRouter } from "next/router";

const FilteredProducts = ({
  search,
  setSearch,
  handlePagination,
  categories,
  setCategories,
}) => {
  const changeHandler = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
    console.log(search);
  };

  const route = useRouter();

  const { productsCategories } = useContext(Context);

  return (
    <>
      <div className="menu__search">
        <h4 className="form-lable d-block my-4">جستجو</h4>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control p-2"
            placeholder="نام محصول"
            aria-label="نام محصول"
            value={search}
            onChange={changeHandler}
          />
          <button
            style={{ backgroundColor: "orangered", color: "#ffff" }}
            className="pointer input-group-text menu__icon-search"
            onClick={search !== "" ? () => handlePagination({ search }) : null}
            // onClick={() => search !== "" &&  handlePagination({ search })}
          >
            <FaSearch />
          </button>
        </div>
        <div>
          <div>
            <h4
              className="py-2 mt-5"
              style={{ borderBottom: " 1px dotted rgb(112, 110, 110)" }}
            >
              {" "}
              دسته بندی
            </h4>{" "}
            <ul>
              {productsCategories.map((category, index) => (
                <li
                  // className="list-menu pointer"
                  key={index}
                  onClick={() => handlePagination({ category: category.id })}
                  className={
                    route.query.hasOwnProperty("category") &&
                    route.query.category == category.id
                      ? "list-menu-active my-2 pointer"
                      : "list-menu pointer my-2"
                  }
                >
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="menu__sort mt-4">
          <h4 className={style.menu__sort}>مرتب سازی</h4>
          <ul>
            <li
              className={
                route.query.hasOwnProperty("sortBy") &&
                route.query.sortBy === "max"
                  ? "list-menu-active my-2 pointer"
                  : "list-menu pointer my-2"
              }
              onClick={() => handlePagination({ sortBy: "max" })}
            >
              بیشترین قیمت
            </li>
            <li
              className={
                route.query.hasOwnProperty("sortBy") &&
                route.query.sortBy === "min"
                  ? "list-menu-active my-2 pointer"
                  : "list-menu pointer my-2"
              }
              onClick={() => handlePagination({ sortBy: "min" })}
            >
              کمترین قیمت
            </li>
            <li
              className={
                route.query.hasOwnProperty("bestseller") &&
                route.query.sortBy === "min"
                  ? "list-menu-active my-2 pointer"
                  : "list-menu pointer my-2"
              }
              onClick={() => handlePagination({ sortBy: "bestseller" })}
            >
              پرفروش ترین
            </li>
            <li
              className={
                route.query.hasOwnProperty("sale") &&
                route.query.sortBy === "min"
                  ? "list-menu-active my-2 pointer"
                  : "list-menu pointer my-2"
              }
              onClick={() => handlePagination({ sortBy: "sale" })}
            >
              باتخفیف
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FilteredProducts;
