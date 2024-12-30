import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  categories = [
    {
      name: "Matériel d'installation",
      description:
        "Matériaux d'installation : tubes, fixations, interrupteurs, prises, boîtiers.",
      image: 'path/to/image1.jpg',
      link: '/category1',
    },
    {
      name: 'Eclairage',
      description:
        'Éclairage LED, sécurité, déco : OSRAM, Philips, LEDVANCE et plus. Pour tous vos projets.',
      image: 'path/to/image2.jpg',
      link: '/category2',
    },
    {
      name: 'Energie renouvelable',
      description:
        'HVAC et énergie : Alpha Innotec, Bosch, Kaysun, Ventilair. Panneaux solaires, onduleurs, bornes et batteries.',
      image: 'path/to/image3.jpg',
      link: '/category3',
    },
    {
      name: 'Câble',
      description:
        "Câbles d'alimentation, industriels et télécom : INSTALLATIEKABEL, TOPCABLE, PREFLEX SAFE. Qualité et durabilité pour tous vos projets.",
      image: 'path/to/image3.jpg',
      link: '/category3',
    },
    {
      name: 'Cheminement de câbles',
      description:
        'Busways, batteries, transformateurs : Italfarad, Schneider, Legrand. Solutions fiables pour transport et distribution d’énergie. Disponibles sur notre e-shop.',
      image: 'path/to/image3.jpg',
      link: '/category3',
    },
    {
      name: 'Distribution de courant',
      description:
        'Busways, batteries, transformateurs : Italfarad, Schneider, Legrand. Solutions fiables pour transport et distribution d’énergie. Disponibles sur notre e-shop.',
      image: 'path/to/image3.jpg',
      link: '/category3',
    },
    {
      name: 'Automatisation du bâtiment',
      description: 'Description de la catégorie 3.',
      image: 'path/to/image3.jpg',
      link: '/category3',
    },
  ];
}
