"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideImage {
    id: number;
    url: string;
    caption: string;
    event: string;
}

interface ImageSliderProps {
    images: SlideImage[];
    autoPlay?: boolean;
    interval?: number;
    showThumbnails?: boolean;
    showIndicators?: boolean;
    className?: string;
}

const slideVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9
    })
};

const thumbnailVariants: Variants = {
    inactive: {
        scale: 0.8,
        opacity: 0.6,
        filter: 'grayscale(100%)'
    },
    active: {
        scale: 1,
        opacity: 1,
        filter: 'grayscale(0%)'
    }
};

export function ImageSlider({
    images,
    autoPlay = true,
    interval = 4000,
    showThumbnails = true,
    showIndicators = true,
    className = ""
}: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isPlaying || isHovered) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [isPlaying, isHovered, interval, images.length]);

    const goToPrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const toggleAutoPlay = () => {
        setIsPlaying(!isPlaying);
    };

    if (!images.length) return null;

    return (
        <div className={`relative w-full ${className}`}>
            {/* Main Image Display */}
            <div
                className="relative aspect-video rounded-lg overflow-hidden border border-[#00ff41]/30 bg-black/20"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
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
                        className="absolute inset-0"
                    >
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].caption}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />

                        {/* Gradient Overlay for Text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Image Caption */}
                        <motion.div
                            className="absolute bottom-4 left-4 right-4 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h3 className="text-lg font-bold mb-1 text-[#00ff41]">
                                {images[currentIndex].caption}
                            </h3>
                            <p className="text-sm text-gray-300">
                                {images[currentIndex].event}
                            </p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <motion.button
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:border-[#00ff41]/50 border border-transparent backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                >
                    <ChevronLeft className="w-5 h-5" />
                </motion.button>

                <motion.button
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:border-[#00ff41]/50 border border-transparent backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.7 }}
                >
                    <ChevronRight className="w-5 h-5" />
                </motion.button>

                {/* Full Screen Button */}
                <motion.button
                    onClick={() => window.open(images[currentIndex].url, '_blank')}
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.6)] hover:border-[#00ff41]/50 border border-transparent backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.5 }}
                >
                    <ExternalLink className="w-4 h-4" />
                </motion.button>
            </div>

            {/* Controls and Indicators */}
            <div className="flex items-center justify-between mt-4">
                {/* Play/Pause and Counter */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={toggleAutoPlay}
                        className="text-[#00ff41] border-[#00ff41]/30 hover:bg-[#00ff41]/10 hover:shadow-[0_0_15px_rgba(0,255,65,0.4)] transition-all"
                    >
                        {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
                        {isPlaying ? 'Pause' : 'Play'}
                    </Button>

                    <motion.span
                        key={currentIndex}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-gray-400 font-mono"
                    >
                        {currentIndex + 1} / {images.length}
                    </motion.span>
                </div>

                {/* Dot Indicators */}
                {showIndicators && (
                    <div className="flex gap-2">
                        {images.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-[#00ff41] w-8 shadow-[0_0_10px_rgba(0,255,65,0.6)]'
                                        : 'bg-gray-600 w-2 hover:bg-gray-400 hover:shadow-[0_0_8px_rgba(0,255,65,0.4)]'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Thumbnail Strip */}
            {showThumbnails && images.length > 1 && (
                <motion.div
                    className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {images.map((image, index) => (
                        <motion.button
                            key={image.id}
                            onClick={() => goToSlide(index)}
                            className="relative flex-shrink-0 group"
                            variants={thumbnailVariants}
                            animate={index === currentIndex ? "active" : "inactive"}
                            whileHover={{ scale: 1.1, zIndex: 10 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentIndex
                                    ? 'border-[#00ff41] shadow-[0_0_15px_rgba(0,255,65,0.6)]'
                                    : 'border-gray-600 hover:border-[#00ff41]/50'
                                }`}>
                                <img
                                    src={image.url}
                                    alt={image.caption}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Thumbnail hover tooltip */}
                            <motion.div
                                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                            >
                                {index + 1}
                            </motion.div>
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </div>
    );
}

export default ImageSlider;