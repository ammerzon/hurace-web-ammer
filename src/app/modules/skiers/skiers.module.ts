import {NgModule} from '@angular/core';
import {SkiersComponent} from './page/skiers/skiers.component';
import {SharedModule} from '../../shared/shared.module';
import {SkiersRoutingModule} from './skiers-routing.module';
import { LoginBarComponent } from './page/login-bar/login-bar.component';
import {CommonModule} from '@angular/common';
import { DeleteDialogComponent } from './page/delete-dialog/delete-dialog.component';
import { SkierDetailComponent } from './page/skier-detail/skier-detail.component';

@NgModule({
  declarations: [SkiersComponent, LoginBarComponent, DeleteDialogComponent, SkierDetailComponent],
  entryComponents: [DeleteDialogComponent],
  imports: [
    SkiersRoutingModule,
    SharedModule
  ]
})
export class SkiersModule {
}
