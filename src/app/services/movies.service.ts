import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PeliculaDetalle, RespuestaCredits, RespuestaMDB, Genre } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  generos: Genre[]= [];
  private popularesPage = 0;

  constructor(private http: HttpClient) { }

  getFeature(){
    const hoy = new Date();
    const ultimoDia = new Date(hoy.getFullYear(), hoy.getMonth() +1, 0 ).getDate();
    const mes = hoy.getMonth() +1;

    let mesString;

    if (mes < 10) {
      mesString= '0' + mes;
    }else{
      mesString = mes;
    }

    const inicio = `${hoy.getFullYear() }-${mesString}-01`;
    const fin = `${hoy.getFullYear() }-${mesString}-${ultimoDia}`;
    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getPeliculaDetalle(id: string){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresPeliculas(id: string){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }

  getBuscarPeliculas( text: string) {
    return this.ejecutarQuery(`/search/movie?query=${text}`);
  }

  cargarGeneros(): Promise<Genre[]> {
    return new Promise( resolve => {
      this.ejecutarQuery(`/genre/movie/list?a=1`).subscribe(resp => {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        this.generos = resp['genres'];
        console.log('Respuesta',this.generos);
        resolve(this.generos);
      });
    });
  }

  private ejecutarQuery<T>( query: string) {
    query=URL+query;
    query+= `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }
}
