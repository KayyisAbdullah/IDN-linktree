import React from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const SocialLinks: React.FC = () => {
	const socialLinks = [
		{
			name: "Behance",
			color: "bg-blue-600",
			textColor: "text-white",
			icon: "Be",
			url: "https://www.behance.net/yourusername",
		},
		{
			name: "Linkedin",
			color: "bg-blue-700",
			textColor: "text-white",
			icon: "in",
			url: "https://www.linkedin.com/in/kayyisabd",
		},
		{
			name: "Email",
			color: "bg-red-500",
			textColor: "text-white",
			icon: <Mail className="w-4 h-4" />,
			url: "mailto:kayyisabdullah9909.com",
		},
		{
			name: "GitHub",
			color: "bg-gray-800",
			textColor: "text-white",
			icon: "Gh",
			url: "https://github.com/KayyisAbdullah",
		},
		{
			name: "Instagram",
			color: "bg-gradient-to-r from-purple-500 to-pink-500",
			textColor: "text-white",
			icon: "Ig",
			url: "https://www.instagram.com/k_abd919",
		},
		{
			name: "YouTube",
			color: "bg-red-600",
			textColor: "text-white",
			icon: "Yt",
			url: "https://www.youtube.com/@yourchannel",
		},
	];

	return (
		<div className="mb-6 px-4">
			<div className="grid grid-cols-3 gap-2">
				{socialLinks.map((link, index) => (
					<motion.a
						key={index}
						href={link.url}
						target="_blank"
						rel="nooponer noreferrer"
					className={`${link.color} ${link.textColor} py-3 px-3 rounded-xl font-medium text-xs flex items-center justify-center space-x-1.5
  transition-all duration-300 ease-out shadow-sm
  hover:shadow-xl hover:-translate-y-[4px] hover:scale-[1.07]
  hover:rotate-[0.5deg] hover:contrast-125 hover:saturate-150
  hover:ring-2 hover:ring-black/40 dark:hover:ring-white/40
  hover:border hover:border-black hover:border-opacity-60 dark:hover:border-white/60`}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.2 }}
					>
						<span className="w-4 h-4 flex items-center justify-center">
							{typeof link.icon === "string" ? (
								<span className="text-xs font-bold">{link.icon}</span>
							) : (
								link.icon
							)}
						</span>
						<span className="text-xs">{link.name}</span>
					</motion.a>
				))}
			</div>
		</div>
	);
};

export default SocialLinks;
