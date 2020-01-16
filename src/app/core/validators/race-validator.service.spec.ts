import {TestBed} from '@angular/core/testing';

import {RaceValidatorService} from './race-validator.service';

describe('RaceValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaceValidatorService = TestBed.get(RaceValidatorService);
    expect(service).toBeTruthy();
  });
});
