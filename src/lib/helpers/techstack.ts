import { getLink } from ".";
import { TechStackItem } from "../types/Technology";

const frontendTechnologies = [
    {
        id: "1",
        name: "HTML",
        image: getLink('htmlIcon') ,
        link: "https://html.com/"
    },
    {
        id: "2",
        name: "CSS",
        image: getLink('cssIcon'),
        link: "https://css3.com/" 
    },
    {
        id: "3",
        name: "SASS",
        image: getLink('sassIcon') ,
        link: "https://sass-lang.com/"
    },
    {
        id: "4",
        name: "Javascript",
        image: getLink('javascriptIcon'),
        link: "https://www.javascript.com/"
    },
    {
        id: "5",
        name: "Typescript",
        image: getLink('typescriptIcon'),
        link: "https://www.typescriptlang.org/"
    },
    {
        id: "6",
        name: "Jquery",
        image: getLink('jqueryIcon') ,
        link: "https://jquery.com/"
    },
    {
        id: "7",
        name: "React",
        image: getLink('reactIcon'),
        link: "https://react.dev/"
    },
    {
        id: "8",
        name: "React Native",
        image: getLink('reactNativeIcon'),
        link: "https://reactnative.dev/"
    },
    {
        id: "9",
        name: "Expo",
        image: getLink('expoIcon'),
        link: "https://expo.dev/"
    },
    {
        id: "10",
        name: "Framer Motion",
        image: getLink('framerMotionIcon'),
        link: "https://www.framer.com/motion/"
    },
    {
        id: "11",
        name: "React Query",
        image: getLink('reactQueryIcon'),
        link: "https://tanstack.com/query/latest"
    }
]

const backendTechnologies = [
    {
        id: "1",
        name: "Node js",
        image: getLink('nodejsIcon'),
        link: "https://nodejs.org/en"
    },
    {
        id: "2",
        name: "Next js",
        image: getLink('nextjsIcon'),
        link: "https://nextjs.org/"
    },
    {
        id: "3",
        name: "Python",
        image: getLink('pythonIcon'),
        link: "https://www.python.org/"
    },
    {
        id: "4",
        name: "Firebase",
        image: getLink('firebaseIcon'),
        link: "https://firebase.google.com/"
    },
    {
        id: "5",
        name: "MySQL",
        image: getLink('mysqlIcon'),
        link: "https://www.mysql.com/"
    },
    {
        id: "6",
        name: "MongoDB",
        image: getLink('mongodbIcon'),
        link: "https://www.mongodb.com/"
    },
    {
        id: "7",
        name: "AWS",
        image: getLink('awsIcon'),
        link: "https://aws.amazon.com/"
    },
]

export function getFrontEndTechnologies(): TechStackItem[] {
    try {
        return frontendTechnologies;
    } catch(error: any) {
        console.error("Error from getFrontEndTechnologies helper: ", error)
        return []
    }
}

export function getBackEndTechnologies(): TechStackItem[] {
    try {
        return backendTechnologies;
    } catch(error: any) {
        console.error("Error from getBackEndTechnologies helper: ", error)
        return []
    }
}