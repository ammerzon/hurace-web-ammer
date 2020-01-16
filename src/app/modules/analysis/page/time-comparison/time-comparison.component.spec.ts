import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TimeComparisonComponent} from './time-comparison.component';

describe('TimeComparisonComponent', () => {
  let component: TimeComparisonComponent;
  let fixture: ComponentFixture<TimeComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimeComparisonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
