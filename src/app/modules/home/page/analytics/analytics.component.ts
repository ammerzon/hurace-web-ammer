import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  amountSkiers: number;
  amountSeasons: number;
  amountRaces: number;

  constructor() {
    this.amountSkiers = 10_000;
    this.amountSeasons = 10;
    this.amountRaces = 100;
  }

  ngOnInit() {
  }

}
