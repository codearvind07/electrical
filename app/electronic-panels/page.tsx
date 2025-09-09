import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Fire Fighting Panels | Fire Pump Control Panel Manufacturers',
  description: 'Leading fire fighting control panel manufacturers and suppliers. High-quality fire pump control panels with automatic control, safety features, and real-time monitoring.',
  keywords: [
    'fire fighting control panel',
    'fire pump control panel manufacturers',
    'fire fighting panel suppliers',
    'fire hydrant pump control panel',
    'fire sprinkler pump panel',
    'fire fighting panel price in India',
    'fire fighting control panel dealers in Noida',
    'fire pump control panel suppliers in Delhi'
  ],
};

export default function ElectronicPanels() {
  return (
    <>
      <Head>
        <title>Fire Fighting Panels | Fire Pump Control Panel Manufacturers</title>
        <meta name="description" content="Leading fire fighting control panel manufacturers and suppliers. High-quality fire pump control panels with automatic control, safety features, and real-time monitoring." />
        <meta name="keywords" content="fire fighting control panel, fire pump control panel manufacturers, fire fighting panel suppliers, fire hydrant pump control panel, fire sprinkler pump panel, fire fighting panel price in India" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/firefightingpanel.png"
          alt="Electronic Panels"
          fill
          priority
          className="object-contain"
        />
      </section>

      <main className="px-6 py-12 max-w-7xl mx-auto">
        {/* Intro Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Customized Electronic Control Panels for Every Application
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At D.P. Electricals, we specialize in designing and manufacturing custom electronic control panels tailored to your project's exact needs—be it electrical, electronic, mechanical, or integrated systems.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Just share your specifications and we'll deliver a precise, safe, and high-performance solution designed for long-term reliability.
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 font-medium">
                <li>Custom-built to your project's technical requirements</li>
                <li>Supports hybrid systems: electrical + mechanical + electronic</li>
                <li>Perfect for automation and industrial power solutions</li>
                <li>Designed for safety, durability, and continuous operation</li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/gallery15.jpeg"
                alt="Electronic Panel Showcase"
                width={600}
                height={400}
                className="rounded-xl object-cover transform transition-transform group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500 rounded-xl" />
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automatic Control',
                description: 'Enables seamless operation and automation of systems with minimal human intervention.'
              },
              {
                title: 'Safety Features',
                description: 'Built-in mechanisms to prevent overloads, faults, and ensure operational safety.'
              },
              {
                title: 'Real-Time Monitoring',
                description: 'Track parameters like voltage, current, and system health live from the control panel.'
              }
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-white"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Industrial Use',
                description: 'Ideal for manufacturing, assembly lines, and heavy machinery control.',
                image: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg'
              },
              {
                title: 'Commercial Buildings',
                description: 'Provides stable control for elevators, lighting, HVAC and more in commercial setups.',
                image: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg'
              },
              {
                title: 'Residential Use',
                description: 'Supports home automation and backup systems for uninterrupted living.',
                image: 'https://i.pinimg.com/736x/ef/8d/33/ef8d3393c34fb29dc133f064ea8ba0f7.jpg'
              }
            ].map((app, idx) => (
              <Card key={idx} className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}