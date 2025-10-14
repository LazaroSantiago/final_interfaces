import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreRowComponent } from './explore-row.component';

describe('ExploreRowComponent', () => {
  let component: ExploreRowComponent;
  let fixture: ComponentFixture<ExploreRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
