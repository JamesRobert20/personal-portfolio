'use client'

import { motion } from "framer-motion"
import { CSSProperties, PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    className?: string,
    style?: CSSProperties,
    domId?: string
}>;
export default function Heading({ domId, className, style, children }: Props) {
    return (
        <motion.h1 id={domId}
            initial={{ opacity: 0, y: 40 }}
            animate={{
                opacity: 1, y: 0,
                transition: {
                    duration: 1
                }}
            }
            style={style}
            className={className}
        >
            {children}
        </motion.h1>
    )
}