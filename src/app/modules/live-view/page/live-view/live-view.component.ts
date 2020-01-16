import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-live-view',
  templateUrl: './live-view.component.html',
  styleUrls: ['./live-view.component.scss']
})
export class LiveViewComponent implements OnInit {
  currentRunNumber = 1;

  @ViewChild('runBar', {static: true}) runBar;
  @ViewChild('currentSkier', {static: true}) currentSkier;
  @ViewChild('leaderBoard', {static: true}) leaderBoard;

  constructor() {
  }

  ngOnInit() {
    this.runBar.currentRunNumber$.subscribe(runNumber => {
      this.currentRunNumber = runNumber;
      this.leaderBoard.runNumber$.next(runNumber);
    });
  }

}
