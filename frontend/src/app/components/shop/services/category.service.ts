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
      name: "Matériel d'installation",
      subcategories: [],
      imageUrl: 'assets/images/tools.svg',
    },
    {
      id: '2',
      name: 'Eclairage',
      subcategories: [],
      imageUrl: 'assets/images/lightbulb.svg',
    },
    {
      id: '3',
      name: 'Energie renouvelable',
      subcategories: [],
      imageUrl: 'assets/images/solar-energy.svg',
    },
    {
      id: '4',
      name: 'Câble',
      subcategories: [],
      imageUrl: 'assets/images/tools.svg',
    },
    {
      id: '5',
      name: 'Cheminement de câbles',
      subcategories: [],
      imageUrl: 'assets/images/tools.svg',
    },
    {
      id: '6',
      name: 'Distribution de courant',
      subcategories: [],
      imageUrl: 'assets/images/tools.svg',
    },
    {
      id: '7',
      name: 'Automatisation du bâtiment',
      subcategories: [],
      imageUrl: 'assets/images/tools.svg',
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
