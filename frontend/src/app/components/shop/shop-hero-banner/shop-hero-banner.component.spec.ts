import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHeroBannerComponent } from './shop-hero-banner.component';

describe('ShopHeroBannerComponent', () => {
  let component: ShopHeroBannerComponent;
  let fixture: ComponentFixture<ShopHeroBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopHeroBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHeroBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
