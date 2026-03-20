
import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('music-interacted') === 'true';
    }
    return false;
  });
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('music-muted') === 'true';
    }
    return false;
  });
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);

  const sources = [
    "https://cdn.pixabay.com/audio/2022/03/15/audio_78390a5c6a.mp3", // Stable Pixabay link
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Fallback
  ];

  const playCurrentSource = async (index: number) => {
    if (!audioRef.current) return;

    setIsLoading(true);
    setCurrentSourceIndex(index);

    // Update source and load
    audioRef.current.src = sources[index];
    audioRef.current.load();

    try {
      // Wait a bit for the source to be ready to play
      await new Promise((resolve, reject) => {
        const onCanPlay = () => {
          cleanup();
          resolve(true);
        };
        const onError = (e: any) => {
          cleanup();
          reject(e);
        };
        const cleanup = () => {
          audioRef.current?.removeEventListener('canplay', onCanPlay);
          audioRef.current?.removeEventListener('error', onError);
        };
        audioRef.current?.addEventListener('canplay', onCanPlay);
        audioRef.current?.addEventListener('error', onError);

        // Timeout if it takes too long
        setTimeout(() => {
          cleanup();
          reject(new Error("Timeout waiting for audio"));
        }, 5000);
      });

      await audioRef.current.play();
      setIsPlaying(true);
      if (!hasInteracted) {
        setHasInteracted(true);
        localStorage.setItem('music-interacted', 'true');
      }
      setIsLoading(false);
    } catch (err) {
      console.error(`Source ${index} failed:`, err);
      if (index < sources.length - 1) {
        // Small delay before trying next source to avoid "interrupted" error
        setTimeout(() => playCurrentSource(index + 1), 500);
      } else {
        setIsLoading(false);
        setIsPlaying(false);
        // If all fail, maybe show a small notification or just stay muted
      }
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsMuted(true);
      localStorage.setItem('music-muted', 'true');
    } else {
      setIsMuted(false);
      localStorage.setItem('music-muted', 'false');
      playCurrentSource(currentSourceIndex);
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isMuted && !isPlaying && !isLoading) {
        playCurrentSource(currentSourceIndex);
      }
    };

    // Mobile devices require a direct user interaction to play audio. 
    // We listen to touchstart and click to ensure the widest compatibility.
    if (!isMuted) {
      window.addEventListener('click', handleFirstInteraction, { once: true });
      window.addEventListener('touchstart', handleFirstInteraction, { once: true });
      window.addEventListener('scroll', handleFirstInteraction, { once: true });
      window.addEventListener('keydown', handleFirstInteraction, { once: true });
    }

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [isMuted, isPlaying, isLoading, currentSourceIndex]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.loop = true;
    }
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-[100]">
      <audio
        ref={audioRef}
        src={sources[currentSourceIndex]}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <motion.button
        whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        disabled={isLoading}
        className={`glass w-12 h-12 rounded-full flex items-center justify-center text-cyan-400 border border-white/10 relative group ${isLoading ? 'opacity-50 cursor-wait' : ''}`}
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
              <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full" />
            </motion.div>
          ) : isPlaying ? (
            <motion.div
              key="playing"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <Volume2 size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <VolumeX size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse effect when not playing to encourage interaction */}
        {!hasInteracted && !isPlaying && (
          <span className="absolute inset-0 rounded-full bg-cyan-500/20 animate-ping pointer-events-none" />
        )}

        {/* Tooltip */}
        <span className="absolute left-14 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/5 uppercase tracking-widest">
          {isPlaying ? "Mute Atmosphere" : "Activate Atmosphere"}
        </span>
      </motion.button>
    </div>
  );
};

export default BackgroundMusic;
