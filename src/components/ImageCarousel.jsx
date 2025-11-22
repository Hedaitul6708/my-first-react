import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import { Pagination, Autoplay } from "swiper/modules";


import slider1 from "../assets/aa.jpg";
import slider2 from "../assets/bb.jpg";
import slider3 from "../assets/fa.jpg";
import slider4 from "../assets/fd.jpg";
import slider5 from "../assets/qq.jpg";



export default function ImageCarousel() {
  const images = [slider1, slider2, slider3, slider4, slider5];


  const swiperStyles = {
    width: "100%"

  };

  const imgStyles = {
    width: "100%",
    height: "80vh",
    objectFit: "cover",
  };

  const paginationStyles = `
    .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: yellow;
    }
    @media (max-width: 768px) {
      .swiper-slide img {
        height: 250px !important;
      }
    }
  `;

  return (
    <>
      {}
      <style>{paginationStyles}</style>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        style={swiperStyles}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} style={imgStyles} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
