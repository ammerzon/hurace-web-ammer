import {NgModule} from '@angular/core';
import {SkiersComponent} from './page/skiers/skiers.component';
import {SharedModule} from '../../shared/shared.module';
import {SkiersRoutingModule} from './skiers-routing.module';
import {LoginBarComponent} from './page/login-bar/login-bar.component';
import {DeleteDialogComponent} from './page/delete-dialog/delete-dialog.component';
import {SkierDetailComponent} from './page/skier-detail/skier-detail.component';
import {SkierCreateComponent} from './page/skier-create/skier-create.component';
import {SkierEditComponent} from './page/skier-edit/skier-edit.component';

@NgModule({
  declarations: [SkiersComponent, LoginBarComponent, DeleteDialogComponent, SkierDetailComponent, SkierCreateComponent, SkierEditComponent],
  entryComponents: [DeleteDialogComponent],
  imports: [
    SkiersRoutingModule,
    SharedModule
  ]
})
export class SkiersModule {
}
