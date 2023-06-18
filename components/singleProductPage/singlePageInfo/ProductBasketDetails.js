import React from "react";
import { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Context } from "../../../context";


const ProductBasketDetails = () => {
  const { product, addToCartHandler, clickCount, setClickCount } =
    useContext(Context);

  return (
    <div className="d-flex align-items-center">
      <div onClick={addToCartHandler} className="addToCartBtn pointer">
        افزودن به سبد خرید <FiShoppingCart />
      </div>
      <ul className="d-flex justify-content-between IncreseDecreseBtn my-3">
        <li
          onClick={() =>
            product.quantity > clickCount && setClickCount((preve) => preve + 1)
          }
          className="pointer increaseBtn"
        >
          +
        </li>
        <li>{clickCount}</li>
        {/* {clickCount > 0 ? <li>{clickCount}</li> : (clickCount = 1)} */}
        <li
          onClick={() => clickCount > 1 && setClickCount((preve) => preve - 1)}
          className="pointer decreaseBtn"
        >
          -
        </li>
      </ul>
    </div>
  );
};

export default ProductBasketDetails;
