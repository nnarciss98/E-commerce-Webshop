import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../types';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'shop-product-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-product-categories.component.html',
  styleUrl: './shop-product-categories.component.css'
})
export class ShopProductCategoriesComponent implements OnInit {
  isGridView = true; // Initial view mode
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((categories) => {
      // Assuming the category service provides a `name` and an image URL for each category
      this.categories = categories.map(category => ({
        ...category,
        imageUrl: `https://via.placeholder.com/100?text=${encodeURIComponent(category.name)}` // Generate placeholder image URL dynamically
      }));
    });
  }
}