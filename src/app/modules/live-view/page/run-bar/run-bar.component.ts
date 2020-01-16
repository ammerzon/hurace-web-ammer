import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-run-bar',
  templateUrl: './run-bar.component.html',
  styleUrls: ['./run-bar.component.scss']
})
export class RunBarComponent implements OnInit {
  currentRunNumber$ = new Subject<number>();

  constructor() { }

  ngOnInit() {
  }

  switchToRun(runNumber: number) {
    this.currentRunNumber$.next(runNumber);
  }
}
