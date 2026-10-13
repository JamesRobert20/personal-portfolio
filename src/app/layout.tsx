import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./App.scss";
import LayoutComponent from "./LayoutComponent";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "James Robert | Full-Stack Developer",
    description: "Portfolio of James Robert - Full-stack developer building modern web applications with React, Next.js, and TypeScript.",
    keywords: ["developer", "portfolio", "react", "next.js", "typescript", "web development"],
    authors: [{ name: "James Robert" }],
    openGraph: {
        title: "James Robert | Full-Stack Developer",
        description: "Portfolio of James Robert - Full-stack developer building modern web applications.",
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
