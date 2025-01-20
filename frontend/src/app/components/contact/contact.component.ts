import { CommonModule } from '@angular/common';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http'; // Correct import of HttpClient
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  phone: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  // Contact form model for two-way binding
  form: ContactForm = {
    name: '',
    email: '',
    message: '',
    phone: '',
  };

  // Correct injection of HttpClient
  http = inject(HttpClient);

  send(contactForm: any) {
    if (contactForm.invalid) {
      const errorModal = document.getElementById('errorModal');
      if (errorModal) {
        errorModal.classList.remove('hidden');
      }
      return; // Prevent further execution
    }

    this.http
      .post<any>(
        'https://api.emailjs.com/api/v1.0/email/send',
        {
          lib_version: '4.4.1',
          service_id: 'service_3s60t2i',
          template_id: 'template_l28cl5t',
          template_params: this.form,
          user_id: '75RX0XDmp380381Sr',
        },
        {
          observe: 'body',
        }
      )
      .subscribe({
        next: (response) => {
          console.log('Message sent!', response);
          // Show success modal
          const successModal = document.getElementById('successModal');
          if (successModal) {
            successModal.classList.remove('hidden');
          }
          contactForm.reset(); // Reset the form
        },
        error: (err) => {
          console.error('Error sending email:', err);
          // Show error modal
          const errorModal = document.getElementById('errorModal');
          if (errorModal) {
            errorModal.classList.remove('hidden');
          }
        },
      });
  }
}
