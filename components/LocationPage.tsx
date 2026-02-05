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
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24 grid lg:grid-cols-12 gap-12 items-center">

        {/* ================= LEFT TEXT ================= */}
        <div className="lg:col-span-6 space-y-6">

          <h1 className="font-serif text-black text-4xl md:text-5xl">
            A Perfect <span className="text-red-500">Location</span>
          </h1>

          <p className="uppercase tracking-[0.3em] text-sm italic text-gray-500">
            Everything you need just minutes away
          </p>

          {/* Divider */}
          <Image src="/divider.png" alt="divider" width={450} height={30} />

          {/* Bullet Points */}
          <ul className="space-y-4 pt-4">

            {points.map((text, i) => (
              <li key={i} className="flex items-start gap-3">

                <div className="relative h-5 w-5 shrink-0 overflow-hidden">
                                  <Image
                                    src="/underlinehero.png"
                                    alt="bullet"
                                    fill
                                    className="object-cover"
                                  />
                                </div>

                <span className="text-gray-700 text-sm">{text}</span>

              </li>
            ))}

          </ul>
        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="lg:col-span-6">

          <div className="rounded-2xl overflow-hidden shadow-xl border">

            {/* Replace src with your real map */}
            <iframe
              src="https://www.google.com/maps?q=Whitefield+Bangalore&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              className="w-full"
            />

          </div>

        </div>
      </section>

   {/* ================================================= */}
{/* VIDEO SECTION (50-50 PERFECT OVERLAP) */}
{/* ================================================= */}
<section className="relative">

  {/* white half */}
  <div className="h-[260px] bg-white" />

  {/* red half */}
  <div className="h-[260px] bg-[#e52b2d]" />

  {/* video card */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-6xl">

    <div className="rounded-3xl overflow-hidden shadow-2xl relative">

      <video
        src="/tour.mp4"
        poster="/tour-thumbnail.jpg"
        controls
        className="w-full h-[420px] object-cover"
      />

      {/* overlay text */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 px-8 py-2 rounded text-white font-semibold">
        Take The Virtual Tour
      </div>

    </div>

  </div>

</section>

      {/* ================================================= */}
      {/* FOOTER RED SECTION */}
      {/* ================================================= */}
      <footer className="bg-[#e52b2d] text-white pt-10 pb-12">

        <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center space-y-6">

          <p className="text-sm">
            PROJECT RERA NO: PRM/KA/RERA/1251/446/PR/171225/003848
          </p>

          <p className="text-sm">
            AGENT RERA NO: PRM/KA/RERA/1251/446/AG/240723/004980
          </p>

          <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row justify-between text-xs opacity-80">

            <div className="flex gap-6 justify-center md:justify-start">
              <span>DISCLAIMER</span>
              <span>PRIVACY POLICY</span>
            </div>

            <span>©2025 Mahindra Blossom. ALL RIGHTS RESERVED</span>

          </div>

        </div>
      </footer>

    </main>
  );
}
