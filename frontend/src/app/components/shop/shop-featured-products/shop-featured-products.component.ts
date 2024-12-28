import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shop-featured-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-featured-products.component.html',
  styleUrl: './shop-featured-products.component.css'
})
export class ShopFeaturedProductsComponent {
  isGridView = true; // Default to grid view
  featuredProducts = [
    {
      id: 1,
      title: 'Smartphone',
      price: 699.99,
      imageUrl: 'https://via.placeholder.com/200x150?text=Smartphone'
    },
    {
      id: 2,
      title: 'Wireless Headphones',
      price: 199.99,
      imageUrl: 'https://via.placeholder.com/200x150?text=Headphones'
    },
    {
      id: 3,
      title: 'Gaming Laptop',
      price: 1499.99,
      imageUrl: 'https://via.placeholder.com/200x150?text=Laptop'
    },
    {
      id: 4,
      title: '4K TV',
      price: 899.99,
      imageUrl: 'https://via.placeholder.com/200x150?text=4K+TV'
    },
    {
      id: 5,
      title: 'Fitness Tracker',
      price: 99.99,
      imageUrl: 'https://via.placeholder.com/200x150?text=Fitness+Tracker'
    },
    {
      id: 6,
      title: 'Bluetooth Speaker',
      price: 49.99,
      imageUrl: 'https://via.placeholder.com/200x150?text=Speaker'
    }
  ];

  onBuyNow(productId: number) {
    console.log(`Buy Now clicked for product ID: ${productId}`);
    // Logic for adding to cart or navigating to product details can be added here
  }
}
