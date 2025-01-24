import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../shop/services/category.service';
import { Category } from '../types'; // Ensure you have this file with the correct type definition.
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isNavbarOpen = false; // For navbar responsiveness
  isDropdownOpen = false; // For language dropdown visibility
  isMenuOpen = false; // To handle the menu toggle in your template
  categories: Category[] = []; // Fetched categories
  selectedLanguage: string = 'fr'; // Default language

  constructor(
    private categoryService: CategoryService,
    private translate: TranslateService
  ) {}

  /**
   * Toggles the navbar for mobile view
   */
  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  /**
   * Toggles the dropdown for language selection
   */
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  /**
   * Changes the language dynamically
   * @param language - The language code
   */
  useLanguage(language: string): void {
    this.translate.use(language);
    this.selectedLanguage = language;
  }

  /**
   * Fetches categories from the service on initialization
   */
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
