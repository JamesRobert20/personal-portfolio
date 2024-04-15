import { getLink } from ".";
import { ProjectItem } from "../types/Project";

const projects = [
    {
        id: "1",
        name: "Markethub TZ",
        image: "#",
        description: "",
        techstack: ["Typescript", "React", "Next js", "Sass", "React Query", "AWS", "MongoDB"]
    },
    {
        id: "2",
        name: "Greenorum",
        image: "#",
        description: "",
        techstack: ["Next js", "React", "Sass", "Framer motion", "Firebase", "React Query", "AWS"]
    },
    {
        id: "3",
        name: "Campus Buddy",
        image: "#",
        description: "",
        techstack: ["Next js", "React", "Sass", "Framer motion", "Firebase", "React Query", "AWS"]
    },
    {
        id: "4",
        name: "Portfolio",
        image: "#",
        description: "",
        techstack: ["Next js", "React", "Sass", "Framer motion", "Firebase", "React Query", "AWS"]
    },
]

export function getProjects(): ProjectItem[] {
    try {
        return projects;
    } catch(error: any) {
        console.error("Error from getProjects helper: ", error)
        return []
    }
}