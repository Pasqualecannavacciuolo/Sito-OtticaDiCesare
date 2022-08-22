import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowCategoriesComponent } from './slideshow-categories.component';

describe('SlideshowCategoriesComponent', () => {
  let component: SlideshowCategoriesComponent;
  let fixture: ComponentFixture<SlideshowCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideshowCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
