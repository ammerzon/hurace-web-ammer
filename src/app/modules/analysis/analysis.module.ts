import {NgModule} from '@angular/core';
import {AnalysisComponent} from './page/analysis/analysis.component';
import {SharedModule} from '../../shared/shared.module';
import {AnalysisRoutingModule} from './analysis-routing.module';

@NgModule({
  declarations: [AnalysisComponent],
  imports: [
    AnalysisRoutingModule,
    SharedModule
  ]
})
export class AnalysisModule {
}
