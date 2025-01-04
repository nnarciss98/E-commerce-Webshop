import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../types';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'shop-featured-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './shop-featured-products.component.html',
  styleUrl: './shop-featured-products.component.css'
})
export class ShopFeaturedProductsComponent {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.featuredProducts = products.map(product => ({
        ...product,
        imageUrls: [`https://via.placeholder.com/100?text=Product`] // Keep only the first image
      }));
    });
  }

  onBuyNow(productId: string) {
    console.log(`Buy Now clicked for product ID: ${productId}`);
    // Logic for adding to cart or navigating to product details can be added here
  }
}
