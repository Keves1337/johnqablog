import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-muted-foreground">
          © 2025 Johnatan Milrad. Creative professional.
        </p>
        <p className="text-sm text-muted-foreground">
          Combining creativity with competitive gaming excellence
        </p>
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
