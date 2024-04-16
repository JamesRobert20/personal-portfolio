'use client'

import SlideInItem from '@/components/SlideInItem';
import styles from './page.module.scss';
import useWindowSize from '@/hooks/useWindowSize'
import React from 'react'
import ResponsiveImage from '@/components/ResponsiveImage';
import HeroImage from './HeroImage';

type Props = {
    heroImageSrc: string,
    personalImage: string
}
export default function RightComponents({ personalImage, heroImageSrc }: Props) {
    const { width } = useWindowSize();

    if(width > 819)
        return (
            <>
                <div className={styles.middleContainer}>
                    <SlideInItem direction='vertical' className={styles.pictureContainer}>
                        <ResponsiveImage
                            priority={true}
                            src={personalImage}
                            width={674} height={674}
                            windowRatio={0.28}
                        />
                    </SlideInItem>
                </div>
                <div className={styles.rightContainer}>
                    <HeroImage src={heroImageSrc} />
                </div>
            </>
        )

    return <></>
}