import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-explore-row',
  templateUrl: './explore-row.component.html',
  styleUrls: ['./explore-row.component.scss']
})
export class ExploreRowComponent {
  @ViewChild('carouselContainer', { static: true }) carouselContainer!: ElementRef<HTMLDivElement>;

  isAtStart = true;
  isAtEnd = false;

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
    this.isAtStart = container.scrollLeft <= 0;
    this.isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
  }
}