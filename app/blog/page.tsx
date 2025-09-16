'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

export default function BlogPage() {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  const circleData = [
    {
      title: "Industry Insights",
      description: "Latest innovations in electrical engineering.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: "💡",
      link: "/blog/industry-insights"
    },
    {
      title: "Technical Guides",
      description: "Step-by-step tutorials for complex electrical systems",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      icon: "⚙️",
      link: "/blog/technical-guides"
    },
    {
      title: "Case Studies",
      description: "Real-world applications of our electrical solutions",
      color: "bg-gradient-to-br from-orange-500 to-amber-500",
      icon: "📊",
      link: "/blog/case-studies"
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Illuminating Your Space: The Science and Art of Home Lighting by D.P Electricals",
      excerpt: "Discover the perfect balance of functionality and aesthetics in home lighting design.",
      image: "blog12.jpeg",
      date: "May 15, 2023",
      author: "DP Electricals Team",
      category: "Lighting Design",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Smarter Power Distribution for Growing Businesses",
      excerpt: "Learn how modern power distribution systems can scale with your business needs.",
      image: "/ac-dc-drives-blog.png",
      date: "Apr 28, 2023",
      author: "Engineering Dept",
      category: "Power Systems",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Custom-Built Control Desks That Power Industrial Precision",
      excerpt: "Explore how tailored control solutions enhance operational efficiency.",
      image: "/synchronizing-panels-blog.jpeg",
      date: "Apr 12, 2023",
      author: "Product Development",
      category: "Industrial Solutions",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Learn how to optimize energy usage in your home or business.",
      excerpt: "Practical tips to reduce energy consumption and lower utility bills.",
      image: "/energy-efficiency.jpeg",
      date: "Mar 30, 2023",
      author: "Energy Experts",
      category: "Energy Efficiency",
      readTime: "4 min read"
    },
    {
      id: 5,
      title: "Explore the latest trends in industrial automation and control systems.",
      excerpt: "How automation is transforming modern manufacturing processes.",
      image: "/industrial-automation.jpeg",
      date: "Mar 18, 2023",
      author: "Automation Team",
      category: "Automation",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Discover how smart home technology can simplify your life.",
      excerpt: "The future of home automation is here - are you ready?",
      image: "/smart-home.jpg",
      date: "Mar 5, 2023",
      author: "Smart Tech Team",
      category: "Smart Home",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Understanding APFC Panels: Your Guide to Power Factor Correction",
      excerpt: "Everything you need to know about improving electrical efficiency.",
      image: "/APFCPanel.jpg",
      date: "Feb 22, 2023",
      author: "Technical Support",
      category: "Power Systems",
      readTime: "6 min read"
    },
    {
      id: 8,
      title: "Industrial Automation Trends: The Future of Electrical Control Systems",
      excerpt: "What's next in the world of industrial automation technology.",
      image: "/DPElectrical3.jpg",
      date: "Feb 10, 2023",
      author: "Innovation Lab",
      category: "Automation",
      readTime: "9 min read"
    },
    {
      id: 9,
      title: "Electrical Safety in Industrial Environments: Best Practices and Standards",
      excerpt: "Essential safety protocols every industrial facility should implement.",
      image: "/Statistics.jpg",
      date: "Jan 28, 2023",
      author: "Safety Compliance",
      category: "Safety",
      readTime: "7 min read"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900">
        {/* Online background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1623078626940-9a70f268c14d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Electrical Engineering Background"
            fill
            className="object-cover opacity-20"
            priority
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-1"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div 
              className="inline-flex items-center justify-center rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              INSIGHTS & INNOVATION
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Electrical <span className="text-blue-300">Insights</span> Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Stay updated with the latest trends, innovations, and expert advice in electrical engineering and industrial solutions.
            </p>
            
            <motion.div 
              className="inline-flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="#latest-posts" 
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Explore Articles
              </Link>
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Explore by <span className="text-blue-600">Category</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Find the topics that interest you most
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12">
            {circleData.map((circle, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCircle(index)}
                onMouseLeave={() => setHoveredCircle(null)}
              >
                {/* Animated Circle */}
                <div
                  className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full ${circle.color} 
                  flex items-center justify-center shadow-xl
                  transition-all duration-500 ease-in-out
                  ${hoveredCircle === index ? 'scale-110' : 'scale-100'}`}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-2 rounded-full ${circle.color} opacity-30 blur-xl ${hoveredCircle === index ? 'animate-pulse' : ''}`}></div>
                  
                  {/* Icon */}
                  <div className="text-3xl md:text-4xl z-10">
                    {circle.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{circle.title}</h3>
                  <p className="text-gray-600">{circle.description}</p>
                </div>

                {/* Hover Card */}
                <motion.div
                  className="absolute top-full mt-6 w-64 p-6 bg-white rounded-xl shadow-2xl border border-gray-100 z-20"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ 
                    opacity: hoveredCircle === index ? 1 : 0, 
                    y: hoveredCircle === index ? 0 : 20, 
                    scale: hoveredCircle === index ? 1 : 0.9 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{circle.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{circle.description}</p>
                  <Link 
                    href={circle.link} 
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                  >
                    Explore articles
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section id="latest-posts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Latest <span className="text-blue-600">Articles</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover our most recent insights and expert advice
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="overflow-hidden group relative h-full flex flex-col rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <User className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">{post.author}</span>
                      </div>
                      <Link 
                        href={`/blog/post-${post.id}`} 
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group"
                      >
                        Read more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our <span className="text-blue-300">Latest Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Subscribe to our newsletter and never miss an update on electrical innovations and industry trends.
            </p>
            
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}