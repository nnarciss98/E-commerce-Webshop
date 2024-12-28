import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductCategoriesComponent } from './shop-product-categories.component';

describe('ShopProductCategoriesComponent', () => {
  let component: ShopProductCategoriesComponent;
  let fixture: ComponentFixture<ShopProductCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopProductCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
