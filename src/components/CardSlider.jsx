import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function CardSlider({moviecard}) {
  // 👉 তোমার state যেখানে সব card data আছে
   const cards = moviecard;
  return (
    <div className="w-11/12">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode={true}
        autoplay={{
          delay: 2500, // প্রতি 2.5 সেকেন্ডে স্লাইড হবে
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className=""
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className=" hover:scale-105 transition-transform duration-300">
              <img
                src={card.image}
                alt={card.title}
                className=""
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
