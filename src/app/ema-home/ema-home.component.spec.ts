import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaHomeComponent } from './ema-home.component';

describe('EmaHomeComponent', () => {
  let component: EmaHomeComponent;
  let fixture: ComponentFixture<EmaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
