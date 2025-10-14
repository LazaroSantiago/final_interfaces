import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  imports: [CommonModule]
})
export class ProgressbarComponent {
  @ViewChild('audioRef') audioRef!: ElementRef<HTMLAudioElement>;

  // Audio controls
  songPlaying = false;
  soundMute = false;
  volume = 1;
  currentTime = 0;
  duration = 0;

  // Heart icon
  heartHovered = false;
  heartActive = false;

  // Rating system
  stars = [1, 2, 3, 4, 5];
  selectedRating = 0;
  hoverRating = 0;
  hasRated = false; // Track if user has rated current song

  // Audio control methods
  togglePlay() {
    this.songPlaying = !this.songPlaying;
    if (this.songPlaying) {
      this.audioRef.nativeElement.play();
    } else {
      this.audioRef.nativeElement.pause();
    }
  }

  toggleMute() {
    this.soundMute = !this.soundMute;
    this.audioRef.nativeElement.muted = this.soundMute;
  }

  changeVolume(event: any) {
    this.volume = event.target.value / 100;
    this.audioRef.nativeElement.volume = this.volume;
    // Auto-unmute when volume is adjusted
    if (this.soundMute && this.volume > 0) {
      this.soundMute = false;
      this.audioRef.nativeElement.muted = false;
    }
  }

  seekAudio(event: any) {
    this.currentTime = event.target.value;
    this.audioRef.nativeElement.currentTime = this.currentTime;
  }

  onTimeUpdate() {
    this.currentTime = this.audioRef.nativeElement.currentTime;
  }

  onLoadedMetadata() {
    this.duration = this.audioRef.nativeElement.duration;
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Rating methods
  setHover(rating: number) {
    if (!this.hasRated) {
      this.hoverRating = rating;
    }
  }

  clearHover() {
    this.hoverRating = 0;
  }

  toggleRating(rating: number) {
    // If clicking the same rating, toggle it off
    if (this.selectedRating === rating) {
      this.selectedRating = 0;
      this.hasRated = false;
    } else {
      this.selectedRating = rating;
      this.hasRated = true;
    }
    this.hoverRating = 0; // Clear hover after click

    // Emit rating change if needed
    // this.ratingChange.emit(this.selectedRating);
  }

  // Helper method to check if star should have idle animation
  shouldAnimateStar(starIndex: number): boolean {
    return !this.hasRated &&
      this.selectedRating === 0 &&
      this.hoverRating === 0;
  }
}