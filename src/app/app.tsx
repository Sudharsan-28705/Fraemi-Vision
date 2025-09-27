"use client"

import { useState, useEffect } from "react";
import CountingNumberAnimation from '@/components/sections/company'
import Feedback from '@/components/sections/feedback'
import Foot from '@/components/sections/footer'
import HeroSection from '@/components/sections/hero-section'
import ProjectsSection from '@/components/sections/projects-section'
import ScrollingLogoMarquee from '@/components/sections/scroll'
import React from 'react'

const App = () => {

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
        <main className="flex-grow">
            <HeroSection isScrolled={isScrolled} />
            <CountingNumberAnimation />
            <ScrollingLogoMarquee />
            <ProjectsSection />
            {/* <Feedback /> */}
            <Foot />
        </main>
    )
}

export default App