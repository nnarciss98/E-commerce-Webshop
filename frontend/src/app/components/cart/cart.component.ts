import { Component, OnInit } from '@angular/core';
import { CartService } from '../shop/services/cart.service';
import { Cart, CartItems } from '../../components/types'; // Import the Cart and CartItems types
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true, // Make the component standalone
  imports: [CommonModule], // Import necessary modules
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;
  total: number = 0;
  userEmail: string = 'user@example.com'; // This should be dynamic or passed as an input from parent component

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  // Fetch cart by user email
  loadCart(): void {
    this.cartService.getCartByUserEmail(this.userEmail).subscribe({
      next: (cart) => {
        this.cart = cart;
        this.calculateTotal();
      },
      error: (err) => {
        console.error('Error loading cart:', err);
      },
    });
  }

  // Update quantity of an item in the cart
  updateQuantity(item: CartItems, newQuantity: number): void {
    if (newQuantity <= 0) return; // Prevent negative or zero quantities
    this.cartService
      .addItemToCart(this.userEmail, item.productId, newQuantity)
      .subscribe({
        next: () => {
          this.loadCart(); // Reload the cart after updating quantity
        },
        error: (err) => {
          console.error('Error updating quantity:', err);
        },
      });
  }

  // Remove an item from the cart
  removeItem(item: CartItems): void {
    this.cartService
      .removeItemFromCart(this.userEmail, item.productId)
      .subscribe({
        next: () => {
          this.loadCart(); // Reload the cart after removing the item
        },
        error: (err) => {
          console.error('Error removing item:', err);
        },
      });
  }

  // Calculate the total price of the items in the cart
  calculateTotal(): void {
    if (this.cart && this.cart.items) {
      this.total = this.cart.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    }
  }
}
