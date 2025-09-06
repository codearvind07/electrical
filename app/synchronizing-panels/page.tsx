import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Synchronize Panels | Generator Synchronize Panel Manufacturers',
  description: 'Leading synchronization panel manufacturers and suppliers. High-quality DG synchronization panels with automatic control, safety features, and real-time monitoring. Get competitive auto synchronization panel prices in India.',
  keywords: [
    'synchronization panel manufacturers',
    'dg synchronization panel suppliers',
    'generator synchronize panel',
    'motor control synchronize panel',
    'auto synchronization panel price',
    'electrical synchronize panel',
    'synchronization panel dealers in Noida',
    'dg synchronization panel suppliers in Delhi'
  ],
};

export default function SynchronizingPanels() {
  return (
    <>
      <Head>
        <title>Synchronize Panels | Generator Synchronize Panel Manufacturers</title>
        <meta name="description" content="Leading synchronization panel manufacturers and suppliers. High-quality DG synchronization panels with automatic control, safety features, and real-time monitoring. Get competitive auto synchronization panel prices in India." />
        <meta name="keywords" content="synchronization panel manufacturers, dg synchronization panel suppliers, generator synchronize panel, motor control synchronize panel, auto synchronization panel price, electrical synchronize panel" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/synchronize panel.png"
          alt="Synchronizing Panels"
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
                Smart Synchronizing Panels for Efficient Load Sharing & Backup Power Management
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At D.P. Electricals, we design and manufacture advanced synchronizing panels that manage seamless power transfer and load sharing between multiple power sources such as DG sets (diesel generators) and the main grid. Our systems are designed for efficiency, fuel savings, and extended equipment life, with both manual and automatic operations.
              </p>

              <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
                <li>Automatic transfer between DG sets and the main grid</li>
                <li>Start all connected DG sets during main power failure</li>
                <li>Keep only one DG under low load to reduce fuel usage</li>
                <li>Auto-synchronize more DGs when load exceeds 70%</li>
                <li>Equal load sharing among running generators</li>
                <li>Scalable based on real-time power demand</li>
                <li>Manual or automatic operation modes available</li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/gallery26.jpeg"
                alt="Synchronizing Panel Showcase"
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Functionalities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automatic Control',
                desc: 'Automates start/stop during power outages for uninterrupted operations.'
              },
              {
                title: 'Safety Features',
                desc: 'Built-in protection against overloads, short circuits, and faults.'
              },
              {
                title: 'Real-Time Monitoring',
                desc: 'Live tracking of voltage, current, frequency, and system status.'
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
                title: 'Industrial Use',
                desc: 'Ensures uninterrupted power in factories and heavy-load plants.',
                img: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg'
              },
              {
                title: 'Commercial Buildings',
                desc: 'Supports malls, offices, and IT spaces during outages.',
                img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg'
              },
              {
                title: 'Residential Use',
                desc: 'Backup solutions for homes and gated societies.',
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