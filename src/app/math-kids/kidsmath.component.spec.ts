import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsMathComponent } from './kidsmath.component';

describe('KidsMathComponent', () => {
  let component: KidsMathComponent;
  let fixture: ComponentFixture<KidsMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
