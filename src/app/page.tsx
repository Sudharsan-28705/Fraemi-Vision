
"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import CountingNumberAnimation from "@/components/sections/company";
import ProjectsSection from "@/components/sections/projects-section";
import ScrollingLogoMarquee from "@/components/sections/scroll";
import Foot from "@/components/sections/footer";
import BounceCards from "@/components/sections/BounceCards";

export default function Home() {
    const images = [
        "/SUJITH_REMIGIUS/SUJITH_REMIGIUS.jpg",
        "/SUJITH_REMIGIUS/SUJITH_REMIGIUS.jpg",
        "/SUJITH_REMIGIUS/SUJITH_REMIGIUS.jpg",
        "/SUJITH_REMIGIUS/SUJITH_REMIGIUS.jpg",
        "/SUJITH_REMIGIUS/SUJITH_REMIGIUS.jpg"
    ];

    const transformStyles = [
        "rotate(5deg) translate(-150px)",
        "rotate(0deg) translate(-70px)",
        "rotate(-5deg)",
        "rotate(5deg) translate(70px)",
        "rotate(-5deg) translate(150px)"
    ];

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
            <Header isScrolled={isScrolled} />
            <main className="flex-grow">
                <HeroSection isScrolled={isScrolled} />
                <CountingNumberAnimation />
                <ScrollingLogoMarquee />
                <ProjectsSection />
                <BounceCards
                    className="custom-bounceCards my-20 mx-auto flex flex-col items-center justify-center w-full max-w-4xl"
                    images={images}
                    containerWidth={500}
                    containerHeight={250}
                    animationDelay={1}
                    animationStagger={0.2}
                    easeType="elastic.out(1, 0.5)"
                    transformStyles={transformStyles} 
                    enableHover />
                <Foot />
            </main>

        </>
    )
}
