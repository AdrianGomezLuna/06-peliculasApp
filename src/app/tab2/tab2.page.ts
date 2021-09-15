import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos','La vida es bella'];
  peliculas: Pelicula[] = [];
  buscando = false;

  constructor(private moviesService: MoviesService, private modalController: ModalController) {}

  buscar( event) {
    const valor = event.detail.value;
    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    this.buscando = true;
    this.moviesService.getBuscarPeliculas(valor).subscribe(resp => {
      console.log(resp);
      // eslint-disable-next-line @typescript-eslint/dot-notation
      this.peliculas = resp['results'];
      this.buscando = false;
    });
  }

  async detalle(id: number) {
      const modal = await this.modalController.create({
        component: DetalleComponent,
        componentProps: {
          id
        }
      });
      modal.present();
  }

}
