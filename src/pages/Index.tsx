
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Implement intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Add .animate-fade-in when element enters viewport
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          // Use setAttribute for setting style properties on elements
          entry.target.setAttribute("style", "opacity: 1");
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Target all elements with opacity-0 class
    document.querySelectorAll(".opacity-0").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
