'use client';

import Image from 'next/image';

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
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Gallery Image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}