'use client'

import { AnimatePresence, motion } from "framer-motion"
import { PropsWithChildren } from "react"
import Navbar from "./Navbar"
import { AppContextProvider } from "@/contexts/appContext"

export default function LayoutComponent({ children }: PropsWithChildren) {
    return (
        <AnimatePresence>
            <motion.div className="mainLayoutContainer">
                <AppContextProvider>
                    <Navbar />
                    {children}
                </AppContextProvider>
            </motion.div>
        </AnimatePresence>
    )
}