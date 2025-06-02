import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function MainItPanelWithPlc() {
  return (
    <>
      <Head>
        <title>Main It Panel | DP Electricals</title>
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/plcpanel.png" // Make sure this path is correct in /public folder
          alt="MAIN LT PANEL WITH PLC"
          fill
          priority
          className="object-contain"
        />
      </section>

      {/* Main Content */}
      <main className="px-6 py-16 max-w-7xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Transform Your Business with DP Electricals - The Ultimate Lighting Solution
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At DP Electricals, we provide the perfect lighting solutions to enhance every room in your home. Whether you want to create a warm, cozy ambiance for your living room or a bright, energizing atmosphere for your kitchen and bathroom, we have a variety of lighting options to suit every need.
                Our expertly designed lighting products offer tailored solutions for each space. Choose from a range of lighting styles that provide comfort and functionality, helping you set the ideal mood for every room.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 font-medium">
                <li>Living Room Lighting: Create a welcoming atmosphere with warm, soft lighting perfect for relaxation.</li>
                <li>Bathroom Lighting: Brighten your bathroom with energizing lights that complement your daily routine.</li>
                <li>Kitchen Lighting: Illuminate your kitchen with bright, clear lights for better visibility and an energized environment.</li>
              </ul>
            </div>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-500">
              <Image
                src="/gallery/plcpanelnew.png" // Replace with a suitable image for the PLC panel
                alt="PLC Panel Showcase"
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
                desc: 'Generator panels provide automatic control for starting and stopping generators, ensuring seamless operation during power outages.',
              },
              {
                title: 'Safety Features',
                desc: 'Equipped with safety mechanisms to prevent overloads, short circuits, and other electrical faults.',
              },
              {
                title: 'Real-Time Monitoring',
                desc: 'Allows real-time monitoring of generator performance, including voltage, current, and frequency.',
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-orange-50 to-white"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-orange-700 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
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
                desc: 'Widely used in factories and manufacturing units to ensure uninterrupted power supply.',
                img: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg',
              },
              {
                title: 'Commercial Buildings',
                desc: 'Essential for offices, malls, and other commercial spaces to maintain operations during power outages.',
                img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg',
              },
              {
                title: 'Residential Use',
                desc: 'Used in homes to provide backup power for essential appliances and systems.',
                img: 'https://i.pinimg.com/736x/ef/8d/33/ef8d3393c34fb29dc133f064ea8ba0f7.jpg',
              },
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
