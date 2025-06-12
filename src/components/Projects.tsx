import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Figma } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const allProjects = [
    {
      title: "Online Tailor Store",
      type: "full-stack",
      description:
        "An e-commerce platform for a tailor store allowing customers to browse, customize, and order tailored clothing online.",
      contribution:
        "Developed the full-stack application with PHP and MySQL, implementing secure user authentication and payment processing.",
      tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "CSS"],
      image: "/projects/OTS.jpeg",
      github: "https://github.com/ashifahmed-924/Online-Tailor-Store",
      isFigma: false
    },
    {
      title: "Online Food Ordering System",
      type: "full-stack",
      description:
        "A comprehensive platform connecting restaurants with customers for online food ordering and delivery tracking.",
      contribution:
        "Built the backend API with Java and integrated with MySQL database. Implemented order tracking and notification system.",
      tags: ["Java", "MySQL", "REST API", "Servlets", "JSP"],
      image: "/projects/OFOS.jpeg",
      github: "https://github.com/ashifahmed-924/Online-food-ordering-system",
      isFigma: false
    },
    {
      title: "MSR Tailor Store",
      type: "full-stack",
      description:
        "Modern web application for a tailor store with appointment scheduling, measurement tracking, and order management.",
      contribution:
        "Developed using the MERN stack with real-time updates, responsive design, and secure authentication.",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Redux"],
      image: "/projects/MSR.jpeg",
      github: "https://github.com/ashifahmed-924/MSR-ITP",
      isFigma: false
    },
    {
      title: "Trip Nest – Travel App UI",
      type: "uiux",
      description:
        "A clean and intuitive mobile UI for a travel booking app designed in Figma, focused on ease of navigation and booking flow.",
      contribution:
        "Designed the complete UI flow in Figma including flight search, filters, booking, and profile screens.",
      tags: ["UI/UX", "Figma", "Mobile App", "Travel", "Prototype"],
      image: "/projects/tripnest.png",
      github: "https://www.figma.com/design/nMhoTkrfogQ0QZ4OdPS9Hs/travel-booking-App?node-id=0-1&t=OytAYDPCD1fTLT1k-1",
      isFigma: true
    },
    {
      title: "Riyasewana Redesign",
      type: "uiux",
      description:
        "A modern redesign of a popular vehicle marketplace platform, aimed at improving usability, responsiveness, and aesthetics.",
      contribution:
        "Redesigned UI using Figma, focusing on better visual hierarchy and user-friendly navigation.",
      tags: ["UI/UX", "Figma", "Web App", "Vehicle", "Wireframe"],
      image: "/projects/riyasewana.png",
      github: "https://www.figma.com/design/6VHRM2Gyqr1YGb9vDhh5Bg/Riyasewana-re-designed?node-id=0-1&t=CGM2yzudT98hCh1z-1",
      isFigma: true
    },
    {
      title: "ChapterOne – Mobile App UI",
      type: "uiux",
      description:
        "Explore a curated collection of books across all genres, handpicked to inspire, entertain, and ignite your imagination.",
      contribution:
        "Created wireframes, mockups, and prototypes in Figma with attention to user flows and color psychology.",
      tags: ["UI/UX", "Figma", "Mobile UI", "Coffee", "User Flow"],
      image: "/projects/chapterone.png",
      github:
        "https://www.figma.com/design/73nmRF5Dfja1onw04YMCIC/Home-page---Book-Store?node-id=0-1&t=PR0Y2WAdQaaiy9in-1",
      isFigma: true
    }
  ];

  const filteredProjects =
    filter === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === filter);

  return (
    <section id="projects" className="section-container bg-muted/30">
      <h2 className="section-title">Featured Projects</h2>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {["all", "full-stack", "uiux"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(type)}
          >
            {type === "all"
              ? "All"
              : type === "full-stack"
              ? "Full-Stack"
              : "UI/UX"}
          </Button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={project.title}
            className={cn("overflow-hidden card-hover opacity-0 animate-fade-in")}
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
              <p className="text-muted-foreground text-sm mb-4">
                {project.contribution}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  {project.isFigma ? <Figma size={16} /> : <Github size={16} />}
                  <span>{project.isFigma ? "Figma Design" : "GitHub Repo"}</span>
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
