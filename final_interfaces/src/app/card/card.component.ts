import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [NgClass]
})
export class CardComponent {
  heartHovered = false;
  heartActive = false;
  rating = 0;
  hoverRating = 0;

  setRating(stars: number) {
    this.rating = stars;
    // You can add additional logic here, like saving to a service
    console.log(`Rating set to: ${stars} stars`);
  }
}