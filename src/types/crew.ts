export interface Crew {
    name: string
    images: Images
    role: string
    bio: string
}

interface Images {
    png: string
    webp: string
}
