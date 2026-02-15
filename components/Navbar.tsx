"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";

interface NavbarProps {
  onCallClick: () => void;
}

const Navbar = ({ onCallClick }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Check if user has scrolled past hero section (adjust threshold as needed)
      const heroThreshold = window.innerHeight * 0.8; // 80% of viewport height
      setIsPastHero(currentScrollY > heroThreshold);
      
      // Scrolling down - hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } 
      // Scrolling up - show navbar
      else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', controlNavbar);

    // Initial check
    controlNavbar();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  // Dynamic styles based on scroll position
  const getNavbarStyles = () => {
    if (isPastHero) {
      return {
        background: 'bg-white',
        textColor: 'text-black',
        logo: {
          mahindra: 'text-[#ed3237]', // Red
          lifespan: 'text-black'
        }
      };
    }
    return {
      background: 'bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm',
      textColor: 'text-white',
      logo: {
        mahindra: 'text-white',
        lifespan: 'text-white opacity-70 font-light'
      }
    };
  };

  const styles = getNavbarStyles();

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-16 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${styles.background}`}
    >
      <h1 className="text-xs sm:text-sm md:text-base lg:text-base font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
        <span className={styles.logo.mahindra}>MAHINDRA</span>{" "}
        <span className={styles.logo.lifespan}>LIFESPACES</span>
      </h1>

      <button
        onClick={onCallClick}
        className={`flex items-center gap-1 sm:gap-1.5 rounded-full px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 text-xs font-semibold hover:scale-105 transition-all duration-200 shadow-lg active:scale-95 ${
          isPastHero 
            ? 'bg-[#ed3237] text-white' 
            : 'bg-[#ed3237] text-white'
        }`}
      >
        <Phone size={12} className="sm:hidden" />
        <Phone size={14} className="hidden sm:block" />
        <span className="hidden sm:inline text-xs">+91 9901717339</span>
        <span className="sm:hidden">Call</span>
      </button>
    </nav>
  );
};

export default Navbar;