import { Component, OnInit } from '@angular/core';
import { Post, PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  status: boolean;

  constructor(private postsService: PostsService) {
    this.status = false;
  }

  async ngOnInit() {
    this.posts = await this.postsService.getAllPosts();

  }


  async onClick($event) {
    this.posts = await this.postsService.getPostByCathegory($event);
    this.status = !this.status;
  }



}
