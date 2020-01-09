import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderIndicatorComponent } from './gender-indicator.component';

describe('GenderIndicatorComponent', () => {
  let component: GenderIndicatorComponent;
  let fixture: ComponentFixture<GenderIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
