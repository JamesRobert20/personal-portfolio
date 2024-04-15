'use client'

import type { PropsWithChildren } from "react"
import { motion } from "framer-motion"

const horizontalVariants = {
    hidden: {
        opacity: 0,
        x: 40
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    }
}

const verticalVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

type Props = PropsWithChildren<{
    className?: string,
    direction: 'horizontal' | 'vertical'
}>

export default function SlideInItem({ children, className, direction }: Props) {
    const variants = direction === 'horizontal' ? horizontalVariants : verticalVariants;
    return (
        <motion.div initial={variants.hidden} animate={variants.show} className={className}>
            {children}
        </motion.div>
    )
}