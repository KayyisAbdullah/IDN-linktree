import React from 'react';
import { Sun, Moon, Volume2, VolumeX } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  isMusicPlaying: boolean;
  onToggleMusic: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onToggleTheme, isMusicPlaying, onToggleMusic }) => (
  <header className="flex items-center justify-between px-4 pb-4 pt-6">
    <a href="#top" className="flex items-center gap-2.5" aria-label="IDN Kayyisabd home">
      <img src="/images/logo.png" alt="" className="h-10 w-10 rounded-2xl object-cover shadow-sm ring-1 ring-black/5" />
      <span className="text-sm font-bold tracking-tight text-slate-800 dark:text-white">IDN Kayyisabd</span>
    </a>
    <div className="flex items-center gap-2">
      <button onClick={onToggleMusic} aria-label={isMusicPlaying ? 'Matikan musik' : 'Putar musik'} title={isMusicPlaying ? 'Matikan musik' : 'Putar musik'} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/75 text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {isMusicPlaying ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
      <button onClick={onToggleTheme} aria-label="Ganti tema" title="Ganti tema" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/75 text-amber-500 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-teal-300">
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </button>
    </div>
  </header>
);

export default Header;
