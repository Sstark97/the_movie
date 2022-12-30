interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface Response {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

interface FailResponse {
    status_code: number;
    status_message: string;
    success: boolean;
}
interface StarsProps {
    popularity: number
}

interface PageItemProps {
    numberPage: number | string
}

export type {
    Movie,
    Response,
    FailResponse,
    StarsProps,
    PageItemProps,
}