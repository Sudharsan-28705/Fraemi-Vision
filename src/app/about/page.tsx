"use client"

import Header from '@/components/header';
import Common_footer from '@/components/sections/common_footer';
import Cursor from '@/cursor';
import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';


// --- Reusable Animation Component ---
const RevealOnScroll: FC<{ children: ReactNode; className?: string }> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-all duration-700 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return <div ref={ref} className={classes}>{children}</div>;
};

// --- Data for Components ---
const timelineData = [
  { year: "2023", title: "The Idea", description: "In a small studio, a single idea sparked: to redefine visual storytelling. Fueled by passion and a clear vision, our journey began." },
  { year: "2024", title: "Our First Masterpiece", description: "We delivered our first major project, earning accolades and setting the benchmark for our creative standards. Our client's success became our success." },
  { year: "2025", title: "Expanding Horizons", description: "Our team grew, bringing in new talent and diverse skills. We moved into a dedicated creative space to better serve our growing list of clients." },
  { year: "Today", title: "Crafting the Future", description: "We continue to push creative boundaries, innovate with new technologies, and tell unforgettable stories. The best is yet to come." },
];


const missionData = [
  {
    id: 1,
    gradient: "from-pink-400 to-purple-600",
    src: "/ABOUT_ASSESTS/creative_vision.jpeg",
    alt: "Creative Vision",
    title: "Creative Vision",
    description:
      "To translate your unique story into a timeless visual narrative. We combine the art of photography and cinematic videography with the precision of expert editing to craft compelling content that captivates and inspires.",
  },
  {
    id: 2,
    title: "The Art of the Story",
    gradient: "from-blue-400 to-teal-500",
    src: "/ABOUT_ASSESTS/ART_OF_STORY.webp",
    description:
      "We believe every client has a story worth telling. Our purpose is to capture its essence through stunning photography, dynamic videography, and seamless post-production, turning fleeting moments into lasting legacies.",
  },

  {
    id: 3,
    title: "Capturing Your Narrative",
    gradient: "from-amber-400 to-orange-600",
    src: "/ABOUT_ASSESTS/Narrative.jpg",
    description:
      "From the first shot to the final cut, our passion is to frame your world. We specialize in capturing life's defining moments through expert videography and photography, polishing each memory to perfection with our meticulous editing process.",
  }
];

// --- Section Components ---

const Header1 = () => (
  <header className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full opacity-60 z-10"></div>
    <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
      <source src="https://placehold.co/1920x1080/000000/FFFFFF/mp4?text=Background+Video" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="relative z-20 px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-lg">Every Frame Tells a Story</h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md text-muted-foreground ">We are a team of passionate creators, thinkers, and builders dedicated to excellence.</p>
      <a href="#mission" className="inline-block bg-primary text-primary-foreground font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
        Discover Our Journey
      </a>
    </div>
  </header>
);

const Mission = () => (
  <section id="mission" className="py-20 md:py-32">
    <div className="container mx-auto px-6 space-y-24">
      {missionData.map((mission, index) => (
        <div key={mission.id} className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Logic to alternate image position */}
          <div className={`md:w-1/2 height={200} width={400} ${index % 2 !== 0 ? 'md:order-2' : ''} `}>
            <img src={mission.src} alt={mission.title} className="rounded-lg shadow-xl w-full h-auto" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <RevealOnScroll>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${mission.gradient}`}>
                {mission.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {mission.description}
              </p>
            </RevealOnScroll>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Timeline = () => (
  <section id="timeline" className="py-20 md:py-32 bg-background">
    <div className="container mx-auto px-6">
      <RevealOnScroll className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey Through Time</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Key milestones that shaped who we are today.</p>
      </RevealOnScroll>

      <div className="relative">
        <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-border"></div>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const TimelineItem: FC<{ item: typeof timelineData[0], index: number }> = ({ item, index }) => {
  const isRightSide = index % 2 !== 0;
  const sideClasses = isRightSide
    ? "justify-between flex-row-reverse"
    : "justify-between";

  return (
    <RevealOnScroll className={`mb-12 flex items-center w-full ${sideClasses}`}>
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
        <h3 className="mx-auto font-semibold text-lg text-primary-foreground">{index + 1}</h3>
      </div>
      <div className="order-1 bg-secondary rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h4 className="font-bold text-lg mb-1">{item.year} - {item.title}</h4>
        <p className="text-sm leading-snug tracking-wide text-muted-foreground">{item.description}</p>
      </div>
    </RevealOnScroll>
  );
};


const Team = () => {
  const RevealOnScroll = ({ children, delay = 0, threshold = 0.25 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Check if the element is intersecting
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stop observing after the animation is triggered
            observer.unobserve(entry.target);
          }
        },
        {
          threshold, // 25% of the element must be visible
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          observer.unobserve(ref.current);
        }
      };
    }, [ref, threshold]);

    // Base transition classes
    const transitionClasses = `transition-all duration-1000 ease-out`;
    // Initial state: invisible and slightly moved down
    const initialStateClasses = `opacity-0 transform translate-y-5`;
    // Visible state: fully opaque and in original position
    const visibleStateClasses = `opacity-100 transform translate-y-0`;
    return (
      <div
        ref={ref}
        className={`${transitionClasses} ${isVisible ? visibleStateClasses : initialStateClasses}`}
        style={{ transitionDelay: `${delay}ms` }} // Apply custom delay
      >
        {children}
      </div>
    );
  };

  return (
    <section id="founder" className="py-20 md:py-32 font-sans overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <RevealOnScroll>
            <div className="w-full max-w-md mx-auto">
              <img
                src="/SUJITH_REMIGIUS/sujith-remigius (1).png"
                alt="Founder of the Company"
                className="rounded-full shadow-2xl w-full h-auto aspect-square object-cover"
              />
            </div>
          </RevealOnScroll>

          {/* Content Column */}
          <div className="text-center md:text-left">
            <RevealOnScroll delay={100}>
              <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 mb-2">Meet Sujith Remigius</h1>
            </RevealOnScroll>

            <RevealOnScroll delay={300}>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-8">Founder & Creative Director, Fraemi Vision</p>
            </RevealOnScroll>

            <RevealOnScroll delay={500}>
              <p className="text-lg text-gray-600 leading-relaxed">Driven by a vision to fuse artistry with technology, Sujith established Fraemi Vision to create captivating visual experiences. Drawing on extensive experience in photography, filmmaking, and post-production, they guide the creative strategy with a core belief: that every frame has the power to evoke emotion. As the driving force behind the company, they mentor the team to ensure every project is a benchmark of quality, innovation, and authentic storytelling.</p>
            </RevealOnScroll>

            <RevealOnScroll delay={700}>
              <blockquote className="text-xl italic text-purple-700 border-l-4 border-purple-300 pl-4 mt-10">“Creativity is not just about what we capture, but how we make people feel.” – Sujith Remigius</blockquote>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};


const JoinUs = () => (
  <section id="join-us" className="py-20 md:py-32 bg-background text-foreground">
    <div className="container mx-auto px-6 text-center">
      <RevealOnScroll>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a Part of Our Story</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">Whether you're a potential client, a future team member, or just a fan, we'd love to connect.</p>
        <div className="inline-block p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2 border border-border-opacity-50">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Have a project in mind?</h3>
          <p className="mb-6 text-muted-foreground">Let's talk about how we can build something amazing together.</p>
          <a href="/contact" className="inline-block bg-foreground text-background hover:bg-foreground/90 font-bold py-3 px-8 rounded-full">Get In Touch</a>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

// --- Main App Component ---
export default function App() {
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
      <Cursor />
      <Header isScrolled={isScrolled} />
      <Header1 />
      <main>
        <Mission />
        <Timeline />
        <Team />
        <JoinUs />
      </main>
      <Common_footer />
    </>
  );
}
