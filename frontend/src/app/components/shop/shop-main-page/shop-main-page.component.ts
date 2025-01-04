import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShopHeroBannerComponent } from '../shop-hero-banner/shop-hero-banner.component';
import { ShopProductCategoriesComponent } from '../shop-product-categories/shop-product-categories.component';
import { ShopFeaturedProductsComponent } from '../shop-featured-products/shop-featured-products.component';
import { ShopCustomersTestimonialsComponent } from '../shop-customers-testimonials/shop-customers-testimonials.component';

@Component({
  selector: 'shop-main-page',
  standalone: true,
  imports: [
    CommonModule,
    ShopCustomersTestimonialsComponent,
    ShopFeaturedProductsComponent,
    ShopProductCategoriesComponent,
    ShopHeroBannerComponent,
  ],
  templateUrl: './shop-main-page.component.html',
  styleUrl: './shop-main-page.component.css',
})
export class ShopMainPageComponent {}
