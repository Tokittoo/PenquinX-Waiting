"use client";

import { cn } from "@/lib/utils";
import {
    CheckCircle,
    TrendingUp,
    Video,
    Globe,
} from "lucide-react";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
}

interface BentoGridProps {
    items: BentoItem[];
}

const itemsSample: BentoItem[] = [
    {
        title: "Analytics Dashboard",
        meta: "v2.4.1",
        description:
            "Real-time metrics with AI-powered insights and predictive analytics",
        icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: [""],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "Task Manager",
        meta: "84 completed",
        description: "Automated workflow management with priority scheduling",
        icon: <CheckCircle className="w-4 h-4 text-emerald-500" />,
        status: "Updated",
        tags: [""],
    },
    {
        title: "Media Library",
        meta: "12GB used",
        description: "Cloud storage with intelligent content processing",
        icon: <Video className="w-4 h-4 text-purple-500" />,
        tags: [""],
        colSpan: 2,
    },
    {
        title: "Global Network",
        meta: "6 regions",
        description: "Multi-region deployment with edge computing",
        icon: <Globe className="w-4 h-4 text-sky-500" />,
        status: "Beta",
        tags: [""],
    },
];

function BentoGrid({ items = itemsSample }: BentoGridProps) {
    const panelBackground = "rounded-2xl border border-white/15 bg-gradient-to-br from-[#07090f] via-[#04070c] to-[#010204] shadow-[0_20px_70px_rgba(0,0,0,0.55)]";

    return (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-5 rounded-2xl overflow-hidden transition-all duration-500 sm:p-6 md:p-7",
                        panelBackground,
                        "hover:-translate-y-2 hover:border-cyan-300/70 hover:shadow-[0_20px_70px_rgba(34,211,238,0.15)] will-change-transform cursor-pointer",
                        "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
                        "hover:before:opacity-100"
                    )}
                >
                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-400/5 to-cyan-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent" />

                    <div className="relative z-10 flex flex-col space-y-3 sm:space-y-4">
                        <div className="flex items-start justify-between">
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/10 transition-all duration-500 sm:w-10 sm:h-10 md:w-11 md:h-11 group-hover:rotate-6 group-hover:scale-110">
                                <div className="transition-transform duration-500 group-hover:scale-125">
                                    {item.icon}
                                </div>
                            </div>
                            {item.status && (
                                <span className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-300/30 group-hover:text-cyan-200 group-hover:bg-cyan-300/10 group-hover:scale-105 sm:text-xs sm:px-3 sm:py-1">
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-white tracking-tight transition-all duration-300 group-hover:text-cyan-100 group-hover:tracking-wide sm:text-xl md:text-2xl">
                                {item.title}
                                {item.meta && (
                                    <span className="ml-2 text-xs text-white/50 font-normal transition-colors duration-300 group-hover:text-cyan-300/70 sm:text-sm">
                                        {item.meta}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm text-white/70 leading-relaxed transition-colors duration-300 group-hover:text-white/90 sm:text-base">
                                {item.description}
                            </p>
                        </div>

                        {/* Animated corner accent */}
                        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-cyan-300/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export { BentoGrid }
