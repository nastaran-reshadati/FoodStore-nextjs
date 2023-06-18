import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const resApi = await axios.get(
        "http://localhost:8000/api/profile/addresses",

        {
          headers: {
            Authorization: `Bearer ${req.cookies.token}`,
          },
        }
      );

      res.status(200).json(resApi.data.data);
    } catch (err) {
      console.log(err);
    }
  }
}
