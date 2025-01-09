import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories = [
    {
      name: "Matériel d'installation",
      description:
        "Matériaux d'installation : tubes, fixations, interrupteurs, prises, boîtiers.",
      image: 'assets/images/tools.svg',
      link: '/category1',
    },
    {
      name: 'Eclairage',
      description:
        'Éclairage LED, sécurité, déco : OSRAM, Philips, LEDVANCE et plus. Pour tous vos projets.',
      image: 'assets/images/lightbulb.svg',
      link: '/category2',
    },
    {
      name: 'Energie renouvelable',
      description:
        'HVAC et énergie : Alpha Innotec, Bosch, Kaysun, Ventilair. Panneaux solaires, onduleurs, bornes et batteries.',
      image: 'assets/images/solar-energy.svg',
      link: '/category3',
    },
    {
      name: 'Câble',
      description:
        "Câbles d'alimentation, industriels et télécom : INSTALLATIEKABEL, TOPCABLE, PREFLEX SAFE. Qualité et durabilité pour tous vos projets.",
      image: 'assets/images/tools.svg',
      link: '/category3',
    },
    {
      name: 'Cheminement de câbles',
      description:
        'Busways, batteries, transformateurs : Italfarad, Schneider, Legrand. Solutions fiables pour transport et distribution d’énergie. Disponibles sur notre e-shop.',
      image: 'assets/images/tools.svg',
      link: '/category3',
    },
    {
      name: 'Distribution de courant',
      description:
        'Busways, batteries, transformateurs : Italfarad, Schneider, Legrand. Solutions fiables pour transport et distribution d’énergie. Disponibles sur notre e-shop.',
      image: 'assets/images/tools.svg',
      link: '/category3',
    },
    {
      name: 'Automatisation du bâtiment',
      description: '',
      image: 'assets/images/tools.svg',
      link: '/category3',
    },
  ];
}
