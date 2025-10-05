'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Handshake, Shield, Zap } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import BlogPage from './blog/page';
import ContactPage from './contact/page';
import HandShake from './handshake/page';
import ProductsSection from '@/components/ProductsSection';
import ImageSection from './ImageSection/page';
import ProductsPage from './products/page';
import PartnersSection from '@/components/PartnersSection';


const slides = [
  {
    src: '/DPElectrical2.png',
    title: 'DP Electricals',
    description: 'Leading Provider of Industrial Electrical Solutions Since 2001',
    highlight: 'Trusted by 500+ Clients Across India'
  },
  {
    src: 'dpslider.jpeg',
    title: 'Premium Control Panels',
    description: 'High-Quality Electrical Control Panels for Industrial Applications',
    highlight: 'Custom Solutions for Every Industry'
  },
  {
    src: 'dpslider1.png',
    title: 'Synchronizing Panels',
    description: 'Advanced Synchronization Technology for Seamless Power Integration',
    highlight: 'Precision Engineering for Reliable Performance'
  }
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
      <section className="py-0 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="w-full max-w-full overflow-hidden">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]"> {/* Standard slider aspect ratios */}
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet bg-white/50 w-3 h-3 rounded-full mx-1 transition-all duration-300',
                bulletActiveClass: 'swiper-pagination-bullet-active bg-orange-500 w-8 rounded-full'
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              autoplay={{ delay: 7000, disableOnInteraction: false }}
              loop
              modules={[Pagination, Autoplay, Navigation]}
              className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i} className="flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.src}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 100vw"
                      priority={i === 0}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    {/* Gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl"
                      >
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{slide.title}</h2>
                        <p className="text-lg md:text-xl mb-4 max-w-2xl">{slide.description}</p>
                        <p className="text-orange-300 font-semibold text-lg mb-6">{slide.highlight}</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
                        >
                          Explore Our Solutions
                        </motion.button>
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              {/* Custom Navigation Buttons */}
              <div className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 after:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 after:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

         {/* Handshake Section */}
         <HandShake/>
              {/* <ImageSection/> */}
              
      {/* Welcome Section */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl font-roboto mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Welcome to D.P.Electricals
            </motion.h2>
            <motion.p 
              className="text-gray-900 font-roboto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              "D.P.Electricals | Trusted Commercial & Industrial Electrical Services Since 2001"
            </motion.p>
            <motion.p 
              className="text-gray-900 font-roboto mt-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              As a premier electrical solutions provider, D.P.Electricals delivers reliable, code-compliant electrical services for businesses and industrial facilities across Noida.
            </motion.p>
            <motion.div 
              className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </motion.div>

          <ProductsSection />
          <ProductsPage />
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
        className="py-16 bg-cover bg-center bg-no-repeat text-white relative overflow-hidden"
        style={{
          backgroundImage: "url('/Statistics.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Achievements in Numbers</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-xl max-w-3xl mx-auto text-gray-200">
              Years of excellence and trust in delivering top-tier electrical solutions
            </p>
          </motion.div>
          
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            spaceBetween={30}
            slidesPerView={4}
            speed={4000}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="mt-12"
          >
            {/* Years of Experience */}
            <SwiperSlide>
              <AnimatedStatCard 
                icon={<Handshake className="h-8 w-8 text-orange-400 group-hover:text-orange-300" />}
                endValue={20}
                label="Years of Experience"
                suffix="+"
              />
            </SwiperSlide>

            {/* Team Members */}
            <SwiperSlide>
              <AnimatedStatCard 
                icon={<Zap className="h-8 w-8 text-orange-400 group-hover:text-orange-300" />}
                endValue={100}
                label="Expert Team Members"
                suffix="+"
              />
            </SwiperSlide>

            {/* Client Satisfaction */}
            <SwiperSlide>
              <AnimatedStatCard 
                icon={<CheckCircle className="h-8 w-8 text-orange-400 group-hover:text-orange-300" />}
                endValue={99}
                label="Client Satisfaction"
                suffix="%"
              />
            </SwiperSlide>

            {/* Cities in India */}
            <SwiperSlide>
              <AnimatedStatCard 
                icon={<Shield className="h-8 w-8 text-orange-400 group-hover:text-orange-300" />}
                endValue={50}
                label="Cities Served"
                suffix="+"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/testimonial.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              What Our Clients Say
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-orange-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="mt-6 text-xl max-w-3xl mx-auto text-gray-200"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hear from businesses and individuals who have trusted us with their electrical needs
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-orange-500/50 transition-all duration-500 group"
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400 group-hover:text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
              <motion.p 
                className="text-gray-200 italic mb-6 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "D.P.Electricals provided exceptional service and delivered high-quality solutions for our industrial needs. Highly recommended!"
              </motion.p>
              <div className="flex items-center justify-center">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-orange-500 font-bold">JD</span>
                </motion.div>
                <div className="text-left">
                  <h4 className="font-bold text-white">John Doe</h4>
                  <p className="text-gray-300 text-sm">CEO, Industrial Solutions</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-orange-500/50 transition-all duration-500 group"
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400 group-hover:text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
              <motion.p 
                className="text-gray-200 italic mb-6 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "Their team is highly professional and delivered our project on time with great attention to detail. Fantastic experience!"
              </motion.p>
              <div className="flex items-center justify-center">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-orange-500 font-bold">JS</span>
                </motion.div>
                <div className="text-left">
                  <h4 className="font-bold text-white">Jane Smith</h4>
                  <p className="text-gray-300 text-sm">Manager, TechCorp</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-orange-500/50 transition-all duration-500 group"
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400 group-hover:text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
              <motion.p 
                className="text-gray-200 italic mb-6 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                "We are extremely satisfied with the services provided by D.P.Electricals. Their expertise and dedication are unmatched."
              </motion.p>
              <div className="flex items-center justify-center">
                <motion.div 
                  className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-orange-500 font-bold">ML</span>
                </motion.div>
                <div className="text-left">
                  <h4 className="font-bold text-white">Michael Lee</h4>
                  <p className="text-gray-300 text-sm">Director, BuildTech</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className='w-full' >

        <BlogPage />
      </div>

      <ContactPage />

      <PartnersSection />
    </>
  );
}

const AnimatedStatCard = ({ icon, endValue, label, suffix = "" }: { icon: React.ReactNode; endValue: number; label: string; suffix?: string; }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 16); // 60fps

    if (isInView) {
      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16); // ~60fps

      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20 hover:border-orange-500/50 transition-all duration-500 group"
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300">
          {icon}
        </div>
      </div>
      <motion.h3 
        className="text-4xl font-bold text-white mb-2"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {count}{suffix}
      </motion.h3>
      <p className="text-lg text-gray-200">{label}</p>
    </motion.div>
  );
};