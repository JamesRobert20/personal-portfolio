'use client'

import ResponsiveImage from "@/components/ResponsiveImage";
import useWindowSize from "@/hooks/useWindowSize";
import styles from './page.module.scss'

type Props = {
    personalImage: string
}
export default function PersonalImage({ personalImage }: Props) {
    const { width } = useWindowSize();

    if(width < 820)
        return (
            <div className={styles.personalImage}>
                <ResponsiveImage
                    priority={true}
                    src={personalImage}
                    width={674} height={674}
                    windowRatio={0.25}
                    containerStyles={{
                        borderRadius: "50%",
                        overflow: "hidden"
                    }}
                />
            </div>
        )
    
    return <></>
}