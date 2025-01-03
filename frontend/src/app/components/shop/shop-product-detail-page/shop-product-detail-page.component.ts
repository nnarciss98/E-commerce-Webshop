import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute to get the URL parameter
import { ProductService } from '../services/product.service';  // Service to fetch product details
import { Router } from '@angular/router';
import { Product } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-product-detail-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-product-detail-page.component.html',
  styleUrl: './shop-product-detail-page.component.css'
})
export class ShopProductDetailPageComponent implements OnInit {
  productId: string | null = '';
  product: Product | undefined;  // Product object to hold the details
  currentImageIndex: number = 0;  // Index for the current image in the carousel

  constructor(
    private route: ActivatedRoute,  // To access route parameters
    private productService: ProductService,  // Service to get the product details
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');

    // Fetch the product details using the product ID
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((data) => {
        if (this.productId) {
          this.productService.getProductById(this.productId).subscribe((data) => {
            this.product = data; // Set product data to the component's product property
            
            // Add placeholder images if `imageUrls` is empty or undefined
            if (this.product?.imageUrls || this.product?.imageUrls.length === 0) {
              this.product.imageUrls = [
                `https://via.placeholder.com/200x150?text=${encodeURIComponent(this.product.name)}+Image1`,
                `https://via.placeholder.com/200x150?text=${encodeURIComponent(this.product.name)}+Image2`
              ];
            }
          });
        }
      });
    }
  }

  // Navigate to the previous image in the carousel
  prevImage(): void {
    if (this.product && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  // Navigate to the next image in the carousel
  nextImage(): void {
    if (this.product && this.currentImageIndex < (this.product.imageUrls.length - 1)) {
      this.currentImageIndex++;
    }
  }

  // Navigate back to the product list
  goBack(): void {
    this.router.navigate(['/shop']); // Redirects to the homepage
  }

}
