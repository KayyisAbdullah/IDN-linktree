import React from 'react';
import Typewriter from 'typewriter-effect';


const IntroSection: React.FC = () => {
  return (
    <div className="mb-6 text-left px-4">
    <h2 className="text-lg font-semibold light:text-gray-900 dark:text-white mb-3">
  <Typewriter
    options={{
      strings: ['Salam Alaikum 👋 Kayyis Disini!'],
      autoStart: true,
      loop: true,
      delay: 80,
    }}
  />
</h2>

<p className="text-sm leading-relaxed mb-3 light:text-gray-600 dark:text-white">
  Senang dapat berjumpa dengan kalian 😊
</p>
<p className=" text-sm leading-relaxed mb-3 light:text-gray-600 dark:text-white">
  Aku suka bereksperimen dengan desain, coding, dan segala hal seru seputar dunia kreatif.
</p>
<p className=" text-sm leading-relaxed light:text-gray-600 dark:text-white">
  Scroll terus ya—siapa tahu kita bisa kolaborasi bareng!
</p>
    </div>
  );
};

export default IntroSection;