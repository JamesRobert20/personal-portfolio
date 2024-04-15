import { ProjectItem } from "@/lib/types/Project"
import { ViewMode } from "."
import styles from '../page.module.scss'


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