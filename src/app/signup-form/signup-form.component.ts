import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms'
import { UserNameValidators } from './username.validators';
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl('',
        Validators.required,
        UserNameValidators.shouldBeUnique),
      password: new FormControl('', Validators.required)
    })

  });

  get username() {
    return this.form.get('account.username');
  }
  get password() {
    return this.form.get('account.password');

  }
  login() {
    this.form.setErrors({
      inValidLogin: true
    });
  }

}
