"use client";

import { Span } from "next/dist/trace";
import Image from "next/image";

const amenities = [
  { title: "Aromatic Garden", src: "/AmenitiesPage1.png", span: "row-span-2" },

  { title: "Spacious Kitchen", src: "/AmenitiesPage2.jpg" },
  { title: "Party Lawn", src: "/AmenitiesPage3.jpg", span: "col-span-2" },

  { title: "Multipurpose Court", src: "/AmenitiesPage4.jpg", span: "col-span-2" },
  { title: "Modern Bedroom", src: "/AmenitiesPage5.jpg" },

  { title: "Gym", src: "/AmenitiesPage6.png", span: "col-span-2" },
  { title: "Cricket Nets", src: "/AmenitiesPage7.jpg" },
  { title: "1/2 Olympic Size Pool", src: "/AmenitiesPage8.jpg" },

  { title: "Landscaped Gardens", src: "/AmenitiesPage9.png" },
  { title: "Ventilated Flats", src: "/AmenitiesPage10.jpg" },
  { title: "Large Balcony", src: "/AmenitiesPage11.jpg" },
  { title: "Jogging Track", src: "/AmenitiesPage12.png" },
];

export default function AmenitiesPage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-4">

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            <span className="text-red-500">Amenities</span> for Every Age, Every Mood
          </h1>

          <p className="tracking-[0.3em] uppercase text-sm text-gray-500 italic">
            Premium amenities that transform your home into a private retreat
          </p>

          <div className="flex justify-center pt-3">
            <Image
              src="/divider.png"
              alt="divider"
              width={1000}
              height={30}
            />
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-6">

          {amenities.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer ${item.span || ""}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />

              {/* title */}
              <p className="absolute bottom-3 left-4 text-white font-medium text-sm drop-shadow-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
