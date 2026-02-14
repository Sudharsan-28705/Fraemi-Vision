// "use client"

// import { useState, useEffect } from "react";
// import Header from '@/components/header'
// import Common_footer from "@/components/sections/common_footer";

// const Portfolio = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Reusable card component
//   const Card = () => (
//     <div className="h-[350px] w-[250px] bg-gray-400 rounded-xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50"></div>
//   );

//   return (
//     <>
//       <section id="Portfolio" className="scroll-mt-20">
//         <div className="min-h-screen bg-background">
//           <Header isScrolled={isScrolled} />
//           <main className="flex flex-col justify-center">
//             <div className="bg-background text-foreground flex flex-col items-center justify-center gap-24 py-20 font-['Inter',_sans-serif]">
              
//               {/* Row 1 */}
//               <div className="flex flex-row items-center justify-center gap-14">
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card/>
//               </div>

//               {/* Row 2 */}
//               <div className="flex flex-row items-center justify-center gap-14">
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//               </div>

//               {/* Row 3 */}
//               <div className="flex flex-row items-center justify-center gap-14">
//                 <Card />
//                 <Card />
//                 <Card />
//                 <Card />
//               </div>

//             </div>
//           </main>
//         </div>
//         {/* <h3 className="text-center">ALL OTHER PROJECTS</h3> */}
//       </section>
//       <Common_footer />
//     </>
//   )
// }

// export default Portfolio;

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
      className={`relative h-[350px] w-[250px] rounded-xl overflow-hidden shadow-md cursor-pointer 
      transform transition-all duration-700
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      hover:scale-105 hover:shadow-xl hover:shadow-black/40`}
    >
      {/* Image */}
      <img
        src={image}
        alt="Portfolio preview"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video */}
      <video
        ref={videoRef}
        src={video}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
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
                  image={`${CLOUDINARY_BASE}/image/upload/v1771065412/TBL_sdgezo.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/v1771065330/TBL_jytkab.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/v1771066251/TN_SKILL_gysiom.png`} 
                  video={`${CLOUDINARY_BASE}/video/upload/v1771066240/TN_SKILL_octutj.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image4.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video4.mp4`} 
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image5.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video5.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image6.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video6.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image7.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video7.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image8.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video8.mp4`} 
                />
              </div>

              {/* Row 3 */}
              <div className="flex flex-row items-center justify-center gap-14">
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image9.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video9.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image10.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video10.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image11.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video11.mp4`} 
                />
                <Card 
                  image={`${CLOUDINARY_BASE}/image/upload/portfolio/images/image12.jpg`} 
                  video={`${CLOUDINARY_BASE}/video/upload/portfolio/videos/video12.mp4`} 
                />
              </div>

            </div>
          </main>
        </div>
      </section>

      <Common_footer />
    </>
  );
};

export default Portfolio;