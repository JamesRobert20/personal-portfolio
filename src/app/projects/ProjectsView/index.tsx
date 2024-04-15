'use client'

import { ProjectItem } from '@/lib/types/Project'
import styles from '../page.module.scss'
import ModeChip from './ModeChip'
import SlideInItem from '@/components/SlideInItem'
import { useSearchParams } from 'next/navigation'
import ProjectCard from './ProjectCard'
import { ViewMode, viewModes } from '../page'

import { SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import SwiperContainer from './SwiperContainer'


type Props = {
    projects: ProjectItem[],
    viewMode: ViewMode
}
export default function ProjectsView({ projects, viewMode }: Props) { 
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
                    <SwiperContainer shouldLoop={projects.length > 3}>
                        {projects.map(project => 
                            <SwiperSlide key={project.id} className={styles.swiperCard}>
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
                    </SwiperContainer>
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