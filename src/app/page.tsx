"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
// import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
// import ContactSection from "@/components/sections/contact-section";
import { Separator } from "@/components/ui/separator";
import { MotionConfig } from "framer-motion";
import ScrollingLogoMarquee from "@/components/sections/scroll";
import CountingNumberAnimation from "@/components/sections/company";
import Cursor from "@/cursor";
import Foot from "@/components/sections/footer";
import Feedback from "@/components/sections/feedback";
import Cool from "@/components/sections/cool";
import Common_footer from "@/components/sections/common_footer";

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
    <MotionConfig transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}>
      <div className="flex flex-col min-h-screen bg-background">
        <Cursor />
        <Header isScrolled={isScrolled} />
        <main className="flex-grow">   
          <HeroSection isScrolled={isScrolled} />
          <CountingNumberAnimation/>
          <ScrollingLogoMarquee/>
          <ProjectsSection/>
          <Feedback/>
          <Foot/>
        </main>
        <Common_footer/>
      </div>
    </MotionConfig>
  );
}