'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const slides = [
  '/dropdown/CableTray.png',
  '/dropdown/Servo Stabilizer.png',
  '/dropdown/Electrical Control Panel.png',
];

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-100">
      <div className="mx-auto w-full max-w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          modules={[Pagination, Autoplay]}
          className="h-[70vh] md:h-[80vh]"
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={`Electrical Solutions Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}