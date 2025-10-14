import { NgClass } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [NgClass]
})
export class CardComponent {
  @Input() coverart: string = '';
  @Input() title: string = '';
  @Input() artist: string = '';
  @Input() collection: string = '';
  @Input() year: number = 0;
  @Input() isShareable: boolean = false;
  @Input() rating: number = 0;
  @Input() heartActive: boolean = false;
  @Input() isPodcast: boolean = false;
  @Output() ratingChange = new EventEmitter<number>();

  constructor(private router: Router) { }

  heartHovered = false;
  // heartActive = false;
  hoverRating = 0;

  setRating(stars: number) {
    console.log(this.isShareable);

    // If clicking the same star that's already active, reset to 0
    const newRating = this.rating === stars ? 0 : stars;

    // Update local rating
    this.rating = newRating;

    // Emit the change to parent component
    this.ratingChange.emit(newRating);
  }

  navigateToSongDetail() {
    this.router.navigate(['/song']);
  }

  navigateToPlaylist() {
    this.router.navigate(['/playlist']);
  }

  navigateToPodcast() {
    this.router.navigate(['/podcast']);
  }
}