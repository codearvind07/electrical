'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, Zap, Shield, Cpu, Award, Users, TrendingUp } from 'lucide-react';

function HandShake() {
  const benefits = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Industry Expertise",
      description: "15+ years of experience in electrical engineering solutions"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Trusted Partnership",
      description: "500+ successful projects delivered to satisfied clients"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "98% client retention rate with premium quality standards"
    }
  ];

  const features = [
    "Custom Electrical Solutions",
    "24/7 Technical Support",
    "Energy Efficient Designs",
    "Comprehensive Installation",
    "Maintenance & Service",
    "Project Management"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl"
            animate={{
              x: [0, -50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Page Header with Enhanced Animations */}
        <motion.div 
          className="text-center mb-16 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm mb-4 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="mr-2 h-4 w-4" />
            </motion.div>
            PARTNERSHIP EXCELLENCE
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            variants={itemVariants}
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Trusted</span> Partnerships
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Join hands with industry leaders in electrical engineering solutions
          </motion.p>
          
          {/* Decorative animated line */}
          <motion.div
            className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content with Staggered Animations */}
          <motion.div 
            className="lg:w-2/5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Electrical Solutions</span>?
              </h2>
              <p className="text-gray-600 mb-6">
                With over a decade of expertise in electrical engineering, we provide cutting-edge 
                solutions tailored to your specific industrial and commercial needs. Our commitment 
                to excellence ensures reliable, efficient, and future-ready electrical systems.
              </p>
            </motion.div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start p-4 rounded-xl bg-white/80 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg text-blue-600"
                    whileHover={{ rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center Image with Enhanced Effects */}
          <motion.div 
            className="lg:w-1/5 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring", 
              stiffness: 100,
              duration: 0.8 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Main container with shadow */}
              <motion.div 
                className="relative w-full h-full rounded-full bg-gradient-to-br from-white/80 to-blue-50/80 p-4 shadow-2xl flex items-center justify-center backdrop-blur-lg border border-white/50"
                whileHover={{ 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/handshake.png"
                    alt="Hand Shake Partnership"
                    fill
                    priority
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    quality={90}
                  />
                </div>
              </motion.div>
              
              {/* Animated rings */}
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  className="absolute -inset-4 rounded-full border-2 border-blue-500/20"
                  animate={{
                    scale: [1, 1.5, 2],
                    opacity: [0.2, 0.1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Content with Staggered Animations */}
          <motion.div 
            className="lg:w-2/5 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Specialized</span> Offerings
              </h2>
              <p className="text-gray-600 mb-6">
                We deliver comprehensive electrical solutions across various sectors, 
                ensuring optimal performance and safety standards for every project.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center p-3 rounded-lg bg-white/80 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5,
                    backgroundColor: "rgba(249, 250, 251, 0.9)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <CheckCircle className="h-3 w-3 text-blue-600" />
                  </motion.div>
                  <span className="ml-3 text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

           
          </motion.div>
        </div>

        {/* Additional Info Section with Enhanced Animations */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-4"
              whileHover={{ rotate: 10 }}
            >
              <Zap className="h-8 w-8" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Main LT Panels</h3>
            <p className="text-gray-600">
              Reliable power distribution and control for low tension electrical systems
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-4"
              whileHover={{ rotate: 10 }}
            >
              <Cpu className="h-8 w-8" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Electronic Panels</h3>
            <p className="text-gray-600">
              Precision control systems for complex industrial applications
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
            variants={itemVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 mb-4"
              whileHover={{ rotate: 10 }}
            >
              <Shield className="h-8 w-8" />
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">APFC Panels</h3>
            <p className="text-gray-600">
              Energy efficiency optimization through power factor correction
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-24 text-center py-12 px-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Partnership?</h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
              Connect with our experts to discuss your electrical engineering needs
            </p>
            <motion.button
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HandShake;