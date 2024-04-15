import styles from '../page.module.scss'
import { ViewMode } from '.'
import Link from 'next/link'

type Props = {
    mode: ViewMode,
    isActive: boolean
}
export default function ModeChip ({ mode, isActive }: Props) {
    return (
        <Link href={`projects?viewMode=${mode}`} className={`${isActive ? styles.disabled : ""}`}>
            <div className={`${styles.modeChip} ${isActive ? styles.active : ""}`}>
                {mode}
            </div>
        </Link>
    )
}