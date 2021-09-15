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

export interface PeliculaDetalle {
  adult?: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  backdrop_path?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  belongs_to_collection?: any;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  imdb_id?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_language?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_title?: string;
  overview?: string;
  popularity?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  poster_path?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  production_companies?: Productioncompany[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  production_countries?: Productioncountry[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  release_date?: string;
  revenue?: number;
  runtime?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  spoken_languages?: Spokenlanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_average?: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  vote_count?: number;
}

//APARITR DE AQUÍ CREO QUE NO SIRVE LO DEJO POR SI ACASO

interface Spokenlanguage {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  english_name?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  iso_639_1?: string;
  name?: string;
}

interface Productioncountry {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  iso_3166_1?: string;
  name?: string;
}

interface Productioncompany {
  id: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  logo_path: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}


export interface RespuestaCredits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  known_for_department: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_name: string;
  popularity: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  profile_path?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  credit_id: string;
  department: string;
  job: string;
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  known_for_department: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  original_name: string;
  popularity: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  profile_path?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  cast_id: number;
  character: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  credit_id: string;
  order: number;
}
