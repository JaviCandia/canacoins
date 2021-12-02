import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  matchPasswords(password1: string, password2: string) {
    return ( formGroup: FormGroup ) => {
      const password1Control = formGroup.controls[password1];
      const password2Control = formGroup.controls[password2];

      if (password1Control.value === password2Control.value){
        password2Control.setErrors(null);
      } else {
        password2Control.setErrors({notEquals: true});
      }
    }
  }
}
