import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImotionsComponent } from './imotions.component';

describe('ImotionsComponent', () => {
  let component: ImotionsComponent;
  let fixture: ComponentFixture<ImotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
