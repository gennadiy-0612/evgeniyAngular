import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentautoComponent } from './rentauto.component';

describe('RentautoComponent', () => {
  let component: RentautoComponent;
  let fixture: ComponentFixture<RentautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentautoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
