import React from "react";
import { BiEdit } from "react-icons/bi";

const EditBtn = ({ loading }) => {
  return (
    <div className="mx-3 my-2">
      <button
        disabled={loading}
        type="submit"
        className="btn btn m-2 w-100"
        style={{ background: "orange" }}
      >
        ویرایش
        {loading && <div className="spinner-border" role="status"></div>}
        <BiEdit />
      </button>
    </div>
  );
};

export default EditBtn;
