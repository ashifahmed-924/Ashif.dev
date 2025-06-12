
import { Badge } from "@/components/ui/badge";
import { Code, Users, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

export default function About() {
  const coreValues = [
    {
      title: "Innovation",
      icon: <Lightbulb className="w-10 h-10 mb-4 text-primary" />,
      description: "Constantly exploring new technologies and approaches to solve problems creatively.",
    },
    {
      title: "Collaboration",
      icon: <Users className="w-10 h-10 mb-4 text-primary" />,
      description: "Working effectively in teams to achieve shared goals with open communication.",
    },
    {
      title: "Technical Excellence",
      icon: <Code className="w-10 h-10 mb-4 text-primary" />,
      description: "Committed to writing clean, efficient, and maintainable code that follows best practices.",
    },
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>

      <div className="max-w-3xl mx-auto mb-16 text-center">
        <p className="text-lg mb-6">
          I'm a passionate UI/UX Designer focused full-time on creating intuitive and visually engaging digital experiences. 
          With a strong eye for design and user flow, I craft user-centered interfaces that not only look great but also feel effortless to use.

          While my core lies in UI/UX, I also have hands-on experience in frontend development, 
          allowing me to bridge the gap between design and implementation. 
          I enjoy turning ideas into clean, functional, and accessible designs that users love.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="text-sm px-3 py-1">UI/UX</Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">Front-End Development</Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">Problem Solving</Badge>
          <Badge variant="outline" className="text-sm px-3 py-1">Team Leadership</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <div
            key={value.title}
            className={cn(
              "bg-card p-6 rounded-lg shadow-md text-center card-hover opacity-0 animate-fade-in",
            )}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            {value.icon}
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
