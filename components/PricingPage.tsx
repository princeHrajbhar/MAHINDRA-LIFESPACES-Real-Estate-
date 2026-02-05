"use client";

import Image from "next/image";

export default function PricingPage() {
  return (
    <main className="w-full bg-[#e52b2d] text-white">

      {/* ================= SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24 text-center">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}
        <div className="space-y-5">

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Unlock the Door to Affordable Luxury
          </h1>

          <p className="tracking-[0.35em] uppercase text-sm italic opacity-90">
            Explore Apartment Options and Pricing Details Tailored to Your Needs
          </p>

          {/* Divider */}
          <div className="flex justify-center pt-4">
            <Image
              src="/divider.png"
              alt="divider"
              width={1000}
              height={30}
            />
          </div>
        </div>

        {/* ================================================= */}
        {/* CARDS */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">

          {/* ================================================= */}
          {/* 2BHK SOLD OUT */}
          {/* ================================================= */}
          <div className="relative bg-white text-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center min-h-[240px] overflow-hidden">

            <h3 className="text-xl font-semibold">3 BHK</h3>

            <p className="text-sm text-gray-500">1800–1850 sq.ft.</p>

            <p className="text-2xl font-bold italic">
              ₹ 2.18cr <span className="text-sm font-normal italic">Onwards</span>
            </p>

            <button className="mt-3 border border-gray-400 px-8 py-2 rounded-full hover:bg-gray-100 transition">
              Get Quote
            </button>
            {/* SOLD OUT overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/soldout.png"
                alt="sold out"
                width={280}
                height={120}
                className="rotate-[-15deg] opacity-95"
              />
            </div>

          </div>

          {/* ================================================= */}
          {/* 3 BHK */}
          {/* ================================================= */}
          <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center space-y-4 min-h-[240px]">

            <h3 className="text-xl font-semibold">3 BHK</h3>

            <p className="text-sm text-gray-500">1800–1850 sq.ft.</p>

            <p className="text-2xl font-bold italic">
              ₹ 2.18cr <span className="text-sm font-normal italic">Onwards</span>
            </p>

            <button className="mt-3 border border-gray-400 px-8 py-2 rounded-full hover:bg-gray-100 transition">
              Get Quote
            </button>

          </div>

          {/* ================================================= */}
          {/* 4 BHK */}
          {/* ================================================= */}
          <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center space-y-4 min-h-[240px]">

            <h3 className="text-xl font-semibold">4 BHK</h3>

            <p className="text-sm text-gray-500">2200–2350 sq.ft.</p>

            <p className="text-2xl font-bold italic">
              ₹ 2.88cr <span className="text-sm font-normal italic">Onwards</span>
            </p>

            <button className="mt-3 border border-gray-400 px-8 py-2 rounded-full hover:bg-gray-100 transition">
              Get Quote
            </button>

          </div>

        </div>

      </section>
    </main>
  );
}
