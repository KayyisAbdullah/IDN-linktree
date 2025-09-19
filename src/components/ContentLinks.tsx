import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

const ContentLinks: React.FC = () => {
  const contentLinks = [
    {
      title: "BINGUNG? MAU TANYA?? DISKUSI? JOIN GROUP BARUDAK FIGMA 🔥",
      url: "https://www.instagram.com"
    },
    {
      title: "FILE DOCS BELAJAR VARIABLES",
      url: "https://drive.google.com/example"
    },
    {
      title: "MOKNOT: RATUSAN RESOURCES UIUX DESIGN",
      url: "https://moknot.com/resources"
    },
    {
      title: "FILE SOURCE POSTER BOLA",
      url: "https://example.com/poster-bola"
    },
    {
      title: "UXCEL",
      url: "https://uxcel.com"
    },
    {
      title: "UI Coach",
      url: "https://uicoach.io"
    },
    {
      title: "Daily UI",
      url: "https://www.dailyui.co/"
    },
    {
      title: "Phospor Icons Plugin",
      url: "https://www.figma.com/community/plugin/123-phosphor-icons"
    },
    {
      title: "Iconsax Plugin",
      url: "https://www.figma.com/community/plugin/1123-iconsax"
    }
  ];

  return (
    <div className="mb-8 px-4">
      <h3 className="text-lg font-semibold light:text-gray-900 dark:text-white-900 mb-4">
        Link from Content
      </h3>

      <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="space-y-2">
        {contentLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between group border border-gray-100 dark:border-gray-700"
          >
            <span className="text-left text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight flex-1 pr-3">
              {link.title}
            </span>
            <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-lime-500 transition-colors duration-200">
              <ArrowRight className="w-4 h-4 text-gray-900" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContentLinks;