import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import Tooltip from './Tooltip';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip content={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`} position="left">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-xl bg-primary/80 dark:bg-black/80 backdrop-blur-xl 
                 border border-gold/20 text-gold hover:bg-gold hover:text-primary
                 transition-all duration-300 group shadow-lg hover:shadow-gold/20"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
        ) : (
          <Moon className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
        )}
      </button>
    </Tooltip>
  );
};

export default ThemeToggle;