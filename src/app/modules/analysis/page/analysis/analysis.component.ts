import {Component, OnInit, ViewChild} from '@angular/core';
import {RacesService, Skier, SkiersService} from '@hurace-client/api/index';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RaceValidatorService} from '@app/validators/race-validator.service';
import {map, startWith} from 'rxjs/operators';
import {isNumber} from 'util';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {
  allSkiers: Skier[];
  filteredSkier: Observable<Skier[]>;
  searchSkier = new FormGroup({
    skier: new FormControl('', [
      Validators.required,
    ]),
  });

  @ViewChild('runBar', {static: true}) runBar;
  @ViewChild('timeComparison', {static: true}) timeComparison;

  constructor(private raceValidatorService: RaceValidatorService, private racesService: RacesService,
              private skiersService: SkiersService) {
  }

  ngOnInit() {
    this.runBar.currentRunNumber$.subscribe(runNumber => {
      this.timeComparison.runNumber$.next(runNumber);
    });
    this.refreshSkiers();
  }

  skierSelected(id: number) {
    const skier = this.allSkiers.filter(s => s.id === id)[0];
    this.timeComparison.firstSkier$.next(skier);
  }

  private refreshSkiers() {
    this.skiersService.getAllSkiers().subscribe(skiers => {
      this.allSkiers = skiers.sort((a, b) => {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
      this.filteredSkier = this.searchSkier.get('skier').valueChanges
        .pipe(
          startWith(''),
          map(value => this.filterSkiers(value))
        );
    });
  }

  private filterSkiers(value: string): Skier[] {
    if (isNumber(value)) {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.allSkiers.filter(skier => skier.firstName.toLowerCase().includes(filterValue) ||
      skier.lastName.toLowerCase().includes(filterValue));
  }

  private displayFn(id?: number) {
    if (id === undefined || this.allSkiers === undefined) {
      return;
    }
    const skier = this.allSkiers.filter(s => s.id === id)[0];
    return id ? `${skier.firstName} ${skier.lastName}` : undefined;
  }
}
