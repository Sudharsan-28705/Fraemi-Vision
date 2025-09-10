"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";
import Cursor from "@/cursor";
import { Typewriter } from 'react-simple-typewriter'


const values = [
    {
        icon: <Users className="h-8 w-8 text-accent"/>,
        title: "Our History",
        description: "Founded on the principle of creative innovation, Fraemi-Vision has been turning visionary ideas into digital reality since its inception."
    },
    {
        icon: <Target className="h-8 w-8 text-accent"/>,
        title: "Our Mission",
        description: "To design and develop seamless, engaging, and beautiful digital products that not only meet but exceed client expectations and user needs."
    },
    {
        icon: <Eye className="h-8 w-8 text-accent"/>,
        title: "Our Values",
        description: "We believe in collaboration, transparency, and a passion for pushing the boundaries of technology and design to create lasting impact."
    }
]

export default function AboutPage() {
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
    <Cursor/>
    <section id="About" className="scroll-mt-20">
      
    <div className="flex flex-col min-h-screen bg-background">
        <Header isScrolled={isScrolled} />
        <main className="bg-background text-foreground pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <section id="about" className="space-y-12">
                <div className="text-center">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold">About Fraemi Vision</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We are a team of passionate creators, thinkers, and builders dedicated to excellence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                    {values.map((value) => (
                      <>
                        <Card key={value.title} className="bg-background/50 border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
                            <CardContent className="p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="font-headline text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </CardContent>
                        </Card>
                        </>
                    ))}
                </div>

                <div className="pt-24 md:pt-25">
                     <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                         <div><img 
                            src="/SUJITH_REMIGIUS/sujith-remigius (1).png" 
                            alt="Founder Sujith Remigius" 
                            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-2xl border-4 border-background"
                        />
                        <h3 className="text-xl text-accent text-center pt-5 tracking-wider font-semibold">SUJITH REMIGIUS</h3>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl text-accent text-center tracking-wider mb-2 font-semibold pb-5">
                                FOUNDER
                            </h1>
                            
                            <p className="text-base text-muted-foreground leading-relaxed">
                                <Typewriter
      words={[
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores cumque optio eaque, laudantium quas, expedita illo corrupti quaerat maxime quos nulla eum in veniam omnis repudiandae cum quisquam sed obcaecati nemo inventore? Natus, eligendi est atque placeat ratione qui voluptatibus earum sunt veniam recusandae delectus nulla architecto iusto deserunt minima vitae."
      ]}
      loop={1}
      cursor
      cursorStyle="|"
      typeSpeed={30}
      deleteSpeed={50}
      delaySpeed={1000}
    />
                            </p>
                        </div>
                    </div>
                </div>

                </section>
            </div>
        </main>
         <footer className="bg-background border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Fraemi-Vision. All rights reserved.
          </div>
        </footer>
    </div>
    </section>
    </>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import Header from "@/components/header";
// import { Card, CardContent } from "@/components/ui/card";
// import { Users, Target, Eye } from "lucide-react";
// import Cursor from "@/cursor";


// const values = [
//     {
//         icon: <Users className="h-8 w-8 text-accent"/>,
//         title: "Our History",
//         description: "Founded on the principle of creative innovation, Fraemi-Vision has been turning visionary ideas into digital reality since its inception."
//     },
//     {
//         icon: <Target className="h-8 w-8 text-accent"/>,
//         title: "Our Mission",
//         description: "To design and develop seamless, engaging, and beautiful digital products that not only meet but exceed client expectations and user needs."
//     },
//     {
//         icon: <Eye className="h-8 w-8 text-accent"/>,
//         title: "Our Values",
//         description: "We believe in collaboration, transparency, and a passion for pushing the boundaries of technology and design to create lasting impact."
//     }
// ]

// export default function AboutPage() {
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

//   return (
//     <>
//     <Cursor/>
//     <section id="About" className="scroll-mt-20">
      
//     <div className="flex flex-col min-h-screen bg-background">
//         <Header isScrolled={isScrolled} />
//         <main className="bg-background text-foreground pt-20">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
//                 <section id="about" className="space-y-12">
//                 <div className="text-center">
//                     <h1 className="font-headline text-4xl md:text-5xl font-bold">About Fraemi Vision</h1>
//                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
//                     We are a team of passionate creators, thinkers, and builders dedicated to excellence.
//                     </p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
//                     {values.map((value) => (
//                         <Card key={value.title} className="bg-background/50 border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
//                             <CardContent className="p-6 text-center">
//                                 <div className="flex justify-center mb-4">
//                                     {value.icon}
//                                 </div>
//                                 <h3 className="font-headline text-xl font-semibold mb-2">{value.title}</h3>
//                                 <p className="text-muted-foreground">{value.description}</p>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>

//                 {/* --- INSERTED FOUNDER SECTION --- */}
//                 <div className="pt-24 md:pt-32">
//                     <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
//                         <img 
//                             src="/assest/sujith-remigius (1).png" 
//                             alt="Founder Sujith Remigius" 
//                             className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-2xl border-4 border-background"
//                         />
//                         <div className="flex-1 text-center md:text-left">
//                             <h2 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
//                                 FOUNDER
//                             </h2>
//                             <p className="text-base text-muted-foreground leading-relaxed">
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores cumque optio eaque,
//                                 laudantium quas, expedita illo corrupti quaerat maxime quos nulla eum in veniam omnis repudiandae cum
//                                 quisquam sed obcaecati nemo inventore? Natus, eligendi est atque placeat ratione qui voluptatibus earum
//                                 sunt veniam recusandae delectus nulla architecto iusto deserunt minima vitae.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//                 {/* --- END OF INSERTED SECTION --- */}

//                 </section>
//             </div>
//         </main>
//          <footer className="bg-background border-t border-border/50">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
//             © {new Date().getFullYear()} Fraemi-Vision. All rights reserved.
//           </div>
//         </footer>
//     </div>
//     </section>
//     </>
//   );
// }