import Head from "next/head";
import Image from "next/image";

export default function blog5() {
  return (
    <>
      <Head>
        <title>OUR BLOG | DP Electricals</title>
        <meta name="description" content="Explore the top trends shaping the future of Industrial IoT and how businesses are adapting to smarter technologies." />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">OUR BLOG</h1>
        <div className="text-sm text-gray-500 mb-6">By DP Electricals • May 30, 2025</div>

        <Image
          src="/industrial-automation.jpeg"
          alt="blog1"
          width={1200}
          height={600}
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        <section className="prose lg:prose-lg max-w-none text-justify">
          <p className="mb-6">
            When it comes to industrial safety, fire pump panels are absolutely essential — even if they often go unnoticed. These systems are the first to respond in case of a fire, helping protect businesses and facilities from major damage. At D.P Electricals, we specialize in building reliable, modern fire pump panels that help stop fires before they spread.
          </p>

          <p className="mb-6">
            Fire pump panels are the heart of a fire protection system. As soon as a fire starts, these panels activate and keep water flowing steadily to control the flames. With built-in sensors and smart control systems, they respond quickly to pressure drops and kick in automatically when needed.
          </p>

          <p className="mb-6">
            Different types of fire pump panels serve different needs. Diesel-powered panels are great for places where power outages might happen, ensuring the system keeps running no matter what. Electric panels are efficient and eco-friendly, making them a great choice for many industrial setups.
          </p>

          <p className="mb-6">
            Like any safety system, regular maintenance is key. D.P Electricals offers routine checks and servicing to make sure your fire pump panel is always in top working condition and ready to perform when it matters most.
          </p>

          <p className="mb-6">
            Choosing D.P Electricals means choosing peace of mind. With years of experience and a serious commitment to safety, our fire pump panels have helped protect countless businesses. We're proud to be a trusted name in fire protection.
          </p>
        </section>
      </article>
    </>
  );
}
