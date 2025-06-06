import Head from "next/head";
import Image from "next/image";

export default function blog3() {
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
          src="/blog33.jpeg"
          alt="blog1"
          width={1200}
          height={700}
          className="rounded-xl mb-8 w-full object-cover shadow-md"
        />

        <section className="prose lg:prose-lg max-w-none text-justify">
          <p className="mb-6">
            Control desks might not look like much at first glance, but they're at the heart of any industrial operation. These are the workstations where complex systems are monitored, managed, and controlled every day. At D.P Electricals, we specialize in designing and building custom control desks that help industries stay efficient and organized.
          </p>

          <p className="mb-6">
            Today's control desks are more than just tables with switches, they're smart, ergonomic, and built for real-world performance. Whether in a factory, power plant, or data center, each desk is tailored to fit the exact needs of the job. Equipped with modern tech like touch screens, integrated control systems, and communication tools, they give operators everything they need at their fingertips.
          </p>

          <p className="mb-6">
            What sets D.P Electricals apart is how customizable our control desks are. We don't believe in one-size-fits-all solutions. Instead, we work closely with clients to build desks that meet their exact specifications, because in industrial environments, precision and reliability aren't optional, they're essential.
          </p>

          <p className="mb-6">
            We've seen firsthand how our control desks make a difference. In real projects across various industries, our solutions have helped teams respond faster, work safer, and manage processes more smoothly. At D.P Electricals, we don't just make control desks, we build the command centers that power progress.
          </p>
        </section>
      </article>
    </>
  );
}
