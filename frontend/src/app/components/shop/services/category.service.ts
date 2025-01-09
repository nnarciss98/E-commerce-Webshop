import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Category[] = [
    {
      id: '1',
      name: 'Electronics',
      subcategories: [],
      imageUrl: 'assets/images/materiel-installation.png',
    },
    {
      id: '2',
      name: 'Home Appliances',
      subcategories: [],
      imageUrl: 'assets/images/lightbulb.png',
    },
    {
      id: '3',
      name: 'Books',
      subcategories: [],
      imageUrl: 'assets/images/green-energy.png',
    },
    {
      id: '4',
      name: 'Clothing',
      subcategories: [],
      imageUrl: 'assets/images/copper-wire.png',
    },
    {
      id: '5',
      name: 'Sports Equipment',
      subcategories: [],
      imageUrl: 'assets/images/decentralized.png',
    },
    {
      id: '6',
      name: 'Sports Equipment',
      subcategories: [],
      imageUrl: 'assets/images/electrical-panel.png',
    },
    {
      id: '7',
      name: 'Sports Equipment',
      subcategories: [],
      imageUrl: 'assets/images/smart-city.png',
    },
  ];

  constructor() {}

  getAllCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getCategoryById(categoryId: string): Observable<Category | undefined> {
    const category = this.categories.find((c) => c.id === categoryId);
    return of(category);
  }

  getCategoriesByParentId(parentCategoryId: string): Observable<Category[]> {
    const subcategories = this.categories.filter(
      (c) => c.parentCategoryId === parentCategoryId
    );
    return of(subcategories);
  }
}
