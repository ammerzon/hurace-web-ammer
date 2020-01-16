import {Component, Input, OnInit} from '@angular/core';
import {RaceStatus} from '@hurace-client/api/model/raceStatus';

@Component({
  selector: 'app-race-status-indicator',
  templateUrl: './race-status-indicator.component.html',
  styleUrls: ['./race-status-indicator.component.scss']
})
export class RaceStatusIndicatorComponent implements OnInit {
  @Input() status: RaceStatus;

  constructor() {
  }

  ngOnInit() {
  }

}
