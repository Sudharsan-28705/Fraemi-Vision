// "use client";

// import { useState, useEffect } from "react";
// import Header from "@/components/header";
// import { Card, CardContent } from "@/components/ui/card";
// import { Users, Target, Eye } from "lucide-react";
// import Cursor from "@/cursor";
// import { Typewriter } from 'react-simple-typewriter';
// import Image from 'next/image';
// import Common_footer from "@/components/sections/common_footer";

// const values = [
//     {
//         icon: <Users className="h-8 w-8 text-accent"/>,
//         title: "Our History",
//         description: "Founded on creative innovation, Fraemi-Vision has been turning visionary ideas into digital reality since its inception."
//     },
//     {
//         icon: <Target className="h-8 w-8 text-accent"/>,
//         title: "Our Mission",
//         description: "To design and develop seamless, engaging, and beautiful digital products that exceed client expectations and user needs."
//     },
//     {
//         icon: <Eye className="h-8 w-8 text-accent"/>,
//         title: "Our Values",
//         description: "We believe in collaboration, transparency, and a passion for pushing the boundaries of technology and design."
//     }
// ];

// export default function AboutPage() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <Cursor/>
//       <section id="About" className="scroll-mt-20">
//         <div className="flex flex-col min-h-screen bg-background">
//           <Header isScrolled={isScrolled} />
//           <main className="bg-background text-foreground pt-20">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//               <section id="about" className="space-y-12">

//                 {/* Page Header */}
//                 <div className="text-center">
//                   <h1 className="font-headline text-4xl md:text-5xl font-bold">About Fraemi Vision</h1>
//                   <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
//                     We are a team of passionate creators, thinkers, and builders dedicated to excellence.
//                   </p>
//                 </div>

//                 {/* Values Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
//                   {values.map((value) => (
//                     <Card key={value.title} className="bg-background/50 border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
//                       <CardContent className="p-6 text-center">
//                         <div className="flex justify-center mb-4">{value.icon}</div>
//                         <h3 className="font-headline text-xl font-semibold mb-2">{value.title}</h3>
//                         <p className="text-muted-foreground">{value.description}</p>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>

//                 {/* --- Founder Section --- */}
//                 <div className="pt-20">
//                   <div className="pt-8 md:p-12 rounded-lg shadow-lg">
//                     <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">

//                       {/* Founder Image and Name */}
//                       <div className="flex-shrink-0 text-center">
//                         <Image 
//                           src="/SUJITH_REMIGIUS/sujith-remigius (1).png" 
//                           alt="Founder Sujith Remigius" 
//                           width={240}
//                           height={240}
//                           className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-2xl border-4 border-background"
//                         />
//                         <h3 className="mt-5 text-xl text-accent tracking-wider font-semibold">
//                           SUJITH REMIGIUS
//                         </h3>
//                       </div>

//                       {/* Founder Title and Description */}
//                       <div className="flex-1 text-center">
//                         <h2 className="text-4xl text-accent tracking-wider mb-4 font-semibold text-center ">
//                           FOUNDER
//                         </h2>
//                         <p className="text-base text-muted-foreground leading-relaxed text-justify">
//                           <Typewriter
//                             words={[
//                               "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores cumque optio eaque, laudantium quas, expedita illo corrupti quaerat maxime quos nulla eum in veniam omnis repudiandae cum quisquam sed obcaecati nemo inventore? Natus, eligendi est atque placeat ratione qui voluptatibus earum sunt veniam recusandae delectus nulla architecto iusto deserunt minima vitae."
//                             ]}
//                             loop={1}
//                             cursor
//                             cursorStyle="|"
//                             typeSpeed={30}
//                             delaySpeed={1000}
//                           />
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* --- End of Founder Section --- */}

//               </section>
//             </div>
//           </main>
//           <Common_footer/>
//         </div>
//       </section>
//     </>
//   );
// }

"use client"

import Header from '@/components/header';
import Common_footer from '@/components/sections/common_footer';
import Cursor from '@/cursor';
import Image from 'next/image';
import React, { useState, useEffect, useRef, FC, ReactNode } from 'react';
import { Typewriter } from 'react-simple-typewriter';

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

const teamData = [
  { name: "Jane Doe", title: "CEO & Founder", quote: "The best way to predict the future is to create it.", link: "LINKEDIN", category: "leadership", img: "https://placehold.co/400x600/8b5cf6/f0e9ff?text=Jane+Doe" },
  { name: "John Smith", title: "CTO & Co-Founder", quote: "Turns coffee into code. Believes in elegant solutions to complex problems.", link: "GITHUB", category: "leadership", img: "https://placehold.co/400x600/3b82f6/dbeafe?text=John+Smith" },
  { name: "Emily White", title: "Lead Engineer", quote: "Building robust systems and mentoring the next generation of developers.", link: "LINKEDIN", category: "engineering", img: "https://placehold.co/400x600/ec4899/fce7f3?text=Emily+White" },
  { name: "Mike Brown", title: "Creative Director", quote: "Design is not just what it looks like, it's how it works.", link: "PORTFOLIO", category: "creative", img: "https://placehold.co/400x600/f43f5e/fee2e2?text=Mike+Brown" },
];

const missionData = [
  {
    id: 1,
    gradient: "from-pink-400 to-purple-600",
    src: "/ABOUT_US/creative_vision.jpeg",
    alt: "Creative Vision",
    title: "Creative Vision",
    description:
      "To translate your unique story into a timeless visual narrative. We combine the art of photography and cinematic videography with the precision of expert editing to craft compelling content that captivates and inspires.",
  },
  {
    id: 2,
    title: "The Art of the Story",
    gradient: "from-blue-400 to-teal-500",
    src: "/ABOUT_US/creative_vision.jpeg",
    description:
      "We believe every client has a story worth telling. Our purpose is to capture its essence through stunning photography, dynamic videography, and seamless post-production, turning fleeting moments into lasting legacies.",
  },

  {
    id: 3,
    title: "Capturing Your Narrative",
    gradient: "from-amber-400 to-orange-600",
    src: "/ABOUT_US/creative_vision.jpeg",
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
          <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
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
  const RevealOnScroll = ({ children , delay = 0, threshold = 0.25 }) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-secondary p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2 border border-border">
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Want to work with us?</h3>
            <p className="mb-6 text-muted-foreground">We're always looking for passionate talent. Check out our open positions.</p>
            <a href="#" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-8 rounded-full">View Careers</a>
          </div>
          <div className="bg-secondary p-8 rounded-lg text-center transform transition-transform hover:-translate-y-2 border border-border">
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Have a project in mind?</h3>
            <p className="mb-6 text-muted-foreground">Let's talk about how we can build something amazing together.</p>
            <a href="/contact" className="inline-block bg-foreground text-background hover:bg-foreground/90 font-bold py-3 px-8 rounded-full">Get In Touch</a>
          </div>
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
