import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule], // Import RouterModule here to use routerLink
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'], // Note: Corrected `styleUrls` typo
})
export class FooterComponent {}
