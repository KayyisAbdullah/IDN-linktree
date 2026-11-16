import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="h-4 w-4" />, color: 'hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-blue-500/25 dark:hover:border-[#0A66C2] dark:hover:bg-[#0A66C2]', url: 'https://www.linkedin.com/in/kayyisabd' },
    { name: 'Email', icon: <Mail className="h-4 w-4" />, color: 'hover:border-rose-500 hover:bg-rose-500 hover:text-white hover:shadow-rose-500/25 dark:hover:border-rose-500 dark:hover:bg-rose-500', url: 'mailto:kayyisabdullah9909.com' },
    { name: 'GitHub', icon: <Github className="h-4 w-4" />, color: 'hover:border-slate-950 hover:bg-slate-950 hover:text-white hover:shadow-slate-900/25 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-950', url: 'https://github.com/KayyisAbdullah' },
  ];

  return (
    <section className="mb-8 px-4">
      <p className="mb-3 px-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Temukan saya</p>
      <div className="grid grid-cols-3 gap-2.5">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name === 'Email' ? 'Kirim email' : `Kunjungi ${link.name}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4, scale: 1.035 }}
            whileTap={{ scale: 0.96 }}
            className={`group flex items-center justify-center gap-2 rounded-2xl border border-white/90 bg-white/75 px-2 py-3.5 text-xs font-semibold text-slate-600 shadow-sm transition-colors duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:focus-visible:ring-offset-slate-950 ${link.color}`}
          >
            <motion.span className="flex items-center justify-center" whileHover={{ rotate: -8, scale: 1.18 }} transition={{ type: 'spring', stiffness: 400, damping: 12 }}>
              {link.icon}
            </motion.span>
            <span>{link.name}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
