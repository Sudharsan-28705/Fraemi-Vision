import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Project Alpha",
    description: "A dynamic web application for a leading tech startup.",
    image: "https://placehold.co/600x400.png",
    tags: ["Web App", "UI/UX"],
    hint: "technology abstract",
  },
  {
    title: "Project Beta",
    description: "An immersive e-commerce experience for a fashion brand.",
    image: "https://placehold.co/600x400.png",
    tags: ["E-commerce", "Branding"],
    hint: "fashion design",
  },
  {
    title: "Project Gamma",
    description: "A mobile-first platform for a financial services company.",
    image: "https://placehold.co/600x400.png",
    tags: ["Mobile App", "Fintech"],
    hint: "finance chart",
  },
   {
    title: "Project Delta",
    description: "A comprehensive data visualization dashboard.",
    image: "https://placehold.co/600x400.png",
    tags: ["Dashboard", "Data Viz"],
    hint: "data dashboard",
  },
  {
    title: "Project Epsilon",
    description: "A corporate website redesign with a focus on accessibility.",
    image: "https://placehold.co/600x400.png",
    tags: ["Website", "Accessibility"],
    hint: "corporate building",
  },
  {
    title: "Project Zeta",
    description: "A social networking app connecting creatives worldwide.",
    image: "https://placehold.co/600x400.png",
    tags: ["Social", "Mobile App"],
    hint: "social connection",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-12">
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Work</h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-muted-foreground">
          A selection of projects that showcase our passion for digital craftsmanship.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden bg-background/50 border-border/50 hover:shadow-primary/20 hover:shadow-2xl transition-all duration-300 group transform hover:-translate-y-2">
            <CardContent className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={project.hint}
              />
            </CardContent>
            <CardFooter className="p-6 flex flex-col items-start">
              <h3 className="font-headline text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-left flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-accent">{tag}</Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
