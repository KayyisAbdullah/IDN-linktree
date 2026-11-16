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
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showAudioConsent, setShowAudioConsent] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleTheme = () => setIsDark(!isDark);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isMusicPlaying) audioRef.current.pause();
    else void audioRef.current.play();
    setIsMusicPlaying(!isMusicPlaying);
  };

  const handleAudioConsent = async () => {
    try {
      if (!audioRef.current) return;
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;
      await audioRef.current.play();
      setIsMusicPlaying(true);
      setShowAudioConsent(false);
      localStorage.setItem('audioConsent', 'true');
    } catch (err) {
      console.log('Gagal memutar musik:', err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('audioConsent') === 'true') void handleAudioConsent();
  }, []);

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${isDark ? 'dark bg-slate-950 text-white' : 'bg-[#f2fbf8] text-slate-900'}`}>
      <div className="pointer-events-none absolute inset-0 ambient-breathe" />
      <MouseParticles />
      <CustomCursor />
      {showAudioConsent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xs rounded-3xl border border-white/60 bg-white p-7 text-center shadow-2xl">
            <p className="mb-2 text-lg font-bold text-slate-900">Musik latar</p>
            <p className="mb-5 text-sm leading-relaxed text-slate-500">Ingin mendengarkan musik saat menjelajahi halaman?</p>
            <div className="flex gap-2">
              <button onClick={() => setShowAudioConsent(false)} className="flex-1 rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-200">Nanti</button>
              <button onClick={handleAudioConsent} className="flex-1 rounded-xl bg-teal-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-700">Putar musik</button>
            </div>
          </div>
        </div>
      )}
      <div className="relative mx-auto w-full max-w-lg px-2 sm:px-4">
        <Header isDark={isDark} onToggleTheme={toggleTheme} isMusicPlaying={isMusicPlaying} onToggleMusic={toggleMusic} />
        <main className="pb-8">
          <ProfileSection />
          <IntroSection />
          <SocialLinks />
          <ContentLinks />
        </main>
        <Footer />
      </div>
      <audio ref={audioRef} src="/audio/audio1.mp3" loop preload="auto" onError={() => console.log('Audio gagal dimuat')} />
    </div>
  );
}

export default App;


