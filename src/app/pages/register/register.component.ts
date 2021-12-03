import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validators: ValidatorsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  invalidInput(fieldName: string) {
    return this.registerForm.get(fieldName)?.invalid && this.registerForm.get(fieldName)?.touched
  }

  invalidConfirm() {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('confirmPassword')?.value;

    return (pass1 === pass2) ? false : true;
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      role: ['reciclador'],
    }, {
      validators: this.validators.matchPasswords('password', 'confirmPassword')
    });
  }

  save() {
    if (this.registerForm.invalid) {
      return Object.values(this.registerForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    this.authService.createUser(
      this.registerForm.get('email')?.value,
      this.registerForm.get('password')?.value,
      this.registerForm.get('displayName')?.value,
      this.registerForm.get('role')?.value
    );
  }

}
