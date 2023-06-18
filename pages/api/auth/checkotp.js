import axios from "axios";
import cookie from "cookie";
import { handleErrorMessage } from "helpers/helper";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.cookies.login_token) {
      res.status(403).json({ message: "ورود ناموفق" });
      return;
    }
    try {
      const resApi = await axios.post(
        "http://localhost:8000/api/auth/check-otp",
        {
          otp: req.body.otp,
          login_token: req.cookies.login_token,
        }
      );
      console.log(resApi.data);
      res.setHeader("Set-Cookie", [
        cookie.serialize("login_token", "", {
          httpOnly: true,
          maxAge: new Date(0),
          path: "/",
        }),
        cookie.serialize("token", resApi.data.data.token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        }),
      ]);
      res.status(200).json({ user: resApi.data.data.user });
    } catch (err) {
      res.status(422).json({ message: { err: [handleErrorMessage(err)] } });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
