import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Users, Zap, TrendingUp } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Modernizing Manufacturing Facility with Smart Control Systems",
      excerpt: "How we transformed a traditional manufacturing plant into a smart facility with integrated control systems, reducing energy consumption by 35%.",
      image: "/DPElectrical3.jpg",
      date: "June 20, 2025",
      industry: "Manufacturing",
      results: [
        { icon: <Zap className="h-4 w-4" />, value: "35% Energy Reduction" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "25% Productivity Increase" },
        { icon: <Users className="h-4 w-4" />, value: "500+ Employees" }
      ]
    },
    {
      id: 2,
      title: "Hospital Infrastructure Upgrade with Redundant Power Systems",
      excerpt: "Implementing mission-critical power solutions for a major hospital, ensuring 99.99% uptime for life-saving equipment.",
      image: "/Statistics.jpg",
      date: "May 15, 2025",
      industry: "Healthcare",
      results: [
        { icon: <Award className="h-4 w-4" />, value: "99.99% Uptime" },
        { icon: <Zap className="h-4 w-4" />, value: "Zero Downtime" },
        { icon: <Users className="h-4 w-4" />, value: "1,200+ Beds" }
      ]
    },
    {
      id: 3,
      title: "Commercial Complex Energy Efficiency Optimization",
      excerpt: "Complete electrical infrastructure overhaul for a commercial complex, resulting in significant cost savings and improved sustainability.",
      image: "/energy-efficiency.jpeg",
      date: "April 10, 2025",
      industry: "Commercial",
      results: [
        { icon: <TrendingUp className="h-4 w-4" />, value: "42% Cost Savings" },
        { icon: <Zap className="h-4 w-4" />, value: "28% Energy Reduction" },
        { icon: <Users className="h-4 w-4" />, value: "15 Buildings" }
      ]
    },
    {
      id: 4,
      title: "Data Center Power Distribution System Design",
      excerpt: "Custom power distribution solution for a Tier IV data center, ensuring maximum reliability and scalability.",
      image: "/industrial-automation.jpeg",
      date: "March 5, 2025",
      industry: "Technology",
      results: [
        { icon: <Award className="h-4 w-4" />, value: "Tier IV Certified" },
        { icon: <Zap className="h-4 w-4" />, value: "99.995% Reliability" },
        { icon: <TrendingUp className="h-4 w-4" />, value: "50MW Capacity" }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies | DP Electricals Blog</title>
        <meta name="description" content="Real-world examples of our electrical engineering solutions in action across various industries, showcasing measurable results and client success stories." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-r from-amber-900 to-orange-900">
          {/* Online background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Case Studies Background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-orange-900/80 z-1"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-amber-300 hover:text-white mb-6 transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Case <span className="text-amber-300">Studies</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real-world examples of our electrical engineering solutions in action, showcasing measurable results and client success stories.
              </p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article 
                key={study.id} 
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
                      {study.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {study.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {study.excerpt}
                  </p>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, index) => (
                      <div key={index} className="bg-amber-50 p-3 rounded-lg text-center">
                        <div className="text-amber-600 mb-1 flex justify-center">
                          {result.icon}
                        </div>
                        <div className="text-sm font-medium text-gray-900">{result.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{study.date}</span>
                    <Link 
                      href={`/blog/case-study-${study.id}`} 
                      className="text-amber-600 hover:text-amber-800 font-medium text-sm flex items-center"
                    >
                      View Case Study
                      <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Success Story</h2>
              <blockquote className="text-xl text-gray-700 italic mb-8">
                "DP Electricals transformed our facility's electrical infrastructure with innovative solutions that exceeded our expectations. Their expertise and attention to detail resulted in significant energy savings and improved operational efficiency. The project was completed on time and within budget, and their ongoing support has been invaluable."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="font-bold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600">Director of Operations, TechManufacturing Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}