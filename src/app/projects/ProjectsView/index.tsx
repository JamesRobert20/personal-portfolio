'use client'

import { ProjectItem } from '@/lib/types/Project'
import styles from '../page.module.scss'
import ModeChip from './ModeChip'
import SlideInItem from '@/components/SlideInItem'
import { useSearchParams } from 'next/navigation'
import ProjectCard from './ProjectCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const viewModes = ['list', 'grid', 'carousel'] as const

export type ViewMode = 'list' | 'grid' | 'carousel'

const getViewModeParam = (arg: string | null): ViewMode => {
    if(!arg || !viewModes.includes(arg.trim().toLowerCase() as ViewMode))
        return 'list'
    return arg.trim().toLowerCase() as ViewMode
}

type Props = {
    projects: ProjectItem[]
}
export default function ProjectsView({ projects }: Props) {
    const searchParams = useSearchParams();
    const viewMode = getViewModeParam(searchParams.get('viewMode'));

    const containerClass = viewMode === 'list' ? styles.listMode
    : viewMode === 'grid' ? styles.gridMode 
    : styles.carouselMode;

    return (
        <div className={styles.innerContainer}>
            <SlideInItem direction='vertical' className={styles.modesContainer}>
                {viewModes.map(mode => 
                    <ModeChip key={mode} mode={mode} isActive={mode === viewMode} />
                )}
            </SlideInItem>
            <SlideInItem 
                direction='vertical' 
                className={`${styles.projectsContainer} ${containerClass}`}
            >
                {viewMode === 'carousel' ?
                    <Swiper
                        loop={projects.length > 3}
                        slidesPerView={3}
                        spaceBetween={40}
                        centeredSlides={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className={styles.mySwiper}
                    >
                        {projects.map(project => 
                            <SwiperSlide 
                                key={project.id}
                                className={styles.swiperCard}
                            >
                                {({ isActive }) => (
                                    <div className={`${styles.projectCardWrapper} ${isActive ? styles.active : ""}`}>
                                        <ProjectCard 
                                            project={project} 
                                            viewMode={viewMode}
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                    )}
                    </Swiper>
                    :<>
                        {projects.map(project => 
                            <ProjectCard key={project.id} project={project} viewMode={viewMode}  />
                        )}
                    </>
                }
            </SlideInItem>
        </div>
    )
}