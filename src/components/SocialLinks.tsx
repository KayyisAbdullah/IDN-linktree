import React from 'react';
import { Mail } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    { name: 'Behance', color: 'bg-blue-600', textColor: 'text-white', icon: 'Be' },
    { name: 'Linkedin', color: 'bg-blue-700', textColor: 'text-white', icon: 'in' },
    { name: 'Email', color: 'bg-red-500', textColor: 'text-white', icon: <Mail className="w-4 h-4" /> },
    { name: 'GitHub', color: 'bg-gray-800', textColor: 'text-white', icon: 'Gh' },
    { name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500', textColor: 'text-white', icon: 'Ig' },
    { name: 'YouTube', color: 'bg-red-600', textColor: 'text-white', icon: 'Yt' },
  ];

  return (
    <div className="mb-6 px-4">
      <div className="grid grid-cols-3 gap-2">
        {socialLinks.map((link, index) => (
          <button
            key={index}
            className={`${link.color} ${link.textColor} py-3 px-3 rounded-xl font-medium text-xs flex items-center justify-center space-x-1.5 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 hover:brightness-110 hover:ring-2 hover:ring-white/40`}
          >
            <span className="w-4 h-4 flex items-center justify-center">
              {typeof link.icon === 'string' ? (
                <span className="text-xs font-bold">{link.icon}</span>
              ) : (
                link.icon
              )}
            </span>
            <span className="text-xs">{link.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;