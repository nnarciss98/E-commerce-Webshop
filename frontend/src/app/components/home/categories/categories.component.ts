import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = [
    {
      name: 'Catégorie 1',
      description: 'Description de la catégorie 1.',
      image: 'path/to/image1.jpg',
      link: '/category1',
    },
    {
      name: 'Catégorie 2',
      description: 'Description de la catégorie 2.',
      image: 'path/to/image2.jpg',
      link: '/category2',
    },
    {
      name: 'Catégorie 3',
      description: 'Description de la catégorie 3.',
      image: 'path/to/image3.jpg',
      link: '/category3',
    },
  ];
}
