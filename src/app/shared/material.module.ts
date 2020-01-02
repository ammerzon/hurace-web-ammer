import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatGridListModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class MaterialModule {
}
