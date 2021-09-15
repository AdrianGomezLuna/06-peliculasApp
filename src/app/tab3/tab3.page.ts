import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Pelicula, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: Pelicula[] = [];
  peliculasDeta: PeliculaDetalle[] = [];
  generos: Genre[] = [];
  favoritosGenero: any[] = [];

  constructor(private dataLocal: DataLocalService, private moviesService: MoviesService) {}

  async ionViewWillEnter() { //esto se ejecuta cada vez que entre en la página
    this.peliculasDeta = await this.dataLocal.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();
    // this.pelisPorGenero(this.generos, this.peliculasDeta);
  }

  // pelisPorGenero(generos: Genre[], peliculas: PeliculaDetalle) {
  //   this.favoritosGenero = [];
  //   generos.forEach( genero => {
  //     this.favoritosGenero.push({
  //       genero: genero.name,
  //       pelis: peliculas.filter( peli => {
  //         return peli.genres.find( genre => genre.id === genero.id );
  //       })
  //     });
  //   })
  // }

}
