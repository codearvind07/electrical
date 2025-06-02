import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Youtube, Home, Info, Box, Image as GalleryIcon, BookOpen, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Logo and Description */}
          <div className="flex-1 min-w-[200px] space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-16 w-32">
                <Image
                  src="/logo.png"
                  alt="DP Electricals Logo"
                  width={100}
                  height={45}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-white text-sm">
              Your trusted partner dedicated to delivering excellence in every electrical project we undertake.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Home className="h-5 w-5 text-orange-500" />
                <Link href="/" className="text-white hover:text-orange-500 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Info className="h-5 w-5 text-orange-500" />
                <Link href="/about" className="text-white hover:text-orange-500 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Box className="h-5 w-5 text-orange-500" />
                <Link href="#products-section" className="text-white hover:text-orange-500 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <GalleryIcon className="h-5 w-5 text-orange-500" />
                <Link href="/gallery/image" className="text-white hover:text-orange-500 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <BookOpen className="h-5 w-5 text-orange-500" />
                <Link href="/blog" className="text-white hover:text-orange-500 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <Link href="/contact" className="text-white hover:text-orange-500 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <address className="not-italic space-y-3 text-sm text-white">
              <p className="flex items-center gap-3">
                <MapPin className="h-10 w-10 text-orange-500" />
                Plot No. 145 & 146, Udyog Kendra 2, Ecotech-3, Greater Noida, 201306
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <Link href="mailto:dpelectrical85@gmail.com" className="hover:text-orange-500 transition-colors">
                  dpelectrical85@gmail.com
                </Link>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <Link href="tel:9818144519" className="hover:text-orange-500 transition-colors">
                  +91 9818144519
                </Link>
              </p>
            </address>
          </div>

          {/* Follow Us */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-orange-500 hover:text-white transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-orange-500 hover:text-white transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-orange-500 hover:text-white transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="h-6 w-6 text-orange-500 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} D.P.Electricals All rights reserved.
         <Link
              href="https://dmiraki.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-300 transition-colors"
            >
              Powered by D'Miraki
            </Link>
            </p>
        </div>
      </div>
    </footer>
  );
}