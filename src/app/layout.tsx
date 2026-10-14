import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./App.scss";
import LayoutComponent from "./LayoutComponent";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "James Robert | Full Stack Developer",
    description: "Portfolio of James Robert - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    keywords: ["James Robert", "Full Stack Developer", "React", "Next.js", "Portfolio"],
    authors: [{ name: "James Robert" }],
    openGraph: {
        title: "James Robert | Full Stack Developer",
        description: "Portfolio of James Robert - Full Stack Developer specializing in React, Next.js, and modern web technologies.",
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
