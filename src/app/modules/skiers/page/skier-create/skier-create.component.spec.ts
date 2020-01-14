import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkierCreateComponent} from './skier-create.component';

describe('SkierCreateComponent', () => {
  let component: SkierCreateComponent;
  let fixture: ComponentFixture<SkierCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkierCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkierCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
