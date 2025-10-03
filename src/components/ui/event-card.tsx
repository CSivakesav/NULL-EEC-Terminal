"use client";

import { motion, Variants } from 'framer-motion';
import { Calendar, Users, Award, Clock, MapPin, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import ImageSlider from './image-slider';

interface EventCardProps {
    event: {
        id: number;
        title: string;
        subtitle: string;
        description: string;
        date: string;
        participants?: string;
        prizePool?: string;
        duration?: string;
        winner?: string;
        instructor?: string;
        format?: string;
        details?: string[];
        impact?: string[];
        successStories?: string[];
        achievements?: string[];
        outcomes?: string[];
        results?: string[];
        photos: string[];
        [key: string]: any;
    };
    index: number;
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.1
        }
    }
};

const sectionVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 20
        }
    }
};

export function EventCard({ event, index }: EventCardProps) {
    // Prepare images for slider
    const sliderImages = event.photos.map((photo, idx) => ({
        id: idx + 1,
        url: photo,
        caption: `${event.title} - Photo ${idx + 1}`,
        event: event.title
    }));

    // Get relevant stats for this event
    const eventStats = [
        { icon: Calendar, label: 'Date', value: event.date },
        { icon: Users, label: 'Participants', value: event.participants },
        { icon: Clock, label: 'Duration', value: event.duration },
        { icon: Award, label: 'Prize Pool', value: event.prizePool },
        { icon: TrendingUp, label: 'Winner', value: event.winner },
        { icon: MapPin, label: 'Instructor', value: event.instructor },
        { icon: Users, label: 'Format', value: event.format }
    ].filter(stat => stat.value);

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <Card className="dashboard-card p-0 overflow-hidden interactive-btn group bg-gradient-to-br from-black/60 via-black/50 to-black/40 border-[#00ff41]/40 hover:border-[#00ff41]/70 hover:shadow-[0_0_40px_rgba(0,255,65,0.3)] transition-all duration-500">
                <div className="relative">
                    {/* Header Section */}
                    <div className="p-6 pb-4 relative">
                        <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff41] via-[#00ffff] to-[#00ff41]"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                        >
                            <h3 className="text-2xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform hover:text-shadow-lg">
                                {event.title}
                            </h3>
                            <p className="text-[#00ffff] text-lg mb-3 font-semibold hover:text-[#40ffff] transition-colors">
                                {event.subtitle}
                            </p>
                            <p className="text-gray-200 leading-relaxed hover:text-gray-100 transition-colors">
                                {event.description}
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    {eventStats.length > 0 && (
                        <motion.div
                            className="px-6 pb-4"
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1 + 0.4 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {eventStats.map((stat, statIndex) => (
                                    <motion.div
                                        key={stat.label}
                                        className="flex items-center gap-3 p-3 rounded-lg bg-[#00ff41]/8 border border-[#00ff41]/30 hover:bg-[#00ff41]/15 hover:border-[#00ff41]/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)]"
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.6 + statIndex * 0.05 }}
                                    >
                                        <motion.div
                                            className="text-[#00ff41] hover:text-[#40ff60] transition-colors"
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                        >
                                            <stat.icon className="w-5 h-5" />
                                        </motion.div>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs text-gray-400 uppercase tracking-wide group-hover:text-gray-300 transition-colors">
                                                {stat.label}
                                            </p>
                                            <p className="text-sm font-semibold text-gray-100 truncate group-hover:text-white transition-colors">
                                                {stat.value}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Image Slider */}
                    <motion.div
                        className="px-6 pb-6"
                        variants={sectionVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.1 + 0.8 }}
                    >
                        <ImageSlider
                            images={sliderImages}
                            autoPlay={true}
                            interval={5000}
                            showThumbnails={sliderImages.length > 1}
                            showIndicators={true}
                            className="rounded-lg overflow-hidden"
                        />
                    </motion.div>

                    {/* Details Sections */}
                    <div className="px-6 pb-6 space-y-6">
                        {/* Event Details */}
                        {event.details && event.details.length > 0 && (
                            <motion.div
                                variants={sectionVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.1 + 1.0 }}
                            >
                                <h4 className="text-lg font-bold text-[#00ff41] mb-3 flex items-center gap-2 hover:text-[#40ff60] transition-colors">
                                    <motion.span
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index }}
                                        className="drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]"
                                    >
                                        ⚡
                                    </motion.span>
                                    Event Highlights
                                </h4>
                                <div className="grid gap-3">
                                    {event.details.map((detail, detailIndex) => (
                                        <motion.div
                                            key={detailIndex}
                                            className="flex items-start gap-3 p-4 rounded-lg bg-black/30 border border-[#00ff41]/20 hover:border-[#00ff41]/40 hover:bg-[#00ff41]/5 transition-all duration-300 group/detail hover:shadow-[0_0_10px_rgba(0,255,65,0.2)]"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 + 1.2 + detailIndex * 0.05 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <motion.span
                                                className="text-[#00ff41] mt-1 flex-shrink-0 group-hover/detail:scale-110 group-hover/detail:text-[#40ff60] transition-all duration-300"
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                •
                                            </motion.span>
                                            <span className="text-gray-200 text-sm leading-relaxed group-hover/detail:text-gray-100 transition-colors">
                                                {detail}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Impact/Results Section */}
                        {(event.impact || event.successStories || event.achievements || event.outcomes || event.results) && (
                            <motion.div
                                variants={sectionVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: index * 0.1 + 1.4 }}
                            >
                                <h4 className="text-lg font-bold text-[#00ffff] mb-3 flex items-center gap-2 hover:text-[#40ffff] transition-colors">
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                        className="drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
                                    >
                                        🎯
                                    </motion.span>
                                    Impact & Achievements
                                </h4>

                                {/* Create a combined array of all impact-related items */}
                                {[
                                    ...(event.impact || []),
                                    ...(event.successStories || []),
                                    ...(event.achievements || []),
                                    ...(event.outcomes || []),
                                    ...(event.results || [])
                                ].map((item, itemIndex) => (
                                    <motion.div
                                        key={itemIndex}
                                        className="flex items-start gap-3 p-4 mb-3 rounded-lg bg-[#00ffff]/8 border border-[#00ffff]/20 hover:border-[#00ffff]/40 hover:bg-[#00ffff]/12 transition-all duration-300 group/impact hover:shadow-[0_0_12px_rgba(0,255,255,0.3)]"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1 + 1.6 + itemIndex * 0.05 }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <motion.span
                                            className="text-[#00ffff] text-lg flex-shrink-0 group-hover/impact:scale-125 group-hover/impact:text-[#40ffff] transition-all duration-300"
                                            whileHover={{ rotate: [0, -10, 10, 0] }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            ✨
                                        </motion.span>
                                        <span className="text-gray-200 text-sm leading-relaxed group-hover/impact:text-gray-100 transition-colors">
                                            {item}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* Bottom Glow Effect */}
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff41] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </div>
            </Card>
        </motion.div>
    );
}

export default EventCard;