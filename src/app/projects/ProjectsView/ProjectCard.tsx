import { ProjectItem } from "@/lib/types/Project"
import styles from '../page.module.scss'
import { ViewMode } from "../ViewData"
import Image from "next/image"

type Props = {
    project: ProjectItem,
    viewMode: ViewMode
}
export default function ProjectCard({ project, viewMode }: Props) {
    const { name } = project
    return (
        <div className={styles.projectCard}>
            {viewMode === "list" ?
                <></>
                : <Image
                    alt={`${project.name}-project-image`}
                    src={project.image}
                    sizes="100vw"
                    fill
                    style={{ objectFit: "contain" }}
                />
            }
        </div>
    )
}