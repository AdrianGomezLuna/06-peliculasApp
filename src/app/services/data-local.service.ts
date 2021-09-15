import { Injectable, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];
  private storages: Storage | null = null;

  constructor(private storage: Storage, private toastController: ToastController) {
    this.initDB();
  }

  async initDB() {
    const storage = await this.storage.create();
    this.storages = storage;
    this.cargarFavoritos();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message ,
      duration: 1500
    });
    toast.present();
  }

  guardarPelicula(pelicula: PeliculaDetalle) {
    let existe = false;
    let mensaje = '';
    for(const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje ='Borrado de Favoritos';
    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a Favoritos';
    }

    this.presentToast(mensaje);
    this.storage.set('pelicula', this.peliculas);
    return !existe;
  }

  async cargarFavoritos() {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula( id) {
    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id);
    return (existe) ? true: false;
  }

}
