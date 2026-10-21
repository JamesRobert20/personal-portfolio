import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import "./App.scss";
import LayoutComponent from "./LayoutComponent";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "James Robert | Full-Stack Developer & Designer",
    description: "Personal portfolio of James Robert — a full-stack developer building beautiful, performant web applications.",
    keywords: ["James Robert", "portfolio", "full-stack developer", "web developer", "Next.js", "React"],
    authors: [{ name: "James Robert" }],
    openGraph: {
        title: "James Robert | Full-Stack Developer & Designer",
        description: "Personal portfolio of James Robert — a full-stack developer building beautiful, performant web applications.",
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
