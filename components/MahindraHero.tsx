"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import VisitFormModal from "./VisitFormModal";

const features = [
  "8 Acres | 1 Towers | 6 Wings | 733 Units",
  "Make it yours at just 7.5% down payment",
  "Abutting Hopefarm metro station",
  "IGBC Gold rated green home",
  "75+ Years of Mahindra Trust",
];

const MahindraHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* ================= NAV ================= */}
      <nav className="relative z-10 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-16">
        <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-[0.15em] sm:tracking-[0.25em] uppercase">
          MAHINDRA <span className="opacity-70 font-light">LIFESPACES</span>
        </h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#ed3237] px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 text-xs sm:text-sm font-semibold hover:scale-105 transition shadow-lg active:scale-95"
        >
          <Phone size={14} className="sm:hidden" />
          <Phone size={16} className="hidden sm:block" />
          <span className="hidden sm:inline">+91 9901717339</span>
          <span className="sm:hidden">Call</span>
        </button>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative z-10 grid min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-70px)] lg:min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-12 px-4 sm:px-6 lg:px-16 items-start pb-8 sm:pb-12 lg:pb-0">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 w-full lg:max-w-[600px] flex flex-col gap-6 sm:gap-8 pt-6 sm:pt-10 lg:pt-12">
          
          <header className="flex flex-col gap-4 sm:gap-6">
            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-[120%] text-center lg:text-left">
              <span className="text-[#ed3237]">Mahindra</span> Blossom
            </h1>

            <div className="w-full max-w-[480px] self-center lg:self-start flex flex-col items-center text-center gap-3 sm:gap-4">
              <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-gray-300 uppercase">
                Home of Positive Energy
              </p>

              <div className="relative w-[240px] h-[22px] sm:w-[280px] sm:h-[26px] md:w-[320px] md:h-[30px]">
                <Image
                  src="/underlinehero.png"
                  alt="divider"
                  fill
                  className="object-contain"
                />
              </div>

              <p className="text-sm sm:text-base leading-relaxed">
                2, 3 & 4BHK premium homes in <br />
                <span className="font-semibold">
                  Hopefarm Jn., Whitefield
                </span>
              </p>

              {/* Price Card */}
              <div className="-skew-x-12 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2.5 sm:px-8 sm:py-3">
                <div className="skew-x-12 flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl font-bold italic">₹1.88cr</span>
                  <span className="text-xs sm:text-sm tracking-widest text-gray-300 uppercase">Onwards</span>
                </div>
              </div>
            </div>
          </header>

          {/* FEATURES */}
          <ul className="space-y-2.5 sm:space-y-3 pt-4 sm:pt-6 text-xs sm:text-sm md:text-base max-w-[500px] mx-auto lg:mx-0 w-full">
            {features.map((text, i) => (
              <li key={i} className="flex items-start gap-2 sm:gap-3">
                <div className="relative h-4 w-4 sm:h-5 sm:w-5 shrink-0 overflow-hidden mt-0.5">
                  <Image
                    src="/underlinehero.png"
                    alt="bullet"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          {/* DOOR ARCH - Mobile/Tablet Version */}
          <div className="lg:hidden flex justify-center mt-6 sm:mt-8">
            <div className="relative w-[280px] h-[400px] sm:w-[340px] sm:h-[480px] md:w-[380px] md:h-[540px] overflow-hidden rounded-t-[280px] sm:rounded-t-[340px] md:rounded-t-[380px] border-[8px] sm:border-[10px] border-white shadow-2xl">
              <Image
                src="/white-door.gif"
                alt="Luxury Interior"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN (Door Arch) - Desktop Only */}
        <div className="hidden lg:flex lg:col-span-5 justify-end self-start">
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

      {/* Modal Component */}
      <VisitFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </main>
  );
};

export default MahindraHero;