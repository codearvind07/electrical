import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export default function TechnicalGuides() {
  const guides = [
    {
      id: 1,
      title: "Complete Guide to Installing Submersible Starter Panels",
      excerpt: "Step-by-step instructions for safe and efficient installation of submersible starter panels in industrial applications.",
      image: "/blog12.jpeg",
      date: "June 12, 2025",
      readTime: "12 min read",
      difficulty: "Intermediate",
      category: "Installation"
    },
    {
      id: 2,
      title: "Troubleshooting Common APFC Panel Issues",
      excerpt: "A comprehensive troubleshooting guide for identifying and resolving typical problems with Automatic Power Factor Correction panels.",
      image: "/APFCPanel.jpg",
      date: "May 30, 2025",
      readTime: "10 min read",
      difficulty: "Advanced",
      category: "Maintenance"
    },
    {
      id: 3,
      title: "Configuring AMF Panels for Optimal Performance",
      excerpt: "Learn how to properly configure Automatic Mains Failure panels for seamless power transfer and maximum reliability.",
      image: "/ac-dc-drives-blog.png",
      date: "May 18, 2025",
      readTime: "15 min read",
      difficulty: "Advanced",
      category: "Configuration"
    },
    {
      id: 4,
      title: "Wiring Diagrams for Control Desks",
      excerpt: "Detailed wiring diagrams and best practices for designing and implementing industrial control desk systems.",
      image: "/synchronizing-panels-blog.jpeg",
      date: "April 25, 2025",
      readTime: "14 min read",
      difficulty: "Intermediate",
      category: "Design"
    },
    {
      id: 5,
      title: "Maintaining Bus Duct Systems",
      excerpt: "Essential maintenance procedures to ensure the longevity and efficiency of bus duct installations.",
      image: "/industrial-automation.jpeg",
      date: "April 10, 2025",
      readTime: "9 min read",
      difficulty: "Intermediate",
      category: "Maintenance"
    },
    {
      id: 6,
      title: "Synchronizing Panel Calibration Guide",
      excerpt: "Precision calibration techniques for synchronizing panels to ensure accurate phase matching and load distribution.",
      image: "/Statistics.jpg",
      date: "March 28, 2025",
      readTime: "11 min read",
      difficulty: "Advanced",
      category: "Calibration"
    }
  ];

  return (
    <>
      <Head>
        <title>Technical Guides | DP Electricals Blog</title>
        <meta name="description" content="Step-by-step technical guides, tutorials, and how-to articles for electrical systems installation, maintenance, and troubleshooting." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-emerald-900 to-teal-900">
          {/* Online background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1573164713716-0a648067c8d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Technical Guides Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/80 z-1"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-emerald-300 hover:text-white mb-6 transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical <span className="text-emerald-300">Guides</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive step-by-step tutorials and technical documentation for electrical systems installation, maintenance, and troubleshooting.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Filter Options */}
          <div className="flex flex-wrap gap-3 mb-12">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium">
              All Guides
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
              Installation
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
              Maintenance
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
              Configuration
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
              Design
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300">
              Calibration
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article 
                key={guide.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {guide.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {guide.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{guide.date}</span>
                    <Link 
                      href={`/blog/guide-${guide.id}`} 
                      className="text-emerald-600 hover:text-emerald-800 font-medium text-sm flex items-center"
                    >
                      Read guide
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Help with a Technical Issue?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our expert team is ready to assist you with complex electrical challenges and custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-emerald-700 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Our Experts
              </Link>
              <Link 
                href="/support" 
                className="px-8 py-3 bg-emerald-800/30 text-white font-medium rounded-full border border-white/30 hover:bg-emerald-800/50 transition-all duration-300"
              >
                Technical Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}