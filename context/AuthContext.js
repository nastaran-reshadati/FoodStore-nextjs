import axios from "axios";
import { handleErrorMessage } from "helpers/helper";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    checkedLogedIn();
  }, []);

  const login = async (cellphone) => {
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", {
        cellphone,
      });

      toast.success(res.data.message);
      console.log(res.data.message);
    } catch (error) {
      toast.error(handleErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    console.log("LogOut");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/api/auth/logout");

      toast.success(res.data.message);
      console.log(res.data);
      setUserData(null);

    } catch (error) {
      toast.error(handleErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const checkOtp = async (otp) => {
    console.log(otp);

    try {
      setLoading(true);

      const res = await axios.post("http://localhost:3000/api/auth/checkotp", {
        otp,
      });

      setUserData(res.data.user);
      // console.log(res.data.user);
      router.push("/");

      toast.success("شما با موفقیت وارد شدید!");
    } catch (err) {
      console.log(err);
      toast.error(handleErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };
  // console.log("userData", userData);

  const checkedLogedIn = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/me");

      setUserData(res.data.user);

      // console.log(res.data.user);
    } catch (err) {
      setUserData(null);
    }
  };

  const resendOtp = async () => {
    console.log("helllllllllllo");
    try {
      const res = await axios.post("http://localhost:3000/api/auth/resendotp");
      console.log(res);

      toast.success("کد ورود دوباره  برای شما ارسال شد");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        loading,
        setLoading,
        checkOtp,
        userData,
        checkedLogedIn,
        resendOtp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
