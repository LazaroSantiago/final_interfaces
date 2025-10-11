import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
  imports: [NgClass]
})
export class ProgressbarComponent {
  @ViewChild('audioRef') audioRef!: ElementRef<HTMLAudioElement>;
  currentTime = 0;
  duration = 0;
  volume = 0.5;
  heartHovered = false;
  heartActive = false;
  soundMute = false;
  songPlaying = false;
  stars = [1, 2, 3, 4, 5];
  hoverRating = 0;
  selectedRating = 0;

  ngAfterViewInit() {
    const audio = this.audioRef.nativeElement;
    audio.volume = this.volume;
  }

  changeVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.volume = +input.value / 100;
    const audio = this.audioRef.nativeElement;

    audio.volume = this.soundMute ? 0 : this.volume;
  }

  setHover(rating: number) {
    this.hoverRating = rating;
  }

  clearHover() {
    this.hoverRating = 0;
  }

  toggleRating(rating: number) {
    // if clicking the same star again, reset rating to 0
    if (this.selectedRating === rating) {
      this.selectedRating = 0;
    } else {
      this.selectedRating = rating;
    }
  }

  onTimeUpdate() {
    this.currentTime = this.audioRef.nativeElement.currentTime;
  }

  onLoadedMetadata() {
    this.duration = this.audioRef.nativeElement.duration;
  }

  seekAudio(event: any) {
    this.audioRef.nativeElement.currentTime = event.target.value;
  }

  setVolume(event: any) {
    this.volume = event.target.value;
    this.audioRef.nativeElement.volume = this.volume / 100;
  }

  togglePlay() {
    const audio = this.audioRef.nativeElement;
    this.songPlaying = !this.songPlaying;
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  toggleMute() {
    this.soundMute = !this.soundMute;
    this.audioRef.nativeElement.muted = this.soundMute;
  }

  seekBackward() {
    this.audioRef.nativeElement.currentTime = Math.max(0, this.audioRef.nativeElement.currentTime - 5);
  }

  seekForward() {
    this.audioRef.nativeElement.currentTime = Math.min(this.duration, this.audioRef.nativeElement.currentTime + 5);
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
}