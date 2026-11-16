import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => (
  <footer className="mx-3 mb-5 mt-8 rounded-2xl border border-white/80 bg-white/65 px-4 py-4 text-center text-xs text-slate-500 backdrop-blur dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
    <span>Made with <Heart className="mx-1 inline h-3 w-3 fill-rose-400 text-rose-400" /> by IDN Kayyisabd · © 2025</span>
  </footer>
);

export default Footer;
