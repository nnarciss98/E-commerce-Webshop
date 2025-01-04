import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../types';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
private categories: Category[] = [
    {
        id: '1', name: 'Electronics', subcategories: [],
        imageUrl: ''
    },
    {
        id: '2', name: 'Home Appliances', subcategories: [],
        imageUrl: ''
    },
    {
        id: '3', name: 'Books', subcategories: [],
        imageUrl: ''
    },
    {
        id: '4', name: 'Clothing', subcategories: [],
        imageUrl: ''
    },
    {
        id: '5', name: 'Sports Equipment', subcategories: [],
        imageUrl: ''
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