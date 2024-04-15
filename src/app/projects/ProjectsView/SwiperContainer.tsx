'use client'

import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { PropsWithChildren } from 'react';
import styles from '../page.module.scss'

type Props = PropsWithChildren<{
    shouldLoop?: boolean
}>;
export default function SwiperContainer({ children, shouldLoop = false }: Props) {
    return (
        <Swiper
            loop={shouldLoop}
            slidesPerView={3}
            spaceBetween={40}
            centeredSlides={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={styles.mySwiper}
        >
            {children}
        </Swiper>
    )
}