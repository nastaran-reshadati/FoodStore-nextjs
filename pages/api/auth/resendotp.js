import axios from "axios";
import cookie from "cookie";

export default async function resendotp(req, res) {
  if (req.method === "POST") {
    if (!req.cookies.login_token) {
      res.status(403).json({ message: "ورود ناموفق!" });
      console.log("توکن وجود ندارد");
      return;
    }
    // console.log(req.cookies.login_token);
    try {
      const resApi = await axios.post(
        "http://localhost:8000/api/auth/resend-otp",
        {
          login_token: req.cookies.login_token,
        }
      );

      console.log("********", resApi.data.data.login_token);
      console.log("&&&&&&&&&", resApi);

      res.setHeader("Set-Cookie", [
        cookie.serialize("login_token", resApi.data.data.login_token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        }),
      ]);

      res.status(200).json({ message: "کد ورود دوباره ارسال شد " });
    } catch (err) {
      console.log(err);
    }
  }
}
