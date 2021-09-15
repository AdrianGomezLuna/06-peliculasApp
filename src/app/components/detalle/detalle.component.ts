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
  corazon = 'heart-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  };

  constructor(private moviesService: MoviesService, private modalController: ModalController, private datalocal: DataLocalService) { }

  ngOnInit() {

    this.datalocal.existePelicula(this.id).then( existe => this.corazon = (existe) ? 'heart': 'heart-outline');

    this.moviesService.getPeliculaDetalle(this.id).subscribe( resp => {
      this.pelicula = resp;
    });
    this.moviesService.getActoresPeliculas(this.id).subscribe( resp => {
      this.actores = resp.cast;
    });
  }

  regresar() {
    this.modalController.dismiss();
  }

  favorito(){
    const existe = this.datalocal.guardarPelicula(this.pelicula);
    this.corazon = (existe) ? 'heart': 'heart-outline';
  }

}
