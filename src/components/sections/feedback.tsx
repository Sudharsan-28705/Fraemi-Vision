import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

export default function Feedback() {
  // Initialize AOS library once the component has mounted
  useEffect(() => {
    AOS.init({
      duration: 800,       // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: false,           // Whether animation should happen only once
    });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className=" text-zinc-200 font-sans">
      <div className="min-h-screen py-24 px-[5%] border-b border-zinc-800">
        
        <h2 
          className="text-4xl md:text-5xl text-center mb-16 font-bold" 
          data-aos="zoom-in"
        >
          Fade Animations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          
          <div 
            className="bg-zinc-800 border border-zinc-700 rounded-lg p-10 text-center text-xl shadow-lg shadow-black/20" 
            data-aos="fade-up"
          >
            fade-up
          </div>
          
          <div 
            className="bg-zinc-800 border border-zinc-700 rounded-lg p-10 text-center text-xl shadow-lg shadow-black/20" 
            data-aos="fade-down"
          >
            fade-down
          </div>

        </div>
      </div>
      
    </div>
  );
}