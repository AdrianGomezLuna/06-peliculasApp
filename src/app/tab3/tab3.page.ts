import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Pelicula, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  peliculas: Pelicula[] = [];
  peliculasDeta: PeliculaDetalle[] = [];
  generos: Genre[] = [];

  constructor(private dataLocal: DataLocalService, private moviesService: MoviesService) {}

  async ngOnInit() {
    this.peliculasDeta = await this.dataLocal.cargarFavoritos();
    this.generos = await this.moviesService.cargarGeneros();
    console.log('Peliculas',this.peliculas);
    console.log('PeliculasData',this.peliculasDeta);
  }

}
