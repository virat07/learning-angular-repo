import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-twitter',
  templateUrl: './like-twitter.component.html',
  styleUrls: ['./like-twitter.component.css']
})
export class LikeTwitterComponent implements OnInit {
  @Input('likeCount') countLike :number = 0;
  @Input('isLiked') isLiked : boolean = false;
  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  isClickedLike(){
    this.isLiked = !this.isLiked;
    if(this.isLiked){
      this.countLike++ ;
    }
    else this.countLike--;
  }

}
