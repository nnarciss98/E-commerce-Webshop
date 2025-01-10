import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../shop/services/category.service';
import { Category } from '../types'; // Ensure you have this file with the correct type definition.

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavbarOpen = false;
  categories: Category[] = []; // Hold the fetched categories here

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Fetch all categories when the component initializes
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
