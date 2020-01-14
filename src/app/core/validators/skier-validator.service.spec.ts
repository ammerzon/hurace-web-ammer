import { TestBed } from '@angular/core/testing';

import { SkierValidatorService } from './skier-validator.service';

describe('SkierValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkierValidatorService = TestBed.get(SkierValidatorService);
    expect(service).toBeTruthy();
  });
});
