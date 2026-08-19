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
  title: {
    default: "Documentation Tracker",
    template: "%s | Documentation Tracker",
  },
  description:
    "Track the latest API and documentation changes for Next.js and MongoDB in one clean dashboard.",
  applicationName: "Documentation Tracker",
  keywords: [
    "API changes",
    "Documentation tracker",
    "Next.js updates",
    "MongoDB updates",
    "Release notes",
    "Developer monitoring",
  ],
  authors: [{ name: "George Munday" }],
  creator: "George Munday",
  publisher: "George Munday",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
