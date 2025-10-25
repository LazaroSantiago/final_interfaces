import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRowRatingComponent } from './explore-row-rating.component';

describe('ExploreRowRatingComponent', () => {
  let component: ExploreRowRatingComponent;
  let fixture: ComponentFixture<ExploreRowRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreRowRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreRowRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
