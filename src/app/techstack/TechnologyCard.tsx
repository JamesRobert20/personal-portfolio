import { TechStackItem } from '@/lib/types/Technology'
import styles from './page.module.scss'
import SlideInChild from '@/components/SlideInChild'
import Image from 'next/image'

export default function TechnologyCard({ technology }: { technology: TechStackItem }) {
    const { name, image } = technology
    return (
        <SlideInChild direction="vertical" className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    priority
                    src={image}
                    alt={`${name} icon`}
                    width={200} height={200}
                />
            </div>
            <p style={{ fontSize: "larger" }}>{name}</p>
        </SlideInChild>
    )
}