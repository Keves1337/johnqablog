import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Johnatan <span className="text-gradient">Milrad</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Baker by day, creative by night. From music production to design,
            bridging the gap between artistry and quality assurance.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center text-sm md:text-base">
          <span className="px-4 py-2 bg-card border border-border rounded-full">
            🎵 DJ & Producer
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full">
            🎨 Designer
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full">
            🧪 QA Enthusiast
          </span>
          <span className="px-4 py-2 bg-card border border-border rounded-full">
            🏍️ Rider
          </span>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mt-12"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
