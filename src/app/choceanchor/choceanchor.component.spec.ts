import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoceanchorComponent } from './choceanchor.component';

describe('ChoceanchorComponent', () => {
  let component: ChoceanchorComponent;
  let fixture: ComponentFixture<ChoceanchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoceanchorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoceanchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
