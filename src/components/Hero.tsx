
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="text-primary block">Ashif Ahmed.</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6">
              UI/UX Designer & Frontend Enthusiast
            </h2>
            
            <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Design. Code. Repeat — for humans.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <a href="#projects">View My Projects</a>
              </Button>
              
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-40"></div>
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background relative z-10">
                <img
                  src="/Ashif dp.jpeg"
                  alt="Ashif Ahmed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-primary w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
