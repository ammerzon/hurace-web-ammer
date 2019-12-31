import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkiersComponent} from './skiers.component';

describe('SkiersComponent', () => {
  let component: SkiersComponent;
  let fixture: ComponentFixture<SkiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkiersComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
