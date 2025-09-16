'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    title: 'Submersible Starter Panels',
    image: '/DPElectrical3111.png',
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
    <section id="products-section" className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
            OUR PRODUCTS
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Premium <span className="text-orange-500">Electrical</span> Solutions
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 font-roboto text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our wide range of high-quality electrical products designed to meet your industrial and commercial needs.
          </motion.p>
          
          <motion.div 
            className="mt-8 h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
        </motion.div>

        {/* Products Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          spaceBetween={30}
          slidesPerView={3}
          speed={4000}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-12"
        >
          {products.map(({ title, image, link, desc }, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 animate-gradient-border group">
                  <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl flex flex-col h-[420px] w-[320px] mx-auto group overflow-hidden border-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardHeader className="pb-4 relative z-10">
                      <div className="w-full relative aspect-[16/9] mb-4 overflow-hidden rounded-xl">
                        <Link href={link}>
                          <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="cursor-pointer transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>
                      </div>
                      <CardTitle className="text-2xl text-center text-gray-900 group-hover:text-orange-600 transition-colors duration-300">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow relative z-10">
                      <p className="text-gray-600 text-center leading-relaxed">{desc}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center mt-auto relative z-10 pb-6">
                      <Button asChild variant="outline" className="group rounded-full border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white transition-all duration-300 px-6 py-2 shadow-md hover:shadow-lg">
                        <Link href={link} className="flex items-center font-medium">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}