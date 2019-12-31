import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrentSkierComponent} from './current-skier.component';

describe('CurrentSkierComponent', () => {
  let component: CurrentSkierComponent;
  let fixture: ComponentFixture<CurrentSkierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentSkierComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSkierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
