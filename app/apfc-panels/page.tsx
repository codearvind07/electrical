import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export const metadata = {
  title: 'APFC Panels | Power Factor Correction Solutions',
  description: 'Leading APFC panel manufacturers and suppliers. High-quality automatic power factor correction panels with real-time monitoring and energy cost savings.',
  keywords: [
    'apfc panel manufacturers',
    'automatic power factor correction panel',
    'apfc panel price',
    'apfc panel suppliers in India',
    'apfc control panel installation',
    'low voltage apfc panel',
    'apfc panel dealers in Noida',
    'automatic power factor correction panel suppliers in Delhi'
  ],
};

export default function ApfcPanels() {
  return (
    <>
      <Head>
        <title>APFC Panels | Power Factor Correction Solutions</title>
        <meta name="description" content="Leading APFC panel manufacturers and suppliers. High-quality automatic power factor correction panels with real-time monitoring and energy cost savings." />
        <meta name="keywords" content="apfc panel manufacturers, automatic power factor correction panel, apfc panel price, apfc panel suppliers in India, apfc control panel installation, low voltage apfc panel" />
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/dropdown/apfcpanel.png"
          alt="APFC Panels"
          fill
          priority
          className="object-cover"
        />
        
      </section>

      {/* Main Content */}
      <main className="px-6 py-20 max-w-7xl mx-auto">
        {/* Introduction Section */}
        <section className="mb-20 text-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">
                Keep Your Power Factor in Check – Automatically with APFC Systems
              </h2>
              <p className="mb-6 text-gray-700">
                In today's modern power networks, a wide variety of electrical and power electronic loads create constantly changing demand. This variability can cause your power factor to drop, leading to inefficiencies, higher demand charges, and even penalties from utility companies.
              </p>
              <p className="mb-6 text-gray-700">
                <strong>What Is Power Factor – And Why Does It Matter?</strong><br />
                A low power factor means your facility is not using electricity efficiently. It increases the load on your system and affects your energy bills. That's where Automatic Power Factor Correction (APFC) systems make a difference.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Benefits of APFC Systems:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Real-Time Adjustment: Automatically corrects power factor without manual intervention</li>
                <li>Energy Cost Savings: Reduces reactive power and avoids utility penalties</li>
                <li>Improved Efficiency: Optimizes energy usage across varying load conditions</li>
                <li>Ideal for Dynamic Loads: Perfect for facilities with fluctuating or seasonal consumption</li>
              </ul>
            </div>
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/gallery/gallery10.jpeg"
                alt="APFC Control"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-orange-100 to-white">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {["Automatic Control", "Safety Features", "Real-Time Monitoring"].map((title, idx) => (
              <Card key={idx} className="shadow-lg hover:shadow-xl transition-all border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-orange-600">{title}</h3>
                  <p className="text-gray-600">
                    {title === "Automatic Control" && "Generator panels provide automatic control for starting and stopping generators, ensuring seamless operation during power outages."}
                    {title === "Safety Features" && "Equipped with safety mechanisms to prevent overloads, short circuits, and other electrical faults."}
                    {title === "Real-Time Monitoring" && "Allows real-time monitoring of generator performance, including voltage, current, and frequency."}
                  </p>
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
                title: 'Industrial Use',
                desc: 'Widely used in factories and manufacturing units to ensure uninterrupted power supply.'
              },
              {
                img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg',
                title: 'Commercial Buildings',
                desc: 'Essential for offices, malls, and other commercial spaces to maintain operations during power outages.'
              },
              {
                img: 'https://i.pinimg.com/736x/ef/8d/33/ef8d3393c34fb29dc133f064ea8ba0f7.jpg',
                title: 'Residential Use',
                desc: 'Used in homes to provide backup power for essential appliances and systems.'
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