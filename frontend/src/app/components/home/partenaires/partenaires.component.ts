import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { url } from 'inspector';

@Component({
  selector: 'app-partenaires',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css'],
})
export class PartenairesComponent {
  logos = [
    {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/ABB_logo.svg',
    },
    {
      id: 2,
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Logo_Legrand_SA.svg',
    },
    {
      id: 3,
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Philips_logo_new.svg',
    },
    {
      id: 4,
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
    },
    {
      id: 5,
      url: 'https://images.seeklogo.com/logo-png/48/1/rittal-logo-png_seeklogo-485591.png?v=1957122227481271152',
    },
    {
      id: 6,
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Schneider_Electric_2007.svg',
    },
    {
      id: 7,
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Logo_SMA.svg',
    },
    { id: 8, svg: 'path-to-logo-8' },
    { id: 9, svg: 'path-to-logo-9' },
  ];

  chunkedLogos: any[][] = [];
  chunkSize = 6; // Nombre d'éléments à afficher par diapositive

  constructor() {
    this.chunkLogos();
  }

  chunkLogos() {
    for (let i = 0; i < this.logos.length; i += this.chunkSize) {
      this.chunkedLogos.push(this.logos.slice(i, i + this.chunkSize));
    }
  }
}
