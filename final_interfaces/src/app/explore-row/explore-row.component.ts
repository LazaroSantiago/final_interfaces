import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-explore-row',
  templateUrl: './explore-row.component.html',
  styleUrls: ['./explore-row.component.scss'],
  imports: []
})
export class ExploreRowComponent {
  @Input()
  title = 'Genre';

  @Input()
  genres: string[] = [];

  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef<HTMLDivElement>;

  isAtStart = true;
  isAtEnd = false;
  isContentShort = false; // New property to track if content is shorter than container

  ngAfterViewInit() {
    // Check initial scroll position after view is initialized
    setTimeout(() => {
      this.checkScrollPosition();
    });
  }

  scrollLeft() {
    const container = this.carouselContainer.nativeElement;
    container.scrollBy({ left: -350, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 300);
  }

  scrollRight() {
    const container = this.carouselContainer.nativeElement;
    container.scrollBy({ left: 350, behavior: 'smooth' });
    setTimeout(() => this.checkScrollPosition(), 300);
  }

  checkScrollPosition() {
    const container = this.carouselContainer.nativeElement;
    const scrollLeft = container.scrollLeft;
    const clientWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;

    // Check if content is shorter than container (with small buffer)
    this.isContentShort = scrollWidth <= clientWidth + 5;

    // Update arrow states
    this.isAtStart = scrollLeft <= 0;
    this.isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;
  }

  // Helper method to determine if arrows should be shown
  shouldShowArrows(): boolean {
    return !this.isContentShort;
  }
}