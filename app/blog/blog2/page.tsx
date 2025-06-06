import Head from "next/head";
import Image from "next/image";

export default function blog2() {
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
          src="/blog45.jpeg"
          alt="blog1"
          width={100}
          height={100}
          className="rounded-xl mb-8 w-full h-auto mx-auto object-cover shadow-md"
        />

<section className="prose lg:prose-lg max-w-none test-absolute">
  <p className="mb-6">
    In factories and commercial buildings, a steady flow of electricity is essential, it keeps everything running smoothly. That’s where bus ducts come in. You may not see them, but they quietly and efficiently carry power where it’s needed. At D.P Electricals, we specialize in designing and installing these systems to ensure your operations never skip a beat.
  </p>

  <p className="mb-6">
    Bus ducts have big advantages over regular wiring. They’re safer, easier to maintain, and can grow with your business. That means fewer breakdowns, lower costs, and the flexibility to expand when you need to.
  </p>

  <p className="mb-6">
    Our team at D.P Electricals knows how important reliable power is for any business. That’s why we build smart, durable bus duct systems that reduce energy loss and prevent downtime ,  keeping your equipment powered and your work on track.
  </p>

  <p className="mb-6">
    We’ve helped power everything from factories to office buildings. With D.P Electricals, you get more than just electrical systems. you get dependable, future-ready solutions that help your business grow.
  </p>
</section>

      </article>
    </>
  );
}
