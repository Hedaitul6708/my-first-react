import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

// Import images from assets folder
import slider1 from "../assets/aa.jpg";
import slider2 from "../assets/bb.jpg";
import slider3 from "../assets/fa.jpg";
import slider4 from "../assets/fd.jpg";
import slider5 from "../assets/qq.jpg";


// ✅ Custom function name
export default function ImageCarousel() {
  const images = [slider1, slider2, slider3, slider4, slider5];

  // Inline styles for slides and pagination
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
      {/* Inline style tag for pagination and responsive tweaks */}
      <style>{paginationStyles}</style>

      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1} // Show 1 slide at a time
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
