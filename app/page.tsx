'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Handshake, Shield, Zap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; 
import { motion } from 'framer-motion';
import BlogPage from './blog/page';
import ContactPage from './contact/page';
import HandShake from './handshake/page';
import ProductsSection from '@/components/ProductsSection';


const slides = [
  // '/DPElectrical4.png',
  // '/DPElectrical5.jpeg',
  // '/DPElectrical6.jpeg',
  //   '/DPElectrical1.jpeg',
  //  '/DPElectrical7.jpeg',
  // '/DPElectrical8.jpeg',

  '/dropdown/CableTray.png',
  '/dropdown/Servo Stabilizer.png',
   '/dropdown/Electrical Control Panel.png',
];


const features = [
  {
    icon: <CheckCircle className="h-10 w-10" />,
    title: 'Preventive Maintenance Plans',
    desc: 'Avoid costly breakdowns with our customized maintenance programs for homes and businesses.',
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: 'Reliable Service',
    desc: 'Proudly serving in India for years with 500+ successfully completed projects.',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Cutting-Edge Technology',
    desc: 'From smart home automation to energy-efficient industrial systems, we deliver future-proof solutions that save you money.',
  },
];

export default function Home() {
  return (
    <>
      {/* Slider Section */}
      <section className="py-0 bg-gray-100">
        <div className=" w-full">
          <div className="relative mx-auto w-full  max-w-full  overflow-hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              modules={[Pagination, Autoplay]}
              className="h-full"
            >
              {slides.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-full">
                    <img
                      src={src}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-[100%]"
                      
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

         {/* Handshake Section */}
         <HandShake/>
     
      {/* Welcome Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-roboto mb-2">Welcome to D.P.Electricals</h2>
            <p className="text-gray-900 font-roboto">
              "D.P.Electricals | Trusted Commercial & Industrial Electrical Services Since 2001"
            </p>
            <p className="text-gray-900 font-roboto">
              As a premier electrical solutions provider, D.P.Electricals delivers reliable, code-compliant electrical services for businesses and industrial facilities across Noida.
            </p>
            
          </div>



                <ProductsSection />
          
          
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-roboto-bold mb-4">Why Choose D.P.Electricals?</h2>
            <p className="text-gray-900 font-roboto max-w-3xl mx-auto">
              Your Trusted Partner for Safe, Reliable & Innovative Electrical Solutions
            </p>
            {/* <h2 className="text-xl -roboto mb-4">Licensed & Certified Electricians</h2> */}
            <p className="text-gray-900 font-roboto max-w-3xl mx-auto">
              Our team consists of licensed professionals with years of combined experience, ensuring code-compliant installations and repairs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {features.map(({ icon, title, desc }, i) => (
    <div
      key={i}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 group"
    >
      <div
        className="mb-4 text-orange-500 text-4xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Statistics Section */}
      <section
  className="py-16 bg-cover bg-center bg-no-repeat text-white"
  style={{
    backgroundImage: "url('/Statistics.jpg')", // Replace with your local image path
  }}
>
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-roboto-bold text-orange-500 hover:text-white mb-8">Our Statistics</h2>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop
      spaceBetween={30}
      slidesPerView={4}
      speed={4000} // Adjust speed for smooth scrolling
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      className="mt-12"
    >
      {/* Years of Experience */}
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-4xl font-roboto-bold text-orange-500 hover:text-white mb-2">20+</h3>
          <p className="text-lg font-roboto-medium text-gray-700 hover:text-white">Years of Experience</p>
        </motion.div>
      </SwiperSlide>

      {/* Team Members */}
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-4xl font-roboto-bold text-orange-500 hover:text-white mb-2">100+</h3>
          <p className="text-lg font-roboto-medium text-gray-700 hover:text-white">Team Members</p>
        </motion.div>
      </SwiperSlide>

      {/* Client Satisfaction */}
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-4xl font-roboto-bold text-orange-500 hover:text-white mb-2">99%</h3>
          <p className="text-lg font-roboto-medium text-gray-700 hover:text-white">Client Satisfaction</p>
        </motion.div>
      </SwiperSlide>

      {/* Cities in India */}
      <SwiperSlide>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
        >
          <h3 className="text-4xl font-roboto-bold text-orange-500 hover:text-white mb-2">50+</h3>
          <p className="text-lg font-roboto-medium text-gray-700 hover:text-white">Cities in India</p>
        </motion.div>
      </SwiperSlide>
    </Swiper>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100"
      style={{
          backgroundImage: "url('/testimonial.jpg')", // Replace with your local image path
        }}
        >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Encouraging Words Of Our Customers </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 italic mb-4">
                "D.P.Electricals provided exceptional service and delivered high-quality solutions for our industrial needs. Highly recommended!"
              </p>
              {/* <h3 className="text-lg font-bold text-orange-500">John Doe</h3>
              <p className="text-sm text-gray-500">CEO, Industrial Solutions</p> */}
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 italic mb-4">
                "Their team is highly professional and delivered our project on time with great attention to detail. Fantastic experience!"
              </p>
              {/* <h3 className="text-lg font-bold text-orange-500">Jane Smith</h3>
              <p className="text-sm text-gray-500">Manager, TechCorp</p> */}
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 italic mb-4">
                "We are extremely satisfied with the services provided by D.P.Electricals. Their expertise and dedication are unmatched."
              </p>
              {/* <h3 className="text-lg font-bold text-orange-500">Michael Lee</h3>
              <p className="text-sm text-gray-500">Director, BuildTech</p> */}
            </motion.div>
          </div>
        </div>
      </section>

      <div className='w-full' >

        <BlogPage />
      </div>

      <ContactPage />



    </>
  );
}
