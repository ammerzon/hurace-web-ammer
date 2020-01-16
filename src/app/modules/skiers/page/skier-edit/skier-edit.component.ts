import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SkiersService} from '@hurace-client/api/api/skiers.service';
import {MatSnackBar} from '@angular/material';
import {Skier} from '@hurace-client/api/model/skier';
import {Gender} from '@hurace-client/api/model/gender';
import {RunsService} from '@hurace-client/api/api/runs.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Race, RacesService} from '@hurace-client/api/index';
import {map, startWith} from 'rxjs/operators';
import {RaceValidatorService} from '@app/validators/race-validator.service';

@Component({
  selector: 'app-skier-edit',
  templateUrl: './skier-edit.component.html',
  styleUrls: ['./skier-edit.component.scss']
})
export class SkierEditComponent implements OnInit {

  @ViewChild('skierDetail', {static: true}) skierDetail;
  races: Race[];
  filteredRaces: Observable<Race[]>;
  nominateForm = new FormGroup({
    race: new FormControl('', [
      Validators.required,
      this.raceValidatorService.validRaceValidator(this.races)
    ]),
  });
  private loadedSkier: Skier;

  constructor(private router: Router, private route: ActivatedRoute, private raceValidatorService: RaceValidatorService,
              private skierService: SkiersService, private runService: RunsService, private racesService: RacesService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.skierService.getSkierById(params.id).subscribe(skier => {
        skier.pictureUrl = skier.pictureUrl === null ? '' : skier.pictureUrl;
        this.loadedSkier = skier;
        this.skierDetail.skierForm.get('firstName').setValue(skier.firstName);
        this.skierDetail.skierForm.get('lastName').setValue(skier.lastName);
        this.skierDetail.skierForm.get('birthday').setValue(skier.birthdate);
        this.skierDetail.skierForm.get('pictureUrl').setValue(skier.pictureUrl);
        this.skierDetail.skierForm.get('gender').setValue(skier.gender);
        this.skierDetail.skierForm.get('country').setValue(skier.country.code);

        this.refreshOpenRacesForSkier();
      });
    });
  }

  updateSkier() {
    const pictureUrl = this.skierDetail.skierForm.get('pictureUrl').value;
    const skier: Skier = {
      id: this.loadedSkier.id,
      firstName: this.skierDetail.skierForm.get('firstName').value,
      lastName: this.skierDetail.skierForm.get('lastName').value,
      birthdate: this.skierDetail.skierForm.get('birthday').value,
      pictureUrl: pictureUrl === null ? '' : pictureUrl,
      gender: this.skierDetail.skierForm.get('gender').value === 'male' ? Gender.Male : Gender.Female,
      country: this.skierDetail.countries.filter(country => country.code === this.skierDetail.skierForm.get('country').value)[0]
    };
    this.skierService.updateSkier(this.loadedSkier.id, skier).subscribe(value => {
      this.router.navigateByUrl('/skiers');
    }, error => {
      this.snackBar.open(`Skier ${skier.firstName} ${skier.lastName} could not be updated!`);
    });
  }

  nominateSkier() {
    const selectedRace = this.races.filter(race => race.id === this.nominateForm.get('race').value)[0];
    this.racesService.addRunToRace(selectedRace.id, this.loadedSkier).subscribe(_ => {
      this.snackBar.open(`Skier ${this.loadedSkier.firstName} ${this.loadedSkier.lastName} nominated for ${selectedRace.name}!`);
      this.nominateForm.reset();
      this.refreshOpenRacesForSkier();
    }, error => {
      this.snackBar.open(`Skier ${this.loadedSkier.firstName} ${this.loadedSkier.lastName} could not be nominated!`);
    });
  }

  private displayFunctionRace(id?: number) {
    if (id === undefined || this.races === undefined) {
      return;
    }
    const race = this.races.filter(s => s.id === id)[0];
    return id ? `${race.name}` : undefined;
  }

  private refreshOpenRacesForSkier() {
    this.racesService.getOpenRacesForSkier(this.loadedSkier.id).subscribe(races => {
      this.races = races;
      this.nominateForm.controls['race'].setValidators([Validators.required, this.raceValidatorService.validRaceValidator(this.races)]);
      this.filteredRaces = this.nominateForm.get('race').valueChanges
        .pipe(
          startWith(''),
          map(value => this.filter(value))
        );
    });
  }

  private filter(value: string): Race[] {
    const filterValue = value.toLowerCase();
    return this.races.filter(race => race.name.toLowerCase().includes(filterValue));
  }
}
