import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angularApp';
  post = {
    title:"Title",
    isFavorite : true
  }
  onFavoriteChange(eventArgs){
      console.log('Favorite Change',eventArgs)
  }
} 
