"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface VisitFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VisitFormModal = ({ isOpen, onClose }: VisitFormModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      
      {/* Close Button (Overlay) */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors z-[110]"
      >
        <X size={40} />
      </button>

      {/* Form Card */}
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto lg:overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="grid lg:grid-cols-2">

          {/* LEFT SIDE (Visuals) */}
          <div className="relative px-8 lg:px-12 pt-12 pb-0 flex flex-col justify-start overflow-hidden bg-[#fafafa]">
            <p className="tracking-[0.35em] text-[10px] uppercase text-gray-500 italic mb-4">
              Let us show you around
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl leading-[1.2] text-gray-800 z-10">
              Book a guided <br />
              site <span className="text-red-500">visit</span> at your <br />
              convenience.
            </h2>
            <div className="w-16 h-1 bg-red-500 mt-6 mb-4"></div>
            <p className="text-gray-600 text-sm max-w-sm z-10">
              Experience the luxury, the greenery, and the positive energy of Mahindra Blossom firsthand.
            </p>
            
            {/* City Silhouette */}
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

          {/* RIGHT SIDE (Form) */}
          <div className="px-8 lg:px-12 py-12 bg-white border-l border-gray-100">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Prince Rajbhar" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black focus:ring-2 focus:ring-red-400 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+91 XXXXX XXXXX" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black focus:ring-2 focus:ring-red-400 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700">Email ID</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black focus:ring-2 focus:ring-red-400 outline-none transition-all placeholder:text-gray-400" 
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-700">Message</label>
                <textarea 
                  rows={2} 
                  placeholder="Preferred date or specific requirements..." 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-black focus:ring-2 focus:ring-red-400 outline-none transition-all resize-none placeholder:text-gray-400" 
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
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-full text-base font-bold transition shadow-lg hover:shadow-red-200 active:scale-95">
                Confirm Visit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitFormModal;