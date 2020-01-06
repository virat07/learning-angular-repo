import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css'],
  inputs: ['isFavorite'],
  encapsulation : ViewEncapsulation.Emulated
})
export class Exercise1Component implements OnInit {
  @Input('is-favorite') isFavorite = false;
  @Output() change = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      newValue : this.isFavorite
    });
  }

}
