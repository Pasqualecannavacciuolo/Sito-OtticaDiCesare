import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCategoriesComponent } from './general-categories.component';

describe('GeneralCategoriesComponent', () => {
  let component: GeneralCategoriesComponent;
  let fixture: ComponentFixture<GeneralCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
