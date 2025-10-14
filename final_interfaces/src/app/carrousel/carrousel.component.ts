import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Track } from '../track';

@Component({
  selector: 'app-carrousel',
  imports: [CardComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss'
})
export class CarrouselComponent {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef<HTMLDivElement>;

  @Input()
  title = '';
  @Input()
  items: Track[] = [];

  startX = 0;
  scrollLeft = 0;
  isAtStart = true;
  isAtEnd = false;
  private resizeObserver!: ResizeObserver;
  private scrollAmount = 500;

  ngAfterViewInit() {
    this.checkScrollPosition();

    // Observe resize events to update arrow visibility
    this.resizeObserver = new ResizeObserver(() => {
      this.checkScrollPosition();
    });

    this.resizeObserver.observe(this.carouselContainer.nativeElement);
    this.carouselContainer.nativeElement.addEventListener('scroll', this.checkScrollPosition.bind(this));
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  scrollToLeft() {
    this.carouselContainer.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth'
    });

    // Check position after scroll completes
    setTimeout(() => this.checkScrollPosition(), this.scrollAmount);
  }

  scrollRight() {
    this.carouselContainer.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(() => this.checkScrollPosition(), this.scrollAmount);
  }

  checkScrollPosition() {
    const container = this.carouselContainer.nativeElement;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    // Check if at start (with a small buffer for rounding errors)
    this.isAtStart = scrollLeft <= 10;

    // Check if at end (with a small buffer for rounding errors)
    this.isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
  }

}
