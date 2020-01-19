import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RunsService} from '@hurace-client/api/api/runs.service';
import {Run} from '@hurace-client/api/model/run';
import * as moment from 'moment';
import {interval} from 'rxjs';
import {environment} from '@env';

@Component({
  selector: 'app-current-skier',
  templateUrl: './current-skier.component.html',
  styleUrls: ['./current-skier.component.scss']
})
export class CurrentSkierComponent implements OnInit {
  currentRun: Run;
  times: string[];
  diffTimes: string[];

  constructor(private runsService: RunsService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.reloadCurrentRun();
    interval(environment.pollingPeriod).subscribe(_ => {
      this.reloadCurrentRun();
    });
  }

  private reloadCurrentRun() {
    this.runsService.getCurrentRun().subscribe(currentRun => {
      this.currentRun = currentRun;
      this.runsService.getInterimTimes(this.currentRun.id).subscribe(times => {
        this.times = times;
      });
      this.runsService.getInterimDiffTimes(this.currentRun.id).subscribe(diffTimes => {
        this.diffTimes = diffTimes;
      });
    });
  }
}
