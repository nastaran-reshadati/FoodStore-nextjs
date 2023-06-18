import React from "react";
import DeleteBtn from "./DeleteBtn";
const EditBtns = ({ loading, id }) => {
  return (
    <div className="text-center d-flex addressBtn">
      <DeleteBtn id={id} />
    </div>
  );
};

export default EditBtns;
