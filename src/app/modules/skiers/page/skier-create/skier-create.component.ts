import {Component, OnInit, ViewChild} from '@angular/core';
import {SkiersService} from '@hurace-client/api/api/skiers.service';
import {Skier} from '@hurace-client/api/model/skier';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-skier-create',
  templateUrl: './skier-create.component.html',
  styleUrls: ['./skier-create.component.scss']
})
export class SkierCreateComponent implements OnInit {

  @ViewChild('skierDetail', {static: true}) skierDetail;

  constructor(private router: Router, private skierService: SkiersService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  createSkier() {
    const skier: Skier = {
      firstName: this.skierDetail.skierForm.get('firstName').value,
      lastName: this.skierDetail.skierForm.get('lastName').value,
      birthdate: this.skierDetail.skierForm.get('birthday').value,
      pictureUrl: this.skierDetail.skierForm.get('pictureUrl').value,
      gender: this.skierDetail.skierForm.get('gender').value,
      country: this.skierDetail.countries.filter(country => country.code === this.skierDetail.skierForm.get('country').value)[0]
    };
    this.skierService.createSkier(skier).subscribe(value => {
      this.router.navigateByUrl('/skiers');
    }, error => {
      this.snackBar.open(`Skier ${skier.firstName} ${skier.lastName} could not be created!`);
    });
  }
}
