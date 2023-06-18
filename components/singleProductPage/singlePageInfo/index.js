import React from "react";
import { useContext } from "react";
import { Context } from "../../../context";
import { TiTickOutline } from "react-icons/ti";
import ProductInfoImage from "./ProductImageInfo";
import ProductBasketDetails from "./ProductBasketDetails";

const ProductInfo = () => {
  const { product } = useContext(Context);

  return (
    <>
      {product && (
        <section
          className="container p-5"
          style={{ borderBottom: "1px dotted rgb(219, 219, 219)" }}
        >
          <div className="row">
            <div className="col-xs-12 col-s-12 col-md-6 col-lg-6">
              <h3 className="singlepageTitle my-3 py-2"> {product.name}</h3>
              <div className="singleProductPrice d-flex align-items-center">
                {product.is_sale ? (
                  <>
                    <h5 className="singleProductPriceDiscount">
                      {product.sale_price}
                    </h5>
                    <span>
                      {((product.price - product.sale_price) / product.price) *
                        100}{" "}
                      % تخفیف
                    </span>
                  </>
                ) : (
                  <h3 className="singleProductRealPrice mx-2">
                    {product.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    تومان
                  </h3>
                )}
              </div>
              <p>{product.description}</p>
              <ProductBasketDetails />

              <div className="status d-flex ">
                <div>وضعیت :</div>
                <div>
                  موجود
                  <TiTickOutline />
                </div>
              </div>
            </div>
            <ProductInfoImage />
          </div>
        </section>
      )}
    </>
  );
};

export default ProductInfo;
