import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./App.scss";
import LayoutComponent from "./LayoutComponent";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "James Robert | Full Stack Developer & Software Engineer",
    description: "Personal portfolio showcasing projects, technical skills, and professional experience of James Robert, a full stack developer specializing in modern web technologies.",
    keywords: ["James Robert", "Full Stack Developer", "Software Engineer", "Web Developer", "Portfolio", "React", "Next.js", "TypeScript"],
    authors: [{ name: "James Robert" }],
    openGraph: {
        title: "James Robert | Full Stack Developer & Software Engineer",
        description: "Personal portfolio showcasing projects, technical skills, and professional experience of James Robert.",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "James Robert | Full Stack Developer & Software Engineer",
        description: "Personal portfolio showcasing projects, technical skills, and professional experience.",
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
