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
      <section className="text-center py-20 px-6">

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black">
          A <span className="text-red-500">Glimpse</span> of Life at Mahindra Blossom
        </h1>

        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 italic mt-3">
          View images of homes, amenities and the surrounding environment
        </p>

        <div className="flex justify-center mt-6">
          <Image src="/divider.png" alt="divider" width={1000} height={30} />
        </div>
      </section>


      {/* ================= MOVING ROWS ================= */}
      <section className="space-y-8 pb-20">

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
        className={`flex gap-6 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative w-[340px] h-[200px] rounded-2xl overflow-hidden shrink-0 shadow-lg"
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              className="object-cover"
              sizes="340px"
            />
          </div>
        ))}
      </div>

    </div>
  );
}
