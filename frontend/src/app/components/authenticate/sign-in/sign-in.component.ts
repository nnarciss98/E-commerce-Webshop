import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.signInForm.get('email')!;
  }

  get password() {
    return this.signInForm.get('password')!;
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const { email, password } = this.signInForm.value;
      console.log('Sign-In Successful', { email, password });

      // Call authentication service here
      // Example:
      // this.authService.login(email, password).subscribe(
      //   (response) => console.log('Logged in successfully', response),
      //   (error) => console.error('Login failed', error)
      // );
    } else {
      console.log('Form is invalid');
    }
  }
}
