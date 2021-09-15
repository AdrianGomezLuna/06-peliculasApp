import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.initDB();
  }

  async initDB() {
    const storage = await this.storage.create();
    // eslint-disable-next-line no-underscore-dangle
    this._storage = storage;
  }

  guardarPelicula(pelicula: PeliculaDetalle) {
    this.peliculas.push(pelicula);
    this.storage.set('pelicula', this.peliculas);
  }
}
