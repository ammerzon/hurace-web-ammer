import {NgModule} from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class MaterialModule {
}
