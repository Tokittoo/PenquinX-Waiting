"use client";
import { BentoGridDemo } from "@/components/Features";
import Image from "next/image";
import { useEffect, useState } from "react";

const buildLaunchDate = () => {
  const now = new Date();
  const launch = new Date(now.getFullYear(), 10, 26, 18, 0, 0);
  if (launch.getTime() <= now.getTime()) {
    launch.setFullYear(now.getFullYear() + 1);
  }
  return launch;
};

const LAUNCH_DATE = buildLaunchDate();

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeRemaining = (target: Date): Countdown => {
  const total = target.getTime() - Date.now();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const panelBackground =
  "rounded-2xl border border-white/15 bg-gradient-to-br from-[#07090f] via-[#04070c] to-[#010204] shadow-[0_20px_70px_rgba(0,0,0,0.55)]";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(LAUNCH_DATE));
  const [mounted, setMounted] = useState(false);
  const [penquinx, setPenquinx] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(LAUNCH_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdown = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "http://penquinx.enyard.cloud/#organization",
                name: "PenquinX",
                url: "http://penquinx.enyard.cloud",
                logo: {
                  "@type": "ImageObject",
                  url: "http://penquinx.enyard.cloud/PenquinX-logo.jpg",
                },
                sameAs: [
                  "https://enyard.in",
                ],
                description: "Revolutionary cybersecurity and bug bounty platform by Enyard",
              },
              {
                "@type": "WebSite",
                "@id": "http://penquinx.enyard.cloud/#website",
                url: "http://penquinx.enyard.cloud",
                name: "PenquinX - Cybersecurity & Bug Bounty Platform",
                description: "Join PenquinX, the next-generation cybersecurity and bug bounty platform by Enyard",
                publisher: {
                  "@id": "http://penquinx.enyard.cloud/#organization",
                },
              },
              {
                "@type": "Event",
                "@id": "http://penquinx.enyard.cloud/#launch-event",
                name: "PenquinX Platform Launch",
                description: "Official launch of PenquinX cybersecurity and bug bounty platform",
                startDate: LAUNCH_DATE.toISOString(),
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
                location: {
                  "@type": "VirtualLocation",
                  url: "http://penquinx.enyard.cloud",
                },
                organizer: {
                  "@id": "http://penquinx.enyard.cloud/#organization",
                },
                offers: {
                  "@type": "Offer",
                  availability: "https://schema.org/InStock",
                  price: "0",
                  priceCurrency: "USD",
                  url: "http://penquinx.enyard.cloud",
                  validFrom: new Date().toISOString(),
                },
              },
            ],
          }),
        }}
      />

      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-300/20 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400/30 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-cyan-300/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/25 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '2s' }} />
      </div>

      <main className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header Section */}
        <header className={`flex flex-col items-center justify-between gap-1 sm:flex-row sm:gap-6 mb-6 sm:mb-0 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <div className="flex items-center gap-3 sm:gap-4 group cursor-pointer">
            <div className="relative">
              <Image
                src="/PenquinX-logo.jpg"
                alt="PenquinX logo"
                width={150}
                height={150}
                className="h-32 w-32 object-contain sm:h-36 sm:w-36 md:h-40 md:w-40 transition-transform duration-300 "
                priority
                quality={100}
              />
              <div className="absolute inset-0 bg-cyan-300/20 rounded-full blur-xl opacity-0  transition-opacity duration-300" />
            </div>

          </div>
          {/* Launching Date */}
          <div className="flex items-center gap-3">
            <span className="relative rounded-full border border-white/40 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/10 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.3em] cursor-pointer">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-300/0 via-cyan-300/10 to-cyan-300/0 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              Launching November 26
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <section className={`mb-10 text-center sm:mb-12 md:mb-14 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Something Big Is Dropping</span>{" "}
            <span className="block sm:inline">
              <span className="inline-block bg-gradient-to-b from-cyan-300 to-cyan-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse" style={{ animationDuration: '3s' }}>
                PenquinX
              </span>
            </span>
          </h1>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-white/70 sm:mb-8 sm:text-base md:text-lg hover:text-white/90 transition-colors duration-300">
            This isn&apos;t just another tool — it&apos;s an upgrade to your entire
            skillset.
          </p>

          {/* CTA Section */}
          <section
            className={`relative overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-[#07090f] via-[#04070c] to-[#010204] p-6 shadow-[0_45px_120px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-cyan-300/40 sm:p-8 md:p-10 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '700ms' }}
          >
            {/* Static gradient background */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-cyan-400/10 via-transparent to-transparent blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 grid gap-6 sm:mb-7 sm:gap-7 md:grid-cols-[1.2fr,1fr] md:items-center md:gap-8">
                <div className="space-y-4 sm:space-y-5">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 sm:gap-3 sm:px-5 sm:py-2 sm:text-xs sm:tracking-[0.4em]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] sm:h-2.5 sm:w-2.5" />
                    Prior access
                  </span>
                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                    Pre-register for the PenquinX drop.
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                    Lock in your invite to the private release window. We&apos;ll send
                    the clearance briefing and fast-track instructions ahead of
                    November 26 at 6PM.
                  </p>
                </div>
                <div className="flex flex-col gap-4 md:gap-5">
                  <div
                    className={`${panelBackground} group/card relative border-white/15 px-5 py-5 text-center transition-all duration-300 hover:border-cyan-300/40 sm:px-6 sm:py-6 md:text-left overflow-hidden`}
                  >
                    <p className="relative text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50 transition-colors duration-300 group-hover/card:text-cyan-300/80 sm:text-xs sm:tracking-[0.5em]">
                      Free 20 Tokens
                    </p>
                    <p className="relative mt-2 text-xl font-bold text-white sm:text-2xl">
                      For Limited 30 Seats
                    </p>
                    <p className="relative mt-1.5 text-xs text-white/50 sm:text-sm">
                      Exclusive reward for early adopters
                    </p>
                  </div>
                  <button
                    className={`group/btn relative h-12 w-full overflow-hidden rounded-full border px-6 text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 sm:h-14 sm:px-8 sm:text-sm sm:tracking-[0.3em] ${penquinx
                      ? "border-white/20 bg-black/50 text-white/40 cursor-not-allowed"
                      : "border-white/30 bg-black/70 text-white hover:border-cyan-300/70 hover:bg-cyan-300/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-98"
                      }`}
                    onClick={() => {
                      if (!penquinx) {
                        window.location.href = "https://enyard.in";
                      }
                    }}
                    disabled={penquinx}
                  >
                    {/* Button text */}
                    <span className={`relative z-10 inline-flex items-center gap-2 transition-colors duration-300 ${!penquinx && "group-hover/btn:text-cyan-300"
                      }`}>
                      {penquinx ? (
                        "Wait Till Countdown ends"
                      ) : (
                        <>
                          Pre-register now
                          <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Countdown Timer */}
        <div className="mt-12 sm:mt-16 md:mt-20 mb-16 sm:mb-20 md:mb-24">
          {/* Launch Timer Label */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="relative text-[10px] font-semibold uppercase tracking-[0.4em] text-white/50 transition-colors duration-300 hover:text-cyan-300/80 sm:text-xs sm:tracking-[0.5em]">
              Launch Timer
            </p>
          </div>

          {/* Timer Grid */}
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
            {countdown.map((item, index) => (
              <div
                key={item.label}
                className={`${panelBackground} group relative px-4 py-5 text-center transition-all duration-300 ease-out hover:border-cyan-300/70 hover:text-cyan-100 hover:scale-105 hover:-translate-y-2 sm:px-5 sm:py-6 cursor-pointer ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-300/0 via-cyan-300/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <p className="relative text-3xl font-bold leading-none tracking-tight sm:text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110">
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="relative mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 sm:mt-3 sm:text-xs sm:tracking-[0.4em] group-hover:text-cyan-300 transition-colors duration-300">
                  {item.label}
                </p>

                {/* Pulse indicator for seconds */}
                {item.label === "Seconds" && (
                  <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className={`mb-10 md-mb-12 sm:mb-12 md:mb-14 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <BentoGridDemo />
        </div>



        {/* Footer Note */}
        <footer className={`mt-8 sm:mt-10 md:mt-12 pb-8 sm:pb-10 md:pb-12 transition-all duration-1000 delay-900 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between">
            <p className="text-center text-xs text-white/60 transition-colors duration-300 hover:text-white/80 sm:text-sm md:text-left">
              Secure your spot. Limited early access available.
            </p>
            <p className="text-center text-[10px] text-white/50 transition-colors duration-300 hover:text-white/70 sm:text-xs md:text-right">
              © 2025 PenquinX. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
