import {NgModule} from '@angular/core';
import {HomeComponent} from './page/home/home.component';
import {AnalyticsComponent} from './page/analytics/analytics.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {CountUpModule} from 'countup.js-angular2';

@NgModule({
  declarations: [HomeComponent, AnalyticsComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    CountUpModule,
  ]
})
export class HomeModule {
}
