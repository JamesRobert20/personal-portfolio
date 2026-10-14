import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./App.scss";
import LayoutComponent from "./LayoutComponent";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "James Mtendamema | Full Stack Developer",
    description: "Full Stack Developer with 4 years of industry experience building responsive and fast performing web applications using React, Next.js, and modern backend architectures.",
    keywords: ["James Mtendamema", "Full Stack Developer", "React", "Next.js", "Portfolio", "Web Developer"],
    authors: [{ name: "James Mtendamema" }],
    openGraph: {
        title: "James Mtendamema | Full Stack Developer",
        description: "Full Stack Developer specializing in React, Next.js, and modern web solutions.",
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
