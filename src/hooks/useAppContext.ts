import AppContext from '@/contexts/appContext'
import { useContext } from 'react'

export default function useAppContext() {
    const contextObject = useContext(AppContext);

    if(!contextObject)
        throw new Error('useAppContext must be used within an AppContextProvider')

    return contextObject
}
