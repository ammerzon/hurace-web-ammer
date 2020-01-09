import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Skier} from '@hurace-client/api/model/skier';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SkiersService} from '@hurace-client/api';
import {AuthService} from '@app/services/auth.service';
import {DeleteDialogComponent} from '@modules/skiers/page/delete-dialog/delete-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-skiers',
  templateUrl: './skiers.component.html',
  styleUrls: ['./skiers.component.scss']
})
export class SkiersComponent implements OnInit {
  isLoadingSkiers: boolean;
  dataSource: MatTableDataSource<Skier>;
  amountSkiers: number;
  displayedColumns: string[] = ['profilePicture', 'firstName', 'lastName', 'gender', 'birthday', 'country'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private skierService: SkiersService, private authService: AuthService, private dialog: MatDialog) {
    if (this.authService.loggedIn()) {
      this.displayedColumns.push('edit', 'delete');
    }

    this.dataSource = new MatTableDataSource<Skier>();
    this.dataSource.sortingDataAccessor = (skier, property): string | number => {
      switch (property) {
        case 'birthday': return new Date(skier.birthdate).getTime();
        case 'country': return skier.country.code;
        default: return skier[property];
      }
    };
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.reloadDataSource();
  }

  filterSkiers(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.paginator.firstPage();
    }
  }

  deleteSkier(skier: Skier) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '300px',
      height: '250px',
      data: {skier}
    });

    dialogRef.afterClosed().subscribe(shouldDelete => {
      if (shouldDelete) {
        this.skierService.skiersIdDelete(skier.id).subscribe(value => {
          this.reloadDataSource();
        });
      }
    });
  }

  editSkier(skier: Skier) {
    this.router.navigateByUrl('/skiers/' + skier.id);
  }

  private reloadDataSource() {
    this.isLoadingSkiers = true;
    this.skierService.skiersGet().subscribe(skiers => {
      this.amountSkiers = skiers.length;
      this.dataSource.data = skiers;
      this.isLoadingSkiers = false;
    });
  }

  createSkier() {
    this.router.navigateByUrl('/skiers/' + skier.id);
  }
}
