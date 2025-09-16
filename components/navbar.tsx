'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronDown, Menu, X } from 'lucide-react';
import Dropdown from '../components/Dropdown';

const products = [
  { name: 'Submersible Starter Panels', href: '/submersiblestarterpanels' },
  { name: 'AC & DC Drives', href: '/ac-dc-drives' },
  { name: 'APFC Panels', href: '/apfc-panels' },
  { name: 'AMF Panels', href: '/amf-panels' },
  { name: 'Fire Fighting Panel', href: '/electronic-panels' },
  { name: 'Meter Box Panel', href: '/meter-board-panels' },
  { name: 'Synchronize Panel', href: '/synchronizing-panels' },
  { name: 'Distribution Panel', href: '/distribution-boards' },
  { name: 'Control Desks', href: '/control-desks' },
  { name: 'Bus Ducts', href: '/bus-ducts' },
  { name: 'Main LT Panel', href: '/main-lt-panel-with-plc' },
  { name: 'Cable Tray', href: '/cable-tray' },
];

const gallery = [{ name: 'Image', href: '/gallery/image' }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-500 backdrop-blur-md',
        scrolled 
          ? 'bg-white/90 shadow-lg border-b border-gray-100' 
          : 'bg-white/80 border-b border-gray-100/50'
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-32 transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="DP Electricals Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1 items-center justify-center flex-1">
          <Link
            href="/"
            className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
          </Link>

          <Link
            href="/about"
            className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
          >
            About
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 cursor-pointer hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50">
              Products <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="grid grid-cols-2 gap-1 p-4">
                {products.map((product, index) => (
                  <Link
                    key={index}
                    href={product.href}
                    className="px-3 py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Dropdown */}
          <div className="relative group">
            <span className="flex items-center px-4 py-2 text-sm font-medium text-gray-800 cursor-pointer hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50">
              Gallery <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
            </span>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                {gallery.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/blog"
            className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
          >
            Blog
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
          </Link>

          <Link
            href="/contact"
            className="group relative px-4 py-2 text-sm font-medium text-gray-800 hover:text-orange-500 transition-colors duration-300 rounded-lg hover:bg-gray-50"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-100">
          <div className="flex flex-col max-h-[80vh] overflow-y-auto">
            <ul className="flex flex-col py-4">
              <li>
                <Link
                  href="/"
                  className="block px-6 py-3 text-sm font-medium text-gray-800 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-6 py-3 text-sm font-medium text-gray-800 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="px-6 py-3">
                <div className="flex flex-col">
                  <span className="flex items-center text-sm font-medium text-gray-800">
                    Products <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                  <div className="mt-2 pl-4 space-y-2">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        href={product.href}
                        className="block py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg px-3 transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li className="px-6 py-3">
                <div className="flex flex-col">
                  <span className="flex items-center text-sm font-medium text-gray-800">
                    Gallery <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                  <div className="mt-2 pl-4 space-y-2">
                    {gallery.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block py-2 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg px-3 transition-colors duration-200"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block px-6 py-3 text-sm font-medium text-gray-800 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-6 py-3 text-sm font-medium text-gray-800 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="p-6 pt-0">
              <Link
                href="/contact"
                className="block w-full text-center px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}