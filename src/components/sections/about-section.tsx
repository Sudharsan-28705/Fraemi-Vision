import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";

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

export default function AboutSection() {
  return (
    <section id="about" className="space-y-12">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">About Fraemi-Vision</h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are a team of passionate creators, thinkers, and builders dedicated to excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value) => (
            <Card key={value.title} className="bg-background/50 border-border/50 hover:border-primary transition-colors duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                        {value.icon}
                    </div>
                    <h3 className="font-headline text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
            </Card>
        ))}
      </div>
    </section>
  );
}
