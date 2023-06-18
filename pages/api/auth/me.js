import axios from "axios";
import { handleErrorMessage } from "helpers/helper";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log('&&&&&&&&&&&&&&&&&&&&&&',req.cookies.token);
    // if (!req.cookies.token) {
    //   res.status(403).json({ message: "ورود نا موفق یکبار دیگر تلاش کنید" });
    //   return;
    // }

    try {
      const resApi = await axios.post(
        "http://localhost:8000/api/auth/me",
        {},
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
          },
        }
      );


      res.status(200).json({ user: resApi.data.data });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("error");
  }
}
