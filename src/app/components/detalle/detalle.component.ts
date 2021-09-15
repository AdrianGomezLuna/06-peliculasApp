import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  oculto = 150;
  actores: Cast[] = [];

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(private moviesService: MoviesService, private modalController: ModalController, private datalocal: DataLocalService) { }

  ngOnInit() {
    this.moviesService.getPeliculaDetalle(this.id).subscribe( resp => {
      console.log('Pelicula',resp);
      this.pelicula = resp;
    });
    this.moviesService.getActoresPeliculas(this.id).subscribe( resp => {
      console.log('Actores',resp);
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalController.dismiss();
  }

  favorito(){
    this.datalocal.guardarPelicula(this.pelicula);
  }

}
