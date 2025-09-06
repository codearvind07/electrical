import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Submersible Starter Panels | Submersible Pump Control Panel Manufacturers',
  description: 'Leading submersible starter panel manufacturers and suppliers. High-quality submersible pump control panels with thermal overload protection, voltage monitoring, and durable construction. Get competitive submersible starter panel prices in India.',
  keywords: [
    'submersible starter panel',
    'submersible pump control panel',
    'submersible starter panel manufacturers',
    'submersible starter panel price',
    'submersible pump starter panel suppliers',
    'submersible control panel box',
    'submersible starter panel dealers in Noida',
    'submersible pump control panel suppliers in Delhi'
  ],
};

export default function SubmersibleStarterPanels() {
  return (
    <>
      <Head>
        <title>Submersible Starter Panels | Submersible Pump Control Panel Manufacturers</title>
        <meta name="description" content="Leading submersible starter panel manufacturers and suppliers. High-quality submersible pump control panels with thermal overload protection, voltage monitoring, and durable construction. Get competitive submersible starter panel prices in India." />
        <meta name="keywords" content="submersible starter panel, submersible pump control panel, submersible starter panel manufacturers, submersible starter panel price, submersible pump starter panel suppliers, submersible control panel box" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden m-0 p-0">
        <Image
          src="/dropdown/Submersible Starter Panels.png"
          alt="Submersible Starter Panels"
          fill
          priority
          className="object-cover"
        />
        
      </section>

      {/* Main Content */}
      <main className="px-6 py-16 max-w-7xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-20 text-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-6 text-gray-700">
                Submersible starter panels play a critical role in managing motor operations in submersible pump systems. They protect against overload, monitor voltage levels, and provide seamless start/stop functionality — essential for irrigation, domestic water systems, and industrial fluid handling.
              </p>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">Smart Control Panels: The Brain Behind Your Machinery</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Real-time monitoring of operations</li>
                <li>Automatic alerts for overheating or malfunctions</li>
                <li>Easy controls to adjust performance</li>
                <li>Safety shutdowns when needed</li>
              </ul>
            </div>
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/gallery/gallery35.jpeg"
                alt="Smart Control Panel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* LT Installation Section */}
        <section className="mb-20 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-orange-600 mb-6">LT Installation</h2>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Services Offered:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Design of wiring methods</li>
            <li>Assistance in choosing the right luminaries</li>
            <li>Internal wiring including MCBs, MCCBs</li>
            <li>Provide adequate protective devices</li>
            <li>Load audits</li>
            <li>Code compliance</li>
            <li>Electrical service upgrades and repairs</li>
            <li>Complete electrical services</li>
            <li>Indoor and outdoor lighting</li>
          </ul>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-orange-100 to-white">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: 'Thermal Overload Protection',
                desc: 'Prevents damage to the motor by disconnecting power during overheating or excessive load.'
              },
              {
                title: 'Voltage Monitoring',
                desc: 'Automatically disconnects power during under-voltage or over-voltage to prevent motor damage.'
              },
              {
                title: 'Durable Construction',
                desc: 'Designed to withstand harsh environmental conditions, ideal for agricultural and industrial use.'
              }
            ].map(({ title, desc }, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-all border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-orange-600">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-gray-50">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                img: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg',
                title: 'Agricultural Use',
                desc: 'Ideal for irrigation systems and rural water supply in agricultural fields.'
              },
              {
                img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg',
                title: 'Domestic Applications',
                desc: 'Commonly used in homes with borewell systems for efficient water pumping.'
              },
              {
                img: 'https://i.pinimg.com/736x/ef/8d/33/ef8d3393c34fb29dc133f064ea8ba0f7.jpg',
                title: 'Industrial Settings',
                desc: 'Supports pumping needs in manufacturing and processing plants.'
              }
            ].map(({ img, title, desc }, idx) => (
              <Card key={idx} className="overflow-hidden shadow-lg">
                <div className="relative h-64 w-full">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}