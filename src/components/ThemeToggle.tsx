import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
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
      className="fixed top-6 right-6 z-50 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-20 h-10 bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-lg transition-all duration-500 border-2 border-gray-400/30 dark:border-gray-600/50">
        {/* Switch track groove effect */}
        <div className="absolute inset-1 bg-gradient-to-b from-gray-200/50 to-transparent dark:from-gray-900/50 rounded-full" />
        
        {/* Switch handle */}
        <div
          className={`absolute top-1 left-1 w-8 h-8 bg-gradient-to-br from-white to-gray-100 dark:from-gray-300 dark:to-gray-400 rounded-full shadow-xl transition-all duration-500 ease-in-out transform ${
            isDark ? 'translate-x-10' : 'translate-x-0'
          } group-hover:scale-110`}
        >
          {/* Handle shine effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/80 via-transparent to-transparent" />
          
          {/* Handle shadow/depth */}
          <div className="absolute inset-0.5 rounded-full bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-200 dark:to-gray-300" />
          
          {/* Icon indicator */}
          <div className="absolute inset-0 flex items-center justify-center text-xs">
            {isDark ? '🌙' : '☀️'}
          </div>
        </div>

        {/* Track indicators */}
        <div className="absolute inset-0 flex items-center justify-between px-3 text-xs pointer-events-none">
          <span className={`transition-opacity duration-300 ${!isDark ? 'opacity-70' : 'opacity-0'}`}>
            ☀️
          </span>
          <span className={`transition-opacity duration-300 ${isDark ? 'opacity-70' : 'opacity-0'}`}>
            🌙
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
