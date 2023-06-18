import React from 'react'
import { MdCreateNewFolder } from "react-icons/md";

const CreateBtns = ({loading}) => {
  return (
    <div className="text-center w-100 addressBtn" style={{background:'orange'}}>
    <button
      disabled={loading}
      type="submit"
      className="btn btn mt-2 w-100"
    >
      ایجاد
      {loading && <div className="spinner-border" role="status"></div>}
      <MdCreateNewFolder className="createBtn"/>
    </button>
  </div>
  )
}

export default CreateBtns