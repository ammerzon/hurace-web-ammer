import {NgModule} from '@angular/core';
import {SeasonsComponent} from './page/seasons/seasons.component';
import {SeasonDetailComponent} from './page/season-detail/season-detail.component';
import {SeasonsRoutingModule} from './seasons-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '@app/core.module';

@NgModule({
  declarations: [SeasonsComponent, SeasonDetailComponent],
  imports: [
    SeasonsRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class SeasonsModule {
}
