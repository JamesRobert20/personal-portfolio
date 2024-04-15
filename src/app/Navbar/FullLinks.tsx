'use client'

import { usePathname } from "next/navigation";
import styles from './index.module.scss'
import Link from 'next/link'
import { RoutesType, routesList } from ".";
import SlideInWrapper from "@/components/SlideInWrapper";
import SlideInChild from "@/components/SlideInChild";

const LinkItem = ({ route }: { route: RoutesType }) => {
    const path = route.trim().toLowerCase().replace(" ","") === "home" ? 
    "" : route.trim().toLowerCase().replace(" ","");
    const currentPath = usePathname().toLowerCase().replaceAll(/[^a-z]+/g, "");
    const isActive = currentPath === path;

    return (
        <SlideInChild direction="vertical">
            <li className={styles.linkItem}>
                <Link href={`/${path}`} className={styles.navLinks}>
                    <span style={isActive ? { color: '#c9a461' } : undefined}>
                        {route}
                    </span>
                </Link>
            </li>
        </SlideInChild>
    )
}

export default function FullLinks() {
    return (
        <SlideInWrapper className={styles.innerContainer}>
            {routesList.map(route => <LinkItem key={route} route={route} />)}
        </SlideInWrapper>
    )
}