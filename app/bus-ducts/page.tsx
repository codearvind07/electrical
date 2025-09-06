import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'Bus Ducts | Electrical Bus Duct Manufacturers',
  description: 'Leading bus duct manufacturers and suppliers. High-quality electrical bus duct systems with safe current distribution, expandable & modular design, and compact construction. Get competitive sandwich bus duct prices in India.',
  keywords: [
    'bus duct manufacturers',
    'electrical bus duct suppliers',
    'sandwich bus duct price',
    'plug-in bus duct system',
    'rising mains bus duct',
    'low voltage bus duct',
    'bus duct dealers in Noida',
    'electrical bus duct suppliers in Delhi'
  ],
};

export default function BusDucts() {
  return (
    <>
      <Head>
        <title>Bus Ducts | Electrical Bus Duct Manufacturers</title>
        <meta name="description" content="Leading bus duct manufacturers and suppliers. High-quality electrical bus duct systems with safe current distribution, expandable & modular design, and compact construction. Get competitive sandwich bus duct prices in India." />
        <meta name="keywords" content="bus duct manufacturers, electrical bus duct suppliers, sandwich bus duct price, plug-in bus duct system, rising mains bus duct, low voltage bus duct" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/busducts.png"
          alt="Bus Ducts"
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
                High-Performance Bus Duct Systems for Efficient Power Distribution
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                In electrical power distribution, a bus bar is a strip or bar made of copper, brass, or aluminum that conducts electricity within switchboards, distribution boards, substations, battery banks, or other electrical systems. The cross-sectional size of the bus bar determines how much current it can safely carry. A bus duct (or busway) is a protective metal enclosure that supports and houses a group of bus bars, allowing for safe and organized current distribution across a system.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
                <li>Bus bars are typically made from copper, brass, or aluminum</li>
                <li>Used to distribute power within electrical panels and substations</li>
                <li>Cross-sectional area of the bus bar determines current-carrying capacity</li>
                <li>Bus ducts house and support multiple bus bars in a single enclosure</li>
                <li>Standard bus duct lengths are typically 10 feet</li>
                <li>Allow easy removal or addition of branch circuits without shutting down the entire system</li>
                <li>Improve safety, organization, and flexibility in large power distribution systems</li>
              </ul>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/busducts.png"
                alt="Bus Duct Showcase"
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
                title: 'Safe Current Distribution',
                desc: 'Bus ducts provide a safe and streamlined way to manage electrical distribution with minimal loss.'
              },
              {
                title: 'Expandable & Modular',
                desc: 'Allows for easy future upgrades or system expansions without major disruption.'
              },
              {
                title: 'Compact Design',
                desc: 'Space-saving layouts ideal for industrial and commercial facilities.'
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
                desc: 'Used in large-scale factories and processing plants for uninterrupted power routing.',
                img: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg'
              },
              {
                title: 'Commercial Buildings',
                desc: 'Provides efficient power supply across floors and departments in office complexes.',
                img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg'
              },
              {
                title: 'Infrastructure Projects',
                desc: 'Integrated into smart city grids and transportation hubs for reliable distribution.',
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