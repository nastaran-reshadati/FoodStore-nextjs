import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const resApi = await axios.post(
      "http://localhost:8000/api/profile/addresses/edit",
      {
        province_id: req.body.datas.province_id,
        title: req.body.datas.title,
        cellphone: req.body.datas.cellphone,
        postal_code: req.body.datas.postal_code,
        city_id: req.body.datas.city_id,
        address: req.body.datas.address,
        address_id: req.body.datas.address_id,
      },
      {
        headers: { Authorization: `Bearer ${req.cookies.token}` },
      }
    );
    res.status(200).json(resApi.data.data);
  } else {
    console.log("ERROR");
  }
}
