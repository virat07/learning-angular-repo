import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    name: new FormControl(
      '',
      Validators.required
    ),
    topics: new FormArray([]),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    })
  });

  addTopic(topic: HTMLFormElement) {
    this.topics.push(new FormControl(topic.value))
    topic.value = '';
  }
  removeTopic(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index)
  }
  get topics() {
    return this.form.get('topics') as FormArray;
  }

}
