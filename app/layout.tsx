import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Robert | Full Stack Developer",
  description: "Full Stack Developer with 5+ years of experience building scalable web applications with React, Node.js, and TypeScript.",
  keywords: ["Full Stack Developer", "React", "Node.js", "TypeScript", "Web Development"],
  authors: [{ name: "James Robert" }],
  openGraph: {
    title: "James Robert | Full Stack Developer",
    description: "Full Stack Developer with 5+ years of experience building scalable web applications with React, Node.js, and TypeScript.",
    type: "website",
    locale: "en_US",
    siteName: "James Robert Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Robert | Full Stack Developer",
    description: "Full Stack Developer with 5+ years of experience building scalable web applications with React, Node.js, and TypeScript.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
