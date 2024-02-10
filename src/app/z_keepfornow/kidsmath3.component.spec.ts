import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsMath3Component } from './kidsmath3.component';

describe('KidsMath3Component', () => {
  let component: KidsMath3Component;
  let fixture: ComponentFixture<KidsMath3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsMath3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsMath3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
