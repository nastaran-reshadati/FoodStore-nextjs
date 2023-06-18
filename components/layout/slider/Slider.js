import heroImage from "public/images/hero-bg.jpg";
import Image from "next/image";
import SliderContent from "./SliderContent";
import Header from "../navbar/Navbar";
import { useRouter } from "next/router";

const Slider = () => {
  
  return (
    <div>
      <div className="hero_area">
        <div className="bg-box">
          <Image
            src={heroImage}
            placeholder="blur"
            layout="fill"
            alt="hero-image"
          />
        </div>
       
        <section className="slider_section">
          <SliderContent />
        </section>
      </div>
    </div>
  );
};

export default Slider;
