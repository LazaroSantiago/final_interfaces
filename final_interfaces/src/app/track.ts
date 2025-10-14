export interface Track {
    title: string;
    artist: string;
    collection: string;
    coverart: string;
    year: number;
    rating: number;
    isShareable?: boolean;
    heartActive?: boolean;
}