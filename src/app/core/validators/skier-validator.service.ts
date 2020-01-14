import {Injectable, OnInit} from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import {CountriesService, Country} from '@hurace-client/api';
import {map, startWith} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkierValidatorService {
  private countries: Country[];

  constructor(private countriesService: CountriesService) {
    this.countriesService.countriesGet().subscribe(countries => {
      this.countries = countries;
    });
  }

  validUrlValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const inputElement: HTMLInputElement = document.createElement('input');
      inputElement.type = 'url';
      inputElement.value = control.value;
      return !inputElement.checkValidity() ? {'validurl': {value: control.value}} : null;
    };
  }

  validCountryValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (this.countries === undefined) { return null; }
      const validCountry = this.countries.map(country => country.code).indexOf(control.value) !== -1;
      return !validCountry ? {'validcountry': {value: control.value}} : null;
    };
  }
}
