
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export default function Education() {
  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2022 – Present",
      description: "Specializing in Software Engineering with focus on web technologies, database management, and software development practices.",
    },
    {
      degree: "GCE A/L in Commerce Stream",
      institution: "Madina National College",
      period: "2018 – 2020",
      description: "Studied Business Studies, Accounting, and Economics with distinction.",
    },
  ];

  return (
    <section id="education" className="section-container bg-muted/30">
      <h2 className="section-title">Education</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-muted-foreground/20 -translate-x-1/2"></div>
          
          {/* Education items */}
          {education.map((item, index) => (
            <div 
              key={item.degree}
              className={cn(
                "relative mb-12 opacity-0 animate-fade-in",
                "md:w-1/2",
                index % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12",
              )}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 -ml-2 w-4 h-4 rounded-full bg-primary"
                style={{
                  left: index % 2 === 0 ? '-2.5rem' : 'calc(100% + 1.5rem)',
                }}
              >
                <div className="absolute inset-0 w-4 h-4 rounded-full animate-ping bg-primary opacity-20"></div>
                <div 
                  className={cn(
                    "absolute top-2 -mt-px h-0.5 bg-primary",
                    index % 2 === 0 ? "-left-12 right-auto" : "-right-12 left-auto",
                    "w-12"
                  )}
                ></div>
              </div>
              
              <div className="bg-card rounded-lg shadow-md p-6 card-hover">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                  {item.period}
                </span>
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <h4 className="text-base text-muted-foreground mb-4">{item.institution}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}