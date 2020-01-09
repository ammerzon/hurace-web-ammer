import { Component, OnInit } from '@angular/core';
import {SkiersService} from '@hurace-client/api/api/skiers.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-skier-detail',
  templateUrl: './skier-detail.component.html',
  styleUrls: ['./skier-detail.component.scss']
})
export class SkierDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router, private skierService: SkiersService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
  }

}
