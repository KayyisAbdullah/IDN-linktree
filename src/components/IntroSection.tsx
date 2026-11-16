import React from 'react';
import Typewriter from 'typewriter-effect';

const IntroSection: React.FC = () => (
  <section className="mb-7 px-5">
    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">Kenalan dulu</p>
    <h2 className="mb-3 min-h-7 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
      <Typewriter options={{ strings: ['Salam Alaikum 👋', 'Halo, aku Kayyis!'], autoStart: true, loop: true, delay: 75 }} />
    </h2>
    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Senang dapat berjumpa dengan kalian 😊 Aku suka bereksperimen dengan desain, coding, dan segala hal seru seputar dunia kreatif. Scroll terus ya, siapa tahu kita bisa kolaborasi bareng!</p>
  </section>
);

export default IntroSection;
