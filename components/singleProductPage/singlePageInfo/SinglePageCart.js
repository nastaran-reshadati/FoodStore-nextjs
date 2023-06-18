import React from "react";
import { useContext } from "react";
import { Context } from "../../../context";
import { useDispatch, useSelector } from "react-redux";
import ProductImageTitle from "../../products.js/ProductImageTitle";
import ProductsPrice from "../../products.js/ProductsPrice";
import { SlBasket } from "react-icons/sl";
import { addToCart, removeFromCart } from "../../../redux/Cart/actions";
import { toast } from "react-toastify";

const SinglePageCart = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(removeFromCart(product.id));
    dispatch(addToCart(product, 1));
    toast.success("محصول به سبد خرید اضافه شد");
  };

  return (
    <div className="Product__card my-3">
      <div className="Product__card-body">
        <ProductImageTitle product={product} />

        <div className="Product__card-title text-center my-2">
          {product.name}
        </div>
        <div className="text-center my-2">{product.description}</div>
        <div className="Product__card-info d-flex justify-content-between align-items-center">
          <ProductsPrice product={product} />

          <div className="product__card-icon">
            <button>
              <SlBasket onClick={addToCartHandler} />
            </button>
          </div>
        </div>
        {/* <StartRating /> */}
      </div>
    </div>
  );
};

export default SinglePageCart;
