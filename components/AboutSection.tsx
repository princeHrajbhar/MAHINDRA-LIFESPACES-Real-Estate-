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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

        {/* LEFT */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">
            <span className="text-red-500">About</span> Mahindra Blossom
          </h1>

          <p className="tracking-[0.25em] sm:tracking-[0.3em] lg:tracking-[0.35em] text-xs sm:text-sm uppercase italic text-gray-500 text-center lg:text-left">
            Premium Apartments in Whitefield, Bengaluru
          </p>

          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[24px] sm:w-[360px] sm:h-[26px] md:w-[440px] md:h-[28px] lg:w-[520px] lg:h-[30px]">
              <Image
                src="/divider.png"
                alt="divider"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] leading-relaxed text-gray-700 text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">

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
              Mahindra Blossom is not just a home — it's a lifestyle upgrade backed by
              the reliability and legacy of a trusted developer.
            </p>

          </div>

        </div>

        {/* RIGHT - Stacked Cards (Desktop) */}
        <div className="hidden lg:flex lg:col-span-5 relative h-[600px] w-full justify-end">

          <div className="relative w-[460px] h-[520px]">

            {/* BACK FILE (tilt LEFT) */}
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

        {/* RIGHT - Stacked Cards (Mobile & Tablet) */}
        <div className="lg:hidden relative h-[320px] sm:h-[400px] md:h-[460px] w-full flex justify-center mt-6 sm:mt-8">

          <div className="relative w-[280px] h-[300px] sm:w-[340px] sm:h-[380px] md:w-[400px] md:h-[440px]">

            {/* BACK FILE (tilt LEFT) */}
            <div
              className="
                absolute
                bottom-0 left-0
                w-[260px] h-[280px]
                sm:w-[320px] sm:h-[360px]
                md:w-[380px] md:h-[420px]
                origin-bottom-left
                -rotate-[8deg]
                rounded-[16px] sm:rounded-[20px] md:rounded-[24px]
                overflow-hidden
                border-[3px] sm:border-[4px] border-white
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
                w-[260px] h-[280px]
                sm:w-[320px] sm:h-[360px]
                md:w-[380px] md:h-[420px]
                rounded-[16px] sm:rounded-[20px] md:rounded-[24px]
                overflow-hidden
                border-[3px] sm:border-[4px] border-white
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