'use client'

import { PropsWithChildren } from 'react';
import useAppContext from '@/hooks/useAppContext';

type Props = PropsWithChildren<{
    className?: string
}>;
export default function Container({ children, className }: Props) {
    const { updateIsScrolling } = useAppContext();

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        updateIsScrolling(e.currentTarget.scrollTop > 0)
    }

    return (
        <div onScroll={handleScroll} className={className}>
            {children}
        </div>
    )
}