export interface Destination {
    name: string
    images: Images
    description: string
    distance: string
    travel: string
}

interface Images {
    png: string
    webp: string
}