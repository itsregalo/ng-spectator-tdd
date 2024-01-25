import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsSliderComponent } from './items-slider.component';

describe('ItemsSliderComponent', () => {
  let component: ItemsSliderComponent;
  let fixture: ComponentFixture<ItemsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
