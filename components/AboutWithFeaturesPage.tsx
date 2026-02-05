"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const features = [
  {
    title: "PRIME AND WELL CONNECTED LOCATION",
    desc: "Located at Hope Farm Junction, Whitefield, Mahindra Blossom places you minutes away from ITPL, tech parks, top schools, hospitals, malls, and the fully operational metro — ensuring effortless daily travel and high future value.",
  },
  {
    title: "HOMES DESIGNED FOR SPACE, LIGHT & COMFORT",
    desc: "Choose from 2, 3 & 4 BHK premium apartments with smart, vastu compliant layouts, abundant natural light, and excellent ventilation — crafted for modern families and everyday comfort.",
  },
  {
    title: "WAKE UP TO GREEN, CALM LIVING",
    desc: "Surrounded by landscaped open spaces and greenery, Mahindra Blossom offers acres of landscaped garden with bougainvillea canopies, aromatic and native plantations and butterfly park.",
  },
  {
    title: "RESORT-STYLE AMENITIES AT YOUR DOORSTEP",
    desc: "Offering 7,000 sq. ft. of amenities and clubhouse spaces including bougainvillea canopies, hall, Olympic size swimming pool, 25+ seater business center, cricket nets, 2 running tracks and more.",
  },
  {
    title: "SUSTAINABLE LIVING",
    desc: "Pre-certified IGBC Gold green homes with Net Zero Waste practices and energy-efficient design for lower consumption and sustainable living.",
  },
  {
    title: "75+ YEARS OF MAHINDRA TRUST",
    desc: "Developed by Mahindra Lifespaces, part of the Mahindra Group, this project offers peace of mind through quality construction, transparency, and timely delivery.",
  },
];

