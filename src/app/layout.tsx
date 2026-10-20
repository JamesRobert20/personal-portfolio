import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./App.scss";
import LayoutComponent from "./LayoutComponent";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: "James Mtendamema | Full Stack Developer",
        template: "%s | James Mtendamema",
    },
    description: "Full Stack Developer with 4 years of experience building responsive, fast-performing web applications with React, Next.js, and modern NoSQL backends.",
    keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "JavaScript", "Web Development", "Frontend", "Backend", "Software Engineer", "James Mtendamema"],
    authors: [{ name: "James Mtendamema", url: "https://github.com/JamesRobert20" }],
    creator: "James Mtendamema",
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://jamesmtendamema.dev"),
    openGraph: {
        type: "website",
        locale: "en_US",
        siteName: "James Mtendamema Portfolio",
        title: "James Mtendamema | Full Stack Developer",
        description: "Full Stack Developer with 4 years of experience building responsive, fast-performing web applications with React, Next.js, and modern NoSQL backends.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "James Mtendamema - Full Stack Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "James Mtendamema | Full Stack Developer",
        description: "Full Stack Developer with 4 years of experience building responsive, fast-performing web applications with React, Next.js, and modern NoSQL backends.",
        images: ["/images/og-image.jpg"],
        creator: "@jamesmtendamema",
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={open_sans.className}>
                <LayoutComponent>
                    {children}
                </LayoutComponent>
            </body>
        </html>
    );
}
