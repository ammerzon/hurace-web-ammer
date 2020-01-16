import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunBarComponent } from './run-bar.component';

describe('RunBarComponent', () => {
  let component: RunBarComponent;
  let fixture: ComponentFixture<RunBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
