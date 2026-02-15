 "use client";

import { useEffect, useState } from "react";
import { Phone, Download, Calendar, ChevronUp } from "lucide-react";
import Image from "next/image";


export default function ToggleFooter() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
   <div
  className={`
    fixed bottom-0 left-0 w-full z-40 bg-white
    transition-transform duration-500 ease-in-out
    ${show ? "translate-y-0" : "translate-y-full"}
  `}
>
  <div
    className="
      grid items-stretch
      grid-cols-3
      lg:grid-cols-[1.25fr_1fr_1fr_1fr_1.25fr]
    "
  >
    {/* LEFT WHITE STRIP (desktop only) */}
    <div className="hidden lg:block bg-white" />

    {/* BOOK SITE VISIT */}
    <button
      className="
        bg-[#ed3237]
        text-white
        flex items-center justify-center gap-2
        h-[40px]
        text-[14px]
        font-medium
        transition-colors duration-200
        hover:bg-[#e9e9e9]
        hover:text-gray-900
      "
    >
      <Calendar size={16} />
      Book a Site Visit
    </button>

    {/* CALL */}
    <a
      href="tel:+918888888888"
      className="
        bg-white
        text-gray-900
        flex items-center justify-center gap-2
        h-[40px]
        text-[14px]
        font-semibold
        border-l border-r border-black/20
        transition-colors duration-200
        hover:bg-[#f1f1f1]
      "
    >
      <Phone size={16} />
      +91 8888888888
    </a>

    {/* DOWNLOAD */}
    <button
      className="
        bg-[#ed3237]
        text-white
        flex items-center justify-center gap-2
        h-[40px]
        text-[14px]
        font-medium
        transition-colors duration-200
        hover:bg-[#e9e9e9]
        hover:text-gray-900
      "
    >
      <Download size={16} />
      Download Brochure
    </button>

    {/* RIGHT WHITE STRIP (desktop only) */}
    <div className="hidden lg:block bg-white" />
  </div>
</div>


   {/* ================= WHATSAPP FLOATING BUTTON ================= */}
{/* ================= WHATSAPP FLOATING BUTTON ================= */}
<a
  href="https://wa.me/918888888888"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-[96px] right-4 z-50"
>
  <div className="relative w-[56px] h-[56px]">

    {/* Animated gray disk */}
    <span
      className="
        absolute inset-0
        rounded-full
        bg-yellow-900
        animate-pulse-disk
      "
    />

    {/* WhatsApp icon */}
    <div
      className="
        relative
        w-full h-full
        rounded-full
        overflow-hidden
        shadow-lg
        bg-white
      "
    >
      <Image
        src="/whatshup.png"
        alt="WhatsApp"
        fill
        className="object-cover"
        priority
      />
    </div>

  </div>
</a>



      {/* ================= SCROLL TO TOP BUTTON ================= */}
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-[40px] right-4 z-50
          bg-white
          text-gray-700
          p-2
          rounded-full
          shadow-md
          hover:bg-gray-100
          transition-all duration-300
        "
        aria-label="Scroll to top"
      >
        <ChevronUp size={20} />
      </button>
    </>
  );
}
