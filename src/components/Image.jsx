// App.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// Import images
import slider1 from './assets/aa.jpg';
import slider2 from './assets/bb.jpg';
import slider3 from './assets/fa.jpg';
import slider4 from './assets/ss.jpg';
import slider5 from './assets/qq.jpg';

// Import CSS
import './index.css';

export default function App() {
  // Store images in an array
  const images = [slider1, slider2, slider3, slider4, slider5];

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="slide-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
