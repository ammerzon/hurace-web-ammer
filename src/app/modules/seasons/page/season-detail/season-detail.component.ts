import {Component, OnInit, ViewChild} from '@angular/core';
import {RacesService} from '@hurace-client/api/api/races.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Race} from '@hurace-client/api/model/race';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.scss']
})
export class SeasonDetailComponent implements OnInit {
  isLoadingRaces: boolean;
  dataSource: MatTableDataSource<Race>;
  displayedColumns: string[] = ['date', 'raceType', 'gender', 'status'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  private firstRace: Race;

  constructor(private router: Router, private route: ActivatedRoute, private racesService: RacesService) {
    this.dataSource = new MatTableDataSource<Race>();
    this.dataSource.sortingDataAccessor = (race, property): string | number => {
      switch (property) {
        case 'date':
          return new Date(race.date).getTime();
        default:
          return race[property];
      }
    };
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.isLoadingRaces = true;

    this.route.params.subscribe(params => {
      this.racesService.getAllRaces(params.seasonsId, params.locationId).subscribe(races => {
        this.firstRace = races[0];
        this.dataSource.data = races;
        this.isLoadingRaces = false;
      });
    });
  }

}
