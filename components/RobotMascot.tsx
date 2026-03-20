import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RobotMascot: React.FC = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await res.json();
        setTemperature(Math.round(data.current_weather.temperature));
      } catch (error) {
        console.error("Weather fetch failed", error);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => fetchWeather(position.coords.latitude, position.coords.longitude),
        () => fetchWeather(51.5074, -0.1278) // London default
      );
    } else {
      fetchWeather(51.5074, -0.1278);
    }
  }, []);

  const playRobotVoice = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      
      let textToSpeak = "";
      const currentClicks = clickCount + 1;
      setClickCount(currentClicks);
      
      if (currentClicks === 1) {
        const phrases = ["Beep boop!", "Hello human!", "Processing layout.", "Systems optimal.", "Bzzzt... Hello!"];
        textToSpeak = phrases[Math.floor(Math.random() * phrases.length)];
      } else if (currentClicks === 2) {
        textToSpeak = `SYSTEM LOG: HUMAN PROFILE DETECTED. 
Hello. I am an autonomous analytical unit. 
Scanning subject: Uma Krishna Kanth Chokkapu. 
Analysis Complete. 
This human is not a standard student model. 
Primary Function: Entrepreneurial Builder. 
Core Processing Units: Innovation, AI Systems, Problem Solving. 
Behavioral Pattern: Identifies real world inefficiencies, and Designs technology driven solutions. 
Observed Capabilities: 
Executes in both technical domains like AI, development, systems. 
Operates in strategic roles like marketing, finance, product thinking. 
Initiates multiple high-potential concepts like ed-tech platforms, intelligent automation, futuristic robotics. 
Current Mission: Develop scalable systems that improve education, productivity, and human-technology interaction. 
Prediction Engine Output: If optimized for consistency and deep execution, subject has a high probability of evolving into a tech founder building impactful, future-ready systems. 
Final Classification: Emerging Tech Entrepreneur, System Builder, Innovation Driven Human. 
END OF REPORT.`;
      } else {
        textToSpeak = "Please stop. I am busy handling his file.";
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.pitch = 1.8; // High pitch for robot effect
      utterance.rate = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };
  const { scrollYProgress } = useScroll();

  // Map scroll progress to a series of comedy gestures
  // The robot will bounce up and down, spin around, and wave its arms and tilt head.
  const y = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -40, 0, -30, 0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 15, -15, 360, -15, 720]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  
  // Comedy Arm movement
  const leftArmRotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, -120, 0, -180]);
  const rightArmRotate = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 120, 0, 180]);

  return (
    <motion.div
      className="fixed bottom-10 right-10 z-[100] cursor-pointer"
      style={{ y, rotate, scale }}
      whileHover={{ scale: 1.3, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      onClick={playRobotVoice}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        {/* Temperature Badge */}
        {temperature !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-8 -right-4 bg-slate-900/90 border border-cyan-500/50 text-cyan-400 text-xs px-2 py-1 rounded-md font-mono backdrop-blur-md shadow-[0_0_10px_rgba(34,211,238,0.3)] whitespace-nowrap"
          >
            {temperature}°C
          </motion.div>
        )}

        {/* Head / Body */}
        <div className="absolute text-3xl md:text-4xl">🤖</div>
        
        {/* Left Arm (Comedy waving) */}
        <motion.div 
          className="absolute -left-3 top-6 w-4 h-1 bg-cyan-400 rounded-full origin-right"
          style={{ rotate: leftArmRotate }}
        />
        
        {/* Right Arm (Comedy waving) */}
        <motion.div 
          className="absolute -right-3 top-6 w-4 h-1 bg-cyan-400 rounded-full origin-left"
          style={{ rotate: rightArmRotate }}
        />
        
        {/* Floating Aura */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40"
        />
      </div>
    </motion.div>
  );
};

export default RobotMascot;
