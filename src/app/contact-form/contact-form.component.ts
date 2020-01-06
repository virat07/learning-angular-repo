import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
    public contactMethods = [
    {id:1,name:'email'},
    {id:2,name:'phone'},
    {id:3,name:'lane'},
  ]
  log(x) {
    console.log(x);
  }
  submit(formData){
    console.log(formData)
  }

}
