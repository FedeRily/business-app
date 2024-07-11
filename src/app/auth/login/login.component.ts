import { Component, Inject, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { SessionStorageService } from '../../core/services/session-storage.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private sessionStorageService: SessionStorageService,
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.sessionStorageService.clear();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Usuario:', this.loginForm.get('username')?.value);
      console.log('Contraseña:', this.loginForm.get('password')?.value);
      this.authService.setToken('1234567890');
      this.sessionStorageService.set('token', '1234567890');
      this.router.navigate(['app/home']);
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
