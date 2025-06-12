import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// Reusable fade-in wrapper
const FadeInSection = ({
  delay,
  children,
}: {
  delay: string;
  children: React.ReactNode;
}) => (
  <div className="opacity-0 animate-fade-in" style={{ animationDelay: delay }}>
    {children}
  </div>
);

export default function Skills() {
  const technicalSkills = [
    { name: "React", level: 75 },
    { name: "JavaScript/TypeScript", level: 75 },
    { name: "HTML/CSS", level: 75 },
    { name: "Node.js", level: 60 },
    { name: "PHP", level: 50 },
    { name: "Java", level: 50 },
    { name: "Python", level: 50 },
    { name: "MySQL", level: 60 },
    { name: "MongoDB", level: 60 },
    { name: "Git/GitHub", level: 60 },
  ];

  const designingTools = [
    { name: "Figma", level: 90 },
    { name: "Canva", level: 90 },
    { name: "Framer", level: 80 },
    { name: "Adobe XD", level: 70 },
    { name: "PhotoShop - Mobile", level: 70 },
    { name: "Lighroom - Mobile", level: 70 },
  ];

  const softSkills = [
    { name: "Leadership", description: "Led team projects and organized tech events" },
    { name: "Time Management", description: "Efficiently balancing academic work and projects" },
    { name: "Communication", description: "Clear and effective technical and interpersonal communication" },
    { name: "Problem Solving", description: "Analytical approach to technical and business challenges" },
    { name: "Teamwork", description: "Collaborative work style with strong interpersonal skills" },
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">My Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 1. Designing Tools */}
        <FadeInSection delay="0.2s">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Designing Tools</h3>
          <div className="space-y-4">
            {designingTools.map((tool) => (
              <div key={tool.name} className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">{tool.name}</span>
                  <span className="text-muted-foreground">{tool.level}%</span>
                </div>
                <Progress
                  value={tool.level}
                  className="h-2"
                  indicatorClassName="bg-primary"
                />
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* 2. Soft Skills */}
        <FadeInSection delay="0.4s">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className={cn("bg-card p-4 rounded-lg shadow-sm card-hover")}
              >
                <h4 className="text-lg font-medium text-primary mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* 3. Technical Skills */}
        <FadeInSection delay="0.6s">
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Technical Skills</h3>
          <div className="space-y-4">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-2"
                  indicatorClassName="bg-primary"
                />
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
