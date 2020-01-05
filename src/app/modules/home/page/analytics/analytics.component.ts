import {Component, OnInit} from '@angular/core';
import {RaceService, RunService, SkierService} from '@hurace-client/api';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  amountSkiers: number;
  amountRuns: number;
  amountRaces: number;

  constructor(private raceService: RaceService, private runService: RunService, private skierService: SkierService) {
    raceService.raceMetadataGet().subscribe(metadata => {
      this.amountRaces = metadata.count;
    });
    runService.runMetadataGet().subscribe(metadata => {
      this.amountRuns = metadata.count;
    });
    skierService.skierMetadataGet().subscribe(metadata => {
      this.amountSkiers = metadata.count;
    });
  }

  ngOnInit() {
  }

}
