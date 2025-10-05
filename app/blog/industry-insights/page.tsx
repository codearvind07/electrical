import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';

export default function IndustryInsights() {
  const articles = [
    {
      id: 1,
      title: "The Future of Smart Grid Technology in Industrial Applications",
      excerpt: "Exploring how next-generation smart grid solutions are transforming industrial energy management and efficiency.",
      image: "/energy-efficiency.jpeg",
      date: "June 15, 2025",
      readTime: "8 min read",
      category: "Industry Trends"
    },
    {
      id: 2,
      title: "Emerging Trends in Electrical Safety Standards for 2025",
      excerpt: "A comprehensive look at the latest updates to electrical safety regulations and their impact on industrial operations.",
      image: "/Statistics.jpg",
      date: "May 28, 2025",
      readTime: "6 min read",
      category: "Safety"
    },
    {
      id: 3,
      title: "How IoT is Revolutionizing Electrical Maintenance Practices",
      excerpt: "Discover how Internet of Things technology is enabling predictive maintenance and reducing downtime in electrical systems.",
      image: "/industrial-automation.jpeg",
      date: "May 10, 2025",
      readTime: "7 min read",
      category: "Technology"
    },
    {
      id: 4,
      title: "Sustainable Energy Solutions for Modern Manufacturing",
      excerpt: "Examining the shift toward renewable energy sources and energy storage systems in manufacturing environments.",
      image: "/APFCPanel.jpg",
      date: "April 22, 2025",
      readTime: "9 min read",
      category: "Sustainability"
    }
  ];

  return (
    <>
      <Head>
        <title>Industry Insights | DP Electricals Blog</title>
        <meta name="description" content="Stay updated with the latest industry trends, innovations, and expert analysis in electrical engineering and industrial solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900">
          {/* Online background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Industry Insights Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-1"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Industry <span className="text-blue-300">Insights</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Expert analysis and commentary on the latest trends, innovations, and developments shaping the electrical engineering industry.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Link 
                      href={`/blog/post-${article.id}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                    >
                      Read more
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-2/3 relative aspect-[4/3] md:aspect-auto">
                <Image
                  src="/DPElectrical3.jpg"
                  alt="The Evolution of Industrial Control Systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
              <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full mb-4 w-fit">
                  Featured Insight
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  The Evolution of Industrial Control Systems
                </h2>
                <p className="text-gray-600 mb-6">
                  A deep dive into how industrial control systems have evolved from basic relay logic to sophisticated PLC and SCADA systems, and what the future holds.
                </p>
                <Link 
                  href="/blog/evolution-of-control-systems" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-fit"
                >
                  Read Full Article
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}