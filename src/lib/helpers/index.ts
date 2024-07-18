import { getSignedUrl } from "@aws-sdk/cloudfront-signer";

const getCloudfrontEnvKeys = () => {
    const keyPairId = process.env.CLOUDFRONT_KEY_PAIR_ID;
    let privateKey = process.env.CLOUDFRONT_PRIVATE_KEY
    if(!keyPairId || !privateKey) 
        throw new Error('The required environment variables are missing')
    privateKey = privateKey.replace(/\\n/gm, '\n');
    return ({ keyPairId, privateKey })
}

const { keyPairId, privateKey } = getCloudfrontEnvKeys();

type getImageUrlArgs = {
    folder: string, 
    path: string, 
    keyPairId: string, 
    privateKey: string
}
export const getImageUrl = ({ folder, path, keyPairId, privateKey }: getImageUrlArgs) => {
    return getSignedUrl({
        url: `https://cloud.markethubtz.com/${folder}/${path}`,
        dateLessThan: (new Date("3024-07-18T12:42:25.021Z")).toISOString(),
        keyPairId,
        privateKey 
    })
}

const AssetImageNames = {
    'homeHero': 'tech2.jpg',
    'personalImage': 'jamesicon.png',
    'htmlIcon': 'htmlIcon.png',
    'cssIcon': 'cssIcon.png',
    'sassIcon': 'sassIcon.png',
    'javascriptIcon': 'javascriptIcon.png',
    'typescriptIcon': 'typescriptIcon.png',
    'jqueryIcon': 'jqueryIcon.png',
    'reactNativeIcon': 'reactNativeIcon.png',
    'expoIcon': 'expoIcon2.png',
    'framerMotionIcon': 'framerMotionIcon2.png',
    'reactQueryIcon': 'reactQueryIcon.png',
    'nodejsIcon': 'nodejsIcon.png',
    'nextjsIcon': 'nextjsIcon.jpg',
    'pythonIcon': 'pythonIcon.png',
    'firebaseIcon': 'firebaseIcon.png',
    'mysqlIcon': 'mysqlIcon.png',
    'mongodbIcon': 'mongodbIcon.png',
    'awsIcon': 'awsIcon.png',
    'reactIcon': 'reactIcon.webp',
    'campusbuddy': 'campusbuddy-project.png',
    'greenorum': 'greenorum-project.png',
    'markethubtz': 'markethubtz-project.png',
    'portfolio': 'portfolio-project.png'
} as const;

export type Asset = keyof (typeof AssetImageNames);

export function getLink(asset: Asset) {
    try {
        return getImageUrl({ 
            folder: "Personal", keyPairId, privateKey,
            path: AssetImageNames[asset]
        })
    } catch (error: any) {
        console.error("Error from getLink helper: ", error)
        return `/images/${AssetImageNames[asset]}`
    }
}