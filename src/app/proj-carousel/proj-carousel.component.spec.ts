import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCarouselComponent } from './proj-carousel.component';

describe('ProjCarouselComponent', () => {
  let component: ProjCarouselComponent;
  let fixture: ComponentFixture<ProjCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
