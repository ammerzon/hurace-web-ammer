import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceStatusIndicatorComponent } from './race-status-indicator.component';

describe('RaceStatusIndicatorComponent', () => {
  let component: RaceStatusIndicatorComponent;
  let fixture: ComponentFixture<RaceStatusIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceStatusIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
