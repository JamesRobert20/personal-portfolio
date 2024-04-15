import styles from './page.module.scss';
import { getProjects } from '@/lib/helpers/projects';
import Heading from '@/components/AnimatedHeading';
import Container from '@/components/Container';
import ProjectsView from './ProjectsView';

export default function page() {
    const projects = getProjects();

    return (
        <Container className={styles.container}>
            <Heading style={{ fontSize: "3rem", paddingLeft: "3.2%" }}>
                {`Some of my projects:`}
            </Heading>
            <ProjectsView projects={projects} />
        </Container>
    )
}