import { Card } from "@/components/ui/card";
import { Headphones, Palette, Bike } from "lucide-react";

const hobbiesData = [
  {
    title: "DJing & Music Mixing",
    description:
      "Crafting sonic experiences and keeping the dance floor alive. Music is not just a hobby—it's a way of life.",
    icon: Headphones,
    animationClass: "dj-animation",
  },
  {
    title: "Design Creation",
    description:
      "Bringing ideas to life through Figma, Photoshop, and Illustrator. Every project is a canvas for creativity.",
    icon: Palette,
    animationClass: "design-animation",
  },
  {
    title: "Motorcycle Riding",
    description:
      "Freedom on two wheels. There's nothing quite like the open road and the wind in your face.",
    icon: Bike,
    animationClass: "bike-animation",
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
              className="p-6 text-center space-y-4 hover:shadow-medium transition-all duration-300 hover:-translate-y-2 hover:scale-105 border-border/50 group overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative flex items-center justify-center h-20 ${hobby.animationClass}`}>
                <hobby.icon className="w-16 h-16 text-accent transition-all duration-300 group-hover:text-primary" strokeWidth={1.5} />
                
                {/* Music notes for DJ */}
                {hobby.animationClass === "dj-animation" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute top-0 left-1/4 text-2xl animate-[bounce_0.6s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}>♪</span>
                    <span className="absolute top-2 right-1/4 text-xl animate-[bounce_0.6s_ease-in-out_infinite]" style={{ animationDelay: '0.2s' }}>♫</span>
                    <span className="absolute top-4 left-1/3 text-lg animate-[bounce_0.6s_ease-in-out_infinite]" style={{ animationDelay: '0.4s' }}>♪</span>
                  </div>
                )}
                
                {/* Paint splatter for Design */}
                {hobby.animationClass === "design-animation" && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                    <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-accent/70 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                  </div>
                )}
                
                {/* Smoke effect for Motorcycle */}
                {hobby.animationClass === "bike-animation" && (
                  <div className="absolute bottom-0 right-1/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-2 bg-muted-foreground/30 rounded-full animate-[slide-out-right_0.8s_ease-out_infinite] blur-sm" style={{ animationDelay: '0s' }} />
                    <div className="w-6 h-2 bg-muted-foreground/20 rounded-full animate-[slide-out-right_0.8s_ease-out_infinite] blur-sm mt-1" style={{ animationDelay: '0.2s' }} />
                  </div>
                )}
              </div>
              
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
