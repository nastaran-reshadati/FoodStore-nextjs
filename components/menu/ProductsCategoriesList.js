import { Context } from "context";
import React, { useContext } from "react";
import style from "./menu.module.css";

const ProductsCategoriesList = (categories, setCategories) => {
  const { productsCategories } = useContext(Context);

  const clickHandler = (val) => {
    console.log(val);
  };
  return (
    <div>
      <div>
        <h4
          className="py-2"
          style={{ borderBottom: " 1px dotted rgb(112, 110, 110)" }}
        >
          {" "}
          دسته بندی
        </h4>{" "}
        {productsCategories.map((category, index) => (
          <div className="form-check my-2" key={index}>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value={categories}
              onClick={() => handlePagination({ category: category.name })}
            />
            <label
              id="elem"
              className="form-check-label cursor-pointer"
              htmlFor="flexRadioDefault1"
            >
              {category.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCategoriesList;
