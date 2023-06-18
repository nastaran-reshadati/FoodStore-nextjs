import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProductImageTitle = ({ product }) => {
  const route = useRouter();

  return (
    <div
      className="Product__card-image"
      onClick={() => route.push(`/products/${product.slug}`)}
    >
      <Image
        src={product.primary_image}
        width={530}
        height={500}
        placeholder="blur"
        blurDataURL={product.primary_image_blurDataURL}
        layout="responsive"
      />
    </div>
  );
};

export default ProductImageTitle;
