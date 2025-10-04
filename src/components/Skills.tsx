import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Music, Palette, TestTube, Settings } from "lucide-react";
import { useState } from "react";

import cubaseImg from "@/assets/tools/cubase.jpg";
import flstudioImg from "@/assets/tools/flstudio.jpg";
import abletonImg from "@/assets/tools/ableton.jpg";
import djingImg from "@/assets/tools/djing.jpg";
import figmaImg from "@/assets/tools/figma.jpg";
import photoshopImg from "@/assets/tools/photoshop.jpg";
import illustratorImg from "@/assets/tools/illustrator.jpg";
import uiuxImg from "@/assets/tools/uiux.jpg";
import qaImg from "@/assets/tools/qa.jpg";
import testingMethodologiesImg from "@/assets/tools/testing-methodologies.jpg";
import bugTrackingImg from "@/assets/tools/bug-tracking.jpg";
import userTestingImg from "@/assets/tools/user-testing.jpg";
import documentationImg from "@/assets/tools/documentation.jpg";
import attentionDetailImg from "@/assets/skills/attention-detail.jpg";
import teamCollabImg from "@/assets/skills/team-collaboration.jpg";
import problemSolvingImg from "@/assets/skills/problem-solving.jpg";
import creativeThinkingImg from "@/assets/skills/creative-thinking.jpg";

const toolImages: Record<string, { image: string; alt: string }> = {
  "Cubase": { image: cubaseImg, alt: "Cubase DAW Interface" },
  "FL Studio": { image: flstudioImg, alt: "FL Studio Interface" },
  "Ableton": { image: abletonImg, alt: "Ableton Live Interface" },
  "DJing & Mixing": { image: djingImg, alt: "Professional DJ Setup" },
  "Figma": { image: figmaImg, alt: "Figma Design Interface" },
  "Photoshop": { image: photoshopImg, alt: "Adobe Photoshop Interface" },
  "Illustrator": { image: illustratorImg, alt: "Adobe Illustrator Interface" },
  "UI/UX Design": { image: uiuxImg, alt: "UI/UX Design Process" },
  "Testing Methodologies": { image: testingMethodologiesImg, alt: "Software Testing Methodologies" },
  "Bug Tracking": { image: bugTrackingImg, alt: "Bug Tracking System Interface" },
  "User Testing": { image: userTestingImg, alt: "User Testing Session" },
  "Documentation": { image: documentationImg, alt: "Technical Documentation" },
  "Attention to Detail": { image: attentionDetailImg, alt: "Attention to Detail Concept" },
  "Team Collaboration": { image: teamCollabImg, alt: "Team Collaboration" },
  "Problem Solving": { image: problemSolvingImg, alt: "Problem Solving" },
  "Creative Thinking": { image: creativeThinkingImg, alt: "Creative Thinking" },
};

const skillsData = [
  {
    icon: Music,
    title: "Music Production",
    tools: ["Cubase", "FL Studio", "Ableton", "DJing & Mixing"],
  },
  {
    icon: Palette,
    title: "Design",
    tools: ["Figma", "Photoshop", "Illustrator", "UI/UX Design"],
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    tools: ["Testing Methodologies", "Bug Tracking", "User Testing", "Documentation"],
  },
  {
    icon: Settings,
    title: "Other Skills",
    tools: ["Problem Solving", "Attention to Detail", "Creative Thinking", "Team Collaboration"],
  },
];

const Skills = () => {
  const [selectedTool, setSelectedTool] = useState<{ name: string; image: string; alt: string } | null>(null);

  const handleToolClick = (tool: string) => {
    const toolData = toolImages[tool];
    if (toolData) {
      setSelectedTool({ name: tool, ...toolData });
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Tools</h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A diverse toolkit built through years of creative exploration and professional growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50 group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Music Production - Beats from top */}
              {skill.title === "Music Production" && (
                <div className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-0 left-1/4 w-1 h-8 bg-accent animate-[slide-down_1s_ease-in-out_infinite]" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-0 left-1/2 w-1 h-12 bg-accent/80 animate-[slide-down_1s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }} />
                  <div className="absolute top-0 left-3/4 w-1 h-10 bg-accent/60 animate-[slide-down_1s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }} />
                  <div className="absolute top-0 right-1/4 w-1 h-14 bg-accent/90 animate-[slide-down_1s_ease-in-out_infinite]" style={{ animationDelay: '0.6s' }} />
                </div>
              )}
              
              {/* Design - Color splatter */}
              {skill.title === "Design" && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-accent/15 rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
                  <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-primary/15 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                </div>
              )}
              
              {/* QA - Checkmarks */}
              {skill.title === "Quality Assurance" && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/4 right-1/4 text-accent text-2xl animate-[scale-in_0.5s_ease-out_infinite]" style={{ animationDelay: '0s' }}>✓</div>
                  <div className="absolute top-1/2 right-1/3 text-accent/80 text-xl animate-[scale-in_0.5s_ease-out_infinite]" style={{ animationDelay: '0.2s' }}>✓</div>
                  <div className="absolute bottom-1/3 right-1/2 text-accent/60 text-lg animate-[scale-in_0.5s_ease-out_infinite]" style={{ animationDelay: '0.4s' }}>✓</div>
                </div>
              )}
              
              {/* Other Skills - Sparks/Stars */}
              {skill.title === "Other Skills" && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 text-accent text-xl animate-[spin-slow_2s_linear_infinite]" style={{ animationDelay: '0s' }}>✦</div>
                  <div className="absolute top-1/3 right-1/4 text-accent/70 text-lg animate-[spin-slow_2s_linear_infinite]" style={{ animationDelay: '0.3s' }}>✧</div>
                  <div className="absolute bottom-1/3 left-1/3 text-accent/80 text-2xl animate-[spin-slow_2s_linear_infinite]" style={{ animationDelay: '0.6s' }}>★</div>
                  <div className="absolute top-1/2 right-1/3 text-accent/60 text-lg animate-[spin-slow_2s_linear_infinite]" style={{ animationDelay: '0.9s' }}>✦</div>
                </div>
              )}
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-gradient-accent rounded-lg">
                  <skill.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool) => {
                      const hasImage = toolImages[tool];
                      return (
                        <button
                          key={tool}
                          onClick={() => handleToolClick(tool)}
                          className={`px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground transition-all ${
                            hasImage
                              ? "hover:bg-accent hover:text-accent-foreground cursor-pointer hover:scale-105"
                              : "cursor-default"
                          }`}
                          disabled={!hasImage}
                        >
                          {tool}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedTool} onOpenChange={() => setSelectedTool(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedTool?.name}</DialogTitle>
          </DialogHeader>
          {selectedTool && (
            <div className="mt-4">
              <img
                src={selectedTool.image}
                alt={selectedTool.alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Skills;
