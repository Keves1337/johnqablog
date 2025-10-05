import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 group p-3 rounded-xl bg-card border-2 border-border hover:border-accent transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* Sun icon */}
        <Sun 
          className={`absolute w-6 h-6 text-accent transition-all duration-500 ${
            isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        
        {/* Moon icon */}
        <Moon 
          className={`absolute w-6 h-6 text-accent transition-all duration-500 ${
            isDark 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`}
        />
        
        {/* Decorative glow effect */}
        <div className={`absolute inset-0 rounded-lg bg-accent/20 blur-xl transition-opacity duration-300 ${
          'group-hover:opacity-100 opacity-0'
        }`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
