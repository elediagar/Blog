import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(private postsService: PostsService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    await this.postsService.addPost(this.formulario.value);
    this.formulario.reset()
  }

}
