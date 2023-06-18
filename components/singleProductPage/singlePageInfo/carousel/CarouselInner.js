import React from "react";
import { useContext } from "react";
import { Context } from "../../../../context";
import Image from "next/image";

const CarouselInner = () => {
  const { product } = useContext(Context);
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image
          src={product.primary_image}
          className="d-block w-100"
          placeholder="blur"
          blurDataURL={product.primary_image_blurDataURL}
          priority={true}
          width={464}
          height={309}
          layout="responsive"
          alt="primary-image"
        />
      </div>

      {product.images.map((image, index) => (
        <div key={index} className="carousel-item">
          <Image
            src={image.image}
            className="d-block w-100"
            width={464}
            height={309}
            layout="responsive"
            alt="image"
          />
        </div>
      ))}
    </div>
  );
};

export default CarouselInner;
