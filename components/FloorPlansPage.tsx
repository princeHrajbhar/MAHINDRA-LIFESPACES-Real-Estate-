"use client";

import Image from "next/image";

const plans = [
  {
    title: "MASTER PLAN",
    img: "/floor1.png",
    button: true,
  },
  {
    title: "2 BHK",
    img: "/floor2.png",
    sold: true,
  },
  {
    title: "2 BHK (Large)",
    img: "/floor2.png",
    sold: true,
  },
  {
    title: "3 BHK",
    img: "/floor2.png",
    button: true,
  },
  {
    title: "3.5 BHK",
    img: "/floor2.png",
    button: true,
  },
  {
    title: "4 BHK",
    img: "/floor2.png",
    button: true,
  },
];

export default function FloorPlansPage() {
  return (
    <main className="bg-[#e52b2d] text-white">

      {/* ================================================= */}
      {/* SECTION */}
      {/* ================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-3 sm:space-y-4 lg:space-y-5">

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight px-2">
            Thoughtfully Designed Floor Plans
          </h1>

          <p className="tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.35em] uppercase text-xs sm:text-sm italic opacity-90 px-2">
            Smart layouts that maximize space, light, and everyday comfort
          </p>

          <div className="flex justify-center pt-2 sm:pt-3 lg:pt-4">
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
        {/* GRID */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mt-12 sm:mt-14 lg:mt-16 max-w-[340px] sm:max-w-none mx-auto">

          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative group min-h-[240px] sm:min-h-[260px] overflow-visible"
            >

              {/* IMAGE + ROUNDED WRAPPER */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl">

                <Image
                  src={plan.img}
                  alt={plan.title}
                  fill
                  className="object-cover blur-[3px] scale-105 group-hover:blur-[2px] transition"
                />

                <div className="absolute inset-0 bg-white/70" />
              </div>


              {/* FLOATING PILL */}
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-20 bg-white text-gray-900 px-4 sm:px-5 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-md border border-gray-200 whitespace-nowrap">
                {plan.title}
              </div>


              {/* SOLD */}
              {plan.sold && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative w-[200px] h-[90px] sm:w-[240px] sm:h-[110px] md:w-[260px] md:h-[120px]">
                    <Image
                      src="/soldout.png"
                      alt="sold out"
                      fill
                      className="rotate-[-15deg] object-contain"
                    />
                  </div>
                </div>
              )}


              {/* BUTTON - Updated hover effect */}
              {plan.button && (
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
                  <button className="px-6 sm:px-8 py-1.5 sm:py-2 border border-gray-400 rounded-full text-xs sm:text-sm text-gray-900 bg-white hover:bg-gray-600 hover:text-white transition-colors duration-300 shadow-md">
                    View Plan
                  </button>
                </div>
              )}
            </div>

          ))}

        </div>

      </section>
    </main>
  );
}