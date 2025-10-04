import { ArrowDown } from "lucide-react";
import jonatanPhoto from "@/assets/johnatan-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Profile Photo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Animated motion streaks */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-0 w-32 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[slide-right_2s_ease-in-out_infinite]" />
              <div className="absolute top-1/2 left-0 w-40 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-[slide-right_2.5s_ease-in-out_infinite]" style={{ animationDelay: '0.5s' }} />
              <div className="absolute top-3/4 left-0 w-28 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-[slide-right_2.2s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
            </div>
            
            <img
              src={jonatanPhoto}
              alt="Johnatan Milrad"
              className="w-full h-full object-cover rounded-full border-4 border-accent/20 shadow-medium"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-10" />
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gradient">
            Johnatan Milrad
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Baker by day, creative by night—blending music production, design,
            and competitive gaming into a unique multidisciplinary skillset.
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
            🎮 Gamer
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
