import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkierEditComponent} from './skier-edit.component';

describe('SkierEditComponent', () => {
  let component: SkierEditComponent;
  let fixture: ComponentFixture<SkierEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkierEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
