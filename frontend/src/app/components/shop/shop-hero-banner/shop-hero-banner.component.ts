import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './shop-hero-banner.component.html',
  styleUrl: './shop-hero-banner.component.css',
})
export class ShopHeroBannerComponent {
  constructor(private router: Router) {}
  onShopNow() {
    console.log('Shop Now button clicked!');
    this.router.navigate(['']); // Redirects to the homepage
  }
}
