import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-rating',
    imports: [CommonModule],
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() maxStars: number = 5; // Maximum number of stars
  @Input() currentRating: number = 0; // Current rating value
  @Input() readOnly: boolean = false; // If true, prevents user from interacting
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>(); // Emits the selected rating

  /**
   * Sets the rating value and emits the ratingChange event.
   * @param starIndex The selected star index (1-based).
   */
  setRating(starIndex: number): void {
    if (!this.readOnly) {
      this.currentRating = starIndex;
      this.ratingChange.emit(this.currentRating);
    }
  }
}
