import { Injectable } from '@angular/core';

export interface Post {
  titulo: string;
  texto: string;
  auto: string;
  imagen: string;
  fecha: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  listaPosts: Post[];

  constructor() {
    this.listaPosts = [];
  }


}
