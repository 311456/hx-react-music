const devBaseUrl = "https://cloud-music-rg6gureaz-311456.vercel.app/"
const proBaseUrl = "https://cloud-music-rg6gureaz-311456.vercel.app/"

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseUrl : proBaseUrl
export const TIMEOUT = 5000