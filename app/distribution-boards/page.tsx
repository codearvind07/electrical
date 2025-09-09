import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Distribution Panels | Electrical Panel Solutions',
  description: 'Leading electrical distribution panel manufacturers and suppliers. High-quality distribution panel boards with automatic control and safety features.',
  keywords: [
    'distribution panel board',
    'electrical distribution panel manufacturers',
    'distribution panel suppliers',
    'main distribution board price',
    'low voltage distribution panel',
    'power distribution panel box',
    'distribution panel dealers in Noida',
    'electrical distribution panels suppliers in Delhi'
  ],
};

export default function DistributionBoards() {
  return (
    <>
      <Head>
        <title>Distribution Panels | Electrical Panel Solutions</title>
        <meta name="description" content="Leading electrical distribution panel manufacturers and suppliers. High-quality distribution panel boards with automatic control and safety features." />
        <meta name="keywords" content="distribution panel board, electrical distribution panel manufacturers, distribution panel suppliers, main distribution board price, low voltage distribution panel, power distribution panel box" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/distributionpanel.png"
          alt="Distribution Boards"
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
                Reliable Distribution Boards for Safe & Efficient Power Management
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                A distribution board (also known as a panel board or power distribution panel) is a key element in any electrical system. It splits the incoming power supply into multiple circuits and ensures safe, organized delivery of electricity throughout a building. Each circuit is safeguarded by a circuit breaker or fuse, protecting equipment and reducing the risk of overloads or short circuits.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
                <li>Divides main power into multiple individual circuits</li>
                <li>Equipped with circuit breakers or fuses for protection</li>
                <li>Prevents overloads, short circuits, and equipment damage</li>
                <li>Manages lighting, power outlets, and fixed electrical devices</li>
                <li>Compact, durable, and easy-to-install design</li>
                <li>Suitable for homes, offices, factories, and commercial spaces</li>
              </ul>
            </div>

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/gallery29.jpeg"
                alt="Distribution Board Showcase"
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