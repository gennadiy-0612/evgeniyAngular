import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoicezoneComponent } from './choicezone.component';

describe('ChoicezoneComponent', () => {
  let component: ChoicezoneComponent;
  let fixture: ComponentFixture<ChoicezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoicezoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoicezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
