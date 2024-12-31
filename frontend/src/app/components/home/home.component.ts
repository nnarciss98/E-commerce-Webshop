import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../home/categories/categories.component';
import { PartenairesComponent } from '../home/partenaires/partenaires.component';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesComponent,
    PartenairesComponent,
    RouterModule,
  ], // <-- Ensure RouterModule is in the imports array
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
