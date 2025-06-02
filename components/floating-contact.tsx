'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Show the floating contact after a small delay
    const timer = setTimeout(() => {setIsVisible(true);}, 600);
    return () => clearTimeout(timer);
    }, []);

  return (
    <div className={`fixed left-0 top-1/3 z-50 flex flex-col gap-3 transition-all duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}>
      <Link href="mailto:dpelectrical85@gmail.com">
        <div className="bg-white rounded-r-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200">
          <Mail className="text-orange-500 h-6 w-6" />
        </div>
      </Link>
      
      <Link href="tel:9818144519">
        <div className="bg-white rounded-r-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200">
          <Phone className="text-orange-500 h-6 w-6" />
        </div>
      </Link>
      
      <Link href="/contact">
        <div className="bg-white rounded-r-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200">
          <MapPin className="text-orange-500 h-6 w-6" />
        </div>
      </Link>
      
      <Link href="https://wa.me/919818144519" target="_blank" rel="noopener noreferrer">
        <div className="bg-white rounded-r-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200">
          <div className="relative h-6 w-6">
            <Image
              src="/whatsapp.png"
              alt="WhatsApp"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}