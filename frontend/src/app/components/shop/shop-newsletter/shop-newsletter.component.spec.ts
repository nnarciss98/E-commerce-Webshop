import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNewsletterComponent } from './shop-newsletter.component';

describe('ShopNewsletterComponent', () => {
  let component: ShopNewsletterComponent;
  let fixture: ComponentFixture<ShopNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopNewsletterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
