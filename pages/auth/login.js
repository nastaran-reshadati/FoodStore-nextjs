import LoginPage from "../../components/loginpage/LoginPage";
import AuthContext from "../../context/AuthContext";
import React, { useContext, useState } from "react";
import CheckOtp from "../../components/loginpage/CheckOtp";

const login = () => {
  const { login } = useContext(AuthContext);
  const [step, setStep] = useState(1);
  return (
    <div
      className="text-center my-2 login_bg"
      style={{ height: "100vh", overflowX: "hidden" }}
    >
      <h3
        className="p-2"
        style={{
          border: "1px solid white",
          margin: "0 -20px",
        }}
      >
        حساب کاربری من
      </h3>
      
      {step === 1 ? <LoginPage step={step} setStep={setStep} /> : <CheckOtp />}
    </div>
  );
};

export default login;
