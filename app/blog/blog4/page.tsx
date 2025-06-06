import Head from "next/head";
import Image from "next/image";

export default function blog4() {
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
          src="/energy-efficiency.jpeg"
          alt="blog1"
          width={1200}
          height={600}
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        <section className="prose lg:prose-lg max-w-none text-justify">
          <p className="mb-6">
            Fire safety isn't just about reacting to danger, it's about being ready before anything happens. At D.P Electricals, we play a key role in making sure workplaces are well-prepared with smart, reliable fire safety solutions designed specifically for each industry's needs.
          </p>

          <p className="mb-6">
            It all starts with prevention. Our team works closely with businesses to spot fire risks early on, recommending fire-resistant materials and safe building designs. We also stress the importance of early detection , with tools like smoke alarms and control panels that can quickly alert teams and help them act fast when seconds count.
          </p>

          <p className="mb-6">
            Having the right equipment is just as important. From simple fire extinguishers to advanced sprinkler systems, we offer and install gear that's chosen to meet the specific safety standards of your space. Every item is carefully tested to make sure it performs when it matters most.
          </p>

          <p className="mb-6">
            We've seen the impact our work makes. From protecting factories to securing commercial buildings, our fire safety systems have helped save lives and property. At D.P Electricals, fire protection isn't just a service, it's a serious commitment to keeping people and businesses safe.
          </p>
        </section>
      </article>
    </>
  );
}
