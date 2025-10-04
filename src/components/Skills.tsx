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

const toolImages: Record<string, { image: string; alt: string }> = {
  "Cubase": { image: cubaseImg, alt: "Cubase DAW Interface" },
  "FL Studio": { image: flstudioImg, alt: "FL Studio Interface" },
  "Ableton": { image: abletonImg, alt: "Ableton Live Interface" },
  "DJing & Mixing": { image: djingImg, alt: "Professional DJ Setup" },
  "Figma": { image: figmaImg, alt: "Figma Design Interface" },
  "Photoshop": { image: photoshopImg, alt: "Adobe Photoshop Interface" },
  "Illustrator": { image: illustratorImg, alt: "Adobe Illustrator Interface" },
  "UI/UX Design": { image: uiuxImg, alt: "UI/UX Design Process" },
  "Testing Methodologies": { image: qaImg, alt: "QA Testing Workspace" },
  "Bug Tracking": { image: qaImg, alt: "Bug Tracking System" },
  "User Testing": { image: qaImg, alt: "User Testing Process" },
  "Documentation": { image: qaImg, alt: "QA Documentation" },
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
          <p className="text-sm text-muted-foreground">Click on tools to see them in action</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
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
