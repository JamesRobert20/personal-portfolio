'use client'

import type { PropsWithChildren } from "react"
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

type Props = PropsWithChildren<{
    className?: string
}>

export default function SlideInWrapper({ children, className }: Props) {
    return (
        <motion.div variants={variants} initial="hidden" whileInView="show" className={className}>
            {children}
        </motion.div>
    )
}