import { AbstractControl, Validator, ValidationErrors } from '@angular/forms';

export class UserNameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf('') >= 0) {
      return {
        cannotContainSpace: true
      }
    }
    return null;
  }
  static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Bharat') {
          console.log(control.value)
          resolve({ shouldBeUnique: true });
        }
        else
          resolve(null);
      }, 2000);
    });
  };

  static oldPasswordCheck(control: AbstractControl) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== '1234') {
          console.log(control.value)
          resolve({ invalidOldPassword: true });
        }
        else
          resolve(null);
      }, 2000);
    });
  };
  static passwordsShouldMatch(control: AbstractControl) {
    let newPasword = control.get('newPassword');
    let confirmPassword = control.get('confirmPassword');
    console.log(newPasword, confirmPassword)
    if (newPasword.value !== confirmPassword.value)
      return { passwordsShouldMatch: true };
    return null 
  }
}