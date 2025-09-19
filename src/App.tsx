import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ProfileSection from './components/ProfileSection';
import IntroSection from './components/IntroSection';
import SocialLinks from './components/SocialLinks';
import ContentLinks from './components/ContentLinks';
import Footer from './components/Footer';
import MouseParticles from './components/MouseParticles';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false); // default: tidak main
  const [showAudioConsent, setShowAudioConsent] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleTheme = () => setIsDark(!isDark);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  const handleAudioConsent = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.loop = true;
        await audioRef.current.play();
        setIsMusicPlaying(true);
        setShowAudioConsent(false);
        localStorage.setItem('audioConsent', 'true');
      }
    } catch (err) {
      console.log('🔒 Gagal memutar musik:', err);
    }
  };

  useEffect(() => {
    const audioAllowed = localStorage.getItem('audioConsent');
    if (audioAllowed === 'true') {
      handleAudioConsent();
    }
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-teal-50'
      }`}
    >
      <MouseParticles />
      <CustomCursor />
      {/* 🔔 Audio Consent Modal */}
      {showAudioConsent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg max-w-xs">
            <p className="text-lg font-medium text-gray-800 mb-4">
              🎧 Aktifkan musik latar?
            </p>
            <button
              onClick={handleAudioConsent}
              className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
            >
              Izinkan
            </button>
          </div>
        </div>
      )}

      {/* 🧱 Main Layout */}
      <div className="max-w-sm mx-auto">
        <Header
          isDark={isDark}
          onToggleTheme={toggleTheme}
          isMusicPlaying={isMusicPlaying}
          onToggleMusic={toggleMusic}
        />

        <main className="pb-4">
          <ProfileSection />
          <IntroSection />
          <SocialLinks />
          <ContentLinks />
        </main>

        <Footer />
      </div>

      {/* 🎵 Audio Element */}
      <audio
        ref={audioRef}
        src="/audio/HappyBirthday.mp3"
        loop
        preload="auto"
        onError={() => console.log("❌ Audio gagal dimuat")}
      />
    </div>
  );
}

export default App;