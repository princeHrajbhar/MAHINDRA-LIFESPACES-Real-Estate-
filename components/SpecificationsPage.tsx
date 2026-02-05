"use client";

import Image from "next/image";

const specs = [
  {
    title: "DOORS, WINDOWS & RAILINGS",
    img: "/spec1.jpg",
    points: [
      "uPVC windows. Balcony with SS and glass railing.",
      "Main door, Interior and Toilet doors – Engineered wooden door frame and flush door shutter.",
      "Balcony and utility – uPVC door.",
      "Smart door locks.",
    ],
  },
  {
    title: "WALLS",
    img: "/spec2.jpg",
    points: [
      "Living, Dining, Bedrooms, Kitchen – Emulsion paint for walls and oil bound distemper for ceiling.",
      "Exterior paint for external finish and enamel paint for MS grills and railings.",
    ],
  },
  {
    title: "CP & SANITARY FITTINGS",
    img: "/spec3.png",
    points: [
      "Chromium plated fittings of reputed make.",
    ],
  },
  {
    title: "FLOOR FINISHES",
    img: "/spec4.jpg",
    points: [
      "Large format vitrified tiles in living & dining room, bedrooms and kitchen.",
      "Anti-skid ceramic tiles in bathrooms and utility.",
      "Balcony and utility – uPVC door.",
      "Smart door locks.",
    ],
  },
];

export default function SpecificationsPage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-16 py-24">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}
        <div className="text-center space-y-4">

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Smart Specifications
          </h1>

          <p className="tracking-[0.3em] uppercase text-sm text-gray-500 italic">
            Where quality meets functionality
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

        {/* ================================================= */}
        {/* CARDS GRID */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">

          {specs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col"
            >

              {/* Image Top */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-5">

                <h3 className="text-sm font-semibold tracking-wider text-center">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-sm text-gray-600">

                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">

<div className="relative h-5 w-5 shrink-0 overflow-hidden">
                  <Image
                    src="/underlinehero.png"
                    alt="bullet"
                    fill
                    className="object-cover"
                  />
                </div>

                      {point}

                    </li>
                  ))}

                </ul>

              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
