'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'Submersible Starter Panels',
    image: 'DPElectrical3111.png',
    link: '/submersiblestarterpanels',
    desc: 'Monitor performance and ensure efficiency with our advanced Submersible Starter Panels.',
  },
  {
    title: 'Electronic Panels',
    image: '/electronic-panel.jpg',
    link: '/electronic-panels',
    desc: 'High-quality electronic panels for industrial monitoring and control.',
  },
  {
    title: 'Meter Board Panel',
    image: '/MeterBoardPanel.jpg',
    link: '/meter-board-panels',
    desc: 'Accurate power monitoring with modular and advanced meter board panels.',
  },
  {
    title: 'Synchronizing Panel',
    image: '/synchronizing-panel.jpg',
    link: '/synchronizing-panels',
    desc: 'Ensure smooth operation of multiple power sources with our synchronizing panels.',
  },
  {
    title: 'Control Desks',
    image: '/ControlDesks.jpg',
    link: '/control-desks',
    desc: 'Operate from a separate location with our reliable control desks.',
  },
  {
    title: 'AMF Panels',
    image: '/AMFPanels.jpg',
    link: '/amf-panels',
    desc: 'Automatic power switching during grid failure with our AMF panels.',
  },
];

export default function ProductsSection() {
  return (
    <section id="products-section" className="py-4 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-roboto mb-2">Our Products</h2>
          <p className="text-gray-900 font-roboto">
            Explore our wide range of high-quality electrical products designed to meet your needs.
          </p>
        </div>

        {/* Products Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          spaceBetween={30}
          slidesPerView={3}
          speed={4000} // Adjust speed for smooth scrolling
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-12"
        >
          {products.map(({ title, image, link, desc }, i) => (
            <SwiperSlide key={i}>
              <div className="relative p-[2px] rounded-lg bg-gradient-to-r from-orange-500 via-grey-500 to-blue-500 animate-gradient-border">
                <Card className="bg-white shadow-md hover:shadow-lg transition duration-300 rounded-lg flex flex-col h-[400px] w-[300px] mx-auto">
                  <CardHeader className="pb-2">
                    <div className="w-full relative aspect-[16/9] mb-4 overflow-hidden rounded-t-lg group">
                      <Link href={link}>
                        <Image
                          src={image}
                          alt={title}
                          layout="fill"
                          objectFit="cover"
                          className="cursor-pointer transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
                        />
                      </Link>
                    </div>
                    <CardTitle className="text-xl text-center text-orange-500">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 text-center">{desc}</p>
                  </CardContent>
                  <CardFooter className="flex justify-center mt-auto">
                    <Button variant="outline" className="group">
                      <Link href={link} className="flex items-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}