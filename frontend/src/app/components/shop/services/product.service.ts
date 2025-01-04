import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [
    { id: '101', name: 'Smartphone', price: 699, description: 'High-end smartphone', stockQuantity: 50, categoryId: '1', imageUrls: []},
    { id: '102', name: 'Laptop', price: 1200, description: 'Gaming laptop', stockQuantity: 30, categoryId: '1', imageUrls: []},
    { id: '103', name: 'Tablet', price: 450, description: '10-inch tablet', stockQuantity: 20, categoryId: '1', imageUrls: []},
    { id: '104', name: 'Smartwatch', price: 199, description: 'Water-resistant smartwatch', stockQuantity: 80, categoryId: '1', imageUrls: []},
    { id: '105', name: 'Bluetooth Speaker', price: 50, description: 'Portable speaker', stockQuantity: 100, categoryId: '1', imageUrls: []},

    { id: '201', name: 'Refrigerator', price: 800, description: 'Double-door fridge', stockQuantity: 15, categoryId: '2', imageUrls: []},
    { id: '202', name: 'Microwave', price: 200, description: 'Countertop microwave', stockQuantity: 25, categoryId: '2', imageUrls: []},
    { id: '203', name: 'Washing Machine', price: 600, description: 'Front-load washing machine', stockQuantity: 10, categoryId: '2', imageUrls: []},
    { id: '204', name: 'Vacuum Cleaner', price: 150, description: 'Cordless vacuum cleaner', stockQuantity: 35, categoryId: '2', imageUrls: []},
    { id: '205', name: 'Air Purifier', price: 250, description: 'HEPA air purifier', stockQuantity: 50, categoryId: '2', imageUrls: []},

    { id: '301', name: 'Novel', price: 20, description: 'Bestselling novel', stockQuantity: 100, categoryId: '3', imageUrls: []},
    { id: '302', name: 'Science Fiction', price: 25, description: 'Popular sci-fi book', stockQuantity: 60, categoryId: '3', imageUrls: []},
    { id: '303', name: 'Biography', price: 30, description: 'Inspirational biography', stockQuantity: 40, categoryId: '3', imageUrls: []},
    { id: '304', name: 'Textbook', price: 50, description: 'College textbook', stockQuantity: 20, categoryId: '3', imageUrls: []},
    { id: '305', name: 'Cookbook', price: 35, description: 'Recipe collection', stockQuantity: 70, categoryId: '3', imageUrls: []},

    { id: '401', name: 'T-Shirt', price: 15, description: 'Comfortable cotton t-shirt', stockQuantity: 150, categoryId: '4', imageUrls: []},
    { id: '402', name: 'Jeans', price: 40, description: 'Slim-fit jeans', stockQuantity: 80, categoryId: '4', imageUrls: []},
    { id: '403', name: 'Jacket', price: 100, description: 'Warm winter jacket', stockQuantity: 50, categoryId: '4', imageUrls: []},
    { id: '404', name: 'Sneakers', price: 60, description: 'Trendy sneakers', stockQuantity: 120, categoryId: '4', imageUrls: []},
    { id: '405', name: 'Hat', price: 20, description: 'Stylish hat', stockQuantity: 200, categoryId: '4', imageUrls: []},

    { id: '501', name: 'Tennis Racket', price: 100, description: 'Professional tennis racket', stockQuantity: 30, categoryId: '5', imageUrls: []},
    { id: '502', name: 'Soccer Ball', price: 25, description: 'Official size soccer ball', stockQuantity: 100, categoryId: '5', imageUrls: []},
    { id: '503', name: 'Basketball', price: 30, description: 'Durable basketball', stockQuantity: 80, categoryId: '5', imageUrls: []},
    { id: '504', name: 'Yoga Mat', price: 20, description: 'Non-slip yoga mat', stockQuantity: 150, categoryId: '5', imageUrls: []},
    { id: '505', name: 'Dumbbells', price: 50, description: 'Adjustable dumbbell set', stockQuantity: 60, categoryId: '5', imageUrls: []},
  ];

  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(productId: string): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === productId);
    return of(product);
  }

  getProductsByCategoryId(categoryId: string): Observable<Product[]> {
    const products = this.products.filter((p) => p.categoryId === categoryId);
    return of(products);
  }
}