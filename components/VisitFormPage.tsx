"use client";

import Image from "next/image";

export default function VisitFormPage() {
  return (
    <main className="bg-[#f5f5f5] w-full px-4 py-12 sm:py-16 lg:py-24">

      {/* CARD CONTAINER */}
      <div className="relative w-full max-w-7xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT SIDE - Content */}
          <div className="relative px-6 sm:px-8 md:px-10 lg:px-16 pt-10 sm:pt-12 lg:pt-16 pb-10 sm:pb-12 lg:pb-16 flex flex-col justify-start overflow-hidden bg-[#fafafa] order-1 lg:order-1">

            {/* Sub-headline */}
            <p className="tracking-[0.25em] sm:tracking-[0.3em] lg:tracking-[0.35em] text-[10px] sm:text-xs uppercase text-gray-500 italic mb-3 sm:mb-4">
              Let us show you around
            </p>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.2] text-gray-800 z-10">
              Book a guided <br />
              site <span className="text-red-500">visit</span> at your <br />
              convenience.
            </h1>

            {/* Decorative line */}
            <div className="w-16 sm:w-20 h-1 bg-red-500 mt-6 sm:mt-8 mb-3 sm:mb-4"></div>
            
            <p className="text-sm sm:text-base text-gray-600 max-w-md z-10 leading-relaxed">
              Experience the luxury, the greenery, and the positive energy of Mahindra Blossom firsthand. 
            </p>

            {/* CITY BACKGROUND IMAGE */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] sm:h-[60%] lg:h-[70%] pointer-events-none opacity-30 sm:opacity-40">
              <Image
                src="/city.png" 
                alt="city silhouette"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </div>


          {/* RIGHT SIDE FORM */}
          <div className="px-6 sm:px-8 md:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 bg-white border-t lg:border-t-0 lg:border-l border-gray-100 order-2 lg:order-2">
            <form className="space-y-5 sm:space-y-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-500 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-500 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  className="w-full border border-gray-500 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea
                  rows={3}
                  placeholder="Enter your message here"
                  className="w-full border border-gray-500 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition-all resize-none placeholder:text-gray-400"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 sm:gap-3 text-[11px] sm:text-xs text-gray-500 leading-tight">
                <input type="checkbox" className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 accent-red-500 shrink-0" />
                <span>
                  By clicking, you agree to our{" "}
                  <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>{" "}
                  and marketing communication regarding Mahindra Blossom.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg shadow-red-200 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Book an Appointment
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}