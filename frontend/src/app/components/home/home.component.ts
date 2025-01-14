import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from '../home/categories/categories.component';
import { PartenairesComponent } from '../home/partenaires/partenaires.component';
import { RouterModule } from '@angular/router'; // <-- Import RouterModule
import { ShopMainPageComponent } from '../shop/shop-main-page/shop-main-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CategoriesComponent,
    PartenairesComponent,
    ShopMainPageComponent,
    RouterModule,
  ], // <-- Ensure RouterModule is in the imports array
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
