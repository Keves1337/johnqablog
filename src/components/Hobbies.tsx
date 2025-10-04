import { Card } from "@/components/ui/card";

const hobbiesData = [
  {
    title: "DJing & Music Mixing",
    description:
      "Crafting sonic experiences and keeping the dance floor alive. Music is not just a hobby, it's a way of life.",
    emoji: "🎧",
  },
  {
    title: "Design Creation",
    description:
      "Bringing ideas to life through Figma, Photoshop, and Illustrator. Every project is a canvas for creativity.",
    emoji: "🎨",
  },
  {
    title: "Motorcycle Riding",
    description:
      "Freedom on two wheels. There's nothing quite like the open road and the wind in your face.",
    emoji: "🏍️",
  },
];

const Hobbies = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">When I'm Not Working</h2>
          <div className="h-1 w-20 bg-gradient-accent rounded-full mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These passions keep me inspired and balanced
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {hobbiesData.map((hobby, index) => (
            <Card
              key={hobby.title}
              className="p-6 text-center space-y-4 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl">{hobby.emoji}</div>
              <h3 className="text-xl font-semibold">{hobby.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {hobby.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
