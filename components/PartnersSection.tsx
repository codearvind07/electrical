'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const PartnersSection = () => {
  // Array of partner logos
  const partners = [
    { id: 1, name: 'Partner 1', logo: '/partner/logo1.png' },
    { id: 2, name: 'Partner 2', logo: '/partner/logo2.png' },
    { id: 3, name: 'Partner 3', logo: '/partner/logo3.png' },
    { id: 4, name: 'Partner 4', logo: '/partner/logo4.png' },
    { id: 5, name: 'Partner 5', logo: '/partner/logo5.png' },
    { id: 6, name: 'Partner 6', logo: '/partner/logo6.png' },
    { id: 7, name: 'Partner 7', logo: '/partner/logo7.png' },
    { id: 8, name: 'Partner 8', logo: '/partner/logo8.png' },
    { id: 9, name: 'Partner 9', logo: '/partner/logo9.png' },
    { id: 10, name: 'Partner 10', logo: '/partner/logo10.png' },
    { id: 11, name: 'Partner 11', logo: '/partner/logo11.png' },
    { id: 12, name: 'Partner 12', logo: '/partner/logo12.png' },
    { id: 13, name: 'Partner 13', logo: '/partner/logo13.png' },
    { id: 14, name: 'Partner 14', logo: '/partner/logo14.png' },
    { id: 15, name: 'Partner 15', logo: '/partner/logo15.png' },
    { id: 16, name: 'Partner 16', logo: '/partner/logo16.png' },
  ];

  // Split partners into two rows of 8 logos each
  const firstRow = partners.slice(0, 8);
  const secondRow = partners.slice(8, 16);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center justify-center rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-600 backdrop-blur-sm mb-6"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2 animate-pulse"></span>
            TRUSTED PARTNERS
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry <span className="text-orange-500">Leaders</span> We Work With
          </h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Collaborating with the most innovative companies to deliver cutting-edge electrical solutions
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        {/* First Row - Continuously Moving Right */}
        <div className="overflow-hidden mb-8">
          <motion.div
            animate={{ x: [0, -200, 0] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-6 min-w-max"
          >
            {[...firstRow, ...firstRow].map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200/50 min-w-[12rem]"
              >
                <div className="relative w-48 h-24 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-opacity duration-300 group-hover:opacity-100 opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Continuously Moving Left */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, 200, 0] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-6 min-w-max"
          >
            {[...secondRow, ...secondRow].map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200/50 min-w-[12rem]"
              >
                <div className="relative w-48 h-24 flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain transition-opacity duration-300 group-hover:opacity-100 opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;