import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme }) => {
  return (
    <header className="flex justify-between items-center p-4 pt-6">
  <div className="flex items-center gap-1">
  <img
    src="/images/logo.png"
    alt="Logo VS"
    className="w-10 h-20 rounded-full object-cover ml-2"
  />
  <span className="font-semibold light:text-gray-900 dark:text-white text-base leading-none">
    IDN Kayyisabd
  </span>
</div>
      
      <button
        onClick={onToggleTheme}
        className="relative w-12 h-6 bg-blue-100 rounded-full p-0.5 transition-colors duration-300"
      >
        <div className={`absolute w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        } -translate-y-2.5`}>
          {isDark ? (
            <Moon className="w-2.5 h-2.5 text-blue-600" />
          ) : (
            <Sun className="w-2.5 h-2.5 text-yellow-500" />
          )}
        </div>
      </button>
    </header>
  );
};

export default Header;