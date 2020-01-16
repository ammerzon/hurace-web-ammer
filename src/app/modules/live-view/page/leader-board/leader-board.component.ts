import {Component, OnInit, ViewChild} from '@angular/core';
import {Subject} from 'rxjs';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Run} from '@hurace-client/api/model/run';
import {RunsService} from '@hurace-client/api/api/runs.service';
import {mergeMap} from 'rxjs/operators';
import {RacesService} from '@hurace-client/api/api/races.service';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
  runNumber$ = new Subject<number>();
  isLoadingBoard: boolean;
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
      this.reloadDataSource();
    });
    this.dataSource.paginator = this.paginator;
    this.reloadDataSource();
  }

  private reloadDataSource() {
    this.isLoadingBoard = true;

    this.raceService.getCurrentRace().subscribe(race => {
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
