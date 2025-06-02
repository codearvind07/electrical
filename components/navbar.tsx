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
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-32">
            <Image
              src="/logo.png"
              alt="DP Electricals Logo"
              width={100}
              height={45}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center justify-center flex-1">
          <Link
            href="/"
            className="group relative text-sm font-medium text-gray-800 hover:text-orange-500"
          >
            Home
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="group relative text-sm font-medium text-gray-800 hover:text-orange-500"
          >
            About
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Products Dropdown */}
          <Dropdown
            trigger={
              <span className="text-sm font-medium text-gray-800 flex items-center cursor-pointer hover:text-orange-500">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </span>
            }
            items={products.map((product) => ({
              label: product.name,
              href: product.href,
            }))}
            activationType="hover"
            position="center"
            menuClassName="w-60 bg-white shadow-lg rounded-lg p-4"
          />

          {/* Gallery Dropdown */}
          <Dropdown
            trigger={
              <span className="text-sm font-medium text-gray-800 flex items-center cursor-pointer hover:text-orange-500">
                Gallery <ChevronDown className="ml-1 h-4 w-4" />
              </span>
            }
            items={gallery.map((item) => ({
              label: item.name,
              href: item.href,
            }))}
            activationType="hover"
            position="center"
            menuClassName="w-48 bg-white shadow-lg rounded-lg p-4"
          />

          <Link
            href="/blog"
            className="group relative text-sm font-medium text-gray-800 hover:text-orange-500"
          >
            Blog
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/contact"
            className="group relative text-sm font-medium text-gray-800 hover:text-orange-500"
          >
            Contact
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 p-4 overflow-y-auto max-h-[80vh]">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-gray-800 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-800 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Dropdown
                trigger={
                  <span className="text-sm font-medium text-gray-800 flex items-center cursor-pointer hover:text-orange-500">
                    Products <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                }
                items={products.map((product) => ({
                  label: product.name,
                  href: product.href,
                }))}
                activationType="click"
                position="center"
                menuClassName="w-full bg-white shadow-lg rounded-lg p-4"
              />
            </li>
            <li>
              <Dropdown
                trigger={
                  <span className="text-sm font-medium text-gray-800 flex items-center cursor-pointer hover:text-orange-500">
                    Gallery <ChevronDown className="ml-1 h-4 w-4" />
                  </span>
                }
                items={gallery.map((item) => ({
                  label: item.name,
                  href: item.href,
                }))}
                activationType="click"
                position="center"
                menuClassName="w-full bg-white shadow-lg rounded-lg p-4"
              />
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-800 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-800 hover:text-orange-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}