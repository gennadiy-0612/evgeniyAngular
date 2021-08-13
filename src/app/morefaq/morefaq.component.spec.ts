import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorefaqComponent } from './morefaq.component';

describe('MorefaqComponent', () => {
  let component: MorefaqComponent;
  let fixture: ComponentFixture<MorefaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorefaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MorefaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
