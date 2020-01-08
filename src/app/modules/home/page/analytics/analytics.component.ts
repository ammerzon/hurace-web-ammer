import {Component, OnInit} from '@angular/core';
import {RacesService, RunsService, SkiersService} from '@hurace-client/api';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  amountSkiers: number;
  amountRuns: number;
  amountRaces: number;

  constructor(private racesService: RacesService, private runsService: RunsService, private skiersService: SkiersService) {
    racesService.racesMetadataGet().subscribe(metadata => {
      this.amountRaces = metadata.count;
    });
    runsService.runsMetadataGet().subscribe(metadata => {
      this.amountRuns = metadata.count;
    });
    skiersService.skiersMetadataGet().subscribe(metadata => {
      this.amountSkiers = metadata.count;
    });
  }

  ngOnInit() {
  }

}
