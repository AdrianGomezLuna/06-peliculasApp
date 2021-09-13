export interface RespuestaMDB {
  page: number;
  results: Pelicula[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_pages: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  total_results: number;
}

export interface Pelicula {
  adult: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  backdrop_path: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  genre_ids: number[];
  id: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_language: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_title: string;
  overview: string;
  popularity: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  poster_path: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  release_date: string;
  title: string;
  video: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_average: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_count: number;
}
