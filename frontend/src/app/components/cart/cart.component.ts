import { Component, OnInit } from '@angular/core';
import { CartService } from '../shop/services/cart.service';
import { Cart, CartItems } from '../../components/types';
import { CommonModule } from '@angular/common';
import { AuthService } from '../shop/services/auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;
  total: number = 0;
  userEmail: string | null = null; // dynamical email from AuthService

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();
    if (!this.userEmail) {
      console.error('User email is required to load the cart. Please log in.');
      return;
    }
    this.loadCart();
  }

  // Fetch cart by user email
  loadCart(): void {
    if (!this.userEmail) return;
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
    if (!this.userEmail || newQuantity <= 0) return; // Prevent invalid states
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
    if (!this.userEmail) return;
    this.cartService
      .removeItemFromCart(this.userEmail, item.productId)
      .subscribe({
        next: () => {
          this.loadCart();
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
