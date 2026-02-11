
"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import CountingNumberAnimation from "@/components/sections/company";
import ProjectsSection from "@/components/sections/projects-section";
import ScrollingLogoMarquee from "@/components/sections/scroll";
import Common_footer from "@/components/sections/common_footer";
import Foot from "@/components/sections/footer";
import CustomCursor from "@/cursor";
import TargetCursor from "@/cursor";

export default function Home() {
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
  
      return (
        <>
        {/* <CustomCursor/> */}
        <TargetCursor/>
        <Header isScrolled={isScrolled} />
          <main className="flex-grow">
              <HeroSection isScrolled={isScrolled} />
              <CountingNumberAnimation />
              <ScrollingLogoMarquee />
              <ProjectsSection />
              {/* <Feedback /> */}
              <Foot />
          </main>
          
        </>
      ) 
}
