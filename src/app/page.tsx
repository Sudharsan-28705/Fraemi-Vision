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
          {/* <ContactSection/> */}
          {/* <Cool/> */}
          <Foot/>
        </main>
        <footer className="bg-background border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Fraemi Vision. All rights reserved.
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}