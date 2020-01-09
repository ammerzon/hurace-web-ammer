import {Component, Input, OnInit} from '@angular/core';
import {Gender} from '@hurace-client/api/model/gender';

@Component({
  selector: 'app-gender-indicator',
  templateUrl: './gender-indicator.component.html',
  styleUrls: ['./gender-indicator.component.scss']
})
export class GenderIndicatorComponent implements OnInit {
  @Input() gender: Gender;

  constructor() { }

  ngOnInit() {
  }

}
