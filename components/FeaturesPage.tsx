"use client";

import Image from "next/image";

const features = [
  {
    title: "PRIME AND WELL CONNECTED LOCATION",
    desc: "Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and the fully operational metro — ensuring effortless daily travel and high future value.",
  },
  {
    title: "HOMES DESIGNED FOR SPACE, LIGHT & COMFORT",
    desc: "Choose from 2, 3 & 4 BHK premium apartments with smart, vastu compliant layouts, abundant natural light, and excellent ventilation — crafted for modern families and everyday comfort.",
  },
  {
    title: "WAKE UP TO GREEN, CALM LIVING",
    desc: "Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers acres of landscaped garden with bougainvillea canopies, aromatic and native plantations and butterfly park.",
  },
  {
    title: "RESORT-STYLE AMENITIES AT YOUR DOORSTEP",
    desc: "Offering 7,000 sq. ft. of amenities and clubhouse spaces including bougainvillea canopies, hall, Olympic size swimming pool, 25+ seater business center, cricket nets, 2 running tracks and more.",
  },
  {
    title: "SUSTAINABLE LIVING",
    desc: "Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design for lower consumption and sustainable living.",
  },
  {
    title: "75+ YEARS OF MAHINDRA TRUST",
    desc: "Developed by Mahindra Lifespaces, part of the Mahindra Group, this project offers peace of mind through quality construction, transparency, and timely delivery.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-gray-800">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about-bg.png"
          alt="petal background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* ================= SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center">

        {/* ================================================= */}
        {/* LEFT POSTER - Desktop Only */}
        {/* ================================================= */}
        <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-start">

          <div className="relative w-[420px] h-[620px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/balcony.jpg"
              alt="Balcony view"
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* ================================================= */}
        {/* RIGHT CONTENT */}
        {/* ================================================= */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-7 lg:space-y-8">

          {/* Heading */}
          <div className="text-center lg:text-left space-y-2 sm:space-y-3">

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Features &{" "}
              <span className="text-red-500">Highlights</span>
            </h1>

            <p className="tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] uppercase text-xs sm:text-sm text-gray-500 italic">
              Why Buy a Home at Mahindra Blossom
            </p>

            {/* Divider */}
            <div className="flex justify-center lg:justify-start pt-2 sm:pt-3">
              <div className="relative w-[280px] h-[26px] sm:w-[360px] sm:h-[28px] md:w-[440px] md:h-[29px] lg:w-[500px] lg:h-[30px]">
                <Image
                  src="/divider.png"
                  alt="divider"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* LEFT POSTER - Mobile & Tablet */}
          {/* ================================================= */}
          <div className="lg:hidden flex justify-center py-4 sm:py-6">

            <div className="relative w-[280px] h-[400px] sm:w-[340px] sm:h-[480px] md:w-[400px] md:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/balcony.jpg"
                alt="Balcony view"
                fill
                className="object-cover"
              />
            </div>

          </div>

          {/* ================================================= */}
          {/* FEATURE LIST */}
          {/* ================================================= */}
          <ul className="space-y-4 sm:space-y-5 lg:space-y-6">

            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-4">

                {/* Bullet image */}
                <div className="relative h-4 w-4 sm:h-5 sm:w-5 shrink-0 overflow-hidden mt-0.5 sm:mt-1">
                  <Image
                    src="/underlinehero.png"
                    alt="bullet"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold tracking-wide text-gray-900 text-sm sm:text-base leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1 sm:mt-1.5">
                    {item.desc}
                  </p>
                </div>

              </li>
            ))}

          </ul>

        </div>

      </section>
    </main>
  );
}