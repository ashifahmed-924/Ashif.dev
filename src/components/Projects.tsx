
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const projects = [
    {
      title: "Online Tailor Store",
      description: "An e-commerce platform for a tailor store allowing customers to browse, customize, and order tailored clothing online.",
      contribution: "Developed the full-stack application with PHP and MySQL, implementing secure user authentication and payment processing.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "CSS"],
      image: "/projects/OTS.jpeg",
      github: "https://github.com/ashifahmed-924/Online-Tailor-Store"
    },
    {
      title: "Online Food Ordering System",
      description: "A comprehensive platform connecting restaurants with customers for online food ordering and delivery tracking.",
      contribution: "Built the backend API with Java and integrated with MySQL database. Implemented order tracking and notification system.",
      tags: ["Java", "MySQL", "REST API", "Servlets", "JSP"],
      image: "/projects/OFOS.jpeg",
      github: "https://github.com/ashifahmed-924/Online-food-ordering-system"
    },
    {
      title: "MSR Tailor Store",
      description: "Modern web application for a tailor store with appointment scheduling, measurement tracking, and order management.",
      contribution: "Developed using the MERN stack with real-time updates, responsive design, and secure authentication.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      image: "/projects/MSR.jpeg",
      github: "https://github.com/ashifahmed-924/MSR-ITP"
    }
  ];

  return (
    <section id="projects" className="section-container bg-muted/30">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={project.title} 
            className={cn(
              "overflow-hidden card-hover opacity-0 animate-fade-in",
            )}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <h4 className="font-medium mb-2">My Contribution:</h4>
              <p className="text-muted-foreground text-sm mb-4">{project.contribution}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={16} />
                  <span>GitHub Repo</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
