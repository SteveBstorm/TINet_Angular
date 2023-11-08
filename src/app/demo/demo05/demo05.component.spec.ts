import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05Component } from './demo05.component';

describe('Demo05Component', () => {
  let component: Demo05Component;
  let fixture: ComponentFixture<Demo05Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo05Component]
    });
    fixture = TestBed.createComponent(Demo05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
