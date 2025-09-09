import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Meter Box Panels | Electric Meter Box Manufacturers',
  description: 'Leading meter box panel manufacturers and suppliers. High-quality electric meter boxes with automatic control, built-in safety, and real-time feedback.',
  keywords: [
    'meter box panel manufacturers',
    'electric meter box suppliers',
    'meter distribution panel',
    'single phase meter box panel',
    'three phase meter box panel',
    'meter box enclosure',
    'meter box panel dealers in Noida',
    'electric meter box suppliers in Delhi'
  ],
};

export default function MeterBoardPanels() {
  return (
    <>
      <Head>
        <title>Meter Box Panels | Electric Meter Box Manufacturers</title>
        <meta name="description" content="Leading meter box panel manufacturers and suppliers. High-quality electric meter boxes with automatic control, built-in safety, and real-time feedback." />
        <meta name="keywords" content="meter box panel manufacturers, electric meter box suppliers, meter distribution panel, single phase meter box panel, three phase meter box panel, meter box enclosure" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/meterboxpanel.png"
          alt="Meter Board Panels"
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
                Tailor-Made Meter Board Panels for Your Power Needs
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We specialize in designing meter board panels that meet your unique technical specifications. Whether your requirement includes electrical, electronic, mechanical, or hybrid systems, our panels are built for performance and longevity.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
                <li>Custom-designed monitoring and control panels</li>
                <li>Support for electronic, electrical, mechanical, or hybrid systems</li>
                <li>Built to customer-supplied design specifications</li>
                <li>Engineered for precision, safety, and durability</li>
                <li>Ideal for a wide range of industrial and commercial applications</li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/gallery9.jpeg"
                alt="Meter Board Panel Showcase"
                width={600}
                height={400}
                className="rounded-xl object-cover transform transition-transform group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500 rounded-xl" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automatic Control',
                description:
                  'Offers seamless automatic control of power systems, ensuring consistent and efficient energy usage.'
              },
              {
                title: 'Built-in Safety',
                description:
                  'Advanced safety features to protect against overload, short circuit, and other system risks.'
              },
              {
                title: 'Real-Time Feedback',
                description:
                  'Enables real-time performance tracking including voltage, current, and load levels.'
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-white"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
                description:
                  'Deployed in factories and workshops to manage distributed loads and ensure power quality.',
                image:
                  'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg'
              },
              {
                title: 'Commercial Buildings',
                description:
                  'Installed in malls, hospitals, and office complexes for efficient and uninterrupted power management.',
                image:
                  'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg'
              },
              {
                title: 'Residential Applications',
                description:
                  'Ensures power distribution and safety for homes and apartment buildings.',
                image:
                  'https://i.pinimg.com/736x/ef/8d/33/ef8d3393c34fb29dc133f064ea8ba0f7.jpg'
              }
            ].map((app, index) => (
              <Card key={index} className="overflow-hidden group">
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