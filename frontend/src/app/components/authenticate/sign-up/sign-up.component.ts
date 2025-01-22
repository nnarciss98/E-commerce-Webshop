import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../shop/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-up',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            this.passwordComplexityValidator,
          ],
        ],
        confirmPassword: ['', Validators.required],
        birthday: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator,
      }
    );
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')!;
  }

  get name() {
    return this.signUpForm.get('name')!;
  }

  get email() {
    return this.signUpForm.get('email')!;
  }

  get password() {
    return this.signUpForm.get('password')!;
  }

  get birthday() {
    return this.signUpForm.get('birthday')!;
  }

  passwordComplexityValidator(control: any) {
    const value = control.value || '';
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const isValidLength = value.length >= 8;

    if (hasUpperCase && hasLowerCase && hasNumeric && isValidLength) {
      return null;
    } else {
      return { passwordComplexity: true };
    }
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { name, email, password, birthday } = this.signUpForm.value;
      console.log('Sign-Up Successful', { name, email, password, birthday });

      // Call AuthService to register the user
      this.authService.register(name, email, password).subscribe(
        (response) => {
          console.log('Registration successful', response);
          // After successful registration, navigate to the login page or dashboard
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