export default function AboutWithFeaturesPage() {
  const [showFeatures, setShowFeatures] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const posterRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const handlePosterClick = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowFeatures(true);
    
    // Scroll to features after animation
    setTimeout(() => {
      setIsAnimating(false);
      featuresRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 600);
  };

  return (
    <main className="relative w-full overflow-hidden text-gray-800">
      
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about-bg.png"
          alt="petals background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
        
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
          
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">
            <span className="text-red-500">About</span> Mahindra Blossom
          </h1>
          
          <p className="tracking-[0.25em] sm:tracking-[0.3em] lg:tracking-[0.35em] text-xs sm:text-sm uppercase italic text-gray-500 text-center lg:text-left">
            Premium Apartments in Whitefield, Bengaluru
          </p>
          
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-[280px] h-[24px] sm:w-[360px] sm:h-[26px] md:w-[440px] md:h-[28px] lg:w-[520px] lg:h-[30px]">
              <Image
                src="/divider.png"
                alt="divider"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-[15px] leading-relaxed text-gray-700 text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
            
            <p>
              <strong>Mahindra Blossom</strong> is a thoughtfully designed premium residential
              apartment project in Whitefield, Bangalore, developed by <strong>Mahindra Lifespaces</strong>,
              part of the trusted Mahindra Group. Known for quality construction,
              transparency, and sustainable development, Mahindra Lifespaces has delivered
              landmark residential communities across India.
            </p>
            
            <p>
              Strategically located near <strong>Hope Farm Junction, Whitefield</strong>,
              Mahindra Blossom offers <strong>2 BHK, 3 BHK, and 4 BHK luxury apartments</strong>
              crafted for modern families, professionals, and long-term investors. The
              project blends urban convenience with green living, creating a calm,
              secure, and future-ready residential environment.
            </p>
            
            <p>
              With excellent connectivity to <strong>ITPL, major tech parks, schools,
              hospitals, shopping destinations, and the operational metro station</strong>,
              residents enjoy seamless everyday access while benefiting from strong
              property appreciation and rental demand.
            </p>
            
            <p>
              Designed with landscaped gardens, open spaces, and thoughtfully planned
              amenities, Mahindra Blossom ensures a healthy and vibrant lifestyle where
              comfort, convenience, and community come together effortlessly.
            </p>
            
            <p className="italic font-medium">
              Mahindra Blossom is not just a home — it's a lifestyle upgrade backed by
              the reliability and legacy of a trusted developer.
            </p>
            
          </div>
          
        </div>
        
        {/* RIGHT - Stacked Cards (Desktop) */}
        <div className="hidden lg:flex lg:col-span-5 relative h-[600px] w-full justify-end">
          
          <div 
            ref={posterRef}
            className="relative w-[460px] h-[520px] cursor-pointer group"
            onClick={handlePosterClick}
          >
            
            {/* BACK FILE (tilt LEFT) */}
            <div
              className="
                absolute
                bottom-0 left-0
                w-[400px] h-[480px]
                origin-bottom-left
                -rotate-[8deg]
                rounded-[24px]
                overflow-hidden
                border-[4px] border-white
                shadow-xl
                transition-all duration-300
                group-hover:-rotate-[10deg]
                group-hover:shadow-2xl
              "
            >
              <Image
                src="/balcony.jpg"
                alt="Balcony"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
            
            {/* FRONT FILE */}
            <div
              className="
                absolute
                bottom-0 left-0
                w-[400px] h-[480px]
                rounded-[24px]
                overflow-hidden
                border-[4px] border-white
                shadow-2xl
                z-10
                transition-all duration-300
                group-hover:shadow-3xl
                group-hover:scale-[1.02]
              "
            >
              <Image
                src="/garden.png"
                alt="Garden"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              
              {/* Click hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-4">
                  <div className="text-white font-semibold text-lg animate-pulse">
                    Click to explore features →
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
        {/* RIGHT - Stacked Cards (Mobile & Tablet) */}
        <div 
          ref={posterRef}
          className="lg:hidden relative h-[320px] sm:h-[400px] md:h-[460px] w-full flex justify-center mt-6 sm:mt-8 cursor-pointer group"
          onClick={handlePosterClick}
        >
          
          <div className="relative w-[280px] h-[300px] sm:w-[340px] sm:h-[380px] md:w-[400px] md:h-[440px]">
            
            {/* BACK FILE (tilt LEFT) */}
            <div
              className="
                absolute
                bottom-0 left-0
                w-[260px] h-[280px]
                sm:w-[320px] sm:h-[360px]
                md:w-[380px] md:h-[420px]
                origin-bottom-left
                -rotate-[8deg]
                rounded-[16px] sm:rounded-[20px] md:rounded-[24px]
                overflow-hidden
                border-[3px] sm:border-[4px] border-white
                shadow-xl
                transition-all duration-300
                group-hover:-rotate-[10deg]
                group-hover:shadow-2xl
              "
            >
              <Image
                src="/balcony.jpg"
                alt="Balcony"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
            </div>
            
            {/* FRONT FILE */}
            <div
              className="
                absolute
                bottom-0 left-0
                w-[260px] h-[280px]
                sm:w-[320px] sm:h-[360px]
                md:w-[380px] md:h-[420px]
                rounded-[16px] sm:rounded-[20px] md:rounded-[24px]
                overflow-hidden
                border-[3px] sm:border-[4px] border-white
                shadow-2xl
                z-10
                transition-all duration-300
                group-hover:shadow-3xl
                group-hover:scale-[1.02]
              "
            >
              <Image
                src="/garden.png"
                alt="Garden"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              
              {/* Click hint overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-3 sm:p-4">
                  <div className="text-white font-semibold text-sm sm:text-lg animate-pulse">
                    Tap to explore features →
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <div ref={featuresRef}>
        <section 
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-14 items-center transition-all duration-600 ease-out ${
            showFeatures 
              ? 'translate-y-0 opacity-100 max-h-[2000px]' 
              : 'translate-y-8 opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          
          {/* ================================================= */}
          {/* LEFT POSTER - Desktop Only */}
          {/* ================================================= */}
          <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-start">
            
            <div className="relative w-[420px] h-[620px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/balcony.jpg"
                alt="Balcony view"
                fill
                className="object-cover"
              />
            </div>
            
          </div>
          
          {/* ================================================= */}
          {/* RIGHT CONTENT */}
          {/* ================================================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 lg:space-y-8">
            
            {/* Heading */}
            <div className="text-center lg:text-left space-y-2 sm:space-y-3">
              
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Features &{" "}
                <span className="text-red-500">Highlights</span>
              </h1>
              
              <p className="tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] uppercase text-xs sm:text-sm text-gray-500 italic">
                Why Buy a Home at Mahindra Blossom
              </p>
              
              {/* Divider */}
              <div className="flex justify-center lg:justify-start pt-2 sm:pt-3">
                <div className="relative w-[280px] h-[26px] sm:w-[360px] sm:h-[28px] md:w-[440px] md:h-[29px] lg:w-[500px] lg:h-[30px]">
                  <Image
                    src="/divider.png"
                    alt="divider"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* ================================================= */}
            {/* LEFT POSTER - Mobile & Tablet */}
            {/* ================================================= */}
            <div className="lg:hidden flex justify-center py-4 sm:py-6">
              
              <div className="relative w-[280px] h-[400px] sm:w-[340px] sm:h-[480px] md:w-[400px] md:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/balcony.jpg"
                  alt="Balcony view"
                  fill
                  className="object-cover"
                />
              </div>
              
            </div>
            
            {/* ================================================= */}
            {/* FEATURE LIST */}
            {/* ================================================= */}
            <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
              
              {features.map((item, i) => (
                <li 
                  key={i} 
                  className="flex items-start gap-3 sm:gap-4"
                >
                  
                  {/* Bullet image */}
                  <div className="relative h-4 w-4 sm:h-5 sm:w-5 shrink-0 overflow-hidden mt-0.5 sm:mt-1">
                    <Image
                      src="/underlinehero.png"
                      alt="bullet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold tracking-wide text-gray-900 text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-1 sm:mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                  
                </li>
              ))}
              
            </ul>
            
          </div>
          
        </section>
      </div>
    </main>
  );
}