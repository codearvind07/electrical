import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function ControlDesks() {
  return (
    <>
      <Head>
        <title>Control Desks | DP Electricals</title>
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/controldesk.png"
          alt="Control Desks"
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
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Ergonomic & Efficient Control Desks for Industrial Operations
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Control desks are critical interfaces that allow operators to manage and monitor industrial systems from a centralized, ergonomic location. At D.P. Electricals, our control desks are engineered with operator comfort, safety, and reliability in mind. Designed for easy access and equipped with intuitive control layouts, these desks are ideal for remote operation and process control.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
                <li>Ergonomically built for safe and comfortable usage</li>
                <li>High-quality push buttons, indicators, and control elements</li>
                <li>Spacious layouts with clearly labeled connections</li>
                <li>Rugged, long-lasting metal construction</li>
                <li>Easy-to-maintain modular design</li>
                <li>Supports centralized monitoring and remote operations</li>
                <li>Custom configurations tailored to your control needs</li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/gallery19.jpeg"
                alt="Control Desk Showcase"
                width={600}
                height={400}
                className="rounded-xl object-cover transform transition-transform group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500 rounded-xl" />
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: 'Integrated Control Systems',
                desc: 'Consolidated control interfaces for process automation and equipment monitoring.'
              },
              {
                title: 'Modular Panel Design',
                desc: 'Adaptable structures that can be tailored or expanded per requirement.'
              },
              {
                title: 'Operator-Friendly Layout',
                desc: 'Simplifies complex control processes with intuitive and clearly labeled setups.'
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
                title: 'Process Industries',
                desc: 'Used in refineries, chemical plants, and food processing for streamlined operations.',
                img: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg'
              },
              {
                title: 'Power Plants',
                desc: 'Crucial in power generation environments for equipment supervision and safety.',
                img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg'
              },
              {
                title: 'Factory Control Rooms',
                desc: 'Supports manufacturing floor control and machine coordination.',
                img: 'https://i.pinimg.com/736x/ef/8d/33/ef8d3393c34fb29dc133f064ea8ba0f7.jpg'
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
