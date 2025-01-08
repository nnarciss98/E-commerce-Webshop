import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], // Add CommonModule here
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'], // Ensure correct spelling
})
export class NavbarComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
