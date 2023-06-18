import AuthContext from "../../context/AuthContext";
import React, { useContext, useRef, useState } from "react";
import { toast } from "react-toastify";

const LoginPage = ({ setStep }) => {
  const { login, loading } = useContext(AuthContext);
  const [cellphone, setCellphone] = useState("");

  const handleLogin = async () => {
    if (cellphone === "") {
      toast.error("شماره موبایل نمی تواند خالی باشد");
      return;
    }
    var regex = new RegExp("^(\\+98|0)?9\\d{9}$");
    let result = regex.test(cellphone);

    if (!result) {
      toast.error("لطفا شماره موبایل خود را به درستی وارد کنید!");
      return;
    }
    await login(cellphone);
    setStep(2);
  };

  const changePhoneHandler = (e) => {
    setCellphone(e.target.value);
  };
  return (
    <section className="loggin__wrapper">
      <div className="loggin__content">
        <h4 className="mb-4">شماره موبایل</h4>
        <div>
          <input
            type="number"
            className="auth-input"
            value={cellphone}
            onChange={changePhoneHandler}
          />
          <button
            onClick={handleLogin}
            className="btn-auth btn-auth-login d-block text-center mx-auto my-3"
          >
            {loading && (
              <div className="spinner-border spinner-border-sm ms-2"></div>
            )}
            ورود
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
