import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContentLinks: React.FC = () => {
  const contentLinks = [
    { title: 'Amnda Mobile App Overview', url: 'https://www.figma.com/design/g47JVx4OGoEon4igjxAfL1/Amanda?node-id=794-3090&t=6GV7kIrWLh4wyewN-1', type: 'UI/UX DESIGN' },
    { title: 'e-zakat Masjid Ar-Royyan Website App', url: 'https://www.figma.com/design/iKSBAAG7NUmPlQaY6POmyQ/Zakat-Website?node-id=67-796&t=yaL7ajEcwtCqFfin-1', type: 'WEB DESIGN' },
    { title: 'Awaken Me App', url: 'https://apps.microsoft.com/detail/9PN91P9PH0P2?hl=en-us&gl=ID&ocid=pdpshare', type: 'APPLICATION' },
    { title: 'Reminder Mobile Apps', url: 'https://www.figma.com/design/TuaMz0axptVgnOVP1ElhAz/Reminder--apps-?node-id=0-1&t=9BwSxPiNZ744m5L8-1', type: 'MOBILE APP' },
    { title: 'SIA Ubhara Jaya Website App\n(coming soon)', url: 'https://uxcel.com', type: 'IN PROGRESS' },
  ];

  return (
    <section className="mb-8 px-4">
      <div className="mb-4 flex items-end justify-between px-1">
        <div><p className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-300">Jelajahi</p><h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">Projek Pilihan</h3></div>
        <span className="rounded-full bg-teal-100 px-2.5 py-1 text-[11px] font-bold text-teal-800 dark:bg-teal-900/60 dark:text-teal-200">{contentLinks.length} karya</span>
      </div>
      <div className="space-y-2.5">
        {contentLinks.map((link, index) => (
          <motion.a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.07 }} whileHover={{ y: -2 }} className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/90 bg-white/85 p-4 shadow-[0_5px_18px_-14px_rgba(15,23,42,0.35)] transition hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5 dark:border-slate-700 dark:bg-slate-900/75 dark:hover:border-teal-800">
            <span className="min-w-0 flex-1"><span className="mb-1 block text-[9px] font-bold tracking-[0.15em] text-teal-700 dark:text-teal-300">{link.type}</span><span className="block whitespace-pre-line text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">{link.title}</span></span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition group-hover:bg-teal-600 group-hover:text-white dark:bg-slate-800 dark:text-teal-300"><ArrowUpRight className="h-4 w-4" /></span>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default ContentLinks;
