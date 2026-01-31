import { Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <p className="text-muted-foreground">
          © 2025 Johnatan Milrad. Creative professional.
        </p>
        <p className="text-sm text-muted-foreground">
          Combining creativity with competitive gaming excellence
        </p>
        
        {/* Project Links */}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a
            href="https://lovable.dev/projects/36e61818-6440-4c46-8cb9-d642799c9bc4"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300"
          >
            <span className="text-sm font-medium text-foreground">QA Behemoth</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
          <a
            href="https://lovable.dev/projects/a323a14f-369e-4cce-9c6f-45ebc1065c38"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300"
          >
            <span className="text-sm font-medium text-foreground">Behemoth DJ Mixer</span>
            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
          </a>
        </div>

        <div className="flex justify-center pt-4">
          <a
            href="https://www.instagram.com/johnalduck/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 rounded-xl bg-card border-2 border-border hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
            aria-label="Follow on Instagram"
          >
            <Instagram className="w-6 h-6 text-accent group-hover:scale-110 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
