import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SkiersService} from '@hurace-client/api/api/skiers.service';
import {MatSnackBar} from '@angular/material';
import {Skier} from '@hurace-client/api/model/skier';
import {Gender} from '@hurace-client/api/model/gender';
import {RunsService} from '@hurace-client/api/api/runs.service';

@Component({
  selector: 'app-skier-edit',
  templateUrl: './skier-edit.component.html',
  styleUrls: ['./skier-edit.component.scss']
})
export class SkierEditComponent implements OnInit {

  @ViewChild('skierDetail', {static: true}) skierDetail;
  private loadedSkier: Skier;

  constructor(private router: Router, private route: ActivatedRoute, private skierService: SkiersService,
              private runService: RunsService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.skierService.getSkierById(params.id).subscribe(skier => {
        this.loadedSkier = skier;
        this.skierDetail.skierForm.get('firstName').setValue(skier.firstName);
        this.skierDetail.skierForm.get('lastName').setValue(skier.lastName);
        this.skierDetail.skierForm.get('birthday').setValue(skier.birthdate);
        this.skierDetail.skierForm.get('pictureUrl').setValue(skier.pictureUrl);
        this.skierDetail.skierForm.get('gender').setValue(skier.gender);
        this.skierDetail.skierForm.get('country').setValue(skier.country.code);
      });
    });
  }

  updateSkier() {
    const pictureUrl = this.skierDetail.skierForm.get('pictureUrl').value;
    const skier: Skier = {
      id: this.loadedSkier.id,
      firstName: this.skierDetail.skierForm.get('firstName').value,
      lastName: this.skierDetail.skierForm.get('lastName').value,
      birthdate: this.skierDetail.skierForm.get('birthday').value,
      pictureUrl: pictureUrl === null ? '' : pictureUrl,
      gender: this.skierDetail.skierForm.get('gender').value === 'male' ? Gender.Male : Gender.Female,
      country: this.skierDetail.countries.filter(country => country.code === this.skierDetail.skierForm.get('country').value)[0]
    };
    this.skierService.updateSkier(this.loadedSkier.id, skier).subscribe(value => {
      this.router.navigateByUrl('/skiers');
    }, error => {
      this.snackBar.open(`Skier ${skier.firstName} ${skier.lastName} could not be updated!`);
    });
  }
}
