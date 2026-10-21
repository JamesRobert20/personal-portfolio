import type { Metadata } from "next";
import "./globals.css";
import "./index.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar";
import { GlobalContextProvider } from "./contexts/GlobalContext";

export const metadata: Metadata = {
    title: "James Mtendamema | Full Stack Developer",
    description:
        "Full Stack Developer with 5 years of experience in React, Vue, Next.js, and Node.js. View my projects and get in touch.",
    keywords:
        "James Mtendamema, Full Stack Developer, React, Vue, Next.js, Node.js, Web Developer, Software Engineer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
