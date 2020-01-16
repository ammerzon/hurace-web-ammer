import {Component, OnInit, ViewChild} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Run} from '@hurace-client/api/model/run';
import {RunsService} from '@hurace-client/api/api/runs.service';
import {RacesService} from '@hurace-client/api/api/races.service';
import {Race} from '@hurace-client/api/model/race';
import {environment} from '@env';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  runNumber$ = new Subject<number>();
  isLoadingBoard: boolean;
  currentRace: Race;
  dataSource: MatTableDataSource<Run>;
  displayedColumns: string[] = ['position', 'profilePicture', 'name', 'country', 'time'];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private currentRunNumber = 1;

  constructor(private runsService: RunsService, private raceService: RacesService) {
    this.dataSource = new MatTableDataSource<Run>();
  }

  ngOnInit() {
    this.runNumber$.subscribe(runNumber => {
      this.currentRunNumber = runNumber;
      this.reloadDataSource(true);
    });
    interval(environment.pollingPeriod).subscribe(_ => {
      this.reloadDataSource(false);
    });
    this.dataSource.paginator = this.paginator;
    this.reloadDataSource(true);
  }

  private reloadDataSource(withIndicator: boolean) {
    this.isLoadingBoard = withIndicator;

    this.raceService.getCurrentRace().subscribe(race => {
      this.currentRace = race;
      if (race == null) {
        this.isLoadingBoard = false;
      } else {
        this.runsService.getLeaderboard(race.id, this.currentRunNumber).subscribe(runs => {
          this.dataSource.data = runs;
          this.isLoadingBoard = false;
        });
      }
    });
  }
}
