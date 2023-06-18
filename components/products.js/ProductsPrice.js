import React from "react";

const ProductsPrice = ({ product }) => {
  return (
    <div className="product__card-price">
      <span style={{ fontSize: "20px" }}>
        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} تومان
      </span>
    </div>
  );
};

export default ProductsPrice;
