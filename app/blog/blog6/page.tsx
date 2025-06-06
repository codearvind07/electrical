import Head from "next/head";
import Image from "next/image";

export default function blog6() {
  return (
    <>
      <Head>
        <title>Top 5 Trends in Industrial IoT | DP Electricals</title>
        <meta name="description" content="Explore the top trends shaping the future of Industrial IoT and how businesses are adapting to smarter technologies." />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Blog 6</h1>
        <div className="text-sm text-gray-500 mb-6">By DP Electricals • May 30, 2025</div>

        <Image
          src="/smart-home.jpg"
          alt="Industrial IoT Trends"
          width={1200}
          height={600}
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        <section className="prose lg:prose-lg max-w-none text-justify">
          <p className="mb-6">
            Smart homes aren't just the future , they're the now. From lighting and security to climate control and entertainment, smart home solutions bring convenience, comfort, and control right to your fingertips. At D.P Electricals, we help homeowners transform everyday living into something truly exceptional.
          </p>

          <p className="mb-6">
            Imagine controlling your entire home with your voice or smartphone. Whether you're turning off lights from your bed, adjusting the thermostat from your office, or checking your front door camera while on vacation , smart technology makes it all possible, and incredibly easy.
          </p>

          <p className="mb-6">
            We offer a full range of smart home systems including automated lighting, smart thermostats, voice-controlled appliances, remote security monitoring, and more. Everything is designed to fit your lifestyle, improve energy efficiency, and give you peace of mind , even when you're away from home.
          </p>

          <p className="mb-6">
            Security is a major benefit of smart homes. From motion sensors and door/window alarms to smart locks and real-time camera feeds, our solutions give you total control over your home's safety , anytime, anywhere.
          </p>

          <p className="mb-6">
            At D.P Electricals, we make smart simple. Our team not only installs high-quality systems but also ensures everything works together seamlessly. We offer personalized setups, easy-to-use controls, and ongoing support , so you can enjoy the benefits without the hassle.
          </p>

          <p className="mb-6">
            Step into the future of comfortable, connected living. With D.P Electricals' Smart Home Solutions, your home isn't just where you live , it's where technology works for you.
          </p>
        </section>
      </article>
    </>
  );
}
