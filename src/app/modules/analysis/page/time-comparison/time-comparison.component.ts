import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Skier} from '@hurace-client/api/model/skier';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Race} from '@hurace-client/api/model/race';
import {RaceValidatorService} from '@app/validators/race-validator.service';
import {RacesService} from '@hurace-client/api/api/races.service';
import {map, startWith} from 'rxjs/operators';
import * as moment from 'moment';
import {RunsService} from '@hurace-client/api/api/runs.service';
import {Run} from '@hurace-client/api/model/run';
import {isNumber} from 'util';

@Component({
  selector: 'app-time-comparison',
  templateUrl: './time-comparison.component.html',
  styleUrls: ['./time-comparison.component.scss']
})
export class TimeComparisonComponent implements OnInit {
  runNumber$ = new Subject<number>();
  firstSkier$ = new Subject<Skier>();
  searchSkier = new FormGroup({
    run: new FormControl('', [
      Validators.required,
    ]),
  });
  private runNumber = 1;
  private firstSkier: Skier;
  private firstRun: Run;
  private allRaces: Race[];
  searchRace = new FormGroup({
    race: new FormControl('', [
      Validators.required,
      this.raceValidatorService.validRaceValidator(this.allRaces)
    ]),
  });
  private filteredRaces: Observable<Race[]>;
  private firstSkierTimes: string[];
  private allSecondRuns: Run[];
  private secondRun: Run;
  private filteredSecondRuns: Observable<Run[]>;
  private secondSkierTimes: string[];
  private selectedRace: Race;

  constructor(private raceValidatorService: RaceValidatorService, private racesService: RacesService, private runsService: RunsService) {
  }

  ngOnInit() {
    this.runNumber$.subscribe(runNumber => {
      this.runNumber = runNumber;
      if (this.selectedRace !== undefined) {
        this.raceSelected(this.selectedRace.id);
        this.secondSkierTimes = [];
        this.searchSkier.controls['run'].setValue('');
      }
    });
    this.firstSkier$.subscribe(skier => {
      this.firstSkier = skier;
      this.reloadRaces();
    });
  }

  raceSelected(id: number) {
    this.selectedRace = this.allRaces.filter(r => r.id === id)[0];
    this.racesService.getRunsForRace(id, this.runNumber).subscribe(runs => {
      this.firstRun = runs.filter(run => run.skier.id === this.firstSkier.id)[0];
      this.runsService.getInterimTimes(this.firstRun.id).subscribe(times => {
        this.firstSkierTimes = times.map(value => moment.utc(moment.duration(value).asMilliseconds()).format('ss:SSS'));
      });
      this.allSecondRuns = runs.filter(run => run.skier.id !== this.firstSkier.id).sort((a, b) => {
        if (a.skier.firstName < b.skier.firstName) {
          return -1;
        }
        if (a.skier.firstName > b.skier.firstName) {
          return 1;
        }
        return 0;
      });
      this.filteredSecondRuns = this.searchSkier.get('run').valueChanges
        .pipe(
          startWith(''),
          map(value => this.filterSecondRuns(value))
        );
    });
  }

  secondSkierSelected(id: number) {
    this.secondRun = this.allSecondRuns.filter(run => run.id === id)[0];
    this.runsService.getInterimTimes(this.secondRun.id).subscribe(times => {
      this.secondSkierTimes = times.map(value => moment.utc(moment.duration(value).asMilliseconds()).format('ss:SSS'));
    });
  }

  private reloadRaces() {
    this.racesService.getClosedRacesForSkier(this.firstSkier.id).subscribe(races => {
      this.allRaces = races;
      this.searchRace.controls.race.setValidators([Validators.required, this.raceValidatorService.validRaceValidator(this.allRaces)]);
      this.filteredRaces = this.searchRace.get('race').valueChanges
        .pipe(
          startWith(''),
          map(value => this.filterRaces(value))
        );
    });
  }

  private displayFunctionRace(id?: number) {
    if (id === undefined || this.allRaces === undefined) {
      return;
    }
    const race = this.allRaces.filter(s => s.id === id)[0];
    return id ? `${race.name}` : undefined;
  }

  private displayFunctionSkier(id?: number) {
    if (id === undefined || this.allSecondRuns === undefined) {
      return;
    }
    const run = this.allSecondRuns.filter(s => s.id === id)[0];
    return id ? `${run.skier.firstName} ${run.skier.lastName}` : undefined;
  }

  private filterRaces(value: string): Race[] {
    if (isNumber(value)) {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.allRaces.filter(race => race.name.toLowerCase().includes(filterValue));
  }

  private filterSecondRuns(value: string): Run[] {
    if (isNumber(value)) {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.allSecondRuns.filter(run => run.skier.firstName.toLowerCase().includes(filterValue) ||
      run.skier.lastName.toLowerCase().includes(filterValue));
  }
}
