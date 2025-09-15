"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import { MotionConfig } from "framer-motion";
import Cursor from "@/cursor";
import Common_footer from "@/components/sections/common_footer";
import App from "./app";

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
        <App />
        <Common_footer/>
      </div>
    </MotionConfig>
  );
}