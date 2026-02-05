"use client";

import React from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

const features = [
  "8 Acres | 1 Towers | 6 Wings | 733 Units",
  "Make it yours at just 7.5% down payment",
  "Abutting Hopefarm metro station",
  "IGBC Gold rated green home",
  "75+ Years of Mahindra Trust",
];

const MahindraHero = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] text-white">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent
" />
      </div>

      {/* ================= NAV ================= */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 lg:px-16">
        <h1 className="text-lg font-bold tracking-[0.25em] uppercase">
          MAHINDRA <span className="opacity-70 font-light">LIFESPACES</span>
        </h1>

        <a
          href="tel:+919901717339"
          className="flex items-center gap-2 rounded-full bg-[#ed3237] px-5 py-2 text-sm font-semibold hover:scale-105 transition"
        >
          <Phone size={16} />
          +91 9901717339
        </a>
      </nav>

      {/* ================= HERO SECTION ================= */}
      {/* ⭐ items-start keeps columns independent */}
      <section className=" relative z-10 grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-12 px-6 lg:px-16 items-start">

        {/* ================================================= */}
        {/* LEFT COLUMN */}
        {/* ================================================= */}
        <div className="lg:col-span-7 max-w-[600px] flex flex-col gap-8 pt-12">

          {/* ================= HEADER ================= */}
          <header className="flex flex-col gap-6">

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-5xl lg:text-[56px] leading-[120%] text-left">
              <span className="text-[#ed3237]">Mahindra</span> Blossom
            </h1>

            {/* ⭐ CENTER GROUP under heading only */}
            <div className="w-full max-w-[480px] self-center lg:self-start flex flex-col items-center text-center gap-4">

              <p className="text-xs tracking-[0.25em] text-gray-300 uppercase">
                Home of Positive Energy
              </p>

              <Image
                src="/underlinehero.png"
                alt="divider"
                width={320}
                height={30}
              />

              <p className="text-base leading-relaxed">
                2, 3 & 4BHK premium homes in <br />
                <span className="font-semibold">
                  Hopefarm Jn., Whitefield
                </span>
              </p>

              {/* Parallelogram price card */}
<div className="-skew-x-12 bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3">

  <div className="skew-x-12 flex items-center gap-3">

    <span className="text-2xl font-bold italic">
      ₹1.88cr
    </span>

    <span className="text-sm tracking-widest text-gray-300 uppercase">
      Onwards
    </span>

  </div>

</div>


            </div>
          </header>

          {/* ================= FEATURES ================= */}
          <ul className="space-y-3 pt-6 text-sm md:text-base">

            {features.map((text, i) => (
              <li key={i} className="flex items-start gap-3">

                <div className="relative h-5 w-5 shrink-0 overflow-hidden">
                  <Image
                    src="/underlinehero.png"
                    alt="bullet"
                    fill
                    className="object-cover"
                  />
                </div>

                {text}
              </li>
            ))}

          </ul>
        </div>

        {/* ================================================= */}
        {/* RIGHT COLUMN (Independent Door) */}
        {/* ================================================= */}
        <div className="hidden lg:flex lg:col-span-5 justify-end self-start">

          {/* ⭐ mt adds top gap without affecting left */}
          <div className="relative mt-12 w-[420px] h-[600px] overflow-hidden rounded-t-[400px] border-[12px] border-white shadow-2xl">

            <Image
              src="/white-door.gif"
              alt="Luxury Interior"
              fill
              className="object-cover"
              priority
            />

          </div>

        </div>

      </section>
    </main>
  );
};

export default MahindraHero;
