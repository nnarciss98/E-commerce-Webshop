import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Dummy data for products
  private products = [
    { id: '1', name: 'Product 1', price: 100, description: 'Description for product 1', imageUrl: 'https://via.placeholder.com/300' },
    { id: '2', name: 'Product 2', price: 200, description: 'Description for product 2', imageUrl: 'https://via.placeholder.com/300' },
    { id: '3', name: 'Product 3', price: 300, description: 'Description for product 3', imageUrl: 'https://via.placeholder.com/300' },
  ];

  constructor() { }

  // Simulate an HTTP request to fetch product details by ID
  getProductById(id: string): Observable<any> {
    const product = this.products.find(p => p.id === id);
    return of(product);  // Return product as observable
  }
}
