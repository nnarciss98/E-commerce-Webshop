import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromoComponent } from './components/promo/promo.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ShopMainPageComponent } from './components/shop/shop-main-page/shop-main-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'promo', component: PromoComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'shop', component: ShopMainPageComponent },
];
