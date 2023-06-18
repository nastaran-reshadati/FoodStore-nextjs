import Layout from "../../components/profile/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
import { toast } from "react-toastify";
import Loading from "../../components/profile/Loading";
import { useForm } from "react-hook-form";
import ShowEmptyInput from "../../components/profile/ShowEmptyInput";

const profile = () => {
  const { data, error, mutate, isValidating } = useSWR(
    "http://localhost:3000/api/profile/info"
  );

  console.log(data);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (error) {
    toast.error("ناموفق");
    return;
  }

  const onsubmit = async (data) => {
    console.log("submit");
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/profile/edit", {
        name: data.name,
        email: data.email,
      });
      console.log(res.data);
      toast.success("اطلاعات با موفقیت ویرایش شد !");
      mutate(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {data ? (
        <div>
          <Layout>
            <div className="container">
              <form onSubmit={handleSubmit(onsubmit)} className="row">
                <div className="col-xs-12 col-s-12 col-md-6">
                  <label className="mx-2" htmlFor="name">
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-control mt-1"
                    placeholder="نام و نام خانوادگی"
                    defaultValue={data.name}
                    name="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <ShowEmptyInput />}
                </div>
                <div className="col-xs-12 col-s-12 col-md-6">
                  <label className="mx-2" htmlFor="email">
                    ایمیل
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control mt-1"
                    placeholder=" ایمیل"
                    defaultValue={data.email}
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <ShowEmptyInput />}
                </div>
                <div className="col-xs-12 col-s-12 col-md-6 my-3">
                  <label className="mx-2" htmlFor="call">
                    شماره تماس
                  </label>
                  <input
                    id="call"
                    type="text"
                    className="form-control mt-1"
                    placeholder="شماره تماس"
                    value={data.cellphone}
                    disabled
                  />
                </div>
                <button type="submit" className="btn-profile">
                  {loading ? (
                    <div className="spinner-grow text-light" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    "  ویرایش"
                  )}
                </button>
              </form>
            </div>
          </Layout>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default profile;
