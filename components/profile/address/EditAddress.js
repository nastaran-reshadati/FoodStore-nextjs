import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useSWRConfig } from "swr";
import DeleteBtn from "./buttons/editBtns/DeleteBtn";
import EditBtn from "./buttons/editBtns/EditBtn";

const EditAddress = ({ address, provinces, cities }) => {
  const { mutate } = useSWRConfig();

  const [loading, setLoading] = useState(false);
  defaultValues: {
    province_id: address.province_id;
    city_id: address.city_id;
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      province_id: address.province_id,
    },
  });

  const onSubmit = async (data) => {
    console.log("submitHandler");
    try {
      setLoading(true);
      let datas = Object.assign(data, { address_id: address.id });

      const res = await axios.post(
        "http://localhost:3000/api/profile/address/editAddress",
        { datas }
      );
      console.log(datas.address_id);
      toast.success("آدرس شما با موفقیت ویرایش  شد");
      console.log(res.data);
      mutate("http://localhost:3000/api/profile/address");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-5 p-3  card-address">
      <h3>ویرایش آدرس </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
       
        style={{ backgroundColor: "transparent" }}
      >
        <div className="row g-4">
          <div className="col col-md-6">
            <label className="form-label orangeColor">عنوان</label>
            <input
              type="text"
              className="form-control"
              defaultValue={address.title}
              {...register("title", {
                required: "لطفا عنوانی  را مشخص کنید",
              })}
            />
            <span style={{ color: "#DC3545" }}>{errors.title?.message}</span>
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">شماره تماس</label>
            <input
              type="text"
              className="form-control"
              defaultValue={address.cellphone}
              {...register("cellphone", {
                required: "لطفا شماره تماس را وارد کنید",
              })}
            />

            <span style={{ color: "#DC3545" }}>
              {errors.cellphone?.message}
            </span>
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">کد پستی</label>
            <input
              type="text"
              className="form-control"
              defaultValue={address.postal_code}
              {...register("postal_code", {
                required: "لطفا کدپستی خود را وارد کنید",
              })}
            />
            <span style={{ color: "#DC3545" }}>
              {errors.postal_code?.message}
            </span>
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">استان</label>
            <select
              className="form-select"
              aria-label={address.province_id}
              defaultValue={address.province_id}
              {...register("province_id", {
                required: "لطفا استان خود را انتخاب کنید",
              })}
            >
              <option value="">انتخاب استان</option>
              {provinces.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <span style={{ color: "#DC3545" }}>
              {errors.province_id?.message}
            </span>
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">شهر</label>
            <select
              className="form-select"
              aria-label={address.city_id}
              {...register("city_id", {
                required: "لطفا شهر خود را وارد کنید",
              })}
              defaultValue={address.city_id}
            >
              <option value="">انتخاب شهر</option>
              {cities
                .filter((item) => item.province_id == watch("province_id"))
                .map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
            <span style={{ color: "#DC3545" }}>{errors.cities?.message}</span>
          </div>
          <div className="col col-md-12 orangeColor">
            <label className="form-label">آدرس</label>
            <textarea
              type="text"
              rows="5"
              className="form-control"
              {...register("address", {
                required: "لطفا آدرس موردنظر خود را وارد کنید",
              })}
              defaultValue={address.address}
            ></textarea>
          </div>
        </div>
          <EditBtn loading={loading} />
      </form>
        <DeleteBtn id={address.id} />
    </div>
  );
};

export default EditAddress;
