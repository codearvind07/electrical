import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function ElectronicPanels() {
  return (
    <>
      <Head>
        <title>Electronic Panel | DP Electricals</title>
      </Head>

      {/* Header Section */}
      <header className="bg-white-400 text-orange-400 py- text-center">
        <h1 className="text-4xl font-bold">Cable Tray</h1>
      </header>
 {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/CableTray.png"
          alt="Cable Tray"
          fill
          priority
          className="object-contain"
        />
      </section>

      {/* Main Content */}
      <main className="px-6 py-16 max-w-7xl mx-auto">
        {/* Introduction */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Custom Cable Tray Systems Engineered for Reliability & Efficiency
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At D.P. Electricals, we specialize in manufacturing custom cable tray systems designed to support and organize your electrical wiring with unmatched reliability. Whether your project involves industrial, commercial, or infrastructure applications, our cable trays are engineered to meet your exact specifications for performance, strength, and safety.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Simply provide your project requirements, and we’ll deliver a cable management solution that ensures structural integrity, simplifies installation, and enhances long-term system efficiency.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
                <li>Custom-built designs tailored to your layout and load specifications</li>
                <li>Compatible with all electrical and industrial environments</li>
                <li>Ideal for power distribution, automation, and heavy-duty wiring systems</li>
                <li>Fabricated for maximum durability, corrosion resistance, and load-bearing capacity</li>
                <li>Engineered for safety, scalability, and easy maintenance under all conditions</li>
              </ul>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/gallery5.jpeg"
                alt="Cable Tray Showcase"
                width={600}
                height={400}
                className="rounded-xl object-cover transform transition-transform group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500 rounded-xl" />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Durable & Corrosion Resistant',
                desc: 'Fabricated from high-quality materials ensuring long-lasting performance even in harsh environments.'
              },
              {
                title: 'Easy Installation',
                desc: 'Engineered for quick and straightforward installation, reducing downtime and labor costs.'
              },
              {
                title: 'Scalable Design',
                desc: 'Modular layouts that can be easily expanded to accommodate future wiring needs.'
              }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industrial Facilities',
                desc: 'Used in factories, power plants, and manufacturing units to organize and protect heavy-duty wiring and cables efficiently.',
                img: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg'
              },
              {
                title: 'Commercial Buildings',
                desc: 'Essential for routing power, data, and HVAC control wiring in office complexes, malls, and hospitals for easy maintenance and scalability.',
                img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg'
              },
              {
                title: 'Data Centers',
                desc: 'Provides organized pathways for Ethernet and fiber-optic cables, reducing risk of interference and overheating.',
                img: '/data.png'
              }
            ].map((app, i) => (
              <Card key={i} className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={app.img}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{app.title}</h3>
                  <p className="text-gray-600">{app.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}