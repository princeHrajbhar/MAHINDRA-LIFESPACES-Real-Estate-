"use client";

import Image from "next/image";

const points = [
  "Abutting Hopefarm Channasandra Metro Station",
  "Key terminals within 3km radius – Whitefield railway station and Hopefarm bus stop",
  "IT/IT parks within 2.5km radius – ITPL, new google office",
  "Social infrastructure within 3km – Schools, colleges, hospitals, etc.",
];

export default function LocationPage() {
  return (
    <main className="w-full bg-white">

      {/* ================================================= */}
      {/* TOP WHITE SECTION */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

        {/* ================= LEFT TEXT ================= */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5 lg:space-y-6 text-center lg:text-left">

          <h1 className="font-serif text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            A Perfect <span className="text-red-500">Location</span>
          </h1>

          <p className="uppercase tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-xs sm:text-sm italic text-gray-500">
            Everything you need just minutes away
          </p>

          {/* Divider */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[26px] sm:w-[340px] sm:h-[28px] md:w-[400px] md:h-[29px] lg:w-[450px] lg:h-[30px]">
              <Image 
                src="/divider.png" 
                alt="divider" 
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 max-w-[500px] mx-auto lg:mx-0">

            {points.map((text, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3 text-left">

                <div className="relative h-4 w-4 sm:h-5 sm:w-5 shrink-0 overflow-hidden mt-0.5">
                  <Image
                    src="/underlinehero.png"
                    alt="bullet"
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{text}</span>

              </li>
            ))}

          </ul>
        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="lg:col-span-6 w-full">

          <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border">

            <iframe
              src="https://www.google.com/maps?q=Whitefield+Bangalore&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              className="w-full sm:h-[300px] md:h-[320px]"
            />

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* VIDEO SECTION (50-50 PERFECT OVERLAP) */}
      {/* ================================================= */}
      <section className="relative">

        {/* white half */}
        <div className="h-[180px] sm:h-[220px] md:h-[260px] bg-white" />

        {/* red half */}
        <div className="h-[180px] sm:h-[220px] md:h-[260px] bg-[#e52b2d]" />

        {/* video card */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] max-w-6xl px-4 sm:px-0">

          <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">

            <video
              src="/tour.mp4"
              poster="/tour-thumbnail.jpg"
              controls
              className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
            />

            {/* overlay text */}
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded text-white font-semibold text-xs sm:text-sm md:text-base text-center">
              Take The Virtual Tour
            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* FOOTER RED SECTION */}
      {/* ================================================= */}
      <footer className="bg-[#e52b2d] text-white pt-8 sm:pt-10 pb-10 sm:pb-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 text-center space-y-5 sm:space-y-6">

          <p className="text-xs sm:text-sm leading-relaxed">
            PROJECT RERA NO: PRM/KA/RERA/1251/446/PR/171225/003848
          </p>

          <p className="text-xs sm:text-sm leading-relaxed">
            AGENT RERA NO: PRM/KA/RERA/1251/446/AG/240723/004980
          </p>

          <div className="border-t border-white/30 pt-5 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-[10px] sm:text-xs opacity-80">

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center md:justify-start">
              <span className="hover:opacity-100 cursor-pointer transition">DISCLAIMER</span>
              <span className="hover:opacity-100 cursor-pointer transition">PRIVACY POLICY</span>
            </div>

            <span className="text-center">©2025 Mahindra Blossom. ALL RIGHTS RESERVED</span>

          </div>

        </div>
      </footer>

    </main>
  );
}