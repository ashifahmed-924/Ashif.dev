
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function Skills() {
  const technicalSkills = [
    { name: "React", level: 90 },
    { name: "JavaScript/TypeScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "PHP", level: 85 },
    { name: "Java", level: 75 },
    { name: "Python", level: 70 },
    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 75 },
    { name: "Git/GitHub", level: 80 },
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
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Technical Skills</h3>
          <div className="space-y-4">
            {technicalSkills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" indicatorClassName="bg-primary" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Soft Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className={cn(
                  "bg-card p-4 rounded-lg shadow-sm card-hover",
                )}
              >
                <h4 className="text-lg font-medium text-primary mb-2">{skill.name}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
