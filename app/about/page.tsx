'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Users, BarChart, Award, Trophy, MapPin, Calendar, Zap, Cpu, Lightbulb, Target } from 'lucide-react';

export default function AboutPage() {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8" />,
      number: "20+",
      label: "Years of Excellence",
      description: "Delivering top-notch electrical solutions for over two decades."
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "100+",
      label: "Team Members",
      description: "A dedicated team of professionals ensuring quality and innovation."
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "50+",
      label: "Awards",
      description: "Recognized for excellence and innovation in the electrical industry."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      number: "500+",
      label: "Projects",
      description: "Successfully completed projects across various sectors."
    }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Innovation",
      description: "Continuously pushing boundaries with cutting-edge electrical solutions."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Integrity",
      description: "Building trust through transparent and ethical business practices."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Excellence",
      description: "Delivering exceptional quality in every project we undertake."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Sustainability",
      description: "Promoting energy-efficient solutions for a greener future."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Section with Enhanced Gradient */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/about-us.jpeg"
            alt="About Us - DP Electricals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </div>
        
       
      </section>

      {/* Welcome Section with Modern Design */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Welcome to <span className="text-orange-600">DP Electricals</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mb-8"
            ></motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded with a vision to revolutionize the electrical solutions industry, D.P Electricals
                has grown from a small team of dedicated professionals to a well-established name in the
                field. Our journey has been marked by continuous innovation, unwavering commitment to
                quality, and a customer-first approach.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have successfully completed numerous projects across various sectors,
                including industrial, commercial, and residential. Each project stands as a testament to
                our expertise, attention to detail, and dedication to delivering excellence.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium py-2 px-6 rounded-lg"
              >
                Learn More
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/our-story.jpg"
                alt="Our Story - DP Electricals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section with Animated Counters */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our <span className="text-orange-600">Achievements</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Milestones that define our journey of excellence
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.label}</h4>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Our Core <span className="text-orange-600">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Principles that guide our every action and decision
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 text-orange-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-orange-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our <span className="text-orange-300">Vision</span></h2>
              <p className="text-gray-300 text-lg mb-6">
                To be the most trusted and innovative provider of electrical solutions, empowering
                businesses and individuals to achieve their goals with cutting-edge technology and
                unparalleled service.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-12">Our <span className="text-orange-300">Mission</span></h2>
              <p className="text-gray-300 text-lg">
                To deliver exceptional electrical solutions that exceed expectations, foster sustainable
                development, and contribute to building a better future through innovation and expertise.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/vision.jpg"
                alt="Our Vision - DP Electricals"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Ready to Partner With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-xl mb-8"
          >
            Let's discuss how we can bring your electrical projects to life
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
}