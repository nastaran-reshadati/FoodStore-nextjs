import axios from "axios";
import { handleErrorMessage } from "helpers/helper";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { PostContactUs } from "repository/AxiosRepository";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };
  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changeSubjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || subject === "" || text === "") {
      console.log("err");
      return toast.error("وارد کردن اطلاعات  ضروری است! ");
    }

    try {
      setLoading(true);
      await PostContactUs({
        name,
        email,
        subject,
        text,
      });
      setLoading(false);

      toast.success("پیام شما با موفقیت ارسال شد🥳");
    } catch (err) {
      toast.error(handleErrorMessage());
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="نام و نام خانوادگی"
          className="form-control my-2"
          value={name}
          onChange={changeNameHandler}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="ایمیل"
          className="form-control my-2"
          value={email}
          onChange={changeEmailHandler}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="موضوع پیام "
          className="form-control my-2"
          value={subject}
          onChange={changeSubjectHandler}
        />
      </div>
      <div>
        <textarea
          rows="12"
          style={{ height: "120px" }}
          className="form-control my-2"
          placeholder="متن پیام"
          value={text}
          onChange={changeTextHandler}
        ></textarea>
      </div>
      <div className="contact_btn-wrapper d-flex justify-content-end">
        {/* {loading ? (
          <div className="spinner-border spinner-border-sm ms-2 mt-1"></div>
        ) : null} */}
        {loading && (
          <div className="spinner-border spinner-border-sm mx-2 my-3"></div>
        )}
        <button type="submit" className="contact_btn" disabled={loading}>
          ارسال پیام
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
