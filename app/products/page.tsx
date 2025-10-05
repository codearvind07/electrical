'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Zap, Shield, Cpu } from 'lucide-react';

const products = [
  {
    id: 1,
    title: 'Main LT Panel',
    image: '/product1.png',
    description: 'Engineered with cutting-edge technology, our Main Low Tension Distribution Panels deliver power management for critical industrial infrastructure. Featuring advanced circuit protection systems with selective discrimination capabilities, these panels ensure optimal energy distribution while maintaining system integrity. Our proprietary thermal management design reduces energy losses by up to 15% while providing real-time monitoring through integrated smart sensors.',
    features: [
      'IEC 61439-1/2 compliant construction',
      'Advanced selective discrimination protection',
      'Integrated IoT-enabled monitoring system',
      'Thermal optimization reducing losses by 15%'
    ],
    link: '/submersiblestarterpanels',
    icon: <Zap className="h-5 w-5 text-blue-500" />,
    color: {
      primary: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      accent: 'blue-500',
      light: 'blue-100'
    }
  },
  {
    id: 2,
    title: 'Electronic Control Panels',
    image: '/product2.png',
    description: 'Our precision-engineered Electronic Control Panels integrate state-of-the-art PLC technology with redundant safety systems for mission-critical applications. Designed with modular architecture, these panels offer seamless scalability and feature our proprietary Digital Twin simulation technology for predictive maintenance. Advanced HMI interfaces provide intuitive operation with customizable dashboards for enhanced operational efficiency.',
    features: [
      'Modular PLC architecture with redundancy',
      'Proprietary Digital Twin simulation technology',
      'Customizable HMI with multi-language support',
      'Cybersecurity-compliant communication protocols'
    ],
    link: '/electronic-panels',
    icon: <Cpu className="h-5 w-5 text-emerald-500" />,
    color: {
      primary: 'emerald',
      gradient: 'from-emerald-500 to-emerald-600',
      accent: 'emerald-500',
      light: 'emerald-100'
    }
  },
  {
    id: 3,
    title: 'APFC Panels',
    image: '/product3.png',
    description: 'Revolutionizing power efficiency, our Automatic Power Factor Correction Panels utilize AI-driven algorithms to dynamically optimize reactive power compensation. With harmonic filtering capabilities up to the 19th order, these panels maintain power factor levels above 0.98 while reducing THD to less than 5%. Our intelligent capacitor switching technology extends component lifespan by 40% compared to conventional systems.',
    features: [
      'AI-powered dynamic compensation algorithms',
      '19th order harmonic filtering capability',
      'Intelligent capacitor switching technology',
      'Power factor optimization above 0.98'
    ],
    link: '/meter-board-panels',
    icon: <Shield className="h-5 w-5 text-amber-500" />,
    color: {
      primary: 'amber',
      gradient: 'from-amber-500 to-amber-600',
      accent: 'amber-500',
      light: 'amber-100'
    }
  },
  {
    id: 4,
    title: 'AMF Panels',
    image: '/product5.png',
    description: 'Our Automatic Mains Failure Panels feature military-grade transfer switches with sub-cycle response times for uninterrupted power continuity. Equipped with predictive analytics engines, these panels forecast grid instability and pre-stage generators for seamless transitions. Advanced synchronization technology ensures phase alignment accuracy within ±1 degree, protecting sensitive equipment from power anomalies.',
    features: [
      'Sub-cycle transfer switching technology',
      'Predictive grid instability analytics',
      'Precision phase synchronization ±1 degree',
      'Integrated load shedding optimization'
    ],
    link: '/amf-panels',
    icon: <Shield className="h-5 w-5 text-rose-500" />,
    color: {
      primary: 'rose',
      gradient: 'from-rose-500 to-rose-600',
      accent: 'rose-500',
      light: 'rose-100'
    }
  },
  {
    id: 5,
    title: 'Synchronizing Panels',
    image: '/product4.png',
    description: 'Designed for complex multi-source power systems, our Synchronizing Panels incorporate precision frequency and phase matching algorithms for flawless parallel operation. Featuring real-time vector analysis and automatic synchronization sequences, these panels enable safe paralleling of up to 8 generators. Our patented soft-loading technology minimizes inrush currents by 60%, ensuring gentle system integration.',
    features: [
      'Multi-source synchronization capability',
      'Real-time vector analysis algorithms',
      'Patented soft-loading technology',
      'Automatic paralleling sequences'
    ],
    link: '/synchronizing-panels',
    icon: <Zap className="h-5 w-5 text-violet-500" />,
    color: {
      primary: 'violet',
      gradient: 'from-violet-500 to-violet-600',
      accent: 'violet-500',
      light: 'violet-100'
    }
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      {/* Hero Section with Enhanced Visuals */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 py-24">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-10 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-10 animate-pulse"></div>
        <div className="container relative mx-auto px-4 text-center z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <motion.div 
              className="inline-flex items-center justify-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm mb-4 transform transition-all hover:scale-105 duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="mr-2 h-4 w-4 text-blue-300" />
              PREMIUM ELECTRICAL SOLUTIONS
            </motion.div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl relative">
              Engineering <span className="text-blue-400">Excellence</span>
              <motion.span 
                className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 italic">
              Discover our cutting-edge range of electrical products designed for industrial and commercial excellence
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-16">
        {/* Enhanced Wire Connection Line */}
        <div className="relative mb-16 hidden md:block">
          {/* Main wire */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          {/* Wire glow effect */}
          <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-blue-400/30 blur-md rounded-full"></div>
          {/* Animated current */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2">
            <motion.div
              className="h-12 w-full bg-white rounded-full shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
              animate={{
                top: ['0%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          {/* Secondary wires connecting to each product */}
          {products.map((_, index) => (
            <div 
              key={index}
              className="absolute left-1/2 top-1/2 h-20 w-16 -translate-x-1/2 -translate-y-1/2"
              style={{ top: `${20 + index * 20}%` }}
            >
              <div className="absolute right-0 top-1/2 h-0.5 w-full bg-gradient-to-r from-blue-400 to-transparent"></div>
              <motion.div
                className="absolute right-0 top-1/2 h-1 w-4 bg-blue-400 rounded-full"
                animate={{
                  x: [0, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              />
            </div>
          ))}
        </div>

        {/* Products List */}
        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Enhanced Connection Dot */}
              <div className="absolute left-1/2 top-1/2 hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-blue-500 bg-white/20 shadow-md md:block">
                {/* Wire connector */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-80"></div>
                <div className="absolute inset-1 rounded-full bg-white"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-300/50"></div>
                {/* Glow effect */}
                <div className="absolute -inset-1 rounded-full bg-blue-400/30 blur-sm"></div>
                {/* Animated pulse */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-blue-400"
                  initial={{ scale: 1, opacity: 0.7 }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Spark effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </div>
              
              {/* Product Details */}
              <div className="w-full md:w-1/2">
                <motion.div 
                  initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300 }}
                  className="max-w-lg"
                >
                  <div className="mb-6 flex items-center">
                    <motion.div 
                      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-${product.color.light} transform transition-all duration-300 hover:scale-110`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {product.icon}
                    </motion.div>
                    <motion.span 
                      className={`ml-4 rounded-full bg-gradient-to-r ${product.color.gradient} px-5 py-1.5 text-xs font-semibold text-white shadow-md transform transition-all duration-300 hover:shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      PRODUCT #{product.id}
                    </motion.span>
                  </div>
                  <h2 className="mb-5 text-4xl font-bold text-gray-900 relative">
                    {product.title}
                    <span className={`absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-${product.color.accent} via-${product.color.primary}-400 to-${product.color.accent}`}></span>
                  </h2>
                  <p className="mb-7 text-gray-600 leading-relaxed text-lg shadow-sm p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                    {product.description}
                  </p>
                  <div className="mb-8 rounded-xl bg-gray-50 p-6 shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 flex items-center">
                      <CheckCircle className={`mr-2 h-5 w-5 text-${product.color.accent}`} />
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className={`mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-${product.color.accent}`}></div>
                          <span className="text-gray-700 hover:text-gray-900 transition-colors duration-200">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button asChild className={`group rounded-lg bg-gradient-to-r ${product.color.gradient} px-6 py-3 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:from-${product.color.primary}-600 hover:to-${product.color.primary}-700 transform hover:-translate-y-1`}>
                    <Link href={product.link} className="flex items-center">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>

              {/* Product Image */}
              <div className="w-full md:w-1/2">
                <motion.div
                  initial={{ x: index % 2 === 0 ? 20 : -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 300 }}
                >
                  <div className="group relative">
                    <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${product.color.gradient} opacity-0 blur-lg transition-all duration-500 group-hover:opacity-20`}></div>
                    <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg transform transition-all duration-700 group-hover:scale-[1.02]">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className={`rounded-full bg-gradient-to-r ${product.color.gradient} p-4 text-white transform transition-all duration-300 hover:scale-110`}>
                            <ArrowRight className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm text-gray-500">Click to view details</span>
                    </div>
                    <div className="absolute -top-3 -right-3 hidden md:block">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.5, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        className={`w-6 h-6 rounded-full bg-${product.color.accent}/80`}
                      />
                    </div>
                    <div className="absolute -top-3 -left-3 hidden md:block">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.5, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                        className={`w-6 h-6 rounded-full bg-${product.color.primary}-500/80`}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}