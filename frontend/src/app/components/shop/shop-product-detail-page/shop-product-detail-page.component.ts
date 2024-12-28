import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Import ActivatedRoute to get the URL parameter
import { ProductService } from '../services/product.service';  // Service to fetch product details
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-product-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './shop-product-detail-page.component.html',
  styleUrl: './shop-product-detail-page.component.css'
})
export class ShopProductDetailPageComponent implements OnInit {
  productId: string | null = '';
  product: any = {};  // Product object to hold the details

  constructor(
    private route: ActivatedRoute,  // To access route parameters
    private productService: ProductService,  // Service to get the product details
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    
    // Fetch the product details using the product ID
    if (this.productId) {
      this.productService.getProductById(this.productId).subscribe((data) => {
        this.product = data;  // Set product data to the component's product property
      });
    }
  }

  goBack(){
    this.router.navigate(['/shop']); // Redirects to the homepage
  }

}
