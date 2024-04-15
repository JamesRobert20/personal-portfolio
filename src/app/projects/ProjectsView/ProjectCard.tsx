import { ProjectItem } from "@/lib/types/Project"
import styles from '../page.module.scss'
import { ViewMode } from "../ViewData"

type Props = {
    project: ProjectItem,
    viewMode: ViewMode
}
export default function ProjectCard({ project, viewMode }: Props) {
    const { name } = project
    return (
        <div className={styles.projectCard}>
            {name}
        </div>
    )
}