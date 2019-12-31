import {NgModule} from '@angular/core';
import {HomeComponent} from './page/home/home.component';
import {AnalyticsComponent} from './page/analytics/analytics.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, AnalyticsComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule {
}
