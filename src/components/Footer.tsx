
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-6">
            <a
              href="https://github.com/ashifahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ashif-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ashif.ahmed@example.com"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-center text-muted-foreground">
            &copy; {currentYear} Ashif Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
