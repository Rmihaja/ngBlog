import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle!: string;
  @Input() postContent!: string;
  @Input() postLove!: number;
  @Input() postCreationDate!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onHate() {
    this.postLove--;
    console.log(this.postLove);
  }

  onLove() {
    this.postLove++;
  }

  get textColor() {
    if (this.postLove > 0) {
      return "color: green";
    }
    else if (this.postLove < 0) {
      return "color: red";
    }
    return "color: black";
  }

}
