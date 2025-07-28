import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from "framer-motion";

const ProfileSection: React.FC = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="bg-white rounded-2xl p-6 shadow-sm mb-6 mx-4 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start space-x-4 mb-6">
        <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 group">
          <img
            src="/images/gambarku.jpg"
            alt="Kayyis Abdullah Al Hadi"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-900 leading-tight mt-3 hover:text-gray-700 transition-colors duration-200">
            Kayyis Abdullah<br />Al Hadi
          </h1>
        </div>
      </div>
      
      <motion.a 
            href="my-website.com"
            target="_blank"
            rel="nooponer noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
      className="w-full bg-gray-900 text-white py-3.5 px-4 rounded-2xl font-medium flex items-center justify-center space-x-2 hover:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        <span>Personal Website</span>
      </motion.a>
    </motion.div>
  );
};

export default ProfileSection;