import { Component, OnInit } from '@angular/core';
import { Post } from '../assets/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts!: Post[];

  constructor() { }
  
  ngOnInit() {

    this.posts = [
      new Post('Mon premier post', 'Hello'),
      new Post('Mon deuxième post', 'blablabla'),
      new Post('Encore un post', 'Lorem ipsum dolor sit amet, consectetur adpisicing elit, sed do elusmod tempr incidunt ut labore et dolore et do etc')
    ]

  }

}
