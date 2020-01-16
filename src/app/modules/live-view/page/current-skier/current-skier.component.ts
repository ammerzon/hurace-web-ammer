import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RunsService} from '@hurace-client/api/api/runs.service';
import {Run} from '@hurace-client/api/model/run';
import {Duration, Moment} from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-current-skier',
  templateUrl: './current-skier.component.html',
  styleUrls: ['./current-skier.component.scss']
})
export class CurrentSkierComponent implements OnInit {
  currentRun: Run;
  times: string[];

  constructor(private runsService: RunsService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.runsService.getCurrentRun().subscribe(currentRun => {
      this.currentRun = currentRun;
      this.runsService.getInterimTimes(this.currentRun.id).subscribe(times => {
        this.times = times.map(value => moment.utc(moment.duration(value).asMilliseconds()).format('ss:SSS'));
      });
    });
  }

}
