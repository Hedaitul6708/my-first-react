import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import ProductCard from "./ProductCard";

export default function CardSlider({ moviecard }) {
  const cards = moviecard;

  return (
    <div className="w-11/12 mt-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <ProductCard product={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
