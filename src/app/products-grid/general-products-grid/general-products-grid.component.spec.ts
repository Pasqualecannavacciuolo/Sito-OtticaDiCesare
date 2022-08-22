import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralProductsGridComponent } from './general-products-grid.component';

describe('GeneralProductsGridComponent', () => {
  let component: GeneralProductsGridComponent;
  let fixture: ComponentFixture<GeneralProductsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralProductsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
