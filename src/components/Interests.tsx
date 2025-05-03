
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Trophy, Video, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Interests() {
  const interests = [
    {
      title: "Photography",
      icon: <Camera className="h-8 w-8 mb-4 text-primary" />,
      description: "Capturing moments and exploring visual storytelling through photography."
    },
    {
      title: "Sports",
      icon: <Trophy className="h-8 w-8 mb-4 text-primary" />,
      description: "Active football player and former team captain with a passion for team sports."
    },
    {
      title: "Video Editing",
      icon: <Video className="h-8 w-8 mb-4 text-primary" />,
      description: "Creating engaging visual content through creative video editing techniques."
    },
    {
      title: "Leadership",
      icon: <Users className="h-8 w-8 mb-4 text-primary" />,
      description: "Serving as a prefect, event organizer, and active Rotaract member."
    }
  ];

  return (
    <section id="interests" className="section-container">
      <h2 className="section-title">Interests & Leadership</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <Card 
            key={interest.title}
            className={cn(
              "text-center p-6 card-hover opacity-0 animate-fade-in",
            )}
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <CardContent className="pt-6">
              <div className="flex justify-center">{interest.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-sm text-muted-foreground">{interest.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
