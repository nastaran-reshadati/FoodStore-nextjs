import Card from "../components/card/Card";
import AboutUs from "../components/about/AboutUs";
import ProductsSection from "../components/products.js/ProductsSection";
import handleErrorMessage from "helpers/helper";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetDatas } from "repository/AxiosRepository";
import Slider from "../components/layout/slider/Slider";
import ContactDatas from "../components/contacts/ContactDatas";
import { Context } from "context";
import axios from "axios";

// const Map = dynamic(() => import('../components/contacts/ContactMap'),{ssr: false })

const Home = ({ datas, error  }) => {
  useEffect(() => {
    error && toast.error("err");
  }, [error]);

  return (
    <Context.Provider value={{ ProductsDatas: datas }}>
      <Slider />
      <Card />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {datas ? <ProductsSection /> : null}
      <AboutUs />
      <ContactDatas />
    </Context.Provider>
  );
};

export async function getServerSideProps() {
  try {
    const response = await GetDatas("products/products-tabs")
    return {
      props: {
        datas: response.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: handleErrorMessage(error),
      },
    };
  }
}
export default Home;
