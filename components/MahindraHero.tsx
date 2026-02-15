"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./HeroSection";
import VisitFormModal from "./VisitFormModal";

const MahindraHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative w-full bg-[#0a0a0a] text-white overflow-hidden">

      {/* ================= MOBILE HEADER (TOP 50vh) ================= */}
      <div className="relative block md:hidden w-full h-[50vh]">
        <Image
          src="/hero.png"
          alt="Mobile Header"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ================= DESKTOP / TABLET BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/hero.png"
          alt="Building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      {/* ================= NAVBAR ================= */}
      <Navbar onCallClick={() => setIsModalOpen(true)} />

    <section
  className="
    relative z-10
    h-[70vh]
    w-full
    bg-[url('/about-bg.png')]
    bg-cover bg-center
    md:min-h-screen md:bg-none
  "
>
  {/* Overlay for MOBILE background */}
  <div className="absolute inset-0 bg-black/40 md:hidden" />

  {/* ================= HERO CONTENT WRAPPER ================= */}
  <div
    className="
      relative
      -translate-y-[25%]   /* 👈 40% goes over TOP image */
      md:translate-y-0     /* 👈 reset on tablet & desktop */
    "
  >
    <Hero onVisitClick={() => setIsModalOpen(true)} />
  </div>
</section>


      {/* ================= MODAL ================= */}
      <VisitFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
};

export default MahindraHero;
