"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-gray-800">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about-bg.png"
          alt="petals background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* ================= SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-6">

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
            <span className="text-red-500">About</span> Mahindra Blossom
          </h1>

          <p className="tracking-[0.35em] text-sm uppercase italic text-gray-500">
            Premium Apartments in Whitefield, Bengaluru
          </p>

          <Image
            src="/divider.png"
            alt="divider"
            width={520}
            height={30}
          />

        <div className="space-y-5 text-[15px] leading-relaxed text-gray-700">

  <p>
    <strong>Mahindra Blossom</strong> is a thoughtfully designed premium residential
    apartment project in Whitefield, Bangalore, developed by <strong>Mahindra Lifespaces</strong>,
    part of the trusted Mahindra Group. Known for quality construction,
    transparency, and sustainable development, Mahindra Lifespaces has delivered
    landmark residential communities across India.
  </p>

  <p>
    Strategically located near <strong>Hope Farm Junction, Whitefield</strong>,
    Mahindra Blossom offers <strong>2 BHK, 3 BHK, and 4 BHK luxury apartments</strong>
    crafted for modern families, professionals, and long-term investors. The
    project blends urban convenience with green living, creating a calm,
    secure, and future-ready residential environment.
  </p>

  <p>
    With excellent connectivity to <strong>ITPL, major tech parks, schools,
    hospitals, shopping destinations, and the operational metro station</strong>,
    residents enjoy seamless everyday access while benefiting from strong
    property appreciation and rental demand.
  </p>

  <p>
    Designed with landscaped gardens, open spaces, and thoughtfully planned
    amenities, Mahindra Blossom ensures a healthy and vibrant lifestyle where
    comfort, convenience, and community come together effortlessly.
  </p>

  <p className="italic font-medium">
    Mahindra Blossom is not just a home — it’s a lifestyle upgrade backed by
    the reliability and legacy of a trusted developer.
  </p>

</div>

        </div>

        {/* RIGHT (true stacked cards with same pivot) */}
<div className="lg:col-span-5 relative h-[600px] w-full flex justify-end">

  <div className="relative w-[460px] h-[520px]">

    {/* BACK FILE (tilt LEFT now) */}
    <div
      className="
        absolute
        bottom-0 left-0
        w-[400px] h-[480px]
        origin-bottom-left
        -rotate-[8deg]
        rounded-[24px]
        overflow-hidden
        border-[4px] border-white
        shadow-xl
      "
    >
      <Image
        src="/balcony.jpg"
        alt="Balcony"
        fill
        className="object-cover"
      />
    </div>

    {/* FRONT FILE */}
    <div
      className="
        absolute
        bottom-0 left-0
        w-[400px] h-[480px]
        rounded-[24px]
        overflow-hidden
        border-[4px] border-white
        shadow-2xl
        z-10
      "
    >
      <Image
        src="/garden.png"
        alt="Garden"
        fill
        className="object-cover"
      />
    </div>

  </div>

</div>


      </section>
    </main>
  );
}
