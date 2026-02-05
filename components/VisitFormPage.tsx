"use client";

import Image from "next/image";

export default function VisitFormPage() {
  return (
    <main className="bg-[#f5f5f5] min-h-screen flex items-center justify-center px-4 py-16">

      {/* CARD CONTAINER */}
      <div className="relative w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid lg:grid-cols-2">

          {/* LEFT SIDE - Content moved to top */}
          <div className="relative px-10 lg:px-16 pt-16 pb-0 flex flex-col justify-start overflow-hidden bg-[#fafafa]">

            {/* Sub-headline */}
            <p className="tracking-[0.35em] text-xs uppercase text-gray-500 italic mb-4">
              Let us show you around
            </p>

           {/* Main Headline - Decreased Size */}
<h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.2] text-gray-800 z-10">
  Book a guided <br />
  site <span className="text-red-500">visit</span> at your <br />
  convenience.
</h1>

            {/* Optional: Add a small decorative line or text here to fill space if needed */}
            <div className="w-20 h-1 bg-red-500 mt-8 mb-4"></div>
            <p className="text-gray-600 max-w-md z-10">
              Experience the luxury, the greenery, and the positive energy of Mahindra Blossom firsthand. 
            </p>

            {/* CITY BACKGROUND IMAGE - Adjusted height to not interfere with text */}
            <div className="absolute bottom-0 left-0 w-full h-[70%] pointer-events-none opacity-40">
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
          <div className="px-10 lg:px-16 py-16 bg-white border-l border-gray-100">
            <form className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all placeholder:text-gray-400
"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all placeholder:text-gray-400
"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your Email ID"
                  className="w-full border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all placeholder:text-gray-400
"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Message</label>
                <textarea
                  rows={3}
                  placeholder="Enter your message here"
                  className="w-full border border-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all resize-none placeholder:text-gray-400
"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 text-xs text-gray-500 leading-tight">
                <input type="checkbox" className="w-4 h-4 mt-0.5 accent-red-500 shrink-0" />
                <span>
                  By clicking, you agree to our{" "}
                  <span className="text-blue-600 underline cursor-pointer">Privacy Policy</span>{" "}
                  and marketing communication regarding Mahindra Blossom.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-200 transition-all transform hover:-translate-y-1 active:scale-95"
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