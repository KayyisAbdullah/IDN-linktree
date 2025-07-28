import { useState } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import IntroSection from './components/IntroSection';
import SocialLinks from './components/SocialLinks';
import ContentLinks from './components/ContentLinks';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-teal-50'
    }`}>
      <div className="max-w-sm mx-auto">
        <Header isDark={isDark} onToggleTheme={toggleTheme} />
        
        <main className="pb-4">
          <ProfileSection />
          <IntroSection />
          <SocialLinks />
          <ContentLinks />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;