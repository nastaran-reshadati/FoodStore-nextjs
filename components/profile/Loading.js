import React from "react";
import loading from "../../public/images/Spinner.gif";
import Image from "next/image";
const Loading = () => {
  return (
    <div
      style={{
        margin: "100px auto",
        textAlign: "center",
        width: "200px",
        height: "200px",
      }}
    >
      <Image src={loading}></Image>
    </div>
  );
};

export default Loading;
