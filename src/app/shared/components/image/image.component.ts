import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() defaultImage: string;
  @Input() image: string;
  @Input() rounded = false;
  @Input() width = '50px';

  constructor() { }

  ngOnInit() {
  }

}
