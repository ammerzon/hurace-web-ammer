import {NgModule} from '@angular/core';
import {SkiersComponent} from './page/skiers/skiers.component';
import {SharedModule} from '../../shared/shared.module';
import {SkiersRoutingModule} from './skiers-routing.module';

@NgModule({
  declarations: [SkiersComponent],
  imports: [
    SkiersRoutingModule,
    SharedModule
  ]
})
export class SkiersModule {
}
