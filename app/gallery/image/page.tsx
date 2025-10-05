'use client';

import Image from 'next/image';
import { useState } from 'react';

const images = [
    '/gallery/gallery1.jpeg',
    '/gallery/gallery2.jpeg',
    '/gallery/gallery3.jpeg',
    '/gallery/gallery4.jpeg',
    '/gallery/gallery5.jpeg',
    '/gallery/gallery6.jpeg',
    '/gallery/gallery7.jpeg',
    '/gallery/gallery8.jpeg',
    '/gallery/gallery9.jpeg',
    '/gallery/gallery10.jpeg',
    '/gallery/gallery11.jpeg',
    '/gallery/gallery12.jpeg',
    '/gallery/gallery13.jpeg',
    '/gallery/gallery14.jpeg',
    '/gallery/gallery15.jpeg',
    '/gallery/gallery16.jpeg',
    '/gallery/gallery17.jpeg',
    '/gallery/gallery18.jpeg',
    '/gallery/gallery19.jpeg',
    '/gallery/gallery20.jpeg',
    '/gallery/gallery21.jpeg',
    '/gallery/gallery21.jpeg',
    '/gallery/gallery22.jpeg',
    '/gallery/gallery23.jpeg',
    '/gallery/gallery24.jpeg',
    '/gallery/gallery25.jpeg',
    '/gallery/gallery26.jpeg',
    '/gallery/gallery27.jpeg',
    '/gallery/gallery28.jpeg',
    '/gallery/gallery29.jpeg',
  ];

export default function GalleryImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Gallery</h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our collection of projects and installations that showcase our expertise in electrical solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div 
              key={i} 
              className={`relative group overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out cursor-pointer
                ${hoveredIndex === i ? 'scale-105 shadow-xl z-10' : 'scale-100'}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openModal(src)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={src}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold text-lg">Project View</h3>
                    <p className="text-sm opacity-80">Click to enlarge</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <button 
            className="absolute top-6 right-6 text-white hover:text-orange-400 transition-colors"
            onClick={closeModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}