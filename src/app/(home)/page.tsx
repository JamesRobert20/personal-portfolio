import { getLink } from '@/lib/helpers'
import styles from './page.module.scss'
import SlideInItem from '@/components/SlideInItem';
import RightComponents from './RightComponents';
import PersonalImage from './PersonalImage';

export default function Home() {
    const heroImageSrc = getLink('homeHero');

    const personalImage = getLink('personalImage');

    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <SlideInItem direction='vertical' className={styles.contentContainer}>
                    <PersonalImage personalImage={personalImage} />
                    <div>
                        <h1>James Mtendamema</h1>
                        <p className={styles.caption}>
                            Full Stack Developer, Tech Enthusiast and Aspiring Entrepreneur
                        </p>
                    </div>
                    <div className={styles.description}>
                        <p>Hi there, welcome to my portfolio!</p>
                        <p>{`
                            I'm a software developer with 4 years of industry experience
                            building responsive and fast performing web applications.
                            I'm mostly passionate about front-end development, 
                            particularly using React and Next.js for efficient and scalable UIs, 
                            but I also have sufficient experience with backend architectures 
                            that utilise NoSQL databases for modern web solutions.
                        `}
                        </p>
                    </div>
                </SlideInItem>
            </div>
            <RightComponents heroImageSrc={heroImageSrc} personalImage={personalImage} />
        </div>
    )
}