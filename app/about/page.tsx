'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Users, BarChart, Award, Trophy, MapPin, Calendar } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-white ">
        {/* Hero Section */}
        <div className="relative w-full h-[450px] overflow-hidden shadow-lg rounded-lg mx-auto">
          <Image
            src="/about-us.jpeg"
            alt="About Us - DP Electricals"
            fill
            className="object-contain"
            style={{ background: "#fff" }} // Optional: white background for transparent images
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl font-bold text-white text-center"
            >
              {/* You can add a heading here if needed */}
            </motion.h1>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="max-w-3xl mx-auto text-center my-12 px-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-lg text-gray-600 mb-6 font-family: Arial, Helvetica, sans-serif"
          >
            Welcome to D.P Electricals, your trusted partner in electrical solutions. With a legacy of
            excellence spanning years, we pride ourselves on being a leading name in the industry.
          </motion.p>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 md:px-12 my-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-semibold mb-4 font-family: Arial, Helvetica, sans-serif">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize the electrical solutions industry, D.P Electricals
              has grown from a small team of dedicated professionals to a well-established name in the
              field. Our journey has been marked by continuous innovation, unwavering commitment to
              quality, and a customer-first approach.
            </p>
            <p className="text-gray-600">
              Over the years, we have successfully completed numerous projects across various sectors,
              including industrial, commercial, and residential. Each project stands as a testament to
              our expertise, attention to detail, and dedication to delivering excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[300px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/our-story.jpg" // Replace with your local image path
              alt="Our Story - DP Electricals"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-8">Our Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center p-6 bg-white shadow-md rounded-lg"
              >
                <Trophy className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">20+ Years of Excellence</h3>
                <p className="text-gray-600">
                  Delivering top-notch electrical solutions for over two decades.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center p-6 bg-white shadow-md rounded-lg"
              >
                <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">100+ Team Members</h3>
                <p className="text-gray-600">
                  A dedicated team of professionals ensuring quality and innovation.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-center p-6 bg-white shadow-md rounded-lg"
              >
                <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">50+ Awards</h3>
                <p className="text-gray-600">
                  Recognized for excellence and innovation in the electrical industry.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="py-12 px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src="/vision.jpg" // Replace with your local image path
                alt="Our Vision - DP Electricals"
                fill
                className="object-cover"
              />
            </motion.div>              

            <motion.div
               initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted and innovative provider of electrical solutions, empowering
                businesses and individuals to achieve their goals with cutting-edge technology and
                unparalleled service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}