export const viewModes = ['list', 'grid', 'carousel'] as const

export type ViewMode = 'list' | 'grid' | 'carousel'

export const getViewModeParam = (arg: string | null): ViewMode => {
    if(!arg || !viewModes.includes(arg.trim().toLowerCase() as ViewMode))
        return 'list'
    return arg.trim().toLowerCase() as ViewMode
}