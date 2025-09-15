// "use client"

// import { useState, useEffect } from "react";
// import Header from '@/components/header'
// import Cursor from '@/cursor'
// // import React from 'react'
// import React from "react";
// import Foot from "@/components/sections/footer";
// import Common_footer from "@/components/sections/common_footer";

// interface Project {
//     name: string;
//     description: string;
//     technologies: string;
//     link: string;
// }

// const projectsData: Project[] = [
//     {
//         name: 'EcoMart E-commerce',
//         description: 'A fully responsive e-commerce platform for sustainable products, featuring a secure checkout process.',
//         technologies: 'React, Node.js, Express, MongoDB',
//         link: '#',
//     },
//     {
//         name: 'WeatherWise App',
//         description: 'A clean, simple weather application that provides real-time weather data using a third-party API.',
//         technologies: 'HTML, CSS, Vanilla JS, API',
//         link: '#',
//     },
//     {
//         name: 'TaskFlow Manager',
//         description: 'A Kanban-style task management tool to help teams organize workflows and track project progress.',
//         technologies: 'Vue.js, Firebase, Tailwind CSS',
//         link: '#',
//     },
// ];

// const Portfolio = () => {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };

//         window.addEventListener("scroll", handleScroll);
//         handleScroll();

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//     return (
//         <>
//             <Cursor />
//             <section id="Contact_Us" className="scroll-mt-20">
//                 <div className="min-h-screen bg-background">
//                     <Header isScrolled={isScrolled} />
//                     <main className="flex flex-col justify-center">
//                         <div className="bg-background text-foreground flex flex-col items-center justify-center min-h-screen gap-[5.5rem] font-['Inter',_sans-serif]">
//                             {/* Card */}
//                             <div className="row1 bg-background text-foreground flex flex-row items-center justify-center min-h-screen gap-[5.5rem] font-['Inter',_sans-serif]">
//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>

//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>

//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>

//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>
//                             </div>

//                             <div className="row1 bg-background text-foreground flex flex-row items-center justify-center min-h-screen gap-[5.5rem] font-['Inter',_sans-serif]">
//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>

//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>

//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>

//                                 <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow transition-transform duration-300 hover:scale-110 hover:shadow-gray-500/50"></div>
//                             </div>

//                         </div>


//                     </main>
//                 </div>
//             </section>
//             <Common_footer />
//         </>
//     )
// }

// export default Portfolio


"use client"

import { useState, useEffect } from "react";
import Header from '@/components/header'
import Cursor from '@/cursor'
import React from "react";
import Common_footer from "@/components/sections/common_footer";

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reusable card component
  const Card = () => (
    <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50"></div>
  );

  return (
    <>
      <Cursor />
      <section id="Portfolio" className="scroll-mt-20">
        <div className="min-h-screen bg-background">
          <Header isScrolled={isScrolled} />
          <main className="flex flex-col justify-center">
            <div className="bg-background text-foreground flex flex-col items-center justify-center gap-24 py-20 font-['Inter',_sans-serif]">
              
              {/* Row 1 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card />
                <Card />
                <Card />
                <Card/>
              </div>

              {/* Row 2 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>

              {/* Row 3 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>

            </div>
          </main>
        </div>
      </section>
      <Common_footer />
    </>
  )
}

export default Portfolio;
