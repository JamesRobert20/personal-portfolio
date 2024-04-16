'use client'

import { useEffect, useState } from 'react';
import styles from './index.module.scss'
import FullLinks from './FullLinks';
import Drawer from './Drawer';
import useAppContext from '@/hooks/useAppContext';
import { usePathname } from 'next/navigation';

export type RoutesType = 'Home' | 'Tech Stack' | 'Projects' | 'Inquiries';

export const routesList: RoutesType[] = ['Home', 'Tech Stack', 'Projects', 'Inquiries'];

export default function Navbar() {
    const [enoughSpaceForLinks, setEnoughSpaceForLinks] = useState(false);

    useEffect(() => {
        const handleMenuAppearance = () => setEnoughSpaceForLinks(window.innerWidth > 819)

        if(window) {
            handleMenuAppearance();
            window.addEventListener('resize', handleMenuAppearance);
        }            
    
        return () => {
            window.removeEventListener('resize', handleMenuAppearance);
        }
    }, []);

    const pathname = usePathname().toLowerCase().replaceAll(/[^a-z]+/g, "");

    const { isScrolling } = useAppContext();

    const shouldScroll = (pathname === 'techstack') && isScrolling;
    
    return (
        <div className={`${styles.container} ${shouldScroll ? styles.shadow : ""}`}>
            {enoughSpaceForLinks ? <FullLinks /> : <Drawer />}
        </div>
    )
}