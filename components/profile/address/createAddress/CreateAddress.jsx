import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { mutate } from "swr";
import { useSWRConfig } from "swr";
import CreateBtns from "../buttons/creatBtns/CreateBtns";
const CreateAddress = ({ provinces, cities }) => {
  const { mutate } = useSWRConfig();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const res = await axios.post(
        "http://localhost:3000/api/profile/address/createAddress",
        { data }
      );
      console.log(res.data);
      toast.success("آدرس جدید با موفقیت ثبت شد🎉");
      mutate("http://localhost:3000/api/profile/address");
    } catch {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  // console.log(watch("province_id"));

  return (
    <>
      <h3 className="text-center">ایجاد آدرس جدید</h3>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="card card-body createAddreeContainer"
      >
        <div className="row g-4">
          <div className="col col-md-6">
            <label className="form-label orangeColor">عنوان</label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="form-control"
            />
            {errors.title && (
              <span className="text-danger">
                فیلد عنوان نمی تواند خالی باشد{" "}
              </span>
            )}
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">شماره تماس</label>
            <input
              {...register("cellphone", {
                required: "فیلد شماره تماس نمی تواند خالی باشد",
                pattern: {
                  value: /^(\+98|0)?9\d{9}$/i,
                  message: "لطفا شماره تماس خود را با دقت وارد کنید",
                },
              })}
              type="text"
              className="form-control"
            />
            <span style={{ color: "#DC3545" }}>
              {errors.cellphone?.message}
            </span>
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">کد پستی</label>
            <input
              {...register("postal_code", {
                required: "فیلد  کدپستی  نمی تواند خالی باشد",
                pattern: {
                  value: /^\d{5}[ -]?\d{5}$/i,
                  message: "لطفا  کدپستی خود را با دقت وارد کنید",
                },
              })}
              type="text"
              className="form-control"
            />

            <span style={{ color: "#DC3545" }}>
              {errors.postalCode?.message}
            </span>
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">استان</label>
            <select
              {...register("province_id", {
                required: "لطفا استان خود را انتخاب کنید",
              })}
              className="form-select"
              aria-label="Default select example"
              defaultValue=""
            >
              <option value="">انتخاب</option>
              {provinces.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <span style={{ color: "#DC3545" }}>{errors.province?.message}</span>
          </div>
          <div className="col col-md-6 orangeColor">
            <label className="form-label">شهر</label>
            <select
              {...register("city_id", {
                required: "لطفا شهر خود را انتخاب نمایید",
              })}
              className="form-select"
              aria-label="Default select example"
              defaultValue=""
            >
              <option value="">انتخاب</option>

              {cities
                .filter((item) => item.province_id == watch("province_id"))
                // watch input value by passing the name of it
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
            <span style={{ color: "#DC3545" }}>{errors.city?.message}</span>
          </div>
          <div className="col col-md-12 orangeColor">
            <label className="form-label">آدرس</label>
            <textarea
              {...register("address", { required: true })}
              type="text"
              rows="5"
              className="form-control"
            ></textarea>
            <span style={{ color: "#DC3545" }}>
              {errors.address && <span>حتما باید آدرس خود را وارد کنید</span>}
            </span>
          </div>
        </div>
        <CreateBtns loading={loading} />
      </form>
    </>
  );
};

export default CreateAddress;
