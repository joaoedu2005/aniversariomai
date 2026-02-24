import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PixelHeart, PixelCat, PixelBurger, PixelPizza, PixelPudding, PixelSoda, PixelTV, PixelGirl, PixelBoy, PixelGirlDarkHair } from './components/PixelArt';
import { translations, Language } from './translations';
import { playClickSound, playTypeSound, playJumpSound, playCollectSound, playHitSound, playHoverSound } from './utils/audio';

// --- Utility Components ---

const PixelCard = ({ children, className = "", title }: { children: React.ReactNode, className?: string, title?: string }) => (
  <div className={`relative bg-white p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}>
    {title && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-400 border-4 border-black px-4 py-1 text-white font-bold whitespace-nowrap shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        {title}
      </div>
    )}
    {children}
  </div>
);

const PixelButton = ({ onClick, children, className = "", disabled = false }: { onClick: () => void, children: React.ReactNode, className?: string, disabled?: boolean }) => (
  <button
    onClick={() => {
      playClickSound();
      onClick();
    }}
    onMouseEnter={() => playHoverSound()}
    disabled={disabled}
    className={`
      px-6 py-3 font-bold text-white transition-all active:translate-y-1 active:shadow-none
      border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 active:bg-pink-700'}
      ${className}
    `}
  >
    {children}
  </button>
);

const LanguageSwitcher = ({ currentLang, setLang }: { currentLang: Language, setLang: (lang: Language) => void }) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2">
    {(['pt-BR', 'en', 'ja'] as Language[]).map((lang) => (
      <button
        key={lang}
        onClick={() => setLang(lang)}
        className={`
          px-2 py-1 border-2 border-black text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          ${currentLang === lang ? 'bg-yellow-400 text-black' : 'bg-white text-gray-500 hover:bg-gray-100'}
        `}
      >
        {lang === 'pt-BR' ? '🇧🇷 PT' : lang === 'en' ? '🇺🇸 EN' : '🇯🇵 JP'}
      </button>
    ))}
  </div>
);

// --- Sections ---

const HeroSection = ({ t }: { t: any }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4 text-center">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" style={{ textShadow: '4px 4px 0 #000' }}>
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mt-4 bg-white/80 p-2 inline-block border-2 border-black">
          {t.hero.subtitle}
        </p>
        
        <div className="mt-8">
          <PixelButton onClick={() => document.getElementById('level-1')?.scrollIntoView({ behavior: 'smooth' })}>
            {t.hero.start}
          </PixelButton>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <FloatingElement delay={0} x="10%" y="20%"><PixelHeart className="w-12 h-12 text-red-500" /></FloatingElement>
      <FloatingElement delay={1} x="80%" y="15%"><PixelCat className="w-16 h-16 text-gray-800" /></FloatingElement>
      <FloatingElement delay={2} x="20%" y="70%"><PixelPudding className="w-12 h-12" /></FloatingElement>
      <FloatingElement delay={3} x="75%" y="60%"><PixelHeart className="w-10 h-10 text-pink-500" /></FloatingElement>
    </section>
  );
};

const FloatingElement = ({ children, delay, x, y }: { children: React.ReactNode, delay: number, x: string, y: string }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const TimerSection = ({ t }: { t: any }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const startDate = new Date('2026-01-01T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="level-1" className="py-20 px-4 flex justify-center">
      <PixelCard title={t.timer.title} className="max-w-3xl w-full text-center bg-yellow-50">
        <div className="mb-8">
          <PixelCat className="w-20 h-20 mx-auto mb-4" />
          <p className="text-lg mb-6">{t.timer.since}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TimeBox value={timeLeft.days} label={t.timer.days} />
          <TimeBox value={timeLeft.hours} label={t.timer.hours} />
          <TimeBox value={timeLeft.minutes} label={t.timer.minutes} />
          <TimeBox value={timeLeft.seconds} label={t.timer.seconds} />
        </div>
      </PixelCard>
    </section>
  );
};

const TimeBox = ({ value, label }: { value: number, label: string }) => (
  <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
    <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{value}</div>
    <div className="text-xs text-gray-500 font-bold">{label}</div>
  </div>
);

const GallerySection = ({ t }: { t: any }) => {
  // Placeholder images - Replace these with your real image URLs
  // Images served from public/ to ensure they're copied to `dist` during build
  const photos = [
    "fotonossa1.jpeg",
    "fotonossa2.jpeg",
    "fotonossa3.jpeg"
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center mb-12 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-white" style={{ textShadow: '3px 3px 0 #000' }}>
          {t.gallery.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="relative group"
            >
              <div className="bg-white p-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <img 
                  src={src} 
                  alt={`${t.gallery.photo} ${index + 1}`} 
                  className="w-full h-64 object-cover border-2 border-gray-200 image-pixelated"
                  style={{ imageRendering: 'pixelated' }}
                />
                <div className="mt-2 text-center font-bold text-sm text-gray-600">
                  {t.gallery.photo} #{index + 1}
                </div>
              </div>
              <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <PixelHeart className="w-8 h-8 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuizSection = ({ t }: { t: any }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Reset quiz when language changes
  useEffect(() => {
    resetQuiz();
  }, [t]);

  const questions = t.quiz.questions;

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    
    setTimeout(() => {
      if (index === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  return (
    <section className="py-20 px-4 flex justify-center">
      <PixelCard title={t.quiz.title} className="max-w-2xl w-full bg-pink-50">
        {!showResult ? (
          <div className="text-center">
            <div className="mb-8 flex justify-center space-x-4">
              <PixelTV className="w-16 h-12" />
              <PixelSoda className="w-8 h-12" />
            </div>
            
            <h3 className="text-xl mb-6 leading-relaxed">
              {t.quiz.question} {currentQuestion + 1}/{questions.length}:<br/>
              <span className="text-blue-600 font-bold mt-2 block">
                {questions[currentQuestion].question}
              </span>
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {questions[currentQuestion].options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedOption !== null}
                  className={`
                    p-4 border-4 border-black text-left font-bold transition-all
                    ${selectedOption === index 
                      ? (index === questions[currentQuestion].correct ? 'bg-green-400' : 'bg-red-400') 
                      : 'bg-white hover:bg-gray-100'}
                    ${selectedOption !== null ? 'cursor-default' : 'cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}
                  `}
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">{t.quiz.result}</h3>
            <p className="text-lg mb-6">
              {t.quiz.score(score, questions.length)}
            </p>
            {score === questions.length ? (
              <div className="animate-bounce mb-6">
                <PixelHeart className="w-20 h-20 mx-auto text-red-500" />
                <p className="mt-4 text-pink-600 font-bold">{t.quiz.perfect}</p>
              </div>
            ) : (
              <p className="mb-6 text-gray-600">{t.quiz.tryAgain}</p>
            )}
            <PixelButton onClick={resetQuiz}>
              {t.quiz.buttonTryAgain}
            </PixelButton>
          </div>
        )}
      </PixelCard>
    </section>
  );
};

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        playTypeSound();
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="text-xs font-bold">{displayedText}</p>;
};

const InteractiveSection = ({ t }: { t: any }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    playClickSound();
    setShowMessage(true);
    setMessageIndex((prev) => (prev + 1) % t.level4.messages.length);
  };

  const currentMessage = t.level4.messages[messageIndex];
  const isBoy = currentMessage.sender === 'boy';

  return (
    <section className="py-20 px-4 flex justify-center">
      <PixelCard title={t.level4.title} className="max-w-2xl w-full bg-green-50 text-center relative min-h-[400px] flex flex-col items-center justify-center">
        <p className="mb-8 text-gray-600">{t.level4.clickMe}</p>
        
        <div className="flex items-end justify-center gap-8 md:gap-16 cursor-pointer" onClick={handleClick}>
          {/* Boy Character */}
          <div className="relative">
             <AnimatePresence mode='wait'>
              {showMessage && isBoy && (
                <motion.div
                  key={`boy-${messageIndex}`}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 z-10"
                >
                  <div className="bg-white border-4 border-black p-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                    <TypewriterText text={currentMessage.text} />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-4 border-b-4 border-black rotate-45 transform"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PixelBoy className="w-24 h-24 md:w-32 md:h-32" />
            </motion.div>
          </div>

          {/* Girl Character */}
          <div className="relative">
            <AnimatePresence mode='wait'>
              {showMessage && !isBoy && (
                <motion.div
                  key={`girl-${messageIndex}`}
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 z-10"
                >
                  <div className="bg-white border-4 border-black p-3 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative">
                    <TypewriterText text={currentMessage.text} />
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-4 border-b-4 border-black rotate-45 transform"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PixelGirlDarkHair className="w-24 h-24 md:w-32 md:h-32" />
            </motion.div>
          </div>
        </div>
      </PixelCard>
    </section>
  );
};

// --- Level 5: Game Section ---

const GameSection = ({ t }: { t: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const scoreRef = useRef(0);

  // Game constants
  const GRAVITY = 0.6;
  const JUMP_FORCE = -10;
  const SPEED = 5;
  const GROUND_HEIGHT = 50;

  // Game state refs (for loop)
  const playerRef = useRef({ x: 50, y: 0, dy: 0, width: 40, height: 40, grounded: true });
  const obstaclesRef = useRef<{ x: number, y: number, width: number, height: number, type: 'food' | 'rock' }[]>([]);
  const frameCountRef = useRef(0);

  const playSound = (type: 'jump' | 'collect' | 'hit') => {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'jump') {
      oscillator.type = 'square';
      oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'collect') {
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } else { // hit
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(100, audioCtx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(50, audioCtx.currentTime + 0.3);
      gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.3);
    }
  };

  const jump = useCallback(() => {
    if (playerRef.current.grounded && isPlaying) {
      playerRef.current.dy = JUMP_FORCE;
      playerRef.current.grounded = false;
      playSound('jump');
    }
  }, [isPlaying]);

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    scoreRef.current = 0;
    playerRef.current = { x: 50, y: 0, dy: 0, width: 40, height: 40, grounded: true };
    obstaclesRef.current = [];
    frameCountRef.current = 0;
  };

  const drawPixelGirlSprite = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
    // Scaling factors
    const scaleX = width / 16;
    const scaleY = height / 16;

    const drawRect = (px: number, py: number, w: number, h: number, color: string) => {
      ctx.fillStyle = color;
      ctx.fillRect(x + px * scaleX, y + py * scaleY, w * scaleX, h * scaleY);
    };

    // Hair (Black)
    drawRect(4, 1, 8, 1, '#111827');
    drawRect(3, 2, 10, 1, '#111827');
    drawRect(2, 3, 12, 2, '#111827');
    drawRect(1, 5, 2, 4, '#111827');
    drawRect(13, 5, 2, 4, '#111827');
    drawRect(1, 9, 1, 2, '#111827');
    drawRect(14, 9, 1, 2, '#111827');

    // Face
    drawRect(3, 5, 10, 4, '#fed7aa');
    drawRect(4, 9, 8, 1, '#fed7aa');
    drawRect(5, 10, 6, 1, '#fed7aa');

    // Eyes (Green)
    drawRect(5, 6, 2, 2, '#16a34a');
    drawRect(9, 6, 2, 2, '#16a34a');

    // Blush
    drawRect(4, 7, 1, 1, '#f9a8d4');
    drawRect(11, 7, 1, 1, '#f9a8d4');

    // Body/Dress (Purple)
    drawRect(5, 11, 6, 1, '#a855f7');
    drawRect(4, 12, 8, 3, '#a855f7');
    drawRect(3, 15, 10, 1, '#a855f7');

    // Arms
    drawRect(3, 12, 1, 2, '#fed7aa');
    drawRect(12, 12, 1, 2, '#fed7aa');
  };

  const update = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update Player
    const player = playerRef.current;
    player.dy += GRAVITY;
    player.y += player.dy;

    // Ground collision
    if (player.y + player.height > canvas.height - GROUND_HEIGHT) {
      player.y = canvas.height - GROUND_HEIGHT - player.height;
      player.dy = 0;
      player.grounded = true;
    }

    // Spawn Obstacles
    frameCountRef.current++;
    if (frameCountRef.current % 100 === 0) {
      const type = Math.random() > 0.3 ? 'food' : 'rock'; // 70% food, 30% rock
      obstaclesRef.current.push({
        x: canvas.width,
        y: type === 'rock' ? canvas.height - GROUND_HEIGHT - 30 : canvas.height - GROUND_HEIGHT - 60 - Math.random() * 50,
        width: 30,
        height: 30,
        type
      });
    }

    // Update Obstacles
    for (let i = obstaclesRef.current.length - 1; i >= 0; i--) {
      const obs = obstaclesRef.current[i];
      obs.x -= SPEED;

      // Collision Detection
      if (
        player.x < obs.x + obs.width &&
        player.x + player.width > obs.x &&
        player.y < obs.y + obs.height &&
        player.y + player.height > obs.y
      ) {
        if (obs.type === 'food') {
          scoreRef.current += 10;
          setScore(scoreRef.current);
          playCollectSound();
          obstaclesRef.current.splice(i, 1);
        } else {
          playHitSound();
          setGameOver(true);
          setIsPlaying(false);
          return; // Stop loop
        }
      }

      // Remove off-screen
      if (obs.x + obs.width < 0) {
        obstaclesRef.current.splice(i, 1);
      }
    }

    // Draw Ground
    ctx.fillStyle = '#8D6E63';
    ctx.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, GROUND_HEIGHT);
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(0, canvas.height - GROUND_HEIGHT, canvas.width, 10);

    // Draw Player (Sprite)
    drawPixelGirlSprite(ctx, player.x, player.y, player.width, player.height);

    // Draw Obstacles
    obstaclesRef.current.forEach(obs => {
      if (obs.type === 'food') {
        ctx.fillStyle = '#FFC107'; // Food color
        ctx.beginPath();
        ctx.arc(obs.x + obs.width/2, obs.y + obs.height/2, obs.width/2, 0, Math.PI * 2);
        ctx.fill();
        // Simple detail for food
        ctx.fillStyle = '#FF5722';
        ctx.fillRect(obs.x + obs.width/2 - 5, obs.y + obs.height/2 - 5, 10, 10);
      } else {
        ctx.fillStyle = '#5D4037'; // Rock color
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        // Rock detail
        ctx.fillStyle = '#3E2723';
        ctx.fillRect(obs.x + 5, obs.y + 5, obs.width - 10, obs.height - 10);
      }
    });

    // Score
    ctx.fillStyle = '#000';
    ctx.font = '20px "Press Start 2P"';
    ctx.fillText(`${t.level5.score}: ${scoreRef.current}`, 20, 40);

    if (isPlaying) {
      requestRef.current = requestAnimationFrame(update);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      requestRef.current = requestAnimationFrame(update);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPlaying, update]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault(); // Prevent scrolling
        jump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [jump]);

  return (
    <section className="py-20 px-4 flex justify-center">
      <PixelCard title={t.level5.title} className="max-w-3xl w-full bg-purple-50 text-center">
        <div className="relative w-full h-[300px] bg-blue-100 border-4 border-black overflow-hidden mb-4" onClick={jump}>
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-10 text-white">
              <p className="mb-4 text-sm md:text-base px-4">{t.level5.instructions}</p>
              <PixelButton onClick={startGame}>{t.level5.start}</PixelButton>
            </div>
          )}
          
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-10 text-white">
              <h3 className="text-2xl text-red-500 mb-4">{t.level5.gameOver}</h3>
              <p className="mb-6">{t.level5.score}: {score}</p>
              <PixelButton onClick={startGame}>{t.level5.playAgain}</PixelButton>
            </div>
          )}

          <canvas 
            ref={canvasRef} 
            width={600} 
            height={300} 
            className="w-full h-full"
          />
          
          {/* Decorative Pixel Girl for UI when not playing (optional) */}
          {!isPlaying && !gameOver && (
            <div className="absolute bottom-12 left-12 pointer-events-none opacity-50">
               <PixelGirlDarkHair className="w-12 h-12" />
            </div>
          )}
        </div>
      </PixelCard>
    </section>
  );
};


const ComplimentSection = ({ t }: { t: any }) => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % t.compliment.adjectives.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t]);

  return (
    <section className="py-12 px-4 text-center bg-white border-y-4 border-black mb-8">
      <h2 className="text-xl md:text-3xl font-bold text-pink-500 drop-shadow-sm">
        {t.compliment.prefix} <span className="bg-yellow-200 px-2 inline-block transform -rotate-2 border-2 border-black text-blue-600">{t.compliment.adjectives[index]}</span>
        <br className="md:hidden" /> {t.compliment.suffix}
      </h2>
    </section>
  );
};

const PetGeneratorSection = ({ t }: { t: any }) => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchPet = async () => {
    setLoading(true);
    playClickSound();
    try {
      const isDog = Math.random() > 0.5;
      if (isDog) {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        setImage(data.message);
      } else {
        // Using a random seed for picsum as a fallback or cataas if reliable
        // cataas is often slow. Let's use a reliable placeholder service for "random" pets if APIs fail, 
        // but the user asked for "generate", implying real ones.
        // Let's try cataas json endpoint.
        const res = await fetch('https://cataas.com/cat?json=true');
        const data = await res.json();
        setImage(`https://cataas.com/cat/${data._id}`);
      }
    } catch (e) {
      console.error(e);
      // Fallback
      setImage(`https://picsum.photos/400/400?random=${Date.now()}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 flex justify-center">
      <PixelCard title={t.petGenerator.title} className="max-w-md w-full text-center bg-orange-50">
        <div className="min-h-[300px] flex items-center justify-center bg-white border-4 border-black mb-6 overflow-hidden relative">
           {loading ? (
             <p className="animate-pulse font-bold text-xl">Loading Cuteness...</p>
           ) : image ? (
             <img src={image} alt={t.petGenerator.alt} className="w-full h-72 object-cover" />
           ) : (
             <div className="text-6xl animate-bounce">🐶 🐱</div>
           )}
        </div>
        <PixelButton onClick={fetchPet}>{t.petGenerator.button}</PixelButton>
      </PixelCard>
    </section>
  );
};

// --- Level 6: Wrapped Section ---

const WrappedSection = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl text-center mb-12 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] text-white" style={{ textShadow: '3px 3px 0 #000' }}>
          {t.level6.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.level6.stats.map((stat: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group cursor-help"
            >
              <PixelCard className={`h-full flex flex-col items-center justify-center text-center ${index % 2 === 0 ? 'bg-yellow-50' : 'bg-green-50'} transition-transform group-hover:-translate-y-2`}>
                <div className="mb-4">
                  {stat.icon === 'burger' && <PixelBurger className="w-16 h-16" />}
                  {stat.icon === 'tv' && <PixelTV className="w-16 h-16" />}
                  {stat.icon === 'heart' && <PixelHeart className="w-16 h-16 text-red-500" />}
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                <p className="text-sm font-bold text-gray-600">{stat.label}</p>
                
                {/* Tooltip for details */}
                {stat.details && stat.details.length > 0 && (
                  <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-black text-white text-xs p-4 border-4 border-white z-20 pointer-events-none">
                    <ul className="text-left list-disc pl-4 space-y-1">
                      {stat.details.map((detail: string, i: number) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black"></div>
                  </div>
                )}
              </PixelCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalMessage = ({ t }: { t: any }) => {
  return (
    <section className="py-20 px-4 text-center">
      <motion.div 
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="inline-block"
      >
        <PixelCard className="bg-blue-100 max-w-lg mx-auto border-4 border-black p-8">
          <h2 className="text-2xl font-bold mb-6">{t.final.title}</h2>
          <p className="leading-loose mb-8 whitespace-pre-line">
            {t.final.message}
            <br/><br/>
            {t.final.sign}
          </p>
          <div className="flex justify-center space-x-4">
            <PixelBurger />
            <PixelPizza />
            <PixelSoda />
          </div>
        </PixelCard>
      </motion.div>
    </section>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('pt-BR');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#E0F7FA] overflow-x-hidden selection:bg-pink-200">
      <LanguageSwitcher currentLang={lang} setLang={setLang} />
      
      <div className="fixed top-0 left-0 w-full h-2 bg-pink-400 z-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-2 bg-pink-400 z-50"></div>
      <div className="fixed left-0 top-0 h-full w-2 bg-pink-400 z-50"></div>
      <div className="fixed right-0 top-0 h-full w-2 bg-pink-400 z-50"></div>

      <HeroSection t={t} />
      <ComplimentSection t={t} />
      <TimerSection t={t} />
      <GallerySection t={t} />
      <QuizSection t={t} />
      <InteractiveSection t={t} />
      <GameSection t={t} />
      <PetGeneratorSection t={t} />
      <WrappedSection t={t} />
      <FinalMessage t={t} />
      
      <footer className="py-8 text-center text-xs text-gray-500 font-bold">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
}
