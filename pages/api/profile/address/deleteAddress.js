import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {

    if (!req.cookies.token) {
        res.status(403).json({ message: 'ورود نا موفق یکبار دیگر تلاش کنید' })
        return
    }

    console.log("body : ", req.body);
    console.log(req.cookies.token);
    try {
      const resApi = await axios.post(
        "http://localhost:8000/api/profile/addresses/delete",
        {
          address_id: req.body.address_id,
        },
        {
          headers: { Authorization: `Bearer ${req.cookies.token}` },
        }
      );

      console.log("$$$$$$$$$$$", resApi.data);
      res.status(200).json(resApi.data.data);
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log("Error");
  }
}
