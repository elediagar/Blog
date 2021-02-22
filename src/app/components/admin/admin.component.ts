import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService) {

  }

  async ngOnInit() {
    this.posts = await this.postsService.getAllPosts();
  }

  onClick(pIndice) {
    this.posts.splice(pIndice, 1);
    localStorage.setItem('arr_posts', JSON.stringify(this.posts));
  }

}
