'use client'

import { PropsWithChildren, useEffect, useRef } from 'react';
import useAppContext from '@/hooks/useAppContext';

type Props = PropsWithChildren<{
    className?: string
}>;
export default function Container({ children, className }: Props) {
    const elementRef = useRef<HTMLDivElement>(null);

    const { updateIsScrolling } = useAppContext();

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        updateIsScrolling(e.currentTarget.scrollTop > 0)
    }

    useEffect(() => {
        if(elementRef.current)
            updateIsScrolling(elementRef.current.scrollTop > 0)
    }, [])

    return (
        <div ref={elementRef} onScroll={handleScroll} className={className}>
            {children}
        </div>
    )
}