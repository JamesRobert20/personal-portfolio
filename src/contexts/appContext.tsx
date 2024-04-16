'use client'

import { useRouter } from "next/navigation";
import { createContext, PropsWithChildren, useCallback, useState } from "react";

type contextObject = {
    isScrolling: boolean,
    updateIsScrolling: (arg: boolean) => void,
    navigateToPage: (page: string) => void,
    refreshPage: () => void
}
const AppContext = createContext<contextObject | null>(null);

export function AppContextProvider({ children }: PropsWithChildren) {
    const [isScrolling, setIsScrolling] = useState(false);
    const updateIsScrolling = useCallback((arg: boolean) => {
        setIsScrolling(arg)
    }, [])
    const router = useRouter();
    const navigateToPage = useCallback((page: string) => {
        router.push(page.startsWith('/') ? page : `/${page}`);
    }, [])
    const refreshPage = useCallback(() => {
        router.refresh();
    }, [])

    return (
        <AppContext.Provider 
            value={{ 
                isScrolling, updateIsScrolling,
                refreshPage, navigateToPage
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;