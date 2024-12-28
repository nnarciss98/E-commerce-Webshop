import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  


@Component({
  selector: 'shop-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop-newsletter.component.html',
  styleUrl: './shop-newsletter.component.css'
})
export class ShopNewsletterComponent {
  email: string = '';

  onSubscribe() {
    if (this.email) {
      console.log('Newsletter Subscription:', this.email);
      // Here, you would send the email to the backend to subscribe the user
      alert(`Thank you for subscribing with ${this.email}!`);
      this.email = ''; // Clear the input field after submission
    }
  }
}
