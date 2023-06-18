import React from 'react'
import burgetImg from '../../public/images/about-img.png'
import Image from 'next/image'
const AboutUs = () => {
  return (
    <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-xs-12 col-s-12 col-md-6 col-lg-6 " style={{paddingRight : '60px'}}>
                 <Image placeholder='blur' src={burgetImg} height='640px' width='600px' />
            </div>
            <div className="col-xs-12 col-s-12 col-md-6 col-lg-6 AboutContext">
                <p>لذت صرف غذای سالم و اصیل ایرانی در محیطی درخور شان، یکی از حس‌هایی است که می‌تواند خستگی یک هفته سخت و پر دغدغه را رفع کند و انرژی مورد نیاز برای روزهای پیشرو رو برای ما فراهم سازد. ما در رستوران‌های زنجیره‌ای فود استور با بیش از ۶۰ سال تجربه به همراه شش شعبه در استان های تهران، البرز و مازندران همواره افتخار داریم در محیطی اصیل بر پایه معماری و طراحی مدرن، متناسب با هر نوع سلیقه و ذائقه‌ای با تکیه بر مهارت آشپزان و مهمانداران آموزش دیده و امکانات رفاهی کم نظیر همچون، پارکینگ اختصاصی، سالن VIP، خانه بازی کودکان و ... در قالب سالن های پذیرایی کلاسیک، آلاچیق در فضای باز مجزا و کافی شاپ، میزبان محافل دوستانه و کاری، جشن ها و مراسم های شما عزیزان باشیم تا اوقاتی خوش را در کنار یکدیگر تجربه نمایید.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs