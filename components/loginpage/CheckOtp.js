import AuthContext from "../../context/AuthContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
// import { setInterval } from "timers/promises";

const CheckOtp = () => {
  const { checkOtp, loading, resendOtp } = useContext(AuthContext);
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(null);
  const [loadingResend, setloadingResend] = useState(false);

  useEffect(() => {
    let time = "0:10";
    let interval = setInterval(() => {
      let countdown = time.split(":");
      console.log(countdown);

      let minutes = parseInt(countdown[0]);
      let seconds = parseInt(countdown[1]);

      console.log(seconds);
      --seconds;

      // minutes = seconds < 0 ? --minutes : minutes;
      if (seconds == "00") {
        console.log("zero");
        clearInterval(interval);
        setShow(true);
      }
      if (minutes < 0) {
        clearInterval(interval);
        setShow(true);
      }
      seconds = seconds < 0 ? 59 : seconds;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      time = minutes + ":" + seconds;
      setTimer(time);
    }, 1000);

    return () => {
      clearInterval(interval);
      setTimer("");
    };
  }, []);

  const handleCheckOtp = async () => {
    if (otp === "") {
      toast.error(" کد تائید نمی تواند خالی باشد");
      return;
    }
    var regex = /^[0-9]{6}$/;
    let result = regex.test(otp);

    if (!result) {
      toast.error("لطفا  کد ورود  را به درستی وارد کنید!");
      return;
    }
    // toast.success("کداعتبارسنجی ارسال شد");
    await checkOtp(otp);
  };

  const changeOtpHandler = (e) => {
    setOtp(e.target.value);
  };

  const resendOtpHandler = async (otp) => {
    setloadingResend(true);
    console.log(otp);
    await resendOtp();
    setloadingResend(false);
  };
  return (
    <section className="loggin__wrapper">
      <div className="loggin__content loggin__content-otp">
        <h4 className="mb-4"> کد تایید را وارد کنید</h4>
        <div>
          <input
            type="text"
            className="auth-input"
            value={otp}
            onChange={changeOtpHandler}
          />
          <div className="d-flex">
            <button
              onClick={handleCheckOtp}
              className="btn-auth btn-auth-login d-block text-center mx-auto my-3"
            >
              {loading && (
                <div className="spinner-border spinner-border-sm ms-2"></div>
              )}
              تایید
            </button>
            {show ? (
              <button
                onClick={resendOtpHandler}
                disabled={loadingResend}
                className="btn-auth btn-auth-login d-block text-center mx-auto my-3"
              >
                {loadingResend ? (
                  <div className="spinner-border spinner-border-sm ms-2" />
                ) : (
                  "ارسال دوباره"
                )}
              </button>
            ) : (
              <div id="countdown" className=" text-center">
                {timer}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOtp;
