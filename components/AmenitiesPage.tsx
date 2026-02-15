"use client";

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

// Responsive span configurations
const getResponsiveSpan = (index: number, baseSpan: string | undefined) => {
  // Mobile: all single cells, some taller
  const mobileSpan = index === 0 ? "row-span-2" : "";
  
  // Tablet: 3 columns with strategic spans
  const tabletSpan = 
    index === 0 ? "md:row-span-2" :
    index === 2 ? "md:col-span-2" :
    index === 3 ? "md:col-span-2" :
    index === 5 ? "md:col-span-2" :
    "";
  
  // Desktop: original layout
  const desktopSpan = baseSpan ? `lg:${baseSpan}` : "";
  
  return `${mobileSpan} ${tabletSpan} ${desktopSpan}`;
};

export default function AmenitiesPage() {
  return (
    <main className="bg-white text-gray-900">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-3 sm:space-y-4">

          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight px-2">
            <span className="text-red-500">Amenities</span> for Every Age, Every Mood
          </h1>

          <p className="tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] uppercase text-xs sm:text-sm text-gray-500 italic px-2">
            Premium amenities that transform your home into a private retreat
          </p>

          <div className="flex justify-center pt-2 sm:pt-3">
            <div className="relative w-[280px] h-[26px] sm:w-[400px] sm:h-[28px] md:w-[600px] md:h-[29px] lg:w-[800px] lg:h-[30px] xl:w-[1000px]">
              <Image
                src="/divider.png"
                alt="divider"
                 width={1000}
               height={30}
                // fill
                className="object-contain"
            
              />
            </div>
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[180px] gap-3 sm:gap-4 md:gap-5 lg:gap-6">

          {amenities.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl group cursor-pointer ${getResponsiveSpan(i, item.span)}`}
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
              <p className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 text-white font-medium text-xs sm:text-sm drop-shadow-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}