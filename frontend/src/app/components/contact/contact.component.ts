import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactFormModel = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.contactFormModel.name && this.contactFormModel.email && this.contactFormModel.message) {
      console.log('Contact Form Submitted:', this.contactFormModel);
      // Logic for sending form data to backend can be added here later
      alert('Your message has been submitted!');
    }
  }
}
