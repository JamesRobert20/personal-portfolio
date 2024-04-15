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

const getNextMonthNoonDate = () => {
    const currentDate = new Date();
    // Increment the month by 1
    currentDate.setMonth(currentDate.getMonth() + 1);
    // Set the date to the 7th
    currentDate.setDate(7);
    // Set the time to 12:00:00 (noon)
    currentDate.setHours(12, 0, 0, 0);
    return currentDate
}

type getImageUrlArgs = {
    folder: string, 
    path: string, 
    keyPairId: string, 
    privateKey: string
}
export const getImageUrl = ({ folder, path, keyPairId, privateKey }: getImageUrlArgs) => {
    return getSignedUrl({
        url: `https://cloud.markethubtz.com/${folder}/${path}`,
        dateLessThan: getNextMonthNoonDate().toISOString(),
        keyPairId,
        privateKey 
    })
}

export type Asset = 
    'homeHero' |
    'personalImage' |
    'htmlIcon' |
    'cssIcon' |
    'sassIcon' |
    'javascriptIcon' |
    'typescriptIcon' |
    'jqueryIcon' |
    'reactNativeIcon' |
    'expoIcon' |
    'framerMotionIcon' |
    'reactQueryIcon' |
    'nodejsIcon' |
    'nextjsIcon' |
    'pythonIcon' |
    'firebaseIcon' |
    'mysqlIcon' |
    'mongodbIcon' |
    'awsIcon' |
    'reactIcon'

const getAssetImageName = (asset: Asset) => {
    if(asset === 'homeHero')
        return 'tech2.jpg'
    if(asset === 'personalImage')
        return 'jamesicon.png'
    if(asset === 'htmlIcon')
        return 'htmlIcon.png'
    if(asset === 'cssIcon')
        return 'cssIcon.png'
    if(asset === 'sassIcon')
        return 'sassIcon.png'
    if(asset === 'javascriptIcon')
        return 'javascriptIcon.png'
    if(asset === 'typescriptIcon')
        return 'typescriptIcon.png'
    if(asset === 'jqueryIcon')
        return 'jqueryIcon.png'
    if(asset === 'reactNativeIcon')
        return 'reactNativeIcon.png'
    if(asset === 'expoIcon')
        return 'expoIcon2.png'
    if(asset === 'framerMotionIcon')
        return 'framerMotionIcon2.png'
    if(asset === 'reactQueryIcon')
        return 'reactQueryIcon.png'
    if(asset === 'nodejsIcon')
        return 'nodejsIcon.png'
    if(asset === 'nextjsIcon')
        return 'nextjsIcon.jpg'
    if(asset === 'pythonIcon')
        return 'pythonIcon.png'
    if(asset === 'firebaseIcon')
        return 'firebaseIcon.png'
    if(asset === 'mysqlIcon')
        return 'mysqlIcon.png'
    if(asset === 'mongodbIcon')
        return 'mongodbIcon.png'
    if(asset === 'awsIcon')
        return 'awsIcon.png'
    return 'reactIcon.webp'
}

export function getLink(asset: Asset) {
    try {
        return getImageUrl({ 
            folder: "Personal", keyPairId, privateKey,
            path: getAssetImageName(asset)
        })
    } catch (error: any) {
        console.error("Error from getLink helper: ", error)
        return `/images/${getAssetImageName(asset)}`
    }
}