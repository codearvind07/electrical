import Head from "next/head";
import Image from "next/image";

export default function blog1() {
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
          src="/blog12.jpeg"
          alt="blog1"
          width={1200}
          height={600}
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

<section className="prose lg:prose-lg max-w-none text-left text-justify">
  <p className="mb-6">
    Lighting isn't just about brightening a room, it sets the mood, adds beauty, and can even save energy. At D.P Electricals, we create custom lighting setups that make your home feel warm, stylish, and practical.
  </p>

  <p className="mb-6">
    Good lighting design is both an art and a science. It's about choosing the right color tones, picking the right lights, and using smart technology to make life easier. Our team understands all of this and helps you find lighting that fits your lifestyle.
  </p>

  <p className="mb-6">
    Color temperature is key, it affects how a space feels. Want a cozy vibe in the living room? Go with warm light. Need focus in the kitchen? Cool, bright light works best. We help you pick the right tone for every area.
  </p>

  <p className="mb-6">
    Choosing the right fixtures is just as important. From elegant chandeliers to budget-friendly LEDs, we offer a variety of options and guide you in picking what fits your taste and budget.
  </p>

  <p className="mb-6">
    Smart lighting is changing the way homes are lit. Imagine controlling your lights from your phone, setting them to turn on or off automatically, or even changing colors for a party. We make all of that possible.
  </p>

  <p className="mb-6">
    We've helped transform many homes, from cozy bedrooms to stylish kitchens. At D.P Electricals, we don't just install lights, we help create spaces that truly shine.
  </p>
</section>

      </article>
    </>
  );
}
