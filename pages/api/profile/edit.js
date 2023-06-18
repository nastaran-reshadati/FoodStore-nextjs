import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (!req.cookies.token) {
      res.status(403).json({ message: "ورود نا موفق یکبار دیگر تلاش کنید" });
      return;
    }
    
    try {
      const resApi = await axios.post(
        "http://localhost:8000/api/profile/info/edit",
        {
          email: req.body.email,
          name: req.body.name,
        },
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
