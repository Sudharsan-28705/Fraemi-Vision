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
        {/* <h3 className="text-center">ALL OTHER PROJECTS</h3> */}
      </section>
      <Common_footer />
    </>
  )
}

export default Portfolio;
