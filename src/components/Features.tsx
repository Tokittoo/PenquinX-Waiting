import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid"
import {
    CheckCircle,
    Clock,
    Star,
    TrendingUp,
} from "lucide-react";


const itemsSample: BentoItem[] = [
    {
        title: "Explosive challenges",
        description: "Purpose-built drills that keep you sharp under pressure.",
        icon: <TrendingUp className="w-5 h-5 text-cyan-300" />,
        colSpan: 1,
    },
    {
        title: "Smarter learning",
        description: "Signals, not noise—feedback that adapts to your progress.",
        icon: <Star className="w-5 h-5 text-cyan-300" />,
    },
    {
        title: "Hacker-level practice",
        description: "Realistic labs and environments to pressure-test your craft.",
        icon: <CheckCircle className="w-5 h-5 text-cyan-300" />,
        colSpan: 1,
    },
    {
        title: "Fast skill boosts",
        description: "Micro-sprints that compress weeks of progress into one session.",
        icon: <Clock className="w-5 h-5 text-cyan-300" />,
        colSpan: 1,
    },
];

function BentoGridDemo() {
    return (
        <section className="w-full">
            <div className="mb-6 text-center sm:mb-7 md:mb-8">
                <h1 className="mx-auto mt-2 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    Built for relentless {""}
                    <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                        skill stacking
                    </span>
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-sm text-white/60 sm:mt-4 sm:text-base md:text-lg">
                    Four precision-built modules designed to stretch your skills and keep the entire drop timeline fully occupied.
                </p>
            </div>
            <BentoGrid items={itemsSample} />
        </section>
    )
}

export { BentoGridDemo }