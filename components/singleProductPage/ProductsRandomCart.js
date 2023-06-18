import React from "react";
import { useContext } from "react";
import { Context } from "../../context";
import ProductsCard from "../products.js/ProductsCart";
import SinglePageCart from "./singlePageInfo/SinglePageCart";

const ProductsRandomCart = () => {
  const { randomProduct } = useContext(Context);

  return (
    <section>
      <div className="container">
        <div className="row">
          <h3 className="my-3"> محصولات دیگر :</h3>
          {randomProduct &&
            randomProduct.map((items, index) => (
              <div className="col-xs-6 col-md-3" key={index}>
                <SinglePageCart product={items} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsRandomCart;
