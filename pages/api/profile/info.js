import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // res.status(200).json({ message: "OKKKKKKK" });

    if (!req.cookies.token) {
      res.status(403).json({ message: "ورود ناموفق!" });
      return;
    }

    try {
      const resApi = await axios.get("http://localhost:8000/api/profile/info", {
        headers: { Authorization: `Bearer ${req.cookies.token}` },
      });

      res.status(200).json(resApi.data.data);
    } catch (err) {
      res.status(422).json({ message: "error in catch" });
    }
  } else {
    res.status(405).json({ message: "not found" });
  }
}
