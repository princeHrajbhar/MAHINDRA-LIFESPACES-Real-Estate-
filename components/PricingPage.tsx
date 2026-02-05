"use client";

import Image from "next/image";

export default function PricingPage() {
  return (
    <main className="w-full bg-[#e52b2d] text-white">

      {/* ================= SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 text-center">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}
        <div className="space-y-3 sm:space-y-4 lg:space-y-5">

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight px-2">
            Unlock the Door to Affordable Luxury
          </h1>

          <p className="tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.35em] uppercase text-xs sm:text-sm italic opacity-90 px-2">
            Explore Apartment Options and Pricing Details Tailored to Your Needs
          </p>

          {/* Divider */}
          <div className="flex justify-center pt-3 sm:pt-4">
            <div className="relative w-[280px] h-[26px] sm:w-[400px] sm:h-[28px] md:w-[600px] md:h-[29px] lg:w-[800px] lg:h-[30px] xl:w-[1000px]">
              <Image
                src="/divider.png"
                alt="divider"
               width={1000}
               height={30}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* CARDS */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mt-8 sm:mt-10 lg:mt-12 max-w-[340px] md:max-w-none mx-auto">

          {/* ================================================= */}
          {/* 2BHK SOLD OUT */}
          {/* ================================================= */}
          <div className="relative bg-white text-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-9 lg:p-10 flex flex-col items-center justify-center min-h-[220px] sm:min-h-[240px] overflow-hidden">

            <h3 className="text-lg sm:text-xl font-semibold">2 BHK</h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">1800–1850 sq.ft.</p>

            <p className="text-xl sm:text-2xl font-bold italic mt-2 sm:mt-3">
              ₹ 2.18cr <span className="text-xs sm:text-sm font-normal italic">Onwards</span>
            </p>

            <button className="mt-3 sm:mt-4 border border-gray-400 px-6 sm:px-8 py-1.5 sm:py-2 text-sm sm:text-base rounded-full hover:bg-gray-100 transition">
              Get Quote
            </button>

            {/* SOLD OUT overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[200px] h-[85px] sm:w-[240px] sm:h-[100px] md:w-[220px] md:h-[95px] lg:w-[280px] lg:h-[120px]">
                <Image
                  src="/soldout.png"
                  alt="sold out"
                  fill
                  className="rotate-[-15deg] opacity-95 object-contain"
                />
              </div>
            </div>

          </div>

          {/* ================================================= */}
          {/* 3 BHK */}
          {/* ================================================= */}
          <div className="bg-white text-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-9 lg:p-10 flex flex-col items-center space-y-3 sm:space-y-4 min-h-[220px] sm:min-h-[240px]">

            <h3 className="text-lg sm:text-xl font-semibold">3 BHK</h3>

            <p className="text-xs sm:text-sm text-gray-500">1800–1850 sq.ft.</p>

            <p className="text-xl sm:text-2xl font-bold italic">
              ₹ 2.18cr <span className="text-xs sm:text-sm font-normal italic">Onwards</span>
            </p>

            <button className="mt-3 sm:mt-4 border border-gray-400 px-6 sm:px-8 py-1.5 sm:py-2 text-sm sm:text-base rounded-full hover:bg-gray-100 transition">
              Get Quote
            </button>

          </div>

          {/* ================================================= */}
          {/* 4 BHK */}
          {/* ================================================= */}
          <div className="bg-white text-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-9 lg:p-10 flex flex-col items-center space-y-3 sm:space-y-4 min-h-[220px] sm:min-h-[240px]">

            <h3 className="text-lg sm:text-xl font-semibold">4 BHK</h3>

            <p className="text-xs sm:text-sm text-gray-500">2200–2350 sq.ft.</p>

            <p className="text-xl sm:text-2xl font-bold italic">
              ₹ 2.88cr <span className="text-xs sm:text-sm font-normal italic">Onwards</span>
            </p>

            <button className="mt-3 sm:mt-4 border border-gray-400 px-6 sm:px-8 py-1.5 sm:py-2 text-sm sm:text-base rounded-full hover:bg-gray-100 transition">
              Get Quote
            </button>

          </div>

        </div>

      </section>
    </main>
  );
}