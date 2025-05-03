
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email",
      value: "ashif.ahmed@example.com",
      link: "mailto:ashif.ahmed@example.com",
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Phone",
      value: "+94 123 456 789",
      link: "tel:+94123456789",
    },
    {
      icon: <Linkedin className="h-8 w-8 text-primary" />,
      title: "LinkedIn",
      value: "ashif-ahmed",
      link: "https://linkedin.com/in/ashif-ahmed",
    },
    {
      icon: <Github className="h-8 w-8 text-primary" />,
      title: "GitHub",
      value: "ashifahmed",
      link: "https://github.com/ashifahmed",
    },
  ];

  return (
    <section id="contact" className="section-container bg-muted/30">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
          <p className="mb-8 text-muted-foreground">
            I'm always interested in new opportunities, collaborations, or just a friendly chat about technology and development.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactMethods.map((method) => (
              <Card key={method.title} className="card-hover">
                <CardContent className="flex items-center p-6">
                  <div className="mr-4">{method.icon}</div>
                  <div>
                    <h4 className="font-medium">{method.title}</h4>
                    <a 
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {method.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows={6}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
