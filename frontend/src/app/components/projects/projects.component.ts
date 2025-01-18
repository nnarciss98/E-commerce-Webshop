import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  imagesWemmel: string[] = []; // Holds the list of image file names for Wemmel
  imagesPont: string[] = []; // Holds the list of image file names for Rue Pont
  currentIndexWemmel: number = 0; // Tracks the currently active slide for Wemmel
  currentIndexPont: number = 0; // Tracks the currently active slide for Rue Pont

  ngOnInit(): void {
    // Dynamically set the image file paths for both sets
    const imageCount = 6; // Update this with the number of images or fetch dynamically

    this.imagesWemmel = Array.from(
      { length: imageCount },
      (_, i) => `assets/projects/wemmel/${i + 1}.jpg`
    );

    this.imagesPont = Array.from(
      { length: imageCount },
      (_, i) => `assets/projects/rue-pont/${i + 1}.jpg`
    );
  }

  updateCarousel(index: number, type: string): void {
    if (type === 'wemmel') {
      this.currentIndexWemmel = index;
    } else if (type === 'pont') {
      this.currentIndexPont = index;
    }
  }
}
