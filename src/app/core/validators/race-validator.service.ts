import {Injectable} from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import {Race} from '@hurace-client/api/model/race';

@Injectable({
  providedIn: 'root'
})
export class RaceValidatorService {

  constructor() {
  }

  validRaceValidator(races: Race[]): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (races === undefined) {
        return null;
      }
      const validRace = races.map(race => race.id).indexOf(control.value) !== -1;
      return !validRace ? {'validrace': {value: control.value}} : null;
    };
  }
}
