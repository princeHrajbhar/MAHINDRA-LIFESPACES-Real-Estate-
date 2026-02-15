"use client";

import Image from "next/image";

/* ================================================= */
/* REAL IMAGE LIST (png + jpg mixed) */
/* ================================================= */

const images = [
  "/AmenitiesPage1.png",
  "/AmenitiesPage2.jpg",
  "/AmenitiesPage3.jpg",
  "/AmenitiesPage4.jpg",
  "/AmenitiesPage5.jpg",
  "/AmenitiesPage6.png",
  "/AmenitiesPage7.jpg",
  "/AmenitiesPage8.jpg",
  "/AmenitiesPage9.png",
  "/AmenitiesPage10.jpg",
  "/AmenitiesPage11.jpg",
  "/AmenitiesPage12.png",
];

/* duplicate for infinite smooth loop */
const loopImages = [...images, ...images];

/* ================================================= */

export default function GalleryPage() {
  return (
    <main className="bg-white overflow-hidden">

      {/* ================= HEADER ================= */}
      <section className="text-center py-12 sm:py-16 md:py-18 lg:py-20 px-4 sm:px-6">

        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight px-2">
          A <span className="text-red-500">Glimpse</span> of Life at Mahindra Blossom
        </h1>

        <p className="uppercase tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-xs sm:text-sm text-gray-500 italic mt-2 sm:mt-3 px-2">
          View images of homes, amenities and the surrounding environment
        </p>

        <div className="flex justify-center mt-4 sm:mt-5 lg:mt-6">
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
      </section>


      {/* ================= MOVING ROWS ================= */}
      <section className="space-y-4 sm:space-y-6 lg:space-y-8 pb-12 sm:pb-16 lg:pb-20">

        {/* Row 1 → Left */}
        <Marquee images={loopImages} direction="left" />

        {/* Row 2 → Right */}
        <Marquee images={loopImages} direction="right" />

        {/* Row 3 → Left */}
        <Marquee images={loopImages} direction="left" />

      </section>
    </main>
  );
}


/* ================================================= */
/* Reusable Marquee Component */
/* ================================================= */

function Marquee({
  images,
  direction,
}: {
  images: string[];
  direction: "left" | "right";
}) {
  return (
    <div className="overflow-hidden">

      <div
        className={`flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-[240px] h-[140px] sm:w-[280px] sm:h-[160px] md:w-[320px] md:h-[180px] lg:w-[340px] lg:h-[200px] rounded-xl sm:rounded-2xl overflow-hidden shrink-0 shadow-lg"
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 320px, 340px"
            />
          </div>
        ))}
      </div>

    </div>
  );
}