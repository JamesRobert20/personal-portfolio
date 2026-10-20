import type { Metadata } from "next";
import GeistSans from "next/font/google";
import "./globals.css";

const geistSans = GeistSans({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "James Robert | Full Stack Developer",
 description: "Full Stack Developer with 5+ years of experience building scalable web applications. React, Next.js, Node.js, TypeScript.",
 keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "James Robert"],
 authors: [{ name: "James Robert" }],
 creator: "James Robert",
 metadataBase: new URL("https://jamesrobert.dev"),
 openGraph: {
   title: "James Robert | Full Stack Developer",
   description: "Full Stack Developer with 5+ years of experience building scalable web applications.",
   url: "https://jamesrobert.dev",
   siteName: "James Robert Portfolio",
   locale: "en_US",
   type: "website",
 },
 twitter: {
   card: "summary_large_image",
   title: "James Robert | Full Stack Developer",
   description: "Full Stack Developer with 5+ years of experience building scalable web applications.",
   creator: "@jamesrobertdev",
 },
 robots: {
   index: true,
   follow: true,
 },
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
   <html lang="en">
     <body className={`${geistSans.variable} antialiased`}>
       {children}
     </body>
   </html>
 );
}