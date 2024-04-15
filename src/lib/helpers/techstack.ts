import { getLink } from ".";

const frontendTechnologies = [
    {
        id: "1",
        name: "HTML",
        image: getLink('htmlIcon') 
    },
    {
        id: "2",
        name: "CSS",
        image: getLink('cssIcon') 
    },
    {
        id: "3",
        name: "SASS",
        image: getLink('sassIcon') 
    },
    {
        id: "4",
        name: "Javascript",
        image: getLink('javascriptIcon') 
    },
    {
        id: "5",
        name: "Typescript",
        image: getLink('typescriptIcon') 
    },
    {
        id: "6",
        name: "Jquery",
        image: getLink('jqueryIcon') 
    },
    {
        id: "7",
        name: "React",
        image: getLink('reactIcon') 
    },
    {
        id: "8",
        name: "React Native",
        image: getLink('reactNativeIcon') 
    },
    {
        id: "9",
        name: "Expo",
        image: getLink('expoIcon') 
    },
    {
        id: "10",
        name: "Framer Motion",
        image: getLink('framerMotionIcon') 
    },
    {
        id: "11",
        name: "React Query",
        image: getLink('reactQueryIcon') 
    }
]

const backendTechnologies = [
    {
        id: "1",
        name: "Node js",
        image: getLink('nodejsIcon') 
    },
    {
        id: "2",
        name: "Next js",
        image: getLink('nextjsIcon') 
    },
    {
        id: "3",
        name: "Python",
        image: getLink('pythonIcon') 
    },
    {
        id: "4",
        name: "Firebase",
        image: getLink('firebaseIcon') 
    },
    {
        id: "5",
        name: "MySQL",
        image: getLink('mysqlIcon') 
    },
    {
        id: "6",
        name: "MongoDB",
        image: getLink('mongodbIcon') 
    },
    {
        id: "7",
        name: "AWS",
        image: getLink('awsIcon') 
    },
]

export function getFrontEndTechnologies() {
    try {
        return frontendTechnologies;
    } catch(error: any) {
        console.error("Error from getFrontEndTechnologies helper: ", error)
        return []
    }
}

export function getBackEndTechnologies() {
    try {
        return backendTechnologies;
    } catch(error: any) {
        console.error("Error from getBackEndTechnologies helper: ", error)
        return []
    }
}