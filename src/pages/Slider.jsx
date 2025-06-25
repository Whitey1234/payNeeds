import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Slider = () => {
  const images = [
    'https://i.ibb.co.com/TM4cphdC/1601317670-1.jpg',
    'https://i.ibb.co.com/5WYQDTjL/NES.jpg',
    'https://i.ibb.co.com/vgT0LW1/167224-127.jpg',
    'https://i.ibb.co.com/TM4cphdC/1601317670-1.jpg',
    'https://i.ibb.co.com/5WYQDTjL/NES.jpg',
    'https://i.ibb.co.com/vgT0LW1/167224-127.jpg',
    'https://i.ibb.co.com/TM4cphdC/1601317670-1.jpg',
    'https://i.ibb.co.com/5WYQDTjL/NES.jpg',
    'https://i.ibb.co.com/vgT0LW1/167224-127.jpg',
  ];
  const text = [
" DHAKA ELECTRIC SUPPLY COMPANY LIMITED (DESCO)",
" Dhaka Water Supply and Sewerage Authority. (DWASA)",
" NORTHERN ELECTRICITY SUPPLY COMPANY LIMITED.",
" DHAKA ELECTRIC SUPPLY COMPANY LIMITED (DESCO)",
" Dhaka Water Supply and Sewerage Authority. (DWASA)",
" NORTHERN ELECTRICITY SUPPLY COMPANY LIMITED.",
" DHAKA ELECTRIC SUPPLY COMPANY LIMITED (DESCO)",
" Dhaka Water Supply and Sewerage Authority. (DWASA)",
" NORTHERN ELECTRICITY SUPPLY COMPANY LIMITED.",

  ]

  return (
    <div className="w-full max-w-4xl mx-auto py-8 my-5">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="!w-60 !h-40 md:!w-64 md:!h-48 rounded-lg overflow-hidden shadow-md relative"
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-sm p-2 text-center">
              {`${text[index+1]}`} {index + 1}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider; 
