import React from "react";
import CarouselInner from "./carousel/CarouselInner";
import CarouselIndicator from "./carousel/CarouselIndicator";
import CarouselControlPreve from "./carousel/CarouselControlPreve";
import CarouselControlNext from "./carousel/CarouselControlNext";

const ProductInfoImage = () => {
  return (
    <div className="col-sm-12 col-lg-6">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <CarouselIndicator />
        <CarouselInner />
        <CarouselControlPreve />
        <CarouselControlNext />
      </div>
    </div>
  );
};

export default ProductInfoImage;
