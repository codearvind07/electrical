import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AcDcDrives() {
  return (
    <>
      <Head>
        <title>AC & DC Drives | DP Electricals</title>
      </Head>

      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <Image
          src="/dropdown/acdcdriver.png"
          alt="AC & DC Drives"
          fill
          priority
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">AC & DC Drives</h1>
            <p className="text-lg md:text-xl">Empowering Control for Every Application</p>
          </div>
        </div> */}
      </section>

      {/* Main Content */}
      <main className="px-6 py-16 max-w-7xl mx-auto">
        {/* Introduction Section */}
        {/* Introduction Section */}
<section className="mb-24">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
    {/* Text Content */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Find the Right Drive for Your Application
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Selecting the right motor drive AC or DC is essential for maximizing efficiency, performance, and reliability in your application.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Whether you're powering industrial machinery or automating your process line, understanding the differences between AC and DC drive technologies is key to making an informed choice.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Still have questions or need help selecting the right drive for your project? Our experts are ready to assist you—<span className="text-primary font-semibold">contact us today!</span>
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700 font-medium">
        <li>Operating Environment (ambient temperature, dust, moisture)</li>
        <li>Load Type (constant or variable torque)</li>
        <li>Duty Cycle & Operational Demands</li>
        <li>Maintenance Accessibility</li>
        <li>Horsepower and Speed Control Requirements</li>
        <li>Control and Sequencing Needs</li>
      </ul>
    </div>

    {/* Right Side Image */}
    <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
      <Image
        src="/gallery/gallery1.jpeg" // 🖼️ Use your local image here
        alt="Drive Application"
        width={600}
        height={400}
        className="rounded-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 object-cover"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500 rounded-xl" />
    </div>
    
  </div>
</section>


        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-md mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: 'Automatic Control',
              desc: 'Ensures seamless operation during power outages by managing start/stop automatically.'
            }, {
              title: 'Safety Features',
              desc: 'Built-in protection from overloads, short circuits, and other faults.'
            }, {
              title: 'Real-Time Monitoring',
              desc: 'Live tracking of generator performance — voltage, current, and frequency.'
            }].map((item, index) => (
              <Card key={index} className="shadow-xl border-0 bg-white hover:shadow-2xl transition-all">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-orange-600 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-20 bg-gray-100 rounded-xl shadow-inner">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: 'Industrial Use',
              img: 'https://i.pinimg.com/736x/4d/76/f7/4d76f77e3eb79ef5c71daabf5aa3746b.jpg',
              desc: 'Used in factories and manufacturing for consistent power control.'
            }, {
              title: 'Commercial Buildings',
              img: 'https://i.pinimg.com/736x/06/1f/0d/061f0d3706050dd923a64b48ef065f9f.jpg',
              desc: 'Maintains uptime in offices, malls, and commercial facilities.'
            }, {
              title: 'Residential Use',
              img: 'https://i.pinimg.com/736x/ef/8d/33/ef8d3393c34fb29dc133f064ea8ba0f7.jpg',
              desc: 'Delivers essential backup power at home during outages.'
            }].map((app, index) => (
              <Card key={index} className="overflow-hidden bg-white shadow-lg">
                <div className="relative h-64 w-full">
                  <Image src={app.img} alt={app.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
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