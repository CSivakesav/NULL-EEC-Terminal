"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, type Variants } from 'framer-motion';
import { FileNode, fileSystem, getFileById, getFileByName } from '@/data/content';
import {
  FileText,
  Folder,
  Terminal as TerminalIcon,
  ChevronRight,
  Menu,
  X,
  ChevronLeft,
  Github,
  Linkedin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import ImageSlider from '@/components/ui/image-slider';
import EventCard from '@/components/ui/event-card';

// Animation variants for stagger effects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12
    }
  }
};

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const matrixChars = 'ハミヒーウシナモニサワツオリアホテマケメエカキムユラセネスタヌヘ01';

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="matrix-bg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.4 }}
      />
    </div>
  );
};

const TypewriterText = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, onComplete]);

  return <span>{displayText}</span>;
};

// Dashboard stats component
const DashboardStats = () => {
  const stats = [
    { label: 'Active Members', value: '150+', icon: '👥', color: '#00ff41' },
    { label: 'Events Completed', value: '25+', icon: '🎯', color: '#00ffff' },
    { label: 'CTF Wins', value: '12', icon: '🏆', color: '#00ff41' },
    { label: 'Years Active', value: '2+', icon: '📅', color: '#ff6b6b' }
  ];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={cardVariants}
          className="dashboard-card p-4 text-center float"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <motion.div
            className="text-3xl mb-2"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {stat.icon}
          </motion.div>
          <motion.div
            className="text-2xl font-bold gradient-text mb-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {stat.value}
          </motion.div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Floating help button removed to prevent covering execute button

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 3) setStep(step + 1);
    }, step === 0 ? 1000 : step === 1 ? 2000 : step === 2 ? 2000 : 0);
    return () => clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(onComplete, 1500);
      return () => clearTimeout(timer);
    }
  }, [step, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e14]"
    >
      <div className="text-center space-y-6 p-8">
        <AnimatePresence mode="wait">
          {step >= 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="neon-text text-2xl font-bold"
            >
              [INITIALIZING CONNECTION...]
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#00ff41] text-xl"
            >
              <TypewriterText text="[CONNECTED TO NULL EEC TERMINAL]" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#00ffff] text-lg space-y-2"
            >
              <div>Welcome, visitor! 👋</div>
              <div className="text-sm text-gray-400">
                Use the file tree (left) or type 'help' below
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[#00ff41] text-sm animate-pulse"
            >
              💡 Click "About NULL EEC" to get started
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const PhotoCarousel = ({ photos }: { photos: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, photos.length]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-lg overflow-hidden border border-[#00ff41]/30">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={photos[currentIndex].url}
            alt={photos[currentIndex].caption}
            className="w-full h-full object-cover"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 }
            }}
          />
        </AnimatePresence>

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-4 text-white">
            <p className="text-sm font-semibold">{photos[currentIndex].caption}</p>
            <p className="text-xs text-gray-300">{photos[currentIndex].event}</p>
          </div>
        </motion.div>

        <motion.button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:border-[#00ff41]/50 border border-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>

        <motion.button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:border-[#00ff41]/50 border border-transparent"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="flex justify-center gap-2">
        {photos.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
              setIsAutoPlay(false);
            }}
            className={`h-2 rounded-full transition-all ${index === currentIndex
              ? 'bg-[#00ff41] w-8 shadow-[0_0_10px_rgba(0,255,65,0.6)]'
              : 'bg-gray-600 w-2 hover:bg-gray-400 hover:shadow-[0_0_8px_rgba(0,255,65,0.4)]'
              }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {currentIndex + 1} / {photos.length}
        </motion.span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="text-[#00ff41] border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all"
        >
          {isAutoPlay ? 'Pause' : 'Auto Play'}
        </Button>
      </div>
    </div>
  );
};

const EventPhotoThumbnails = ({ photos }: { photos: string[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="mt-4 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto pb-3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.15, zIndex: 10 }}
          >
            <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-[#00ff41]/30 group-hover:border-[#00ff41] transition-all group-hover:shadow-[0_0_25px_rgba(0,255,65,0.6)]">
              <img
                src={photo}
                alt={`Event snapshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            {hoveredIndex === index && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#00ffff] whitespace-nowrap"
              >
                Photo {index + 1}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Enhanced markdown renderer for comprehensive content
const renderEnhancedMarkdown = (content: string) => {
  const lines = content.split('\n');
  let currentIndex = 0;

  return lines.map((line, index) => {
    currentIndex = index;

    // Main headers (# )
    if (line.startsWith('# ')) {
      return (
        <motion.div
          key={index}
          className="mb-8 text-center relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          <motion.h1
            className="text-4xl font-bold gradient-text mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            {line.slice(2)}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.02 + 0.3 }}
            />
          </motion.h1>
        </motion.div>
      );
    }

    // Section headers (## )
    if (line.startsWith('## ')) {
      return (
        <motion.div
          key={index}
          className="mb-6 mt-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          <motion.h2
            className="text-3xl font-bold text-[#00ffff] mb-4 flex items-center gap-3"
            whileHover={{ x: 10 }}
          >
            <motion.div
              className="w-2 h-8 bg-[#00ffff] rounded-full"
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ delay: index * 0.02 + 0.2 }}
            />
            {line.slice(3)}
          </motion.h2>
        </motion.div>
      );
    }

    // Subsection headers (### )
    if (line.startsWith('### ')) {
      return (
        <motion.div
          key={index}
          className="mb-4 mt-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          <motion.h3
            className="text-2xl font-bold text-[#00ff41] mb-3 flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            <motion.span
              className="text-sm"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            {line.slice(4)}
          </motion.h3>
        </motion.div>
      );
    }

    // Sub-subsection headers (#### )
    if (line.startsWith('#### ')) {
      return (
        <motion.div
          key={index}
          className="mb-3 mt-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.02 }}
        >
          <motion.h4
            className="text-xl font-semibold text-[#00ffff] mb-2 dashboard-card p-3 inline-block hover:text-[#40ffff] transition-colors"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            {line.slice(5)}
          </motion.h4>
        </motion.div>
      );
    }

    // Bold text
    if (line.startsWith('**') && line.endsWith('**')) {
      return (
        <motion.p
          key={index}
          className="font-bold text-[#00ffff] my-3 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          {line.slice(2, -2)}
        </motion.p>
      );
    }

    // Lists with emojis
    if (line.startsWith('- **') || line.startsWith('* **')) {
      const content = line.slice(line.indexOf('**') + 2);
      const endBold = content.indexOf('**');
      const boldText = content.slice(0, endBold);
      const restText = content.slice(endBold + 2);

      return (
        <motion.div
          key={index}
          className="dashboard-card p-4 mb-3 interactive-btn"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.02 }}
          whileHover={{ scale: 1.02, x: 5 }}
        >
          <div className="flex items-start gap-3">
            <motion.span
              className="text-2xl flex-shrink-0"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              🎯
            </motion.span>
            <div>
              <span className="font-bold text-[#00ff41] text-lg">{boldText}</span>
              <span className="text-gray-300">{restText}</span>
            </div>
          </div>
        </motion.div>
      );
    }

    // Regular lists
    if (line.startsWith('- ') || line.startsWith('* ')) {
      return (
        <motion.li
          key={index}
          className="text-gray-300 ml-6 my-2 flex items-start gap-2"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          <motion.span
            className="text-[#00ff41] mt-1 flex-shrink-0"
            whileHover={{ scale: 1.2 }}
          >
            •
          </motion.span>
          <span>{line.slice(2)}</span>
        </motion.li>
      );
    }

    // Numbered lists
    if (/^\d+\./.test(line)) {
      return (
        <motion.li
          key={index}
          className="text-gray-300 ml-6 my-2 flex items-start gap-3"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          <motion.span
            className="text-[#00ffff] font-bold flex-shrink-0"
            whileHover={{ scale: 1.1 }}
          >
            {line.match(/^\d+/)?.[0]}.
          </motion.span>
          <span>{line.replace(/^\d+\.\s*/, '')}</span>
        </motion.li>
      );
    }

    // Dividers
    if (line.startsWith('---')) {
      return (
        <motion.div
          key={index}
          className="my-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.02 }}
        >
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.02 + 0.2 }}
          />
          <motion.div
            className="text-[#00ff41] text-sm px-3"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡
          </motion.div>
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: index * 0.02 + 0.2 }}
          />
        </motion.div>
      );
    }

    // Code blocks
    if (line.startsWith('```')) {
      return (
        <motion.div
          key={index}
          className="my-4 p-4 bg-black/50 rounded-lg border border-[#00ff41]/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          <code className="text-[#00ff41] font-mono text-sm">
            {line.slice(3)}
          </code>
        </motion.div>
      );
    }

    // Inline code
    if (line.includes('`') && !line.startsWith('`')) {
      const parts = line.split('`');
      return (
        <motion.p
          key={index}
          className="text-gray-300 my-2 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.02 }}
        >
          {parts.map((part, partIndex) =>
            partIndex % 2 === 1 ? (
              <code key={partIndex} className="bg-black/50 px-2 py-1 rounded text-[#00ff41] text-sm">
                {part}
              </code>
            ) : (
              <span key={partIndex}>{part}</span>
            )
          )}
        </motion.p>
      );
    }

    // Empty lines
    if (!line.trim()) {
      return <div key={index} className="h-3" />;
    }

    // Regular paragraphs
    return (
      <motion.p
        key={index}
        className="text-gray-300 my-3 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.02 }}
      >
        {line}
      </motion.p>
    );
  });
};

const ContentRenderer = ({ file, setSelectedFile }: { file: FileNode; setSelectedFile: (file: FileNode) => void }) => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunchClick = () => {
    setIsLaunching(true);

    // Celebrate for 2 seconds then redirect
    setTimeout(() => {
      window.open('https://lms.nulleec.in/', '_blank');
      setIsLaunching(false);
    }, 2000);
  };

  if (!file.content) return null;

  // Getting Started - New visual card-based layout
  if (file.id === 'readme' && typeof file.content === 'object' && file.content?.type === 'getting-started') {
    const gettingStartedData = file.content;
    return (
      <motion.div
        className="space-y-12 getting-started-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold gradient-text mb-4 relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            {gettingStartedData.hero.title}
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {gettingStartedData.hero.subtitle}
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {gettingStartedData.hero.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="dashboard-card p-4 text-center interactive-glow float">
              <div className="text-3xl font-bold text-[#00ff41] mb-1">{gettingStartedData.stats.members}</div>
              <div className="text-sm text-gray-300">Members</div>
            </div>
            <div className="dashboard-card p-4 text-center interactive-glow-cyan float" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-[#00ffff] mb-1">{gettingStartedData.stats.events}</div>
              <div className="text-sm text-gray-300">Events</div>
            </div>
            <div className="dashboard-card p-4 text-center interactive-glow float" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-[#00ff41] mb-1">{gettingStartedData.stats.participants}</div>
              <div className="text-sm text-gray-300">Participants</div>
            </div>
            <div className="dashboard-card p-4 text-center interactive-glow-cyan float" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-[#00ffff] mb-1">{gettingStartedData.stats.prizes}</div>
              <div className="text-sm text-gray-300">Prizes</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Start Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {gettingStartedData.quickStart.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gettingStartedData.quickStart.cards.map((card: any, index: number) => (
              <motion.div
                key={index}
                className="dashboard-card p-6 text-center interactive-glow hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#00ff41] mb-3">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                {card.commands && (
                  <div className="flex flex-wrap gap-2 justify-center">
                    {card.commands.map((cmd: string, idx: number) => (
                      <code key={idx} className="px-2 py-1 bg-[#00ff41]/20 text-[#00ff41] rounded text-sm">
                        {cmd}
                      </code>
                    ))}
                  </div>
                )}
                {card.features && (
                  <div className="space-y-1">
                    {card.features.map((feature: string, idx: number) => (
                      <div key={idx} className="text-sm text-gray-400">✓ {feature}</div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Cards */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {gettingStartedData.navigation.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gettingStartedData.navigation.cards.map((card: any, index: number) => (
              <motion.div
                key={card.id}
                className={`dashboard-card p-6 cursor-pointer hover:scale-105 transition-all duration-300 border-l-4 ${card.color === 'blue' ? 'border-l-blue-500 hover:bg-blue-500/10' :
                  card.color === 'green' ? 'border-l-green-500 hover:bg-green-500/10' :
                    card.color === 'purple' ? 'border-l-purple-500 hover:bg-purple-500/10' :
                      card.color === 'orange' ? 'border-l-orange-500 hover:bg-orange-500/10' :
                        card.color === 'indigo' ? 'border-l-indigo-500 hover:bg-indigo-500/10' :
                          card.color === 'teal' ? 'border-l-teal-500 hover:bg-teal-500/10' :
                            'border-l-[#00ff41] hover:bg-[#00ff41]/10'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => {
                  const file = getFileById(card.id);
                  if (file) {
                    setSelectedFile(file);
                  }
                }}
              >
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#00ff41] mb-3">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <div className="space-y-2">
                  {card.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-[#00ff41]">▸</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {gettingStartedData.features.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gettingStartedData.features.cards.map((card: any, index: number) => (
              <motion.div
                key={index}
                className="dashboard-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#00ffff] mb-3">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <div className="space-y-1">
                  {card.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="text-sm text-gray-400">• {benefit}</div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pathways Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {gettingStartedData.pathways.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gettingStartedData.pathways.paths.map((path: any, index: number) => (
              <motion.div
                key={index}
                className="dashboard-card p-6 text-center hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{path.icon}</div>
                <h3 className="text-lg font-bold text-[#00ff41] mb-2">{path.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{path.description}</p>
                <div className="space-y-1">
                  {path.steps.map((step: string, idx: number) => (
                    <div key={idx} className="text-xs text-gray-400">
                      {idx + 1}. {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          className="dashboard-card p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
        >
          <h2 className="text-2xl font-bold text-center gradient-text mb-6">
            {gettingStartedData.quickTips.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {gettingStartedData.quickTips.tips.map((tip: any, index: number) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-[#00ff41]/5 border border-[#00ff41]/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.6 + index * 0.1 }}
                whileHover={{ backgroundColor: "rgba(0, 255, 65, 0.1)" }}
              >
                <span className="text-xl flex-shrink-0">{tip.icon}</span>
                <span className="text-gray-300 text-sm">{tip.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // About NULL EEC - New visual card-based layout
  if (file.id === 'about-null' && typeof file.content === 'object' && file.content?.type === 'about-null-eec') {
    const aboutData = file.content;
    return (
      <motion.div
        className="space-y-12 about-null-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold gradient-text mb-4 relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            {aboutData.hero.title}
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {aboutData.hero.subtitle}
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {aboutData.hero.description}
          </motion.p>
          <motion.p
            className="text-sm text-[#00ff41] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            "{aboutData.hero.tagline}"
          </motion.p>
        </motion.div>

        {/* Mission Cards */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {aboutData.mission.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.mission.cards.map((card: any, index: number) => (
              <motion.div
                key={index}
                className={`dashboard-card p-6 text-center hover:scale-105 transition-transform border-l-4 ${card.color === 'blue' ? 'border-l-blue-500 hover:bg-blue-500/10' :
                  card.color === 'green' ? 'border-l-green-500 hover:bg-green-500/10' :
                    card.color === 'purple' ? 'border-l-purple-500 hover:bg-purple-500/10' :
                      card.color === 'orange' ? 'border-l-orange-500 hover:bg-orange-500/10' :
                        card.color === 'teal' ? 'border-l-teal-500 hover:bg-teal-500/10' :
                          'border-l-[#00ff41] hover:bg-[#00ff41]/10'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#00ff41] mb-3">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {aboutData.activities.title}
          </h2>
          <div className="space-y-8">
            {aboutData.activities.sections.map((section: any, sectionIndex: number) => (
              <motion.div
                key={sectionIndex}
                className="dashboard-card p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + sectionIndex * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{section.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-[#00ffff]">{section.title}</h3>
                    <p className="text-gray-300">{section.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {section.items.map((item: any, itemIndex: number) => (
                    <motion.div
                      key={itemIndex}
                      className="p-4 rounded-lg bg-[#00ff41]/5 border border-[#00ff41]/20"
                      whileHover={{ backgroundColor: "rgba(0, 255, 65, 0.1)" }}
                    >
                      <h4 className="font-bold text-[#00ff41] mb-2">{item.name}</h4>
                      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                      <div className="space-y-1">
                        {item.skills.map((skill: string, skillIndex: number) => (
                          <div key={skillIndex} className="text-xs text-gray-400">• {skill}</div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {aboutData.philosophy.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.philosophy.principles.map((principle: any, index: number) => (
              <motion.div
                key={index}
                className="dashboard-card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-[#00ffff] mb-3">{principle.title}</h3>
                <p className="text-gray-300 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {aboutData.features.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.features.cards.map((card: any, index: number) => (
              <motion.div
                key={index}
                className="dashboard-card p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-[#00ff41] mb-3">{card.title}</h3>
                <p className="text-gray-300 mb-4">{card.description}</p>
                <div className="space-y-1">
                  {card.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-[#00ff41]">▸</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="dashboard-card p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">
            {aboutData.cta.title}
          </h2>
          <p className="text-gray-300 mb-6">{aboutData.cta.description}</p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {aboutData.cta.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="text-[#00ff41]">✓</span>
                {benefit}
              </div>
            ))}
          </div>
          <p className="text-lg text-[#00ffff] font-semibold">{aboutData.cta.action}</p>
        </motion.div>
      </motion.div>
    );
  }

  // About EEC - New visual card-based layout
  if (file.id === 'about-eec' && typeof file.content === 'object' && file.content?.type === 'about-eec') {
    const eecData = file.content;
    return (
      <motion.div
        className="space-y-12 about-eec-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold gradient-text mb-4 relative inline-block"
          >
            {eecData.hero.title}
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            {eecData.hero.subtitle}
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-6"
          >
            {eecData.hero.description}
          </motion.p>
          <motion.p
            className="text-sm text-[#00ff41] italic"
          >
            "{eecData.hero.tagline}"
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {eecData.stats.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eecData.stats.cards.map((stat: any, index: number) => (
              <motion.div
                key={index}
                className={`dashboard-card p-6 text-center interactive-glow hover:scale-105 transition-transform border-l-4 ${stat.color === 'blue' ? 'border-l-blue-500' :
                  stat.color === 'green' ? 'border-l-green-500' :
                    stat.color === 'purple' ? 'border-l-purple-500' :
                      stat.color === 'orange' ? 'border-l-orange-500' :
                        'border-l-[#00ff41]'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-[#00ff41] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Departments Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">
              {eecData.departments.title}
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">{eecData.departments.description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eecData.departments.cards.map((dept: any, index: number) => (
              <motion.div
                key={index}
                className={`dashboard-card p-6 hover:scale-105 transition-transform border-l-4 ${dept.color === 'blue' ? 'border-l-blue-500 hover:bg-blue-500/10' :
                  dept.color === 'green' ? 'border-l-green-500 hover:bg-green-500/10' :
                    dept.color === 'yellow' ? 'border-l-yellow-500 hover:bg-yellow-500/10' :
                      dept.color === 'orange' ? 'border-l-orange-500 hover:bg-orange-500/10' :
                        dept.color === 'teal' ? 'border-l-teal-500 hover:bg-teal-500/10' :
                          dept.color === 'purple' ? 'border-l-purple-500 hover:bg-purple-500/10' :
                            'border-l-[#00ff41] hover:bg-[#00ff41]/10'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-[#00ff41] mb-3">{dept.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{dept.description}</p>
                <div className="space-y-1">
                  {dept.highlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-[#00ff41]">▸</span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Continue with other sections... */}
        {/* For brevity, I'll add a few more key sections */}

        {/* Vision Section */}
        <motion.div
          className="dashboard-card p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">
            {eecData.vision.title}
          </h2>
          <p className="text-gray-300 mb-6">{eecData.vision.description}</p>
          <p className="text-lg text-[#00ffff] font-semibold mb-4">{eecData.vision.mission}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {eecData.vision.values.map((value: string, index: number) => (
              <span key={index} className="px-4 py-2 bg-[#00ff41]/20 text-[#00ff41] rounded-lg text-sm">
                {value}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // NULL ILP - Interactive Learning Platform
  if (file.id === 'null-ilp' && typeof file.content === 'object' && file.content?.type === 'null-ilp') {
    const ilpData = file.content;
    return (
      <motion.div
        className="space-y-12 null-ilp-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold gradient-text mb-4 relative inline-block"
          >
            {ilpData.hero.title}
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {ilpData.hero.subtitle}
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {ilpData.hero.description}
          </motion.p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setShowVideoModal(true)}
            className="bg-gradient-to-r from-[#00ff41] to-[#00ffff] text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00ff41]/50 transition-all duration-300 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ▶️ Watch Introduction Video
          </motion.button>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {ilpData.features.map((feature: any, index: number) => (
            <motion.div
              key={index}
              className="dashboard-card p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#00ff41] mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Launch Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.button
            onClick={handleLaunchClick}
            className="launch-button relative overflow-hidden bg-gradient-to-r from-[#ff6b35] via-[#ff3333] to-[#ff6b35] text-white px-16 py-6 rounded-full font-bold text-2xl shadow-2xl transform transition-all duration-300"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 20px 40px rgba(255, 51, 51, 0.4)",
              background: "linear-gradient(45deg, #ff3333, #ff6b35, #ffaa00, #ff6b35, #ff3333)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundSize: "300% 300%",
              animation: "gradient-shift 3s ease infinite"
            }}
          >
            🚀 LAUNCH NULL ILP 🚀
            <motion.div
              className="absolute inset-0 bg-white opacity-0"
              animate={isLaunching ? { opacity: [0, 0.3, 0] } : {}}
              transition={{ duration: 0.3, repeat: isLaunching ? 3 : 0 }}
            />
          </motion.button>
        </motion.div>

        {/* Video Modal */}
        {showVideoModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideoModal(false)}
                className="absolute top-4 right-4 text-white text-2xl z-10 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
              <iframe
                src={ilpData.videoUrl}
                title="NULL ILP Introduction"
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </motion.div>
          </motion.div>
        )}

        {/* Celebration Animation */}
        {isLaunching && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: window.innerHeight + 50,
                  rotate: 0
                }}
                animate={{
                  y: -50,
                  rotate: 360,
                  x: Math.random() * window.innerWidth
                }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 0.5,
                  ease: "easeOut"
                }}
              >
                {['🎉', '🚀', '⭐', '🎊', '💫'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Contact Us - New visual card-based layout
  if (file.id === 'contact' && typeof file.content === 'object' && file.content?.type === 'contact-us') {
    const contactData = file.content;
    return (
      <motion.div
        className="space-y-12 contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold gradient-text mb-4 relative inline-block"
          >
            {contactData.hero.title}
            <motion.div
              className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-6 max-w-4xl mx-auto leading-relaxed"
          >
            {contactData.hero.subtitle}
          </motion.p>
          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto mb-6"
          >
            {contactData.hero.description}
          </motion.p>
          <motion.p
            className="text-sm text-[#00ff41] italic"
          >
            "{contactData.hero.tagline}"
          </motion.p>
        </motion.div>

        {/* Quick Connect Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {contactData.quickConnect.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactData.quickConnect.channels.map((channel: any, index: number) => (
              <motion.div
                key={index}
                className={`dashboard-card p-6 text-center hover:scale-105 transition-transform border-l-4 ${channel.color === 'purple' ? 'border-l-purple-500 hover:bg-purple-500/10' :
                  channel.color === 'blue' ? 'border-l-blue-500 hover:bg-blue-500/10' :
                    channel.color === 'green' ? 'border-l-green-500 hover:bg-green-500/10' :
                      channel.color === 'orange' ? 'border-l-orange-500 hover:bg-orange-500/10' :
                        'border-l-[#00ff41] hover:bg-[#00ff41]/10'
                  }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-bold text-[#00ff41] mb-3">{channel.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{channel.description}</p>
                {channel.link && (
                  <a
                    href={channel.link.startsWith('http') ? channel.link : `https://${channel.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ffff] text-sm font-mono hover:underline cursor-pointer"
                  >
                    {channel.link}
                  </a>
                )}
                {channel.links && (
                  <div className="space-y-1">
                    {channel.links.map((link: string, idx: number) => (
                      <a
                        key={idx}
                        href={link.startsWith('http') ? link : `https://${link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#00ffff] text-xs font-mono hover:underline cursor-pointer"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                )}
                <p className="text-xs text-gray-400 mt-2">Response: {channel.responseTime}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section - Condensed */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold text-center gradient-text mb-8">
            {contactData.faq.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {contactData.faq.categories.map((category: any, index: number) => (
              <motion.div
                key={index}
                className="dashboard-card p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-[#00ffff]">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.questions.slice(0, 2).map((item: any, qIndex: number) => (
                    <div key={qIndex} className="p-3 rounded-lg bg-[#00ff41]/5 border border-[#00ff41]/20">
                      <p className="text-sm font-semibold text-[#00ff41] mb-1">{item.q}</p>
                      <p className="text-xs text-gray-400">{item.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="dashboard-card p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">
            {contactData.cta.title}
          </h2>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {contactData.cta.steps.map((step: any, index: number) => (
              <div key={index} className="text-center">
                <div className="text-2xl mb-2">{step.step}</div>
                <h4 className="font-bold text-[#00ff41] mb-1">{step.title}</h4>
                <p className="text-xs text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 mb-4">{contactData.cta.finalMessage}</p>
          <p className="text-lg text-[#00ffff] font-semibold">{contactData.cta.motto}</p>
        </motion.div>
      </motion.div>
    );
  }

  // Photo gallery - Enhanced with collage layout
  if (file.type === 'folder' && file.id === 'past-photos') {
    const galleryData = file.content;

    return (
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        variants={containerVariants}
      >
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            {galleryData.title}
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <h2 className="text-2xl text-purple-300 mb-4">{galleryData.subtitle}</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {galleryData.description}
          </p>
        </motion.div>

        {/* Gallery Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div
            className="text-center p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className="text-3xl font-bold text-cyan-400">{galleryData.stats.totalPhotos}</div>
            <div className="text-sm text-gray-400">Photos Captured</div>
          </motion.div>
          <motion.div
            className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <div className="text-3xl font-bold text-purple-400">{galleryData.stats.eventsDocumented}</div>
            <div className="text-sm text-gray-400">Events Documented</div>
          </motion.div>
          <motion.div
            className="text-center p-4 rounded-lg bg-gradient-to-br from-green-900/20 to-teal-900/20 border border-green-500/30"
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className="text-3xl font-bold text-green-400">{galleryData.stats.yearsActive}</div>
            <div className="text-sm text-gray-400">Years Active</div>
          </motion.div>
          <motion.div
            className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30"
            whileHover={{ scale: 1.05, rotate: -1 }}
          >
            <div className="text-3xl font-bold text-orange-400">{galleryData.stats.communitySize}</div>
            <div className="text-sm text-gray-400">Community Members</div>
          </motion.div>
        </motion.div>

        {/* Unified Photo Collage */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Dynamic Collage Layout */}
          <div className="grid grid-cols-12 gap-3 auto-rows-min">
            {galleryData.photos.map((photo: any, photoIndex: number) => {
              // Dynamic grid spans based on photo size and position
              let gridClass = '';
              if (photo.size === 'large') {
                gridClass = 'col-span-12 md:col-span-8 lg:col-span-6 row-span-2';
              } else if (photo.size === 'medium') {
                gridClass = 'col-span-6 md:col-span-4 lg:col-span-3';
              } else {
                gridClass = 'col-span-6 md:col-span-3 lg:col-span-2';
              }

              // Get category color based on photo category
              const getCategoryColor = (category: string) => {
                if (category.includes('CTF') || category.includes('Competition')) return 'red';
                if (category.includes('Workshop') || category.includes('Training')) return 'blue';
                if (category.includes('Community') || category.includes('Team')) return 'green';
                if (category.includes('Guest') || category.includes('Lecture')) return 'purple';
                return 'orange';
              };

              const categoryColor = getCategoryColor(photo.category);

              return (
                <motion.div
                  key={photo.id}
                  className={`relative group overflow-hidden rounded-xl ${gridClass}`}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    delay: 0.6 + photoIndex * 0.05,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    zIndex: 10
                  }}
                  style={{
                    aspectRatio: photo.size === 'large' ? '16/10' :
                      photo.size === 'medium' ? '4/3' : '3/4'
                  }}
                >
                  <motion.img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ filter: "brightness(1.1)" }}
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-bold text-sm mb-1">{photo.caption}</h4>
                      <p className={`text-xs ${categoryColor === 'red' ? 'text-red-300' :
                        categoryColor === 'blue' ? 'text-blue-300' :
                          categoryColor === 'green' ? 'text-green-300' :
                            categoryColor === 'purple' ? 'text-purple-300' :
                              'text-orange-300'
                        }`}>
                        {photo.event} • {photo.category}
                      </p>
                    </div>
                  </motion.div>

                  {/* Border accent */}
                  <motion.div
                    className={`absolute inset-0 border-2 border-transparent group-hover:${categoryColor === 'red' ? 'border-red-400' :
                      categoryColor === 'blue' ? 'border-blue-400' :
                        categoryColor === 'green' ? 'border-green-400' :
                          categoryColor === 'purple' ? 'border-purple-400' :
                            'border-orange-400'
                      } rounded-xl transition-colors duration-300`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="inline-block p-6 rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 border border-cyan-500/30"
            whileHover={{ scale: 1.02, rotate: 1 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
              📸 Every Picture Tells Our Story
            </h3>
            <p className="text-gray-300 max-w-2xl">
              From intense competition moments to collaborative learning sessions, these images capture
              the spirit of our cybersecurity community. Each photo represents growth, achievement, and
              the bonds we've built together.
            </p>
            <motion.div
              className="mt-4 text-cyan-400 font-semibold"
              animate={{
                textShadow: ["0 0 5px #06b6d4", "0 0 20px #06b6d4", "0 0 5px #06b6d4"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ Building Memories, One Event at a Time ✨
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Past Events - Enhanced with new structure and image sliders
  if (file.id === 'past-events') {
    // If it's the new redesigned object format
    if (typeof file.content === 'object' && file.content?.type === 'past-events-redesigned') {
      const content = file.content;
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 p-8 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 rounded-lg border border-cyan-500/30"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {content.hero.title}
            </h1>
            <h2 className="text-xl text-purple-300">{content.hero.subtitle}</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">{content.hero.description}</p>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm text-white">
              {content.hero.tagline}
            </div>
          </motion.div>

          {/* Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              {content.stats.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.stats.cards.map((stat: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 ${stat.color === 'blue' ? 'border-blue-500/50 bg-blue-900/20 hover:bg-blue-800/30' :
                    stat.color === 'green' ? 'border-green-500/50 bg-green-900/20 hover:bg-green-800/30' :
                      stat.color === 'purple' ? 'border-purple-500/50 bg-purple-900/20 hover:bg-purple-800/30' :
                        'border-orange-500/50 bg-orange-900/20 hover:bg-orange-800/30'
                    }`}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Event Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{content.eventCategories.title}</h2>
            <p className="text-gray-300 mb-6">{content.eventCategories.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.eventCategories.categories.map((category: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 ${category.color === 'red' ? 'border-red-500/50 bg-red-900/20 hover:bg-red-800/30' :
                    category.color === 'blue' ? 'border-blue-500/50 bg-blue-900/20 hover:bg-blue-800/30' :
                      category.color === 'green' ? 'border-green-500/50 bg-green-900/20 hover:bg-green-800/30' :
                        'border-purple-500/50 bg-purple-900/20 hover:bg-purple-800/30'
                    }`}
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <div className="text-sm text-gray-400 mb-3">{category.count}</div>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="space-y-1">
                    {category.highlights.map((highlight: string, hidx: number) => (
                      <div key={hidx} className="text-xs text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Events */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{content.featuredEvents.title}</h2>
            <p className="text-gray-300 mb-8">{content.featuredEvents.description}</p>
            <div className="space-y-8">
              {content.featuredEvents.events.map((event: any, index: number) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                  className={`p-8 rounded-xl border-2 transition-all duration-300 ${event.color === 'red' ? 'border-red-500/50 bg-red-900/10 hover:bg-red-900/20' :
                    event.color === 'blue' ? 'border-blue-500/50 bg-blue-900/10 hover:bg-blue-900/20' :
                      event.color === 'purple' ? 'border-purple-500/50 bg-purple-900/10 hover:bg-purple-900/20' :
                        event.color === 'green' ? 'border-green-500/50 bg-green-900/10 hover:bg-green-900/20' :
                          event.color === 'orange' ? 'border-orange-500/50 bg-orange-900/10 hover:bg-orange-900/20' :
                            'border-teal-500/50 bg-teal-900/10 hover:bg-teal-900/20'
                    }`}
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Event Info */}
                    <div className="lg:w-2/3 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{event.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                          <h4 className="text-lg text-purple-300 mb-2">{event.subtitle}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                            <span>📅 {event.date}</span>
                            <span>👥 {event.participants}</span>
                            <span>⏱️ {event.duration}</span>
                            <span>💰 {event.prizePool}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">{event.description}</p>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-lg font-semibold text-cyan-400 mb-3">🏆 Key Achievements</h5>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {event.achievements.map((achievement: string, aidx: number) => (
                            <div key={aidx} className="flex items-center gap-2 text-sm text-gray-300">
                              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Categories/Skills */}
                      <div>
                        <h5 className="text-lg font-semibold text-cyan-400 mb-3">📚 Topics Covered</h5>
                        <div className="flex flex-wrap gap-2">
                          {event.categories.map((category: string, cidx: number) => (
                            <span key={cidx} className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Photo Gallery */}
                    <div className="lg:w-1/3">
                      <h5 className="text-lg font-semibold text-cyan-400 mb-3">📸 Event Gallery</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {event.photos.slice(0, 4).map((photo: string, pidx: number) => (
                          <motion.img
                            key={pidx}
                            src={photo}
                            alt={`${event.title} photo ${pidx + 1}`}
                            whileHover={{ scale: 1.05 }}
                            className="w-full h-20 object-cover rounded-lg border border-gray-600 cursor-pointer transition-transform"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{content.successMetrics.title}</h2>
            <p className="text-gray-300 mb-6">{content.successMetrics.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.successMetrics.metrics.map((metric: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-lg border-2 transition-all duration-300 ${metric.color === 'blue' ? 'border-blue-500/50 bg-blue-900/20 hover:bg-blue-800/30' :
                    metric.color === 'green' ? 'border-green-500/50 bg-green-900/20 hover:bg-green-800/30' :
                      metric.color === 'purple' ? 'border-purple-500/50 bg-purple-900/20 hover:bg-purple-800/30' :
                        'border-orange-500/50 bg-orange-900/20 hover:bg-orange-800/30'
                    }`}
                >
                  <div className="text-3xl mb-3">{metric.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">{metric.title}</h3>
                  <div className="space-y-3">
                    {metric.stats.map((stat: any, sidx: number) => (
                      <div key={sidx} className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">{stat.label}</span>
                        <span className="text-lg font-bold text-white">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{content.testimonials.title}</h2>
            <p className="text-gray-300 mb-6">{content.testimonials.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.testimonials.testimonials.map((testimonial: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-6 rounded-lg border border-purple-500/50 bg-purple-900/10 hover:bg-purple-900/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-cyan-400"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-purple-300">{testimonial.event}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="text-sm text-green-400 font-semibold">
                    ✨ {testimonial.achievement}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{content.timeline.title}</h2>
            <p className="text-gray-300 mb-6">{content.timeline.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.timeline.milestones.map((milestone: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-lg border border-teal-500/50 bg-teal-900/10 hover:bg-teal-900/20 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-teal-400 mb-2">{milestone.year} {milestone.quarter}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{milestone.title}</h3>
                  <div className="space-y-2 mb-4">
                    {milestone.events.map((event: string, eidx: number) => (
                      <div key={eidx} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>
                        {event}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">👥 {milestone.participants}</span>
                    <span className="text-green-400">📈 {milestone.impact}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">{content.upcomingPreview.title}</h2>
            <p className="text-gray-300 mb-6">{content.upcomingPreview.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.upcomingPreview.events.map((event: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="p-6 rounded-lg border-2 border-dashed border-pink-500/50 bg-gradient-to-br from-pink-900/10 to-purple-900/10 hover:from-pink-900/20 hover:to-purple-900/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{event.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <div className="text-sm text-purple-400 mb-2">{event.type} • {event.timeline}</div>
                  <p className="text-gray-300">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      );
    }

    // If it's the old past-events object format
    if (typeof file.content === 'object' && file.content?.type === 'past-events') {
      const eventData = file.content;
      return (
        <motion.div
          className="space-y-8 events-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl font-bold gradient-text mb-4 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              Our Journey Through Cybersecurity Excellence
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed hover:text-gray-100 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              A legacy of innovation and learning. Each event represents a milestone in our journey to create
              the most vibrant cybersecurity community at Easwari Engineering College.
            </motion.p>

            {/* Summary Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="dashboard-card p-4 text-center float interactive-glow">
                <div className="text-3xl font-bold text-[#00ff41] mb-1 hover:text-[#40ff60] transition-colors">
                  {eventData.summary.totalEvents}+
                </div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Total Events</div>
              </div>
              <div className="dashboard-card p-4 text-center float interactive-glow-cyan" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl font-bold text-[#00ffff] mb-1 hover:text-[#40ffff] transition-colors">
                  {eventData.summary.totalParticipants}
                </div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Participants</div>
              </div>
              <div className="dashboard-card p-4 text-center float interactive-glow" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-[#00ff41] mb-1 hover:text-[#40ff60] transition-colors">
                  {eventData.summary.prizesMoney}
                </div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Prizes Given</div>
              </div>
              <div className="dashboard-card p-4 text-center float interactive-glow-cyan" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl font-bold text-[#00ffff] mb-1 hover:text-[#40ffff] transition-colors">
                  {eventData.summary.industryPartnerships}+
                </div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Partners</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Events List */}
          <div className="space-y-12">
            {eventData.events.map((event: any, index: number) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          {/* Success Stories Section */}
          <motion.div
            className="mt-16 dashboard-card p-8 pulse-glow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text text-center mb-6">
              🎉 Community Impact & Success Stories
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {eventData.summary.successStories.map((story: string, idx: number) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[#00ff41]/5 border border-[#00ff41]/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8 + idx * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 255, 65, 0.1)" }}
                >
                  <motion.span
                    className="text-2xl flex-shrink-0"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                  >
                    🌟
                  </motion.span>
                  <span className="text-gray-300">{story}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              <p className="text-lg text-[#00ffff] mb-2">
                📸 Want to see more? Check out our "Past Photos" gallery!
              </p>
              <p className="text-sm text-gray-400 italic">
                Every picture tells a story of learning, growth, and community building 📚✨
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      );
    }
  }

  // Special dashboard UI for README.md
  if (file.id === 'readme' && typeof file.content === 'string') {
    return (
      <motion.div
        className="space-y-8 readme-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Header Section */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/10 to-transparent blur-3xl"></div>
          <motion.h1
            className="text-6xl font-bold gradient-text mb-6 relative z-10"
            whileHover={{ scale: 1.05 }}
          >
            🚀 NULL EEC Terminal
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#00ff41] via-[#00ffff] to-[#00ff41]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Your Gateway to Cybersecurity Excellence at Easwari Engineering College
          </motion.p>

          {/* Quick Stats Dashboard */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="dashboard-card p-6 text-center interactive-glow float">
              <div className="text-4xl font-bold text-[#00ff41] mb-2 hover:text-[#40ff60] transition-colors">500+</div>
              <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Community Members</div>
            </div>
            <div className="dashboard-card p-6 text-center interactive-glow-cyan float" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-[#00ffff] mb-2 hover:text-[#40ffff] transition-colors">50+</div>
              <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Events Hosted</div>
            </div>
            <div className="dashboard-card p-6 text-center interactive-glow float" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-[#00ff41] mb-2 hover:text-[#40ff60] transition-colors">15+</div>
              <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">CTF Victories</div>
            </div>
            <div className="dashboard-card p-6 text-center interactive-glow-cyan float" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-[#00ffff] mb-2 hover:text-[#40ffff] transition-colors">100%</div>
              <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Learning Focused</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div
          className="enhanced-markdown-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {renderEnhancedMarkdown(file.content)}
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          className="text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="dashboard-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold gradient-text mb-4">Ready to Start Your Journey? 🌟</h3>
            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Join the most active cybersecurity community at EEC. Whether you're a beginner or expert,
              there's a place for you in our growing family.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-8 py-4 bg-[#00ff41]/20 border border-[#00ff41]/50 rounded-lg text-[#00ff41] font-semibold hover:bg-[#00ff41]/30 hover:border-[#00ff41]/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🎯 Explore Events
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-[#00ffff]/20 border border-[#00ffff]/50 rounded-lg text-[#00ffff] font-semibold hover:bg-[#00ffff]/30 hover:border-[#00ffff]/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Special dashboard UI for Contact page
  if (file.id === 'contact' && typeof file.content === 'string') {
    return (
      <motion.div
        className="space-y-8 events-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Contact Header Section */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl font-bold gradient-text mb-4 relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Connect with NULL EEC
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Multiple channels to connect with our vibrant cybersecurity community
          </motion.p>
        </motion.div>

        {/* Contact Methods Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Discord */}
          <motion.div
            className="dashboard-card p-6 interactive-glow text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-[#00ff41] mb-2">Discord Server</h3>
            <p className="text-gray-300 text-sm mb-4">Real-time discussions & CTF collaboration</p>
            <button className="px-4 py-2 bg-[#00ff41]/20 border border-[#00ff41]/30 rounded-lg hover:bg-[#00ff41]/30 transition-all">
              Join Discord
            </button>
          </motion.div>

          {/* Email */}
          <motion.div
            className="dashboard-card p-6 interactive-glow-cyan text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">✉️</div>
            <h3 className="text-xl font-bold text-[#00ffff] mb-2">Email Us</h3>
            <p className="text-gray-300 text-sm mb-4">General inquiries & partnerships</p>
            <button className="px-4 py-2 bg-[#00ffff]/20 border border-[#00ffff]/30 rounded-lg hover:bg-[#00ffff]/30 transition-all">
              Send Email
            </button>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="dashboard-card p-6 interactive-glow text-center"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-[#00ff41] mb-2">Social Media</h3>
            <p className="text-gray-300 text-sm mb-4">Follow our latest updates</p>
            <button className="px-4 py-2 bg-[#00ff41]/20 border border-[#00ff41]/30 rounded-lg hover:bg-[#00ff41]/30 transition-all">
              Follow Us
            </button>
          </motion.div>
        </motion.div>

        {/* Enhanced Content Section */}
        <motion.div
          className="enhanced-markdown-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {renderEnhancedMarkdown(file.content)}
        </motion.div>

        {/* Contact Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="dashboard-card p-4 text-center">
            <div className="text-2xl font-bold text-[#00ff41] mb-1">24hrs</div>
            <div className="text-xs text-gray-400">Response Time</div>
          </div>
          <div className="dashboard-card p-4 text-center">
            <div className="text-2xl font-bold text-[#00ffff] mb-1">5+</div>
            <div className="text-xs text-gray-400">Contact Channels</div>
          </div>
          <div className="dashboard-card p-4 text-center">
            <div className="text-2xl font-bold text-[#00ff41] mb-1">100%</div>
            <div className="text-xs text-gray-400">Community Driven</div>
          </div>
          <div className="dashboard-card p-4 text-center">
            <div className="text-2xl font-bold text-[#00ffff] mb-1">24/7</div>
            <div className="text-xs text-gray-400">Discord Active</div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Default enhanced markdown rendering for other string content
  if (typeof file.content === 'string') {
    // Special dashboard UI for README.md
    if (file.id === 'readme') {
      return (
        <motion.div
          className="space-y-8 readme-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Header Section */}
          <motion.div
            className="text-center mb-12 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ff41]/10 to-transparent blur-3xl"></div>
            <motion.h1
              className="text-6xl font-bold gradient-text mb-6 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              🚀 NULL EEC Terminal
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#00ff41] via-[#00ffff] to-[#00ff41]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.h1>
            <motion.p
              className="text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Your Gateway to Cybersecurity Excellence at Easwari Engineering College
            </motion.p>

            {/* Quick Stats Dashboard */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="dashboard-card p-6 text-center interactive-glow float">
                <div className="text-4xl font-bold text-[#00ff41] mb-2 hover:text-[#40ff60] transition-colors">500+</div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Community Members</div>
              </div>
              <div className="dashboard-card p-6 text-center interactive-glow-cyan float" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-[#00ffff] mb-2 hover:text-[#40ffff] transition-colors">50+</div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Events Hosted</div>
              </div>
              <div className="dashboard-card p-6 text-center interactive-glow float" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-[#00ff41] mb-2 hover:text-[#40ff60] transition-colors">15+</div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">CTF Victories</div>
              </div>
              <div className="dashboard-card p-6 text-center interactive-glow-cyan float" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-[#00ffff] mb-2 hover:text-[#40ffff] transition-colors">100%</div>
                <div className="text-sm text-gray-300 hover:text-gray-200 transition-colors">Learning Focused</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            className="enhanced-markdown-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {renderEnhancedMarkdown(file.content)}
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            className="text-center mt-16 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <div className="dashboard-card p-8 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold gradient-text mb-4">Ready to Start Your Journey? 🌟</h3>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                Join the most active cybersecurity community at EEC. Whether you're a beginner or expert,
                there's a place for you in our growing family.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  className="px-8 py-4 bg-[#00ff41]/20 border border-[#00ff41]/50 rounded-lg text-[#00ff41] font-semibold hover:bg-[#00ff41]/30 hover:border-[#00ff41]/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🎯 Explore Events
                </motion.button>
                <motion.button
                  className="px-8 py-4 bg-[#00ffff]/20 border border-[#00ffff]/50 rounded-lg text-[#00ffff] font-semibold hover:bg-[#00ffff]/30 hover:border-[#00ffff]/70 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📧 Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    }

    // Special dashboard UI for Contact page
    if (file.id === 'contact') {
      return (
        <motion.div
          className="space-y-8 events-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contact Header Section */}
          <motion.div
            className="text-center mb-12 relative"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-5xl font-bold gradient-text mb-4 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              📧 Connect with NULL EEC
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </motion.h1>
            <motion.p
              className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Multiple channels to connect with our vibrant cybersecurity community
            </motion.p>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Discord */}
            <motion.div
              className="dashboard-card p-6 interactive-glow text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-[#00ff41] mb-2">Discord Server</h3>
              <p className="text-gray-300 text-sm mb-4">Real-time discussions & CTF collaboration</p>
              <button className="px-4 py-2 bg-[#00ff41]/20 border border-[#00ff41]/30 rounded-lg hover:bg-[#00ff41]/30 transition-all">
                Join Discord
              </button>
            </motion.div>

            {/* Email */}
            <motion.div
              className="dashboard-card p-6 interactive-glow-cyan text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-[#00ffff] mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm mb-4">General inquiries & partnerships</p>
              <button className="px-4 py-2 bg-[#00ffff]/20 border border-[#00ffff]/30 rounded-lg hover:bg-[#00ffff]/30 transition-all">
                Send Email
              </button>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="dashboard-card p-6 interactive-glow text-center"
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-[#00ff41] mb-2">Social Media</h3>
              <p className="text-gray-300 text-sm mb-4">Follow our latest updates</p>
              <button className="px-4 py-2 bg-[#00ff41]/20 border border-[#00ff41]/30 rounded-lg hover:bg-[#00ff41]/30 transition-all">
                Follow Us
              </button>
            </motion.div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div
            className="enhanced-markdown-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {renderEnhancedMarkdown(file.content)}
          </motion.div>

          {/* Contact Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="dashboard-card p-4 text-center">
              <div className="text-2xl font-bold text-[#00ff41] mb-1">24hrs</div>
              <div className="text-xs text-gray-400">Response Time</div>
            </div>
            <div className="dashboard-card p-4 text-center">
              <div className="text-2xl font-bold text-[#00ffff] mb-1">5+</div>
              <div className="text-xs text-gray-400">Contact Channels</div>
            </div>
            <div className="dashboard-card p-4 text-center">
              <div className="text-2xl font-bold text-[#00ff41] mb-1">100%</div>
              <div className="text-xs text-gray-400">Community Driven</div>
            </div>
            <div className="dashboard-card p-4 text-center">
              <div className="text-2xl font-bold text-[#00ffff] mb-1">24/7</div>
              <div className="text-xs text-gray-400">Discord Active</div>
            </div>
          </motion.div>
        </motion.div>
      );
    }

    // Default enhanced markdown rendering for other files
    return (
      <motion.div
        className="space-y-6 readme-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="enhanced-markdown-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {renderEnhancedMarkdown(file.content)}
        </motion.div>
      </motion.div>
    );
  }

  // JSON files (events, team)
  if (file.name.endsWith('.json')) {
    if (file.id === 'upcoming-events') {
      const events = file.content as any[];
      return (
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h2 className="text-4xl font-bold gradient-text mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-400">Join us for these exciting cybersecurity events!</p>
          </motion.div>

          <div className="dashboard-grid">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                variants={cardVariants}
                className="dashboard-card p-6 interactive-btn float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold gradient-text">{event.title}</h3>
                    <motion.div
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      🎯
                    </motion.div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag: string, idx: number) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="outline" className="text-[#00ff41] border-[#00ff41]/30 bg-[#00ff41]/10 hover:bg-[#00ff41]/20 transition-all">
                          {tag}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">{event.description}</p>

                  <div className="grid grid-cols-1 gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 rounded bg-[#00ff41]/5">
                        <span>📅</span>
                        <span className="text-[#00ffff] font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded bg-[#00ffff]/5">
                        <span>🕐</span>
                        <span className="text-[#00ffff] font-semibold">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded bg-[#00ff41]/5">
                        <span>📍</span>
                        <span className="text-[#00ffff] font-semibold">{event.venue}</span>
                      </div>
                      {event.speaker && (
                        <div className="flex items-center gap-2 p-2 rounded bg-[#00ff41]/10">
                          <span>🎤</span>
                          <span className="text-[#00ffff] font-semibold">{event.speaker}</span>
                        </div>
                      )}
                      {event.prizes && (
                        <div className="flex items-center gap-2 p-2 rounded bg-[#ff6b6b]/10">
                          <span>🏆</span>
                          <span className="text-[#ff6b6b] font-semibold">{event.prizes}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full interactive-btn bg-[#00ff41]/20 hover:bg-[#00ff41]/30 text-[#00ff41] border border-[#00ff41]/30 hover:shadow-[0_0_25px_rgba(0,255,65,0.6)] transition-all duration-300 enhanced-focus">
                      Register Now →
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={cardVariants}
            className="dashboard-card p-6 text-center pulse-glow"
          >
            <h3 className="text-xl font-bold gradient-text mb-3">Stay Updated! 📢</h3>
            <p className="text-gray-300 mb-4">
              Don't miss out on any events. Join our community channels for real-time updates.
            </p>
            <div className="flex justify-center gap-4">
              <motion.div whileHover={{ scale: 1.1 }} className="text-[#00ff41] hover:text-[#00ffff] cursor-pointer">💬 Discord</motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-[#00ff41] hover:text-[#00ffff] cursor-pointer">📱 Telegram</motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-[#00ff41] hover:text-[#00ffff] cursor-pointer">📧 Email</motion.div>
            </div>
          </motion.div>
        </motion.div>
      );
    }

    if (file.id === 'team') {
      const team = file.content as any[];
      return (
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h2 className="text-4xl font-bold gradient-text mb-2">
              Meet Our Team
            </h2>
            <p className="text-gray-400">The passionate minds behind NULL EEC</p>
          </motion.div>

          <div className="dashboard-grid">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                className="dashboard-card p-6 interactive-btn float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div className="relative">
                    <motion.img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full border-3 border-[#00ff41] p-1 object-cover"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#00ff41]/20 rounded-full flex items-center justify-center border border-[#00ff41]/50"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs">⚡</span>
                    </motion.div>
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold gradient-text">{member.name}</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#00ff41]/20 border border-[#00ff41]/30">
                      <p className="text-[#00ff41] text-sm font-semibold">{member.role}</p>
                    </div>
                    <p className="text-gray-400 text-sm">{member.year}</p>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>

                  <div className="w-full">
                    <h4 className="text-sm font-semibold text-[#00ffff] mb-2">Skills & Expertise</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill: string, idx: number) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <Badge variant="secondary" className="text-xs bg-[#00ff41]/10 text-[#00ff41] border border-[#00ff41]/30 hover:bg-[#00ff41]/20 transition-all">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/30 text-[#00ff41] hover:bg-[#00ff41]/20 transition-all enhanced-focus"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-xs">GitHub</span>
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#00ffff]/10 border border-[#00ffff]/30 text-[#00ffff] hover:bg-[#00ffff]/20 transition-all enhanced-focus"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-xs">LinkedIn</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={cardVariants}
            className="dashboard-card p-6 text-center pulse-glow"
          >
            <h3 className="text-xl font-bold gradient-text mb-3">Want to Join Our Team? 🚀</h3>
            <p className="text-gray-300 mb-4">
              We're always looking for passionate individuals to join our cybersecurity community.
            </p>
            <motion.div
              className="text-sm text-[#00ff41] font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Contact us through Discord or email to get involved! 💪
            </motion.div>
          </motion.div>
        </motion.div>
      );
    }
  }

  // Enhanced About EEC page 
  if (file.id === 'about-eec') {
    return (
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center relative overflow-hidden dashboard-card p-8 beginner-friendly"
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #00ff41 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #00ffff 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, #00ff41 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #00ff41 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.h1
            className="text-5xl font-bold gradient-text mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            🏫 Easwari Engineering College
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            The Foundation of Excellence • Innovation • Future Leaders
          </motion.p>
          <motion.div
            className="flex justify-center gap-6 flex-wrap"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ff41] counter">5000+</div>
              <div className="text-sm text-gray-400">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ffff] counter">6</div>
              <div className="text-sm text-gray-400">Departments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ff41] counter hover:text-[#40ff60] transition-colors">20+</div>
              <div className="text-sm text-gray-400">Years Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#ff6b6b] counter">95%</div>
              <div className="text-sm text-gray-400">Placement Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* What Makes EEC Special */}
        <motion.div
          variants={cardVariants}
          className="dashboard-card p-8"
        >
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">What Makes EEC Special? 🌟</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              className="text-center group cursor-pointer dashboard-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                🎓
              </motion.div>
              <h4 className="font-bold text-[#00ff41] mb-2">Quality Education</h4>
              <p className="text-sm text-gray-300">AICTE approved with NBA accredited programs</p>
            </motion.div>

            <motion.div
              className="text-center group cursor-pointer dashboard-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                💼
              </motion.div>
              <h4 className="font-bold text-[#00ffff] mb-2">Great Placements</h4>
              <p className="text-sm text-gray-300">Top companies like Microsoft, Amazon, Google recruit here</p>
            </motion.div>

            <motion.div
              className="text-center group cursor-pointer dashboard-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                🏢
              </motion.div>
              <h4 className="font-bold text-[#00ffff] mb-2 hover:text-[#40ffff] transition-colors">Modern Campus</h4>
              <p className="text-sm text-gray-300">State-of-the-art labs and infrastructure</p>
            </motion.div>

            <motion.div
              className="text-center group cursor-pointer dashboard-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                👨‍🏫
              </motion.div>
              <h4 className="font-bold text-[#ff6b6b] mb-2">Expert Faculty</h4>
              <p className="text-sm text-gray-300">Experienced professors with industry knowledge</p>
            </motion.div>

            <motion.div
              className="text-center group cursor-pointer dashboard-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                🎯
              </motion.div>
              <h4 className="font-bold text-[#00ff41] mb-2">Practical Focus</h4>
              <p className="text-sm text-gray-300">Hands-on projects and real-world applications</p>
            </motion.div>

            <motion.div
              className="text-center group cursor-pointer dashboard-card p-6"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                🌐
              </motion.div>
              <h4 className="font-bold text-[#00ffff] mb-2">Global Exposure</h4>
              <p className="text-sm text-gray-300">International collaborations and exchange programs</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Engineering Departments */}
        <motion.div
          variants={cardVariants}
          className="dashboard-card p-8"
        >
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">Engineering Departments 🔧</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Computer Science & Engineering", icon: "💻", desc: "AI, ML, Cybersecurity - Home to NULL EEC!" },
              { name: "Electronics & Communication", icon: "📡", desc: "IoT, Embedded Systems, Communication" },
              { name: "Information Technology", icon: "🌐", desc: "Software Development, Cloud Computing" },
              { name: "Electrical & Electronics", icon: "⚡", desc: "Power Systems, Automation, Smart Grids" },
              { name: "Mechanical Engineering", icon: "🔧", desc: "Design, Manufacturing, Robotics" },
              { name: "Civil Engineering", icon: "🏗️", desc: "Construction, Infrastructure, Green Building" }
            ].map((dept, index) => (
              <motion.div
                key={dept.name}
                className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-[#00ff41]/10 hover:border-[#00ff41]/30 transition-all group/dept"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5, backgroundColor: "rgba(0, 255, 65, 0.05)" }}
              >
                <motion.span
                  className="text-3xl flex-shrink-0 group-hover/dept:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {dept.icon}
                </motion.span>
                <div>
                  <h4 className="font-bold text-[#00ff41] mb-1">{dept.name}</h4>
                  <p className="text-sm text-gray-300">{dept.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose EEC? */}
        <motion.div
          variants={cardVariants}
          className="dashboard-card p-8 pulse-glow"
        >
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">Why Choose EEC? 🤔</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-[#00ffff] mb-4">For Students 👨‍🎓</h4>
              <ul className="space-y-3">
                {[
                  "Learn from experienced faculty with industry knowledge",
                  "Access to modern labs and latest technology",
                  "Strong placement support with top companies",
                  "Active clubs like NULL EEC for practical skills",
                  "Research opportunities and project guidance",
                  "Affordable fees with scholarship options"
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <motion.span
                      className="text-[#00ff41] mt-1 flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      ✅
                    </motion.span>
                    <span className="text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-[#00ffff] mb-4 hover:text-[#40ffff] transition-colors">For Parents 👨‍👩‍👧‍👦</h4>
              <ul className="space-y-3">
                {[
                  "Safe and secure campus environment",
                  "Regular progress updates and parent meetings",
                  "Strong track record of successful graduates",
                  "Transparent fee structure with no hidden costs",
                  "Excellent hostel facilities for outstation students",
                  "Career guidance and counseling support"
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    <motion.span
                      className="text-[#00ffff] mt-1 flex-shrink-0 hover:text-[#40ffff] transition-colors"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                    >
                      ⭐
                    </motion.span>
                    <span className="text-sm">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          variants={cardVariants}
          className="dashboard-card p-8 text-center"
        >
          <h3 className="text-2xl font-bold gradient-text mb-6">Visit Our Campus! 🏫</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <motion.div
              className="flex items-center justify-center gap-3 p-3 rounded-lg bg-[#00ff41]/10 border border-[#00ff41]/20"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">📍</span>
              <div className="text-left">
                <p className="font-semibold text-[#00ff41]">Campus Address</p>
                <p className="text-sm text-gray-300">Ramapuram, Chennai - 600 089, Tamil Nadu</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 p-3 rounded-lg bg-[#00ffff]/10 border border-[#00ffff]/20"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <p className="font-semibold text-[#00ffff]">Contact Numbers</p>
                <p className="text-sm text-gray-300">+91-44-2499-5555 (Main Office)</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 p-3 rounded-lg bg-[#00ff41]/10 border border-[#ffff00]/20"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-2xl">🌐</span>
              <div className="text-left">
                <p className="font-semibold text-[#00ffff]">Website</p>
                <p className="text-sm text-gray-300">www.eec.srmrmp.edu.in</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-8 text-lg text-[#00ff41] font-semibold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎓 Your Engineering Journey Starts Here! 🚀
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Interactive About NULL EEC page
  if (file.id === 'about-null') {
    return (
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div
          className="text-center relative overflow-hidden dashboard-card p-8"
          variants={itemVariants}
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #00ff41 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #00ffff 0%, transparent 50%)",
                "radial-gradient(circle at 50% 80%, #00ff41 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, #00ff41 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.h1
            className="text-5xl font-bold gradient-text mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            🔐 NULL EEC
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Ethical Hacking • Cybersecurity • Innovation
          </motion.p>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ff41] counter">150+</div>
              <div className="text-sm text-gray-400">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ffff] counter">25+</div>
              <div className="text-sm text-gray-400">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#00ff41] counter hover:text-[#40ff60] transition-colors">12</div>
              <div className="text-sm text-gray-400">CTF Wins</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Interactive Mission Cards */}
        <div className="dashboard-grid">
          <motion.div
            variants={cardVariants}
            className="dashboard-card p-6 interactive-btn group cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <motion.div
              className="text-4xl mb-4 text-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🎯
            </motion.div>
            <h3 className="text-xl font-bold gradient-text mb-3 text-center">EDUCATE</h3>
            <p className="text-gray-300 text-sm text-center">Hands-on training in ethical hacking</p>
            <motion.div
              className="mt-4 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="dashboard-card p-6 interactive-btn group cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: -5 }}
          >
            <motion.div
              className="text-4xl mb-4 text-center"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🛡️
            </motion.div>
            <h3 className="text-xl font-bold gradient-text mb-3 text-center">PROTECT</h3>
            <p className="text-gray-300 text-sm text-center">Responsible disclosure & security</p>
            <motion.div
              className="mt-4 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="dashboard-card p-6 interactive-btn group cursor-pointer"
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            <motion.div
              className="text-4xl mb-4 text-center"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🤝
            </motion.div>
            <h3 className="text-xl font-bold gradient-text mb-3 text-center">CONNECT</h3>
            <p className="text-gray-300 text-sm text-center">Building security community</p>
            <motion.div
              className="mt-4 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </motion.div>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="dashboard-card p-6 interactive-btn group cursor-pointer"
            whileHover={{ scale: 1.05, rotateX: -5 }}
          >
            <motion.div
              className="text-4xl mb-4 text-center"
              whileHover={{ scale: 1.2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              🌟
            </motion.div>
            <h3 className="text-xl font-bold gradient-text mb-3 text-center">INNOVATE</h3>
            <p className="text-gray-300 text-sm text-center">Research & innovation in security</p>
            <motion.div
              className="mt-4 flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-[#00ffff] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive Activities Showcase */}
        <motion.div
          variants={cardVariants}
          className="dashboard-card p-8"
        >
          <h3 className="text-2xl font-bold gradient-text text-center mb-8">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                ⚡
              </motion.div>
              <h4 className="font-bold text-[#00ff41] mb-2">Workshops</h4>
              <motion.div
                className="text-xs text-gray-400 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: 'auto' }}
              >
                <div>• OWASP Top 10</div>
                <div>• Penetration Testing</div>
                <div>• Cryptography</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                🏁
              </motion.div>
              <h4 className="font-bold text-[#00ffff] mb-2">CTF Competitions</h4>
              <motion.div
                className="text-xs text-gray-400 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: 'auto' }}
              >
                <div>• College Events</div>
                <div>• National Level</div>
                <div>• Bug Bounties</div>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              variants={itemVariants}
            >
              <motion.div
                className="text-6xl mb-4"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                🎤
              </motion.div>
              <h4 className="font-bold text-[#00ffff] mb-2 hover:text-[#40ffff] transition-colors">Expert Talks</h4>
              <motion.div
                className="text-xs text-gray-400 space-y-1"
                initial={{ opacity: 0, height: 0 }}
                whileHover={{ opacity: 1, height: 'auto' }}
              >
                <div>• Industry Leaders</div>
                <div>• Real-world Cases</div>
                <div>• Career Guidance</div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Join CTA */}
        <motion.div
          variants={cardVariants}
          className="dashboard-card p-8 text-center interactive-btn pulse-glow"
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="text-6xl mb-4"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🚀
          </motion.div>
          <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Join the Revolution?</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            From beginners to experts - everyone's welcome in our cybersecurity community!
          </p>
          <motion.div
            className="flex justify-center gap-4 flex-wrap"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ff41]/20 border border-[#00ff41]/30 cursor-pointer hover:bg-[#00ff41]/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span>💬</span>
              <span className="text-sm text-[#00ff41]">Discord</span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffff]/20 border border-[#00ffff]/30 cursor-pointer hover:bg-[#00ffff]/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span>📱</span>
              <span className="text-sm text-[#00ffff]">Telegram</span>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00ffff]/20 border border-[#00ffff]/30 cursor-pointer hover:bg-[#00ffff]/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <span>📧</span>
              <span className="text-sm text-[#00ffff] hover:text-[#40ffff] transition-colors">Email</span>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-6 text-sm italic text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            "With great power comes great responsibility" - We hack ethically ⚡
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  // Markdown files
  const content = typeof file.content === 'string' ? file.content : JSON.stringify(file.content, null, 2);
  return (
    <motion.div
      className="prose prose-invert max-w-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.05 }}
    >
      {content.split('\n').map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return (
            <motion.h1
              key={index}
              className="text-3xl font-bold neon-text mt-6 mb-4 glitch"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              {line.slice(2)}
            </motion.h1>
          );
        }
        if (line.startsWith('## ')) {
          return (
            <motion.h2
              key={index}
              className="text-2xl font-bold cyan-text mt-5 mb-3 glitch"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              {line.slice(3)}
            </motion.h2>
          );
        }
        if (line.startsWith('### ')) {
          return (
            <motion.h3
              key={index}
              className="text-xl font-semibold text-[#00ff41] mt-4 mb-2 glitch"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              {line.slice(4)}
            </motion.h3>
          );
        }
        // Bold
        if (line.startsWith('**') && line.endsWith('**')) {
          return (
            <motion.p
              key={index}
              className="font-bold text-[#00ffff] my-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              {line.slice(2, -2)}
            </motion.p>
          );
        }
        // Lists
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return (
            <motion.li
              key={index}
              className="text-gray-300 ml-6 my-1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              {line.slice(2)}
            </motion.li>
          );
        }
        // Divider
        if (line.startsWith('---')) {
          return (
            <motion.hr
              key={index}
              className="border-[#00ff41]/30 my-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: index * 0.02 }}
            />
          );
        }
        // Code blocks
        if (line.startsWith('`') && line.endsWith('`')) {
          return (
            <motion.code
              key={index}
              className="bg-black/50 px-2 py-1 rounded text-[#00ff41] text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.02 }}
            >
              {line.slice(1, -1)}
            </motion.code>
          );
        }
        // Regular paragraph
        if (line.trim()) {
          return (
            <motion.p
              key={index}
              className="text-gray-300 my-2 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              {line}
            </motion.p>
          );
        }
        return <br key={index} />;
      })}
    </motion.div>
  );
};

// Easter Egg Popup Component
const EasterEggPopup = ({ message, show, onClose }: { message: string; show: boolean; onClose: () => void }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-purple-900/95 to-cyan-900/95 backdrop-blur-md border border-cyan-500/50 rounded-lg p-4 shadow-2xl max-w-md"
    >
      <div className="flex items-center justify-between">
        <div className="text-cyan-400 font-mono text-sm flex-1">
          {message}
        </div>
        <button
          onClick={onClose}
          className="ml-3 text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
      <motion.div
        className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-2"
        initial={{ width: '100%' }}
        animate={{ width: '0%' }}
        transition={{ duration: 10, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default function NullEecTerminal() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedFile, setSelectedFile] = useState<FileNode | null>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([
    '> System initialized...',
    '> Welcome to NULL EEC Terminal',
    '> Type "help" for available commands'
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [easterEggPopup, setEasterEggPopup] = useState<{ message: string, show: boolean }>({ message: '', show: false });
  const terminalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const loadingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  // Global keyboard event listener for skipping loading animation
  useEffect(() => {
    const handleGlobalKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isLoading) {
        // Skip loading animation
        if (loadingTimeoutRef.current) {
          clearTimeout(loadingTimeoutRef.current);
          loadingTimeoutRef.current = null;
        }
        if (loadingIntervalRef.current) {
          clearInterval(loadingIntervalRef.current);
          loadingIntervalRef.current = null;
        }
        setIsLoading(false);

        // Remove loading and hint messages
        setCommandHistory(prev => {
          const newHistory = [...prev];
          // Remove loading message
          if (newHistory[newHistory.length - 1]?.startsWith('Processing command')) {
            newHistory.pop();
          }
          // Remove hint message
          if (newHistory[newHistory.length - 1]?.includes('Press Enter to skip')) {
            newHistory.pop();
          }
          return newHistory;
        });

        // Execute the command immediately
        const lastCommand = currentCommand;
        executeCommand(lastCommand);
        setCurrentCommand('');
      }
    };

    document.addEventListener('keydown', handleGlobalKeyPress);
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyPress);
    };
  }, [isLoading, currentCommand]);

  // Cleanup intervals and timeouts on unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
      }
    };
  }, []);

  const handleFileClick = (file: FileNode) => {
    setSelectedFile(file);
    setIsMobileMenuOpen(false);
    addToHistory(`> Opened file: ${file.name}`);

    // Scroll content to top when switching pages
    setTimeout(() => {
      if (contentRef.current) {
        contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100); // Small delay to ensure content is rendered
  };

  const addToHistory = (message: string) => {
    setCommandHistory(prev => [...prev, message]);
  };

  const showEasterEgg = (message: string) => {
    setEasterEggPopup({ message, show: true });
  };

  const executeCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    const originalCmd = cmd.trim();

    // Easter Eggs - Cybersecurity & Programming Themed
    const easterEggs: { [key: string]: string } = {
      'whoami': 'You are a future cybersecurity expert! 🔐',
      'sudo rm -rf /': 'Nice try! But we\'re ethical hackers here 😄',
      'hack': 'Hacking in progress... 🔴🔴🔴 Just kidding! Join our CTF instead!',
      'matrix': 'Welcome to the real world, Neo 🕶️',
      'coffee': '☕ Fuel of hackers! Our team runs on coffee and curiosity',
      '42': 'The answer to life, universe, and cybersecurity 🌌',
      'hello world': 'Hello, future NULL EEC member! 👋',
      'git commit -m': '💻 Don\'t forget to version control your exploits!',
      'pwd': '📁 You are in: /home/hacker/null-eec-terminal',
      'ping localhost': '🏠 127.0.0.1: There\'s no place like home!',
      'sql injection': '\')); DROP TABLE students; -- Just kidding! We sanitize inputs 🛡️',
      'xss': '<script>alert("XSS blocked!");</script> Nice try! 🚫',
      'kali linux': '🐧 Kali detected! You\'re ready for our workshops',
      'nmap': '🔍 Scanning... Found: Awesome cybersecurity opportunities!',
      'wireshark': '🦈 Packet analysis mode: ON! Capturing knowledge...',
      'burp suite': '🔧 Web app security testing! Professional hacker vibes',
      'metasploit': '💥 Framework loaded! Remember: Use responsibly',
      'john the ripper': '🔓 Password cracking... Found: "cybersecurity123"',
      'hashcat': '⚡ GPU-accelerated learning! Cracking the code of success',
      'owasp': '🛡️ Top 10 security risks... and we teach them all!',
      'ctf': '🏁 Capture The Flag! Our specialty at NULL EEC',
      'penetration testing': '🎯 Authorized testing only! Ethical hacking FTW',
      'social engineering': '🎭 The art of human hacking... Use your powers wisely!',
      'zero day': '🌟 0-day exploit found! Achievement unlocked',
      'vulnerability': '🔍 Security flaw detected! Time to patch and learn',
      'firewall': '🔥🧱 Your digital fortress! Protection enabled',
      'encryption': '🔐 AES-256 your secrets! Cryptography is beautiful',
      'malware': '🦠 Malicious software detected! Antivirus mode: ON',
      'phishing': '🎣 Don\'t take the bait! Stay vigilant online',
      'ransomware': '💸 Encrypted! Backup your files, folks!',
      'ddos': '🌊 Traffic flood detected! Mitigation strategies activated',
      'man in the middle': '👤 MITM attack! Always verify your connections',
      'buffer overflow': '💾 Stack smashing detected! Bounds checking is love',
      'privilege escalation': '⬆️ Root access granted! With great power...',
      'backdoor': '🚪 Hidden entrance found! Security through obscurity fails',
      'rootkit': '👻 Stealth mode: ON! Deep system analysis required',
      'trojan horse': '🐴 Gift that keeps on giving... problems!',
      'keylogger': '⌨️ Keystroke monitoring! Mind your passwords',
      'honeypot': '🍯 Sweet trap for attackers! Deception technology',
      'sandbox': '🏖️ Safe execution environment! Play responsibly',
      'threat modeling': '🎯 Identifying risks like a pro! Strategic thinking',
      'incident response': '🚨 Security breach protocol activated! Stay calm',
      'forensics': '🔍 Digital detective work! Evidence preservation mode',
      'red team': '🔴 Offensive security! Ethical attackers unite',
      'blue team': '🔵 Defensive security! Guardians of the network',
      'purple team': '🟣 Collaboration! Red + Blue = Purple excellence',
      'bug bounty': '💰 Ethical hacking rewards! Hunt responsibly',
      'null': '🕳️ void found! This is where we belong - NULL EEC!',
      'eec': '🏫 Easwari Engineering College - Where dreams take flight!',
      'cyrus': '🎮 NULL CYRUS was epic! Check out our event photos',
      'linux': '🐧 The penguin approves! Open source security',
      'windows': '🪟 Blue screen of... learning opportunities!',
      'macos': '🍎 Think different about security! Unix-based goodness',
      'android': '🤖 Mobile security matters! APK analysis time',
      'ios': '📱 Jailbreak responsibly! Mobile pentesting',
      'docker': '🐳 Containerized security! Isolated and secure',
      'kubernetes': '☸️ Container orchestration! DevSecOps excellence',
      'blockchain': '⛓️ Decentralized security! Crypto validation',
      'ai security': '🤖 Machine learning meets cybersecurity! Future is now',
      'quantum': '⚛️ Quantum computing! Future of cryptography',
      'darkweb': '🕵️ The hidden internet! Stay legal, explorer',
      'tor': '🧅 Onion routing! Privacy and anonymity',
      'vpn': '🛡️ Virtual Private Network! Tunnel to safety',
      'password': '🔑 Use strong passwords! 2FA is your friend',
      'mfa': '🔐 Multi-Factor Authentication! Layer that security',
      'biometrics': '👆 Unique identification! You are the key',
      'https': '🔒 Secure connection established! Green lock activated',
      'ssl': '🛡️ Secure Sockets Layer! Certificate validated',
      'tls': '🔐 Transport Layer Security! Handshake successful',
      'ipsec': '🔒 IP Security protocol! Network layer protection',
      'ssh': '🔑 Secure Shell! Remote access the right way',
      'ftp': '📁 File Transfer... Consider SFTP instead!',
      'telnet': '📞 Unencrypted communication! SSH is better',
      'snmp': '📊 Network monitoring! Secure those community strings',
      'dns': '🌐 Domain Name System! The phonebook of internet',
      'dhcp': '📍 Dynamic IP assignment! Network configuration magic',
      'arp': '🔗 Address Resolution Protocol! MAC to IP mapping',
      'icmp': '📡 Internet Control Message! Ping pong protocol',
      'tcp': '🤝 Transmission Control! Reliable connection',
      'udp': '📤 User Datagram! Fast but unreliable',
      'http': '🌐 Hypertext Transfer! Consider upgrading to HTTPS',
      'smtp': '📧 Simple Mail Transfer! Email delivery system',
      'pop3': '📬 Post Office Protocol! Email retrieval',
      'imap': '📫 Internet Message Access! Better than POP3',
      'ldap': '📚 Lightweight Directory! User authentication',
      'kerberos': '🎫 Network authentication! Ticket-based security',
      'oauth': '🔑 Open Authorization! Secure API access',
      'saml': '🎟️ Security Assertion Markup! Single sign-on',
      'jwt': '🎫 JSON Web Token! Stateless authentication',
      'api': '🔌 Application Programming Interface! Connect responsibly',
      'rest': '😴 Representational State Transfer! RESTful security',
      'soap': '🧼 Simple Object Access! Clean your APIs',
      'json': '📋 JavaScript Object Notation! Structured data',
      'xml': '📄 eXtensible Markup Language! Tagged information',
      'yaml': '📝 YAML Ain\'t Markup Language! Human-readable config',
      'regex': '🔤 Regular Expressions! Pattern matching magic',
      'base64': '🔢 Base64 encoding! Not encryption, just encoding',
      'md5': '🔨 Message Digest 5! Cryptographically broken',
      'sha1': '1️⃣ Secure Hash Algorithm 1! Deprecated for security',
      'sha256': '2️⃣ SHA-256! Modern cryptographic hash',
      'aes': '🔐 Advanced Encryption Standard! Symmetric crypto king',
      'rsa': '🔑 Rivest-Shamir-Adleman! Asymmetric crypto legend',
      'ecdsa': '📈 Elliptic Curve Digital Signature! Modern cryptography',
      'pgp': '🔒 Pretty Good Privacy! Email encryption standard',
      'gpg': '🔐 GNU Privacy Guard! Open source PGP',
      'cryptography': '🔢 The art of secret writing! Math is beautiful',
      'steganography': '🖼️ Hidden in plain sight! Secret messages in images',
      'osint': '🔍 Open Source Intelligence! Public information gathering',
      'shodan': '👁️ The search engine for everything connected',
      'maltego': '🕸️ Data mining and link analysis! Connect the dots',
      'nessus': '🔍 Vulnerability scanner! Find those flaws',
      'openvas': '🛡️ Open source vulnerability assessment! Free security',
      'nikto': '🕷️ Web server scanner! CGI vulnerability hunter',
      'dirb': '📁 Directory brute forcer! Hidden paths revealed',
      'gobuster': '💨 Fast directory/file brute forcer! Go speed',
      'sqlmap': '💉 SQL injection tool! Database pwning',
      'xsser': '❌ Cross-site scripting tester! XSS exploitation',
      'beef': '🥩 Browser Exploitation Framework! Hook those browsers',
      'aircrack': '📶 WiFi security testing! WEP/WPA cracking',
      'hydra': '🐙 Network login cracker! Multi-protocol brute force',
      'medusa': '🐍 Parallel login brute forcer! Another Hydra',
      'ettercap': '🕸️ Network sniffer/interceptor! MitM made easy',
      'tcpdump': '📦 Command-line packet analyzer! Network debugging',
      'netcat': '🐱 Network swiss army knife! TCP/UDP tool',
      'socat': '🔌 Socket CAT! Advanced netcat replacement',
      'proxychains': '⛓️ Proxy tool! Route through multiple proxies',
      'tor browser': '🧅 Anonymous web browsing! Privacy protection',
      'tails': '🎭 The Amnesic Incognito Live System! Ultimate privacy',
      'qubes': '🔒 Security by isolation! Compartmentalized OS',
      'parrot os': '🦜 Security-focused distribution! Colorful hacking',
      'backtrack': '👴 The predecessor! Now evolved to Kali',
      'blackarch': '⚫ Arch-based penetration testing! Bleeding edge',
      'bugtraq': '🐛 Security mailing list! Vulnerability disclosure',
      'exploit-db': '💥 Exploit database! Public exploits archive',
      'cve': '🆔 Common Vulnerabilities and Exposures! Standard IDs',
      'cvss': '📊 Common Vulnerability Scoring System! Risk ratings',
      'mitre': '🏛️ MITRE Corporation! Cybersecurity research',
      'nist': '📏 National Institute of Standards! Security frameworks',
      'iso 27001': '📋 Information security management! Global standard',
      'pci dss': '💳 Payment Card Industry! Data security standard',
      'hipaa': '🏥 Health Insurance Portability! Medical data protection',
      'gdpr': '🇪🇺 General Data Protection Regulation! Privacy rights',
      'sox': '📈 Sarbanes-Oxley Act! Financial reporting security',
      'fisma': '🏛️ Federal Info Security Management! Government standard',
      'cissp': '🎓 Certified Information Systems Security Professional!',
      'cism': '🛡️ Certified Information Security Manager! Leadership',
      'cisa': '🔍 Certified Information Systems Auditor! Governance',
      'gcih': '🕵️ GIAC Certified Incident Handler! Response expert',
      'oscp': '🏴‍☠️ Offensive Security Certified Professional! Try harder!',
      'ceh': '🎩 Certified Ethical Hacker! White hat certified',
      'security+': '➕ CompTIA Security Plus! Entry-level certification',
      'cysa+': '🔍 CompTIA CySA Plus! Analyst certification',
      'pentest+': '🎯 CompTIA PenTest Plus! Hands-on testing',
      'sans': '🎓 SANS Institute! Premier security training',
      'defcon': '🤖 DEF CON! The hacker summer camp',
      'blackhat': '🎩 Black Hat! Premier security conference',
      'rsa conference': '🔐 RSA Conference! Security industry gathering',
      'bsides': '🎪 Security BSides! Community-driven events',
      '2600': '📞 2600 Magazine! Hacker quarterly publication',
      'phrack': '📖 Phrack Magazine! Underground hacker zine',
      'hackthebox': '📦 Hack The Box! Online penetration testing labs',
      'tryhackme': '🎮 TryHackMe! Gamified cybersecurity learning',
      'vulnhub': '🔍 VulnHub! Vulnerable VMs for practice',
      'overthewire': '🧵 OverTheWire! Wargames and challenges',
      'picoctf': '🏁 PicoCTF! Beginner-friendly CTF platform',
      'pwnable': '💻 Pwnable.kr! System hacking challenges',
      'reversing': '↩️ Reverse engineering! Dissecting binaries',
      'binary exploitation': '💥 Pwning binaries! Memory corruption fun',
      'web exploitation': '🌐 Web application hacking! OWASP Top 10',
      'cryptography challenges': '🔢 Crypto puzzles! Mathematical mysteries',
      'forensics challenges': '🔍 Digital investigation! CSI cyber edition',
      'steganography challenges': '🖼️ Hidden message puzzles! See the unseen',
      'networking challenges': '🌐 Protocol analysis! Packet puzzle solving',
      'scripting': '📜 Automation! Code your way to success',
      'python': '🐍 Python programming! Hacker\'s favorite language',
      'bash': '💻 Bash scripting! Shell mastery',
      'powershell': '💙 PowerShell! Windows automation',
      'ruby': '💎 Ruby programming! Metasploit\'s language',
      'perl': '🐪 Perl programming! Text processing master',
      'go': '🏃 Go programming! Modern system language',
      'rust': '🦀 Rust programming! Memory-safe systems',
      'c': '©️ C programming! Low-level system access',
      'c++': '➕ C++ programming! Object-oriented systems',
      'assembly': '⚙️ Assembly language! Bare metal programming',
      'javascript': '☕ JavaScript! Web security testing',
      'php': '🐘 PHP programming! Web application backend',
      'sql': '🗄️ Structured Query Language! Database interaction',
      'nosql': '🍃 NoSQL databases! Modern data storage',
      'mongodb': '🍃 MongoDB! Document-based database',
      'redis': '🔴 Redis! In-memory data structure',
      'elasticsearch': '🔍 Elasticsearch! Search and analytics',
      'docker security': '🐳 Container security! Isolated execution',
      'kubernetes security': '☸️ K8s security! Orchestration protection',
      'cloud security': '☁️ Cloud protection! Shared responsibility',
      'aws security': '☁️ Amazon Web Services! Cloud security giant',
      'azure security': '🔵 Microsoft Azure! Cloud security suite',
      'gcp security': '🌈 Google Cloud Platform! Search giant\'s cloud',
      'devops': '♾️ Development Operations! Continuous delivery',
      'devsecops': '🔒 Development Security Operations! Shift left security',
      'agile': '🏃 Agile methodology! Iterative development',
      'scrum': '🏉 Scrum framework! Sprint-based development',
      'kanban': '📋 Kanban board! Visual workflow management',
      'ci/cd': '🔄 Continuous Integration/Deployment! Automated pipeline',
      'jenkins': '👨‍💼 Jenkins! CI/CD automation server',
      'gitlab': '🦊 GitLab! DevOps lifecycle platform',
      'github': '😺 GitHub! Code collaboration platform',
      'git': '📚 Git version control! Distributed development',
      'svn': '📦 Subversion! Centralized version control',
      'mercurial': '☿️ Mercurial! Another distributed VCS',
      'vim': '📝 Vim editor! Modal text editing',
      'emacs': '🖥️ Emacs editor! Extensible editor',
      'nano': '📄 Nano editor! Simple text editing',
      'vscode': '💙 Visual Studio Code! Modern IDE',
      'sublime': '✨ Sublime Text! Sophisticated editor',
      'atom': '⚛️ Atom editor! Hackable text editor',
      'intellij': '🧠 IntelliJ IDEA! Smart IDE',
      'eclipse': '🌙 Eclipse IDE! Java development environment',
      'netbeans': '☕ NetBeans! Another Java IDE',
      'xcode': '🍎 Xcode! Apple development environment',
      'android studio': '🤖 Android Studio! Mobile app development',
      'unity': '🎮 Unity engine! Game development platform',
      'unreal': '🚀 Unreal Engine! AAA game development',
      'blender': '🍯 Blender! 3D modeling and animation',
      'photoshop': '🎨 Adobe Photoshop! Image editing',
      'gimp': '🖼️ GNU Image Manipulation! Open source editing',
      'inkscape': '🖊️ Inkscape! Vector graphics editor',
      'firefox': '🦊 Firefox browser! Privacy-focused browsing',
      'chrome': '🌈 Google Chrome! WebKit-based browser',
      'safari': '🧭 Safari browser! Apple\'s web browser',
      'edge': '🌊 Microsoft Edge! Modern Windows browser',
      'opera': '🎭 Opera browser! Feature-rich browsing',
      'brave': '🦁 Brave browser! Privacy and crypto rewards',
      'stackoverflow': '📚 Stack Overflow! Developer Q&A platform',
      'reddit': '🤖 Reddit! The front page of internet',
      'hackernews': '📰 Hacker News! Tech community discussion',
      'medium': '📝 Medium! Online publishing platform',
      'twitter': '🐦 Twitter! Microblogging platform',
      'linkedin': '💼 LinkedIn! Professional networking',
      'discord': '🎮 Discord! Gaming communication platform',
      'slack': '💬 Slack! Team collaboration tool',
      'teams': '👥 Microsoft Teams! Enterprise communication',
      'zoom': '📹 Zoom! Video conferencing platform',
      'webex': '🌐 Cisco Webex! Enterprise video platform',
      'skype': '📞 Skype! Voice and video calling',
      'telegram': '✈️ Telegram! Secure messaging app',
      'signal': '📱 Signal! Privacy-focused messaging',
      'whatsapp': '💚 WhatsApp! Popular messaging platform',
      'facebook': '👥 Facebook! Social networking giant',
      'instagram': '📷 Instagram! Photo sharing platform',
      'youtube': '📺 YouTube! Video sharing platform',
      'tiktok': '🎵 TikTok! Short-form video platform',
      'twitch': '🎮 Twitch! Live streaming platform',
      'netflix': '🎬 Netflix! Streaming entertainment',
      'spotify': '🎵 Spotify! Music streaming service',
      'amazon': '📦 Amazon! E-commerce giant',
      'google': '🔍 Google! Search engine giant',
      'microsoft': '🏢 Microsoft! Software corporation',
      'apple': '🍎 Apple! Consumer electronics company',
      'tesla': '⚡ Tesla! Electric vehicle company',
      'spacex': '🚀 SpaceX! Aerospace manufacturer',
      'nasa': '🌌 NASA! Space exploration agency',
      'mit': '🎓 MIT! Massachusetts Institute of Technology',
      'stanford': '🌲 Stanford! Stanford University',
      'harvard': '🎓 Harvard! Harvard University',
      'berkeley': '🐻 UC Berkeley! University of California',
      'cmu': '🤖 CMU! Carnegie Mellon University',
      'georgia tech': '🐝 Georgia Tech! Georgia Institute of Technology'
    };

    // Check for easter eggs first
    if (easterEggs[command] || easterEggs[originalCmd]) {
      const message = easterEggs[command] || easterEggs[originalCmd];
      showEasterEgg(message);
      addToHistory(`> ${originalCmd}`);
      addToHistory('✨ Easter egg found! Check the popup above!');
      return;
    }

    // Standard commands
    if (command === 'help') {
      addToHistory('Available commands:');
      addToHistory('  help - Show this help message');
      addToHistory('  ls - List all available files');
      addToHistory('  open <filename> - Open a specific file');
      addToHistory('  clear - Clear the terminal');
      addToHistory('');
      addToHistory('💡 Tip: You can also click on files in the left panel!');
      addToHistory('🥚 Hidden: Try typing cybersecurity terms for surprises!');
    } else if (command === 'ls') {
      addToHistory('Available files:');
      fileSystem.forEach(file => {
        addToHistory(`  ${file.icon} ${file.name} - ${file.displayName}`);
      });
    } else if (command.startsWith('open ')) {
      const filename = command.slice(5).trim();
      const file = getFileByName(filename);
      if (file) {
        setSelectedFile(file);
        addToHistory(`✓ Opened: ${file.name}`);
      } else {
        addToHistory(`❌ Error: File "${filename}" not found`);
        addToHistory('😅 Not a valid file! Try clicking on a file on the left.');
        addToHistory('💡 Hint: Type "ls" to see all available files');
      }
    } else if (command === 'clear') {
      setCommandHistory([]);
    } else if (command === '') {
      // Empty command, do nothing
    } else {
      addToHistory(`❌ Command not found: ${command}`);
      addToHistory('😅 Not a valid command! Try clicking on a file on the left.');
      addToHistory('💡 Type "help" to see available commands');
    }
  };

  const handleCommand = (cmd: string) => {
    if (isLoading) {
      // Skip loading animation if already loading
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
        loadingTimeoutRef.current = null;
      }
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
        loadingIntervalRef.current = null;
      }
      setIsLoading(false);

      // Remove loading and hint messages
      setCommandHistory(prev => {
        const newHistory = [...prev];
        // Remove loading message
        if (newHistory[newHistory.length - 1]?.startsWith('Processing command')) {
          newHistory.pop();
        }
        // Remove hint message
        if (newHistory[newHistory.length - 1]?.includes('Press Enter to skip')) {
          newHistory.pop();
        }
        return newHistory;
      });

      addToHistory(`> ${cmd}`);
      executeCommand(cmd);
      setCurrentCommand('');
      return;
    }

    if (!cmd.trim()) {
      return;
    }

    // Start loading animation
    setIsLoading(true);
    addToHistory(`> ${cmd}`);

    // Add loading dots
    const loadingMessage = 'Processing command';
    let dots = 0;
    loadingIntervalRef.current = setInterval(() => {
      dots = (dots + 1) % 4;
      const dotsStr = '.'.repeat(dots);
      setCommandHistory(prev => {
        const newHistory = [...prev];
        const lastIndex = newHistory.length - 1;
        if (newHistory[lastIndex]?.startsWith('Processing command')) {
          newHistory[lastIndex] = `${loadingMessage}${dotsStr}`;
        } else {
          newHistory.push(`${loadingMessage}${dotsStr}`);
        }
        return newHistory;
      });
    }, 300);

    // Add hint message about skipping
    setTimeout(() => {
      if (isLoading) {
        setCommandHistory(prev => {
          const newHistory = [...prev];
          if (!newHistory[newHistory.length - 1]?.includes('Press Enter to skip')) {
            newHistory.push('💡 Press Enter to skip loading...');
          }
          return newHistory;
        });
      }
    }, 500); // Show hint after 0.5 seconds

    // Execute command after loading
    loadingTimeoutRef.current = setTimeout(() => {
      if (loadingIntervalRef.current) {
        clearInterval(loadingIntervalRef.current);
        loadingIntervalRef.current = null;
      }
      setIsLoading(false);

      // Remove loading and hint messages
      setCommandHistory(prev => {
        const newHistory = [...prev];
        // Remove loading message
        if (newHistory[newHistory.length - 1]?.startsWith('Processing command')) {
          newHistory.pop();
        }
        // Remove hint message
        if (newHistory[newHistory.length - 1]?.includes('Press Enter to skip')) {
          newHistory.pop();
        }
        return newHistory;
      });

      executeCommand(cmd);
      setCurrentCommand('');
    }, 1500); // 1.5 seconds loading time
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setCurrentCommand('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <TooltipProvider>
      <div className="h-screen relative overflow-hidden">
        <MatrixRain />
        <EasterEggPopup
          message={easterEggPopup.message}
          show={easterEggPopup.show}
          onClose={() => setEasterEggPopup({ message: '', show: false })}
        />

        <div className="relative z-10 h-screen p-4 flex flex-col">
          {/* Header */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="terminal-window p-4 mb-4 flex items-center justify-between flex-shrink-0"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <TerminalIcon className="w-6 h-6 text-[#00ff41]" />
              </motion.div>
              <h1 className="text-xl sm:text-2xl font-bold neon-text">NULL EEC Terminal</h1>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-[#00ff41] hover:shadow-[0_0_15px_rgba(0,255,65,0.5)] transition-all"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </Button>
            </motion.div>
          </motion.div>

          {/* Main Layout - Fixed height container */}
          <div className="flex-1 flex flex-col lg:flex-row gap-4 mb-4 min-h-0">
            {/* File Tree */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              className={`
                lg:w-80 terminal-window p-4 space-y-2 scanline flex-shrink-0
                ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}
              `}
              style={{
                maxHeight: 'calc(100vh - 250px)',
                overflowY: 'auto'
              }}
            >
              <h2 className="text-lg font-bold cyan-text mb-4 flex items-center gap-2">
                <Folder className="w-5 h-5" />
                File System
              </h2>

              <motion.div
                className="space-y-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {fileSystem.map((file, index) => (
                  <Tooltip key={file.id}>
                    <TooltipTrigger asChild>
                      <motion.button
                        onClick={() => handleFileClick(file)}
                        className={`
                          w-full text-left p-3 rounded-lg transition-all duration-300
                          flex items-center gap-3 group
                          ${selectedFile?.id === file.id
                            ? 'bg-[#00ff41]/20 border border-[#00ff41]/50 shadow-[0_0_20px_rgba(0,255,65,0.4)]'
                            : 'border border-transparent hover:border-[#00ff41]/30 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                          }
                        `}
                        variants={itemVariants}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          className="text-xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {file.icon}
                        </motion.span>
                        <div className="flex-1 min-w-0">
                          <div className="font-mono text-sm text-[#00ff41] group-hover:text-[#00ffff] transition-colors">
                            {file.name}
                          </div>
                          <div className="text-xs text-gray-400 truncate">
                            {file.displayName}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#00ff41] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-black/90 border-[#00ff41]/30">
                      <p className="text-[#00ff41]">{file.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </motion.div>

            {/* Content Viewer - Fixed height with hidden scroll */}
            <motion.div
              ref={contentRef}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.1 }}
              className="flex-1 terminal-window p-6 scanline min-h-0"
              style={{
                maxHeight: 'calc(100vh - 250px)',
                overflowY: 'auto'
              }}
            >
              <AnimatePresence mode="wait">
                {selectedFile ? (
                  <motion.div
                    key={selectedFile.id}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <motion.div
                      className="flex items-center gap-2 mb-6 pb-4 border-b border-[#00ff41]/30"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.span
                        className="text-2xl"
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {selectedFile.icon}
                      </motion.span>
                      <div>
                        <h2 className="text-xl font-bold text-[#00ffff]">{selectedFile.displayName}</h2>
                        <p className="text-sm text-gray-400 font-mono">{selectedFile.name}</p>
                      </div>
                    </motion.div>
                    <ContentRenderer file={selectedFile} setSelectedFile={setSelectedFile} />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="h-full flex items-center justify-center"
                  >
                    <div className="max-w-4xl w-full space-y-8 text-center">
                      {/* Welcome Header */}
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-center gap-4 mb-6">
                          <motion.div
                            className="text-6xl"
                            animate={{
                              x: [0, -15, 0],
                              rotate: [0, -5, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            👈
                          </motion.div>
                          <div className="text-left">
                            <h3 className="text-3xl gradient-text font-bold mb-2">Welcome to NULL EEC!</h3>
                            <p className="text-gray-400">Your cybersecurity journey starts here</p>
                          </div>
                        </div>
                      </motion.div>

                      {/* Quick Start Cards */}
                      <motion.div
                        className="dashboard-grid max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.div
                          className="dashboard-card p-6 interactive-btn float cursor-pointer"
                          whileHover={{ scale: 1.05, y: -5 }}
                          onClick={() => handleFileClick(getFileById('about-null')!)}
                        >
                          <div className="text-4xl mb-3">🔐</div>
                          <h4 className="text-lg font-bold text-[#00ff41] mb-2">About NULL EEC</h4>
                          <p className="text-sm text-gray-300">Learn about our club and mission</p>
                        </motion.div>

                        <motion.div
                          className="dashboard-card p-6 interactive-btn float cursor-pointer"
                          style={{ animationDelay: '0.2s' }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          onClick={() => handleFileClick(getFileById('upcoming-events')!)}
                        >
                          <div className="text-4xl mb-3">📅</div>
                          <h4 className="text-lg font-bold text-[#00ffff] mb-2">Upcoming Events</h4>
                          <p className="text-sm text-gray-300">See what's coming up next</p>
                        </motion.div>

                        <motion.div
                          className="dashboard-card p-6 interactive-btn float cursor-pointer"
                          style={{ animationDelay: '0.4s' }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          onClick={() => handleFileClick(getFileById('team')!)}
                        >
                          <div className="text-4xl mb-3">👥</div>
                          <h4 className="text-lg font-bold text-[#00ffff] mb-2 hover:text-[#40ffff] transition-colors">Meet Our Team</h4>
                          <p className="text-sm text-gray-300">Get to know our members</p>
                        </motion.div>
                      </motion.div>

                      {/* Quick Commands */}
                      <motion.div
                        className="dashboard-card p-6 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h4 className="text-lg font-bold gradient-text mb-4">💡 Quick Commands</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <motion.div
                            className="p-3 rounded bg-[#00ff41]/10 border border-[#00ff41]/20 cursor-pointer hover:bg-[#00ff41]/20 transition-all"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => handleCommand('help')}
                          >
                            <code className="text-[#00ff41] font-bold">help</code>
                            <div className="text-xs text-gray-400 mt-1">Show all commands</div>
                          </motion.div>
                          <motion.div
                            className="p-3 rounded bg-[#00ffff]/10 border border-[#00ffff]/20 cursor-pointer hover:bg-[#00ffff]/20 transition-all"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => handleCommand('ls')}
                          >
                            <code className="text-[#00ffff] font-bold">ls</code>
                            <div className="text-xs text-gray-400 mt-1">List all files</div>
                          </motion.div>
                          <motion.div
                            className="p-3 rounded bg-[#00ff41]/10 border border-[#ffff00]/20 cursor-pointer hover:bg-[#00ff41]/20 transition-all"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => handleCommand('open README.md')}
                          >
                            <code className="text-[#00ff41] font-bold hover:text-[#40ff60] transition-colors">open README.md</code>
                            <div className="text-xs text-gray-300 mt-1 hover:text-gray-200 transition-colors">Open README</div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Navigation Hint */}
                      <motion.div
                        className="text-sm text-gray-500 italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                          <span className="flex items-center gap-2">
                            <span className="animate-bounce">🖱️</span>
                            Click cards above
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="animate-pulse">⌨️</span>
                            Use terminal below
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="animate-bounce">📁</span>
                            Browse files on left
                          </span>
                        </div>
                        <div className="mt-2 text-xs">Pro tip: Start with "About NULL EEC" for the best experience! 🚀</div>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Terminal Command Bar - Fixed at bottom */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="terminal-window p-4 flex-shrink-0"
          >
            <div className="mb-2 flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-[#00ff41]" />
              <span className="text-sm text-gray-400">Terminal Output</span>
            </div>

            <div
              ref={terminalRef}
              className="bg-black/50 rounded p-3 h-32 font-mono text-sm"
              style={{ overflowY: 'auto' }}
            >
              {commandHistory.map((line, index) => (
                <motion.div
                  key={index}
                  className={line.startsWith('>') ? 'text-[#00ffff]' : 'text-gray-300'}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.02 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 mt-3">
              <motion.span
                className="text-[#00ff41]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                $
              </motion.span>
              <Input
                ref={inputRef}
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isLoading ? "Press Enter to skip loading..." : "Type 'help' or click a file above..."}
                className={`flex-1 bg-black/50 border-[#00ff41]/30 text-[#00ff41] placeholder:text-gray-600 focus-visible:ring-[#00ff41]/50 focus-visible:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all ${isLoading ? 'animate-pulse border-[#00ffff]/50' : ''
                  }`}
                disabled={false}
              />
              <motion.div
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                animate={isLoading ? { rotate: [0, 360] } : { rotate: 0 }}
                transition={isLoading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
              >
                <Button
                  onClick={() => handleCommand(currentCommand)}
                  className={`bg-[#00ff41]/20 hover:bg-[#00ff41]/30 text-[#00ff41] border border-[#00ff41]/30 hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 ${isLoading ? 'bg-[#00ffff]/20 border-[#00ffff]/30 text-[#00ffff]' : ''
                    }`}
                >
                  {isLoading ? (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="w-3 h-3 border-2 border-[#00ffff] border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Skip
                    </motion.div>
                  ) : (
                    'Execute'
                  )}
                </Button>
              </motion.div>
            </div>

            <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
              <span>
                Press Ctrl+K to focus terminal • Type "help" for commands
                {isLoading && (
                  <motion.span
                    className="ml-2 text-[#00ffff]"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    • Press Enter again to skip loading
                  </motion.span>
                )}
              </span>
              <span className="hidden sm:block">Press Esc to clear input</span>
            </div>
          </motion.div>
        </div>
      </div>
    </TooltipProvider>
  );
}
