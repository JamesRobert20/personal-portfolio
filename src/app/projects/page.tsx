import styles from './page.module.scss';
import { getProjects } from '@/lib/helpers/projects';
import Heading from '@/components/AnimatedHeading';
import Container from '@/components/Container';
import ProjectsView from './ProjectsView';

export const viewModes = ['list', 'grid', 'carousel'] as const

export type ViewMode = 'list' | 'grid' | 'carousel'

const getViewModeParam = (arg: string | null): ViewMode => {
    if(!arg || !viewModes.includes(arg.trim().toLowerCase() as ViewMode))
        return 'list'
    return arg.trim().toLowerCase() as ViewMode
}

type Props = {
    searchParams: {
        viewMode?: ViewMode
    }
}
export default function page({ searchParams: { viewMode = 'list' } }: Props) {
    const projects = getProjects();

    const mode = getViewModeParam(viewMode);

    return (
        <Container className={styles.container}>
            <Heading style={{ fontSize: "3rem", paddingLeft: "3.2%" }}>
                {`Some of my projects:`}
            </Heading>
            <ProjectsView viewMode={mode} projects={projects} />
        </Container>
    )
}