import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';

const CLOUDINARY_BASE = "https://res.cloudinary.com/dhrsh9c2v";

const images = [
  {
    src: `${CLOUDINARY_BASE}/image/upload/v1771120588/EventCoverage_bmsgvd.jpg`,
    alt: "Event Coverage",
    title: "Event Coverage",
    description:
      "Capturing the energy and defining moments of your event with cinematic video and dynamic photography.",
  },
  {
    src: `${CLOUDINARY_BASE}/image/upload/v1771120554/Social_Media_vupltt.png`,
    alt: "Social Media",
    title: "Social Media",
    description:
      "Crafting scroll-stopping videos that boost engagement and elevate your brand's presence online.",
  },
  {
    src: `${CLOUDINARY_BASE}/image/upload/v1771120501/Commercial_Advertising_ptes9f.jpg`,
    alt: "Commercial & Advertising",
    title: "Commercial & Advertising",
    description:
      "Crafting compelling visual campaigns that elevate your brand and drive commercial results.",
  },
  {
    src: `${CLOUDINARY_BASE}/image/upload/v1771120501/Drone_zvlim5.jpg`,
    alt: "Drone Photography",
    title: "Drone Photography",
    description:
      "Elevating your vision with breathtaking aerial photography and dynamic cinematic footage.",
  },
  {
    src: `${CLOUDINARY_BASE}/image/upload/v1771120503/PODCAST_vdiin3.jpg`,
    alt: "Podcast",
    title: "Podcast",
    description:
      "Producing broadcast-quality, multi-camera video that transforms your podcast into an engaging visual show.",
  },
  {
    src: `${CLOUDINARY_BASE}/image/upload/v1771120502/PostProduction_c9u3wt.jpg`,
    alt: "Post Production",
    title: "Post Production",
    description:
      "Shaping your raw footage into a compelling story with meticulous editing, cinematic color, and immersive sound design.",
  },
];

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
      AOS.init({
        duration: 800,       // Animation duration
        easing: 'ease-in-out', // Animation easing
        once: false,           // Whether animation should happen only once
      });
    }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);

  return (
    <section>
      <div className="min-h-screen px-5 py-10">
        {/* Page Title */}
        <div className="text-center text-white mb-12 relative overflow-hidden" data-aos="zoom-up">
          <h1
            className="text-5xl font-light mb-2 opacity-0 translate-y-8 animate-[dropIn_0.8s_ease_forwards]"
            style={{
              animation: "dropIn 0.8s ease forwards",
            }}
          >
            Our Services
          </h1>
          <div className="inline-block mt-2 h-[1.3em] text-lg">
          <p
            ref={typingRef}
            className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-transparent w-0"
            style={{
              animation: isVisible
                ? "typing 2s steps(40, end) 1.8s forwards"
                : "none",
            }}
          >
            A selection of projects that showcase our passion for digital craftsmanship.
          </p>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid gap-10 px-10 mx-auto grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="image-card h-[400px] w-[800px]relative rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="fade-image w-full h-full object-cover transition duration-400 ease-in-out"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-10 text-white opacity-0 transition-opacity duration-400 bg-gradient-to-br from-black/30 to-black/10 hover:opacity-100">
                  <h2 className="text-2xl mb-3 font-light drop-shadow-lg translate-y-5 transition-transform duration-400">
                    {img.title}
                  </h2>
                  <p className="text-base opacity-90 drop-shadow-md translate-y-5 transition-transform duration-400 delay-100">
                    {img.description}
                  </p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
        @keyframes dropIn {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes typing {
          to { width: 100%; }
        }
        @keyframes blinkCaret {
          50% { border-color: #fff; }
        }

        /* Responsive styles for tablet */
        @media (max-width: 768px) {
          .grid-cols-\[repeat\(auto-fit\,minmax\(350px\,1fr\)\)\] {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
          }
        }

        /* Responsive styles for mobile */
        @media (max-width: 480px) {
          .grid-cols-\[repeat\(auto-fit\,minmax\(350px\,1fr\)\)\] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      </div>
    </section>

  );
};

