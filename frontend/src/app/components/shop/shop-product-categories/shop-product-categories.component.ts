import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'shop-product-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-product-categories.component.html',
  styleUrl: './shop-product-categories.component.css'
})
export class ShopProductCategoriesComponent {
  isGridView = true; // Initial view mode
  categories = [
    { title: 'Electronics', imageUrl: 'https://via.placeholder.com/100?text=Electronics' },
    { title: 'Clothing', imageUrl: 'https://via.placeholder.com/100?text=Clothing' },
    { title: 'Home Goods', imageUrl: 'https://via.placeholder.com/100?text=Home+Goods' },
    { title: 'Books', imageUrl: 'https://via.placeholder.com/100?text=Books' },
    { title: 'Toys', imageUrl: 'https://via.placeholder.com/100?text=Toys' },
    { title: 'Sports', imageUrl: 'https://via.placeholder.com/100?text=Sports' }
  ];

}
