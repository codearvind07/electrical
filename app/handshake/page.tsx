import Image from 'next/image';

function HandShake() {
  return (
    <section className="relative w-full h-[50vh] min-h-[300px] max-h-[600px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/handshake.png"
          alt="Hand Shake"
          fill
          priority
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          quality={90}
        />
      </div>
    </section>
  );
}

export default HandShake;