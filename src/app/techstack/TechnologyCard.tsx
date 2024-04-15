import { TechStackItem } from '@/lib/types/Technology'
import styles from './page.module.scss'
import SlideInChild from '@/components/SlideInChild'
import Image from 'next/image'
import Link from 'next/link'

export default function TechnologyCard({ technology }: { technology: TechStackItem }) {
    const { name, image, link } = technology
    return (
        <SlideInChild direction="vertical" className={styles.card}>
            <Link href={link} className={styles.link}>
                <div className={styles.imageWrapper}>
                    <Image
                        priority
                        src={image}
                        alt={`${name} icon`}
                        width={200} height={200}
                    />
                </div>
                <p style={{ fontSize: "larger" }}>{name}</p>
            </Link>
        </SlideInChild>
    )
}