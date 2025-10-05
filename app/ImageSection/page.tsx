'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ImageSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/DP1.png"
          alt="Professional electrician at work"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-orange-500/20">
              EST. 2001
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            INDUSTRIAL EXPERTS. <br />
            <span className="text-orange-500">Electrical Solutions.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Delivering professional electrical services for commercial and industrial facilities 
            across India. With over 500+ successful projects and 20+ years of expertise.
          </motion.p>

          {/* Services Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {['INSTALLATION', 'MAINTENANCE', 'REPAIR'].map((service, i) => (
              <button
                key={i}
                className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-base ${
                  service === 'INSTALLATION'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white'
                }`}
              >
                {service}
              </button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { value: '500+', label: 'Projects' },
              { value: '20+', label: 'Years' },
              { value: '50+', label: 'Cities' },
              { value: '99%', label: 'Satisfaction' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 max-w-2xl mx-auto shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Search for electrical services..."
                aria-label="Search for electrical services"
                className="flex-grow px-6 py-4 bg-transparent text-white placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 whitespace-nowrap shadow-lg"
              >
                SEARCH
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/40 flex justify-center p-1">
          <div className="w-2 h-2 bg-white rounded-full mt-1 animate-pulse" />
        </div>
      </div>
    </section>
  );
}