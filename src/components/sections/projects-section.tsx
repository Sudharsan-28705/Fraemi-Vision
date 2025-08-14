import React, { useEffect } from "react";

const images = [
  {
    src: "/SERVICE_ASSESTS/EventCoverage.jpeg",
    alt: "Event Coverage",
    title: "Event Coverage",
    description:
      "Capturing the energy and defining moments of your event with cinematic video and dynamic photography.",
    linkText: "Explore",
  },
  {
    src: "/SERVICE_ASSESTS/SocialMedia.jpeg",
    alt: "Social Media",
    title: "Social Media",
    description:
      "Crafting scroll-stopping videos that boost engagement and elevate your brand's presence online.",
    linkText: "Discover",
  },
  {
    src: "/SERVICE_ASSESTS/Commercial&Advertise.jpeg",
    alt: "Commercial & Advertising",
    title: "Commercial & Advertising",
    description:
      "Crafting compelling visual campaigns that elevate your brand and drive commercial results.",
    linkText: "Dive In",
  },
  {
    src: "/SERVICE_ASSESTS/Drone.jpeg",
    alt: "Drone Photography",
    title: "Drone Photography",
    description:
      "Elevating your vision with breathtaking aerial photography and dynamic cinematic footage.",
    linkText: "Journey",
  },
  {
    src: "/SERVICE_ASSESTS/Podcast.jpeg",
    alt: "Podcast",
    title: "Podcast",
    description:
      "Producing broadcast-quality, multi-camera video that transforms your podcast into an engaging visual show.",
    linkText: "Witness",
  },
  {
    src: "/SERVICE_ASSESTS/PostProduction.jpeg",
    alt: "Post Production",
    title: "Post Production",
    description:
      "Shaping your raw footage into a compelling story with meticulous editing, cinematic color, and immersive sound design.",
    linkText: "Listen",
  },
];

export default function ProjectsSection() {
  return (
    <section>
      <div className="min-h-screen px-5 py-10">
        {/* Page Title */}
        <div className="text-center text-white mb-12 relative overflow-hidden">
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
              className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-transparent w-0"
              style={{
                animation:
                  "typing 2s steps(40, end) 1.8s forwards",
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
              className="image-card h-[400px] w-[800px]relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(192,192,192,0.5)]"
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
                  <a
                    href="#"
                    className="mt-5 px-6 py-2 bg-white/20 text-white rounded-full border border-white/30 transition duration-300 backdrop-blur-md text-sm tracking-wider uppercase hover:bg-white/30 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {img.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-white rounded-md hover:text-primary/100 transition-colors duration-200 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            View All Projects
          </a>
        </div>

        {/* Custom animations */}
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
      `}</style>
      </div>
    </section>

  );
};

