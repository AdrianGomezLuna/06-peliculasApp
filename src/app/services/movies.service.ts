import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeature(){
    // eslint-disable-next-line max-len
    return this.http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2021-09-12&api_key=7e0cc14f955e21467ca9548b8b83f08a&language=es&include_image_language=es');
  }
}
