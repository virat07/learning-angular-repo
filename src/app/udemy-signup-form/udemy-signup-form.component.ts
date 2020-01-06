import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy-signup-form',
  templateUrl: './udemy-signup-form.component.html',
  styleUrls: ['./udemy-signup-form.component.css']
})
export class UdemySignupFormComponent  {
  contentType = [
      {id:'1',name:'Development'},
      {id:'2',name:'Research'},
      {id:'3',name:'Maintain'},
  ]


  handleInputChange (course) {
    console.log(course)
  }
  submit(courseDetails){
    console.log(courseDetails)
  }
}
