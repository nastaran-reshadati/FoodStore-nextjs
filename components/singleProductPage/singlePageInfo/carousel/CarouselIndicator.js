import React from "react";
import { useContext } from "react";
import { Context } from "../../../../context";

const CarouselIndicator = () => {
    const { product } = useContext(Context);

  return (
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>

      {product.images.map((image, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={index + 1}
          aria-label="Slide 2"
        ></button>
      ))}
    </div>
  );
};

export default CarouselIndicator;
