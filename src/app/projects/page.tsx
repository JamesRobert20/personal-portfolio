import styles from './page.module.scss';
import { getProjects } from '@/lib/helpers/projects';
import Heading from '@/components/AnimatedHeading';
import ProjectsView from './ProjectsView';
import { ViewMode, getViewModeParam } from './ViewData';

type Props = {
    searchParams: {
        viewMode?: ViewMode
    }
}
export default function page({ searchParams: { viewMode = 'list' } }: Props) {
    const projects = getProjects();

    const mode = getViewModeParam(viewMode);

    return (
        <div className={styles.container}>
            <Heading style={{ fontSize: "3rem", paddingLeft: "3.2%" }}>
                {`Some of my projects:`}
            </Heading>
            <ProjectsView viewMode={mode} projects={projects} />
        </div>
    )
}