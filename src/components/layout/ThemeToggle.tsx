import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import LuxuryButton from '../ui/LuxuryButton';

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === 'dark' ? Sun : Moon;

  return (
    <LuxuryButton
      onClick={toggleTheme}
      icon={Icon}
      className={`!p-2 !w-9 !h-9 ${className}`}
      floating
      size="sm"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    />
  );
};

export default ThemeToggle;