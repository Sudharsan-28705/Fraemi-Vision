"use client"

import { useState, useEffect, useRef } from "react";
import Header from "@/components/header";
import Common_footer from "@/components/sections/common_footer";

interface CardProps {
  image: string;
  video: string;
}

const CLOUDINARY_BASE = "https://res.cloudinary.com/dhrsh9c2v";

const Card = ({ image, video }: CardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative h-[350px] w-[250px] rounded-xl overflow-hidden shadow-md cursor-none 
      transform transition-all duration-700 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      hover:scale-105 hover:shadow-xl hover:shadow-black/40`}
    >
      {/* Image */}
      <img
        src={image}
        alt="Portfolio preview"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"
          }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </div>
  );
};

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

  return (
    <>
      <section id="Portfolio" className="scroll-mt-20">
        <div className="min-h-screen bg-background">
          <Header isScrolled={isScrolled} />

          <main className="flex flex-col justify-center">
            <div className="bg-background text-foreground flex flex-col items-center justify-center gap-24 py-20 font-['Inter',_sans-serif]">

              {/* Row 1 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771063913/THE_GOAT.jpg`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771063688/THE_GOAT_VIDEO.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771658810/THUG_LIFE_eprxnr.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771083149/THUGFLUENCER_hv63r9.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771657431/VELS_2_shiyx5.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771239447/VELS_poezhe.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771065412/TBL_sdgezo.jpg`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771065330/TBL_jytkab.mp4`}
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771659154/IMPLATREE_evwvwn.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771083036/IMPLANTREE_gkeoct.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771248204/RAVIMOHAN_STUDIOS_rqxw2z.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771082939/RAVIMOHAN_STUDIOS_mzue9k.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771657716/MOHAN_S_KITCHEN_LOGO_2_ejriw4.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771083028/MOHAN_S_KITCHEN_s510az.mov`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771081921/DRAVA_r6d2tk.jpg`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771082901/DRAVA_oimshj.mp4`}
                />
              </div>

              {/* Row 3 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771081921/MM_KITCHEN_bzxciv.jpg`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771082996/MM_KITCHEN_wylnay.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771659762/MEIARIVU_LOGO_muvrtq.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771238775/MEIARIVU_dmklwj.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771239304/JUSTD_eavb7n.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771238207/JYSTD_mnuftw.mp4`}
                />
                <Card
                  image={`${CLOUDINARY_BASE}/image/upload/v1771066251/TN_SKILL_gysiom.png`}
                  video={`${CLOUDINARY_BASE}/video/upload/v1771066240/TN_SKILL_octutj.mp4`}
                />
              </div>
            </div>

            <div className="text-center pb-[65px] text-gray-400 transition-colors hover:text-gray-300">
              <a href="https://linktr.ee/Fraemi_Vision">ALL OTHER PROJECTS</a>
            </div>
          </main>
        </div>
      </section>

      <Common_footer />
    </>
  );
};

export default Portfolio;