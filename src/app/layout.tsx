import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./App.scss";
import LayoutComponent from "./LayoutComponent";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "James Mtendamema | Full Stack Developer",
    description: "Full Stack Developer with 4 years of industry experience building responsive, fast-performing web applications. Specialized in React, Next.js, and modern backend architectures.",
    keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development", "Frontend Developer", "Software Engineer"],
    authors: [{ name: "James Mtendamema" }],
    openGraph: {
        title: "James Mtendamema | Full Stack Developer",
        description: "Full Stack Developer with 4 years of industry experience building responsive, fast-performing web applications.",
        type: "website",
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