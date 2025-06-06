'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function BlogPage() {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null); // Fixed typing issue

  const circleData = [
    {
      title: "Industry Insights",
      description: "Latest innovations in electrical engineering.",
      color: "bg-blue-500"
    },
    {
      title: "Technical Guides",
      description: "Step-by-step tutorials for complex electrical systems",
      color: "bg-green-500"
    },
    {
      title: "Case Studies",
      description: "Real-world applications of our electrical solutions",
      color: "bg-orange-500"
    }
  ];

  return (
    <>
      {/* Cover Section */}
      

      {/* Animated Circles Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20">
          {circleData.map((circle, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group"
              onMouseEnter={() => setHoveredCircle(index)}
              onMouseLeave={() => setHoveredCircle(null)}
            >
              {/* Animated Circle */}
              <div
                className={`relative w-40 h-40 rounded-full ${circle.color} 
                flex items-center justify-center
                transition-all duration-500 ease-in-out
                ${hoveredCircle === index ? 'scale-110' : 'scale-100'}`}
              >
                {/* Rotating Border Effect */}
                <div
                  className={`absolute -inset-2 rounded-full border-4 border-transparent
                  ${hoveredCircle === index ? 'animate-spin border-t-white' : ''}`}
                ></div>

                {/* Circle Content */}
                <div
                  className={`text-center px-4 transition-opacity duration-300
                  ${hoveredCircle === index ? 'opacity-0' : 'opacity-100'}`}
                >
                  <h3 className="text-xl font-bold text-white">{circle.title}</h3>
                </div>
              </div>

              {/* Expanded Text (appears on hover) */}
              <div
                className={`absolute top-0 w-64 p-6 bg-white rounded-lg shadow-xl
                transition-all duration-300 origin-top
                ${hoveredCircle === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                z-10 mt-48`}
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">{circle.title}</h3>
                <p className="text-gray-600">{circle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Posts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <Card className="overflow-hidden group relative">
              <Link href="/blog/blog1" className="block relative aspect-[4/3] w-full">
                <Image
                  src="blog12.jpeg"
                  alt="Submersible Starter Panels"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }} // Ensures full fit and center
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Illuminating Your Space</p>
                </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">Illuminating Your Space: The Science and Art of Home Lighting by D.P Electricals</h3>
                <Link
                  href="/blog/blog1"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 2 */}
            <Card className="overflow-hidden group relative">
              <Link href="/blog/blog2" className="block relative aspect-[4/3] w-full">
                <Image
                  src="/ac-dc-drives-blog.png"
                  alt="AC & DC Drives"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Smarter Power Distribution </p>
                </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">Smarter Power Distribution for Growing Businesses</h3>
                <Link
                  href="/blog/blog2"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 3 */}
            <Card className="overflow-hidden group relative">
              <Link href="/blog/blog3" className="block relative aspect-[4/3] w-full">
                <Image
                  src="/synchronizing-panels-blog.jpeg"
                  alt="Synchronizing Panels"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Custom-Built</p>
                </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">Custom-Built Control Desks That Power Industrial Precision</h3>
                <Link
                  href="/blog/blog3"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 4 */}
            <Card className="overflow-hidden group relative">
              <Link href="/blog/blog4" className="block relative aspect-[4/3] w-full">
                <Image
                  src="/energy-efficiency.jpeg"
                  alt="Energy Efficiency Tips"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Energy Efficiency Tips</p>
                </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1"> Learn how to optimize energy usage in your home or business.</h3>
                <Link
                  href="/blog/blog4"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 5 */}
            <Card className="overflow-hidden group relative">
              <Link href="/blog/blog5" className="block relative aspect-[4/3] w-full">
                <Image
                  src="/industrial-automation.jpeg"
                  alt="Industrial Automation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Industrial Automation Trends</p>
                </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1"> Explore the latest trends in industrial automation and control systems.</h3>
                <Link
                  href="/blog/blog5"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>

            {/* Blog Post 6 */}
            <Card className="overflow-hidden group relative">
              <Link href="/blog/blog6" className="block relative aspect-[4/3] w-full">
                <Image
                  src="/smart-home.jpg"
                  alt="Smart Home Solutions"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-lg font-medium">Smart Home Solutions </p>
                </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">Discover how smart home technology can simplify your life.</h3>
                <Link
                  href="/blog/blog6"
                  className="text-orange-500 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
