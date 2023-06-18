import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import foodIcon from "../../public/images/3570168.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="container-fluid footer__custom p-4">
      <div className="row">
        <div className="footer__icon text-center">
          <Image src={foodIcon} width="100px" height="100px" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-4 col-s-4 col-md-4 text-center my-2">
              <h3>فود استور</h3>
              <p>
                بی صبرانه منتظریم تا با غذاهای خوشمزه مان حال شما را خوب کنیم...
              </p>
              <div className="footer__icons d-flex justify-content-center">
                <div className="mx-2 social-media__icon">
                  <AiOutlineTwitter />
                </div>
                <div className="mx-2 social-media__icon">
                  <FaLinkedinIn />
                </div>
                <div className="mx-2 social-media__icon">
                  <FaFacebookF />
                </div>
                <div className="mx-2 social-media__icon">
                  <AiOutlineInstagram />
                </div>
              </div>
            </div>
            <div className="col-xs-4 col-s-4 col-md-4 text-center my-2">
              <h3>در تماس باشید</h3>
              <div className="footer__cal">
                <span>
                  {" "}
                  <IoIosCall />
                </span>
                <span>021-1236474</span>
              </div>
              <div className="footer__email">
                <span>
                  {" "}
                  <AiOutlineMail />
                </span>
                <span>foodStore@gmail.com</span>
              </div>
              <div className="footer__email">
                <span>
                  {" "}
                  <HiOutlineLocationMarker />
                </span>
                <span>تهران ، میدان آرژانتین ، خیابان دیبا</span>
              </div>
            </div>
            <div className="col-xs-4 col-s-4 col-md-4 text-center my-2">
              <h3>ساعت های کاری</h3>
              <p>همه روزه به جز شنبه ها</p>
              <p>از ساعت 13 تا 23در خدمت شما مشتریان عزیز هستیم</p>
            </div>
            <div className="text-center">© کلیه حقوق این سایت محفوظ میباشد.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
