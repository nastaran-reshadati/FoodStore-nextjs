import axios from "axios";
import cookie from "cookie";
import { handleErrorMessage } from "helpers/helper";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.cookies.token) {
      res.status(403).json({ message: "ورود نا موفق یکبار دیگر تلاش کنید" });
      return;
    }

    try {
      const resApi = await axios.post(
        "http://localhost:8000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
          },
        }
      );

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
          httpOnly: true,
          path: "/",
        })
      );

      console.log(resApi.data);
      res.status(200).json({ message: "🚶‍♀️شما خارج شدید" });
    } catch (err) {
      res.status(422).json({ message: { err: [handleErrorMessage(err)] } });
    }
  } else {
    //     res.setHeader("Allow", ["POST"]);
    //     res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
