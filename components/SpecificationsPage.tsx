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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}
        <div className="text-center space-y-3 sm:space-y-4">

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Smart Specifications
          </h1>

          <p className="tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] uppercase text-xs sm:text-sm text-gray-500 italic">
            Where quality meets functionality
          </p>

          <div className="flex justify-center pt-2 sm:pt-3">
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
        {/* CARDS GRID */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-8 mt-10 sm:mt-12 lg:mt-14 max-w-[360px] sm:max-w-none mx-auto">

          {specs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden flex flex-col"
            >

              {/* Image Top */}
              <div className="relative h-40 sm:h-44 md:h-48 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col gap-4 sm:gap-5">

                <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-center">
                  {item.title}
                </h3>

                <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-600">

                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">

                      <div className="relative h-4 w-4 sm:h-5 sm:w-5 shrink-0 overflow-hidden mt-0.5">
                        <Image
                          src="/underlinehero.png"
                          alt="bullet"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <span className="leading-relaxed">{point}</span>

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