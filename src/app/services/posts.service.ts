import { Injectable } from '@angular/core';

export interface Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  listaPosts: Post[];

  constructor() {
    if (localStorage.getItem('arr_posts')) {
      this.listaPosts = JSON.parse(localStorage.getItem('arr_posts'))
    } else {
      this.listaPosts = [];
    }
  }

  addPost(post: Post) {
    this.listaPosts.push(post);
    localStorage.setItem('arr_posts', JSON.stringify(this.listaPosts))
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listaPosts);
    })
  }

  getPostByCathegory(cat: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.listaPosts.filter(post => post.categoria === cat));
    })


  }



}
