'use client'

import { PropsWithChildren } from 'react';
import styles from './page.module.scss';
import useAppContext from '@/hooks/useAppContext';

export default function Container({ children }: PropsWithChildren) {
    const { updateIsScrolling } = useAppContext();

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        updateIsScrolling(e.currentTarget.scrollTop > 0)
    }

  return (
    <div onScroll={handleScroll} className={styles.container}>
        {children}
    </div>
  )
}