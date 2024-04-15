
import SlideInWrapper from '@/components/SlideInWrapper';
import styles from './page.module.scss';
import { getBackEndTechnologies, getFrontEndTechnologies } from '@/lib/helpers/techstack';
import TechnologyCard from './TechnologyCard';
import Heading from './Heading';
import Container from './Container';

export default function page() {
    const frontEndTechnologies = getFrontEndTechnologies();
    const backEndTechnologies = getBackEndTechnologies();

    return (
        <Container>
            <Heading style={{ fontSize: "3rem" }}>{`Technologies I'm proficient in`}</Heading>
            <Heading style={{ margin: "60px 0 25px 0" }}>Front-End:</Heading>
            <SlideInWrapper className={styles.technologiesContainer}>
                {frontEndTechnologies.map(technology => 
                    <TechnologyCard key={technology.id} technology={technology} />
                )}
            </SlideInWrapper>
            <Heading style={{ margin: "60px 0 25px 0" }}>Back-End:</Heading>
            <SlideInWrapper className={styles.technologiesContainer}>
                {backEndTechnologies.map(technology => 
                    <TechnologyCard key={technology.id} technology={technology} />
                )}
            </SlideInWrapper>
        </Container>
    )
}