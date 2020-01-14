import {Pipe, PipeTransform} from '@angular/core';
import {RaceType} from '@hurace-client/api/model/raceType';

@Pipe({name: 'raceType'})
export class RaceTypePipe implements PipeTransform {
  transform(value: RaceType, exponent?: number): string {
    switch (value) {
      case 'slalom':
        return 'SL';
      case 'superSlalom':
        return 'GS';
    }
  }
}
