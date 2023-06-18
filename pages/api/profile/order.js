import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", req.query.page);

    if (!req.cookies.token) {
      res.status(403).json({ message: "ورود نا موفق یکبار دیگر تلاش کنید" });
      return;
    }

    try {
      console.log(req.cookies.token);
      const resApi = await axios.get(
        `http://localhost:8000/api/profile/orders?page=${req.query.page}`,
        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
          },
        }
      );

      res.status(200).json(resApi.data.data);
    } catch (err) {
      res.status(422).json({ message: "erorr😈" });
    }
  }
}
