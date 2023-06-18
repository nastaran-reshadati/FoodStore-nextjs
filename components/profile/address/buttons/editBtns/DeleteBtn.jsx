import axios from "axios";
import React from "react";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";

const DeleteBtn = ({ id }) => {
  const [delLoading, setDelLoading] = useState(false);
  const { mutate } = useSWRConfig();
  console.log("delete");

  const handleDelete = async () => {
    try {
      setDelLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/profile/address/deleteAddress",
        {
          address_id: id,
        }
      );
      toast.success("آدرس با موفقیت حذف شد");
      console.log(res.data);
      mutate("http://localhost:3000/api/profile/address");
    } catch (err) {
      console.log("error", err);
    } finally {
      setDelLoading(false);
    }
  };
  return (
    <div className="mx-3 my-2">
      <button
        onClick={handleDelete}
        type="submit"
        className="btn btn-danger btn m-2 w-100"
      >
        حذف
        {delLoading && <div className="spinner-border" role="status"></div>}
        <AiFillDelete />
      </button>
    </div>
  );
};

export default DeleteBtn;
