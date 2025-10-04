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
      {/* Outlet plate */}
      <div className="relative w-24 h-32 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-2xl border-2 border-gray-300 dark:border-gray-600">
        {/* Plate screws */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 shadow-inner">
          <div className="absolute inset-0.5 bg-gray-300 rounded-full" />
          <div className="absolute top-0.5 left-0.5 w-2 h-0.5 bg-gray-500 rotate-45" />
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 shadow-inner">
          <div className="absolute inset-0.5 bg-gray-300 rounded-full" />
          <div className="absolute top-0.5 left-0.5 w-2 h-0.5 bg-gray-500 rotate-45" />
        </div>

        {/* Switch housing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-md shadow-inner">
          {/* Switch track */}
          <div className="absolute inset-2 bg-gradient-to-b from-gray-300 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-sm shadow-inner" />
          
          {/* Switch lever */}
          <div 
            className={`absolute left-1/2 -translate-x-1/2 w-10 h-14 transition-all duration-300 ease-out ${
              isDark ? 'top-2' : 'bottom-2'
            }`}
          >
            <div className="relative w-full h-full">
              {/* Lever body */}
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-600 dark:to-gray-700 rounded-md shadow-lg group-hover:shadow-xl transition-shadow border border-gray-300 dark:border-gray-500">
                {/* Lever highlight */}
                <div className="absolute inset-x-2 top-1 h-3 bg-gradient-to-b from-white/60 to-transparent rounded-t-md" />
                
                {/* Lever grip lines */}
                <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 space-y-1">
                  <div className="h-0.5 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <div className="h-0.5 bg-gray-300 dark:bg-gray-500 rounded-full" />
                  <div className="h-0.5 bg-gray-300 dark:bg-gray-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Status labels */}
          <div className="absolute left-1 top-1 text-[8px] font-bold text-gray-600 dark:text-gray-400">ON</div>
          <div className="absolute left-1 bottom-1 text-[8px] font-bold text-gray-600 dark:text-gray-400">OFF</div>
        </div>

        {/* Indicator light */}
        <div className={`absolute top-4 right-3 w-2 h-2 rounded-full transition-all duration-300 ${
          isDark 
            ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' 
            : 'bg-gray-400 shadow-none'
        }`} />
      </div>
    </button>
  );
};

export default ThemeToggle;
