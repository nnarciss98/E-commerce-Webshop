import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute to get the URL parameter
import { ProductService } from '../services/product.service'; // Service to fetch product details
import { Router } from '@angular/router';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-product-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-product-detail-page.component.html',
  styleUrls: ['./shop-product-detail-page.component.css'], // Corrected styleUrls key
})
export class ShopProductDetailPageComponent implements OnInit {
  productId: string | null = ''; // Holds the product ID from the route
  product: Product | undefined; // Product object to hold the details
  currentImageIndex: number = 0; // Index for the current image in the carousel

  constructor(
    private route: ActivatedRoute, // To access route parameters
    private productService: ProductService, // Service to get the product details
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    // Fetch the product details using the product ID
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((data) => {
        this.product = data;

        // Add placeholder images if `imageUrls` is empty or undefined
        if (this.product) {
          // Ensure `this.product` is defined before accessing properties
          if (!this.product.imageUrls || this.product.imageUrls.length === 0) {
            this.product.imageUrls = [
              `https://via.placeholder.com/200x150?text=${encodeURIComponent(
                this.product.name || 'Product'
              )}+Image1`,
              `https://via.placeholder.com/200x150?text=${encodeURIComponent(
                this.product.name || 'Product'
              )}+Image2`,
            ];
          }
        }
      });
    }
  }

  // Navigate to the previous image in the carousel
  prevImage(): void {
    if (this.product) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.product.imageUrls.length) %
        this.product.imageUrls.length;
    }
  }

  // Navigate to the next image in the carousel
  nextImage(): void {
    if (this.product) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.product.imageUrls.length;
    }
  }

  // Navigate back to the product list
  goBack(): void {
    this.router.navigate(['/shop']); // Redirects to the homepage
  }
}
