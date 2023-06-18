import React from "react";
import CaruselInner from "./CaruselInner";

const SliderContent = () => {
  return (
    <div
      id="customCarousel1"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <CaruselInner />
      <div className="container">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#customCarousel1"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
          <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
        </ol>
      </div>
    </div>
  );
};

export default SliderContent;
