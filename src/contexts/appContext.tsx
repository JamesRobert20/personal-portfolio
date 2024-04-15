'use client'

import { createContext, PropsWithChildren, useCallback, useState } from "react";

type contextObject = {
    isScrolling: boolean,
    updateIsScrolling: (arg: boolean) => void
}
const AppContext = createContext<contextObject | null>(null);

export function AppContextProvider({ children }: PropsWithChildren) {
    const [isScrolling, setIsScrolling] = useState(false);
    const updateIsScrolling = useCallback((arg: boolean) => {
        setIsScrolling(arg)
    }, [])

    return (
        <AppContext.Provider value={{ isScrolling, updateIsScrolling }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;