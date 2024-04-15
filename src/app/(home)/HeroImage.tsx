'use client'

import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize"

export default function HeroImage({ src }: { src: string }) {
    const { width, height } = useWindowSize();

    return (
        <Image 
            priority 
            src={src} 
            alt={'Hero Image'}
            width={width * 0.4}
            height={height}
        />
    )
}