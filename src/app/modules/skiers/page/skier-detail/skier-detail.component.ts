import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CountriesService, Country} from '@hurace-client/api';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {SkierValidatorService} from '@app/validators/skier-validator.service';

@Component({
  selector: 'app-skier-detail',
  templateUrl: './skier-detail.component.html',
  styleUrls: ['./skier-detail.component.scss']
})
export class SkierDetailComponent implements OnInit {
  skierForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    birthday: new FormControl('', [
      Validators.required,
    ]),
    pictureUrl: new FormControl('', [
      this.skierValidatorService.validUrlValidator()
    ]),
    country: new FormControl('', [
      Validators.required,
      this.skierValidatorService.validCountryValidator()
    ]),
    gender: new FormControl('', [
      Validators.required,
    ])
  });

  public countries: Country[];
  filteredCountries: Observable<Country[]>;
  maxBirthday: Date;

  constructor(private skierValidatorService: SkierValidatorService, private countriesService: CountriesService) {
    this.maxBirthday = new Date();
  }

  ngOnInit() {
    this.countriesService.getAllCountries().subscribe(countries => {
      this.countries = countries;
      this.filteredCountries = this.skierForm.get('country').valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        );
    });
  }

  private filter(value: string): Country[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter(country => country.code.toLowerCase().includes(filterValue));
  }

}
