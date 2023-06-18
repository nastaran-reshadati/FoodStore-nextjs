import axios from "axios";

export default async function handler(req, res) {
  console.log("*********", req.cookies.token);
  if (req.method === "POST") {
    console.log(req.body.data.title);
    const resApi = await axios.post(
      "http://localhost:8000/api/profile/addresses/create",
      {
        title: req.body.data.title,
        cellphone: req.body.data.cellphone,
        postal_code: req.body.data.postal_code,
        province_id: req.body.data.province_id,
        city_id: req.body.data.city_id,
        address: req.body.data.address,
      },
      {
        headers: {
          Authorization: `Bearer ${req.cookies.token}`,
        },
      }
    );
    res.status(200).json(resApi.data)
    // console.log(resApi.data);
  } else {
    console.log("err");
  }
}
