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
import { motion } from 'framer-motion';
import BlogPage from './blog/page';
import ContactPage from './contact/page';
import HandShake from './handshake/page';
import ProductsSection from '@/components/ProductsSection';
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
      <section className="py-0 bg-gradient-to-br from-gray-50 via-orange-50 to-amber-50">
        <div className="w-full max-w-full overflow-hidden px-4 md:px-8 py-8">
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
              className="w-full h-full rounded-3xl overflow-hidden shadow-2xl"
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
                    {/* Enhanced gradient overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-orange-500/10 backdrop-blur-sm border border-orange-400/20"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-400/20"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-16 lg:pl-24 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl"
                      >
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: 60 }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                          className="h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full mb-4"
                        ></motion.div>
                        
                        <motion.h2 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 tracking-tight"
                        >
                          {slide.title}
                        </motion.h2>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-lg md:text-xl mb-4 max-w-2xl font-light"
                        >
                          {slide.description}
                        </motion.p>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="text-orange-300 font-semibold text-lg mb-6 flex items-center"
                        >
                          <span className="w-2 h-2 bg-orange-400 rounded-full mr-2"></span>
                          {slide.highlight}
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                        >
                          <button className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition-all duration-300 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full hover:from-orange-600 hover:to-amber-700">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                              </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                              Explore Our Solutions
                            </span>
                            <span className="relative invisible">Explore Our Solutions</span>
                          </button>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              
              {/* Enhanced Custom Navigation Buttons */}
              <div className="swiper-button-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="swiper-button-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-14 h-14 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 shadow-lg border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

         {/* Handshake Section */}
         <HandShake/>
              
      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to <span className="text-orange-600">D.P.Electricals</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              "D.P.Electricals | Trusted Commercial & Industrial Electrical Services Since 2001"
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose D.P.Electricals?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your Trusted Partner for Safe, Reliable & Innovative Electrical Solutions
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              Our team consists of licensed professionals with years of combined experience, ensuring code-compliant installations and repairs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-6">
                  {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements in Numbers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Years of excellence and trust in delivering top-tier electrical solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 text-orange-400">
                  <Handshake className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="text-gray-300">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 text-orange-400">
                  <Zap className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-gray-300">Team Members</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 text-orange-400">
                  <CheckCircle className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">99%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/20 text-orange-400">
                  <Shield className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-300">Cities Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from businesses and individuals who have trusted us with their electrical needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "D.P.Electricals provided exceptional service and delivered high-quality solutions for our industrial needs. Highly recommended!"
              </p>
              <div className="text-center">
                <h4 className="font-bold text-gray-900">John Doe</h4>
                <p className="text-gray-500 text-sm">CEO, Industrial Solutions</p>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Their team is highly professional and delivered our project on time with great attention to detail. Fantastic experience!"
              </p>
              <div className="text-center">
                <h4 className="font-bold text-gray-900">Jane Smith</h4>
                <p className="text-gray-500 text-sm">Manager, TechCorp</p>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "We are extremely satisfied with the services provided by D.P.Electricals. Their expertise and dedication are unmatched."
              </p>
              <div className="text-center">
                <h4 className="font-bold text-gray-900">Michael Lee</h4>
                <p className="text-gray-500 text-sm">Director, BuildTech</p>
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