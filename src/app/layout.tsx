import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PenquinX - Revolutionary Cybersecurity & Bug Bounty Platform | Launching Soon",
  description:
    "Join PenquinX, the next-generation cybersecurity and bug bounty platform by Enyard. Pre-register now for exclusive early access, rewards, and priority invites. Launching November 26, 2025.",
  keywords: [
    "penquinx",
    "enyard",
    "cyber security",
    "cybersecurity",
    "bug bounty",
    "bug bounty platform",
    "ethical hacking",
    "penetration testing",
    "security testing",
    "vulnerability disclosure",
    "security researchers",
    "infosec",
    "application security",
    "web security",
    "enyard cloud",
    "security tools",
    "hacking platform",
    "white hat hacking",
  ],
  authors: [{ name: "Enyard" }],
  creator: "Enyard",
  publisher: "Enyard",
  metadataBase: new URL("https://penquinx.enyard.cloud"),
  alternates: {
    canonical: "https://penquinx.enyard.cloud",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://penquinx.enyard.cloud",
    title: "PenquinX - Revolutionary Cybersecurity & Bug Bounty Platform",
    description:
      "Join PenquinX, the next-generation cybersecurity and bug bounty platform by Enyard. Pre-register for exclusive early access and rewards. Launching November 26, 2025.",
    siteName: "PenquinX",
    images: [
      {
        url: "/PenquinX-logo.jpg",
        width: 1200,
        height: 630,
        alt: "PenquinX - Cybersecurity & Bug Bounty Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PenquinX - Revolutionary Cybersecurity & Bug Bounty Platform",
    description:
      "Join PenquinX by Enyard. Pre-register for exclusive early access to the next-gen bug bounty platform. Launching November 26, 2025.",
    images: ["/PenquinX-logo.jpg"],
    creator: "@enyard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/PenquinX.png",
    apple: "/PenquinX.png",
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
