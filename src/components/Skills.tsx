import { Card } from "@/components/ui/card";
import { Music, Palette, TestTube, Settings } from "lucide-react";

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
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Skills & Tools</h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto" />
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
                    {skill.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
