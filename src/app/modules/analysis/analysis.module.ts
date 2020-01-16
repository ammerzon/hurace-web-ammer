import {NgModule} from '@angular/core';
import {AnalysisComponent} from './page/analysis/analysis.component';
import {SharedModule} from '@shared/shared.module';
import {AnalysisRoutingModule} from './analysis-routing.module';
import {CountUpModule} from 'countup.js-angular2';
import {TimeComparisonComponent} from './page/time-comparison/time-comparison.component';

@NgModule({
  declarations: [AnalysisComponent, TimeComparisonComponent],
  imports: [
    AnalysisRoutingModule,
    SharedModule,
    CountUpModule
  ]
})
export class AnalysisModule {
}
