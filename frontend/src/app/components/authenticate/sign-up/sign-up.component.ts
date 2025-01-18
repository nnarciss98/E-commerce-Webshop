import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'sign-up',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8), this.passwordComplexityValidator]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidator
      }
    );
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

  get name() {
    return this.signUpForm.get('name')!;
  }

  get email() {
    return this.signUpForm.get('email')!;
  }

  get password() {
    return this.signUpForm.get('password')!;
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword')!;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { name, email, password } = this.signUpForm.value;
      console.log('Sign-Up Successful', { name, email, password });

      // Call registration service here
      // Example:
      // this.authService.register({ name, email, password }).subscribe(
      //   (response) => console.log('Registration successful', response),
      //   (error) => console.error('Registration failed', error)
      // );
    } else {
      console.log('Form is invalid');
    }
  }
}
