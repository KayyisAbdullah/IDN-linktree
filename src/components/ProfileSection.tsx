import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProfileSection: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15 }}
    className="relative mx-3 mb-7 overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-[0_18px_55px_-28px_rgba(15,118,110,0.35)] backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 sm:p-6"
  >
    <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full bg-teal-100/70 blur-2xl dark:bg-teal-900/40" />

    <div className="relative mb-6 flex items-center gap-4 sm:gap-5">
      <div className="h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-[1.4rem] bg-teal-100 shadow-md ring-4 ring-white dark:ring-slate-800 sm:h-20 sm:w-20">
        <img
          src="/images/gambarku.jpg"
          alt="Kayyis Abdullah Al Hadi"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <h1 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-2xl">
          Kayyis Abdullah Al Hadi
        </h1>
        <p className="mt-2 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
          UI/UX enthusiast <span className="text-teal-600 dark:text-teal-400">·</span> creative developer
        </p>
      </div>
    </div>

    <motion.a
      href="https://portfolio-vercel-preview.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex w-full items-center justify-between rounded-2xl bg-slate-900 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 dark:bg-teal-600 dark:hover:bg-teal-500 dark:focus-visible:ring-offset-slate-900"
    >
      <span>Jelajahi personal website</span>
      <ArrowUpRight className="h-4 w-4" />
    </motion.a>
  </motion.section>
);

export default ProfileSection;
