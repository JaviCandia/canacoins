import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor( private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }

  invalidInput(fieldName: string) {
    return this.loginForm.get(fieldName)?.invalid && this.loginForm.get(fieldName)?.touched
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  save() {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    this.authService.login(
      this.loginForm.get('email')?.value,
      this.loginForm.get('password')?.value,
    );
  }

}
