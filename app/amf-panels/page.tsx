import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AmfPanels() {
  return (
    <>
      <Head>
        <title>AMF Panels | DP Electricals</title>
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/amfpanel.png"
          alt="AMF Panels"
          fill
          priority
          className="object-contain"
        />
      </section>

      <main className="px-6 py-12 max-w-7xl mx-auto">
        {/* Intro Section with image */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Reliable AMF Panels for Automatic Power Control
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                An AMF (Auto Main Failure) panel is an essential part of any power backup system. It automatically detects power failures and activates the generator to maintain a continuous power supply—ensuring peace of mind and system uptime.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Once the main power returns, it safely switches back and shuts down the generator—minimizing manual intervention.
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 font-medium">
                <li>Automatically detects utility power loss</li>
                <li>Seamlessly transfers load using ATS or contactors</li>
                <li>Switches back and shuts down generator automatically</li>
                <li>Boosts efficiency and reduces downtime</li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/gallery3.jpeg"
                alt="AMF Panel Working"
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
                description: 'Seamlessly starts and stops generator sets during power failures and restorations.'
              },
              {
                title: 'Safety Mechanisms',
                description: 'Includes overload protection, voltage/frequency sensors, and circuit protection features.'
              },
              {
                title: 'Real-Time Monitoring',
                description: 'Provides live status of generator performance and utility line voltage.'
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
                description: 'Ensures uninterrupted power for critical manufacturing operations.',
                image: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg'
              },
              {
                title: 'Commercial Buildings',
                description: 'Ideal for offices, malls, and hospitals for reliable backup power.',
                image: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg'
              },
              {
                title: 'Residential Use',
                description: 'Provides backup for essential home appliances and lighting.',
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
