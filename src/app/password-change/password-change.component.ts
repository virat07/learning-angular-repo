import { Component, OnInit } from '@angular/core';
import { UserNameValidators } from '../signup-form/username.validators';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, UserNameValidators.oldPasswordCheck),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, UserNameValidators.passwordsShouldMatch);
  get oldPassword() {
    return this.form.get('oldPassword');
  }
  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  changePassword() {
    this.form.reset()
  }
}
