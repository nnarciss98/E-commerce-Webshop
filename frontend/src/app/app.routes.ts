import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { PromoComponent } from './components/promo/promo.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ShopMainPageComponent } from './components/shop/shop-main-page/shop-main-page.component';
import { ShopProductDetailPageComponent } from './components/shop/shop-product-detail-page/shop-product-detail-page.component';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'promo', component: PromoComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'shop', component: ShopMainPageComponent },
  { path: 'product/:id', component: ShopProductDetailPageComponent },
  { path: 'authenticate', component: AuthenticateComponent },
];
