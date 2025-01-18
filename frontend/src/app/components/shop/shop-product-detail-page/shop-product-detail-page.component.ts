import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../../rating/rating.component';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';

@Component({
    selector: 'app-shop-product-detail-page',
    imports: [CommonModule, RatingComponent, QuantitySelectorComponent],
    templateUrl: './shop-product-detail-page.component.html',
    styleUrls: ['./shop-product-detail-page.component.css']
})
export class ShopProductDetailPageComponent implements OnInit {
  productId: string | null = null; // Explicit null initialization
  product: Product | undefined; // Product object
  currentImageIndex: number = 0; // Index for image carousel

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch product ID from the route
    this.productId = this.route.snapshot.paramMap.get('id');

    if (this.productId) {
      // Retrieve product data using the ProductService
      this.productService.getProductById(this.productId).subscribe({
        next: (data) => {
          this.product = data;

          // Handle missing image URLs by providing a default image
          if (
            this.product &&
            (!this.product.imageUrls || this.product.imageUrls.length === 0)
          ) {
            this.product.imageUrls = [
              `https://via.placeholder.com/600x400?text=${encodeURIComponent(
                this.product.name || 'No Image'
              )}`,
            ];
          }
        },
        error: (err) => {
          console.error('Error fetching product:', err);
          this.router.navigate(['/shop']); // Redirect to shop in case of an error
        },
      });
    } else {
      // Redirect to the shop if no product ID is found
      this.router.navigate(['/shop']);
    }
  }

  /**
   * Navigate to the previous image in the product's image carousel.
   */
  prevImage(): void {
    if (this.product?.imageUrls?.length) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.product.imageUrls.length) %
        this.product.imageUrls.length;
    }
  }

  /**
   * Navigate to the next image in the product's image carousel.
   */
  nextImage(): void {
    if (this.product?.imageUrls?.length) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.product.imageUrls.length;
    }
  }

  /**
   * Navigate back to the shop page.
   */
  // goBack(): void {
  //   this.router.navigate(['/shop']);
  // }

  onRatingChange(newRating: number): void {
    console.log('New rating:', newRating);
    // Optionally, save the rating to a server or update the product data
  }

  // For quantity selector
  initialQuantity = 1;

  onQuantityChange(newQuantity: number): void {
    console.log('New Quantity:', newQuantity);
  }
}
