import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2>
  {{ "Title " + getTitle()  }}
  </h2>
  <button (click)= "onAdd()">Add</button>
  <ul>
  <li  *ngFor="let course of courses"  >
    {{course}}
    <button (click)="onRemove(course)">Remove </button>
  </li>
  </ul>
  <img [src] = "imageUrl"/>
  <table>
    <tr>
      <td [attr.colspan] = "colSpan"></td>
    </tr>
  </table>
  <div (click) = "onDiv()">
  <button (click) = "onSave($event)">Save </button>
  </div>
  <input (keyup.enter) = "onHandleChange($event)"/>
  <input [(ngModel)] = "email" (keyup.enter) = "onkeyUp()"/>
  {{textData | summary:10 }}

  `
})
export class CoursesComponent {
  title = "List of courses ";
  textData = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`;
  courses;
  public service: CoursesService;
  imageUrl = "C:\Users\GS-2280\Downloads\mustang6";
  colSpan = '2';
  email = 'me@example.com';
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  getTitle() {
    return this.title;
  }
  onDiv() {
    console.log('hello')
  }
  onSave($event) {
    $event.stopPropagation()
    console.log('First click on button', $event)
  }
  onHandleChange(event) {
    event.stopPropagation();
    // if(event.keyCode === 13 ) console.log('Enter worked') this is a traditional javascript way.
    // In angular we can handle this enter feature by just simply passing it as a property of keyup.enter
  }
  // Logic for getting value from the input field 
  onKeyup(value) {
    console.log(value)
  }
  onkeyUp() {
    console.log(this.email);
  }
  onAdd() {
    this.courses.push('python');
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
}