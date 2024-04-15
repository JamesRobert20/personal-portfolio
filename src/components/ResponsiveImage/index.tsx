'use client'

import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
    src: string,
    width: number,
    height: number,
    priority?: boolean,
    alt?: string,
    windowRatio: number,
    shouldAnimate?: boolean,
    containerStyles?: CSSProperties
}
export default function ResponsiveImage({ 
    src, alt, windowRatio, containerStyles = {}, width, height, priority = false,
    shouldAnimate = false
}: Props) {
    const [transformScale, setTransformScale] = useState({ previous: 0.2, next: 0.2 });
    useEffect(() => {
        const handleResize = () => {
            setTransformScale(({ next }) => {
                return ({ previous: next, next: (window.innerWidth * windowRatio / width) })
            });
        }
        if(window) {
            handleResize()
            window.addEventListener('resize', handleResize)
        }
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const animateOptions = shouldAnimate ? {
        initial: {
            width: `${width * transformScale.previous}px`,
            height: `${height * transformScale.previous}px`
        },
        animate: {
            width: `${width * transformScale.next}px`,
            height: `${height * transformScale.next}px`
        }
    } : {};

    return (
        <motion.div 
            {...animateOptions}
            style={{
                ...containerStyles,
                width: `${width * transformScale.next}px`,
                height: `${height * transformScale.next}px`,
                overflow: 'hidden'
            }}
        >
            <Image 
                width={transformScale.next * width}
                height={transformScale.next * height}
                priority={priority}
                alt={alt ?? src}
                src={src}
            />
        </motion.div>
    )
}