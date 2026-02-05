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
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-5">

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Thoughtfully Designed Floor Plans
          </h1>

          <p className="tracking-[0.35em] uppercase text-sm italic opacity-90">
            Smart layouts that maximize space, light, and everyday comfort
          </p>

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
        {/* GRID */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {plans.map((plan, i) => (
        <div
  key={i}
  className="relative group min-h-[260px] overflow-visible"
>

  {/* IMAGE + ROUNDED WRAPPER */}
  <div className="absolute inset-0 rounded-3xl overflow-hidden bg-white shadow-2xl">

    <Image
      src={plan.img}
      alt={plan.title}
      fill
      className="object-cover blur-[3px] scale-105 group-hover:blur-[2px] transition"
    />

    <div className="absolute inset-0 bg-white/70" />
  </div>


  {/* FLOATING PILL */}
  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-white text-gray-900 px-5 py-1 rounded-full text-xs font-semibold shadow-md border border-gray-200">
    {plan.title}
  </div>


  {/* SOLD */}
  {plan.sold && (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <Image
        src="/soldout.png"
        alt="sold out"
        width={260}
        height={120}
        className="rotate-[-15deg]"
      />
    </div>
  )}


  {/* BUTTON */}
  {plan.button && (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
      <button className="px-8 py-2 border border-gray-500 rounded-full text-sm text-gray-800 bg-white hover:bg-gray-100 transition">
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
