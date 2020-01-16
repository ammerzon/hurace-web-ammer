import {Component, OnInit, ViewChild} from '@angular/core';
import {SeasonsService} from '@hurace-client/api/api/seasons.service';
import {map} from 'rxjs/operators';
import {MatPaginator, MatSelectChange, MatSort, MatTableDataSource} from '@angular/material';
import {Skier} from '@hurace-client/api/model/skier';
import {SkiEvent} from '@hurace-client/api/model/skiEvent';
import {Router} from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {
  isLoadingSeasons: boolean;
  dataSource: MatTableDataSource<SkiEvent>;
  amountSkiEvents: number;
  displayedColumns: string[] = ['startDate', 'endDate', 'place', 'country', 'raceTypes', 'genders'];
  selectedSeason: number;
  seasons: number[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private seasonsService: SeasonsService) {
    this.dataSource = new MatTableDataSource<SkiEvent>();
    this.dataSource.sortingDataAccessor = (skiEvent, property): string | number => {
      switch (property) {
        case 'startDate':
          return new Date(skiEvent.startDate).getTime();
        case 'endDate':
          return new Date(skiEvent.endDate).getTime();
        case 'place':
          return skiEvent.location.name;
        case 'country':
          return skiEvent.location.country.code;
        default:
          return skiEvent[property];
      }
    };
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.seasonsService.getAllSeasons().subscribe(seasons => {
      this.seasons = seasons;
      this.selectedSeason = seasons[0];
      this.reloadDataSource();
    });
  }

  private reloadDataSource() {
    this.isLoadingSeasons = true;
    this.seasonsService.getSeason(this.selectedSeason).subscribe(season => {
      this.amountSkiEvents = season.events.length;
      this.dataSource.data = season.events;
      this.isLoadingSeasons = false;
    });
  }

  updateSeasons($event: MatSelectChange) {
    this.reloadDataSource();
  }

  showSkiEventDetails(row: any) {
    this.router.navigate(['/seasons/', this.selectedSeason, row.location.id]);
  }
}
