
import SlideInWrapper from '@/components/SlideInWrapper';
import styles from './page.module.scss';
import { getBackEndTechnologies, getFrontEndTechnologies } from '@/lib/helpers/techstack';
import TechnologyCard from './TechnologyCard';
import Heading from '@/components/AnimatedHeading';
import Container from '@/components/Container';

export default function page() {
    const frontEndTechnologies = getFrontEndTechnologies();
    const backEndTechnologies = getBackEndTechnologies();

    return (
        <Container className={styles.container}>
            <Heading style={{ fontSize: "3rem" }}>{`Technologies I'm proficient in`}</Heading>
            <Heading domId="frontEnd" style={{ margin: "60px 0 25px 0" }}>Front-End:</Heading>
            <SlideInWrapper className={styles.technologiesContainer}>
                {frontEndTechnologies.map(technology => 
                    <TechnologyCard key={technology.id} technology={technology} />
                )}
            </SlideInWrapper>
            <Heading domId="backEnd" style={{ margin: "60px 0 25px 0" }}>Back-End:</Heading>
            <SlideInWrapper className={styles.technologiesContainer}>
                {backEndTechnologies.map(technology => 
                    <TechnologyCard key={technology.id} technology={technology} />
                )}
            </SlideInWrapper>
        </Container>
    )
}