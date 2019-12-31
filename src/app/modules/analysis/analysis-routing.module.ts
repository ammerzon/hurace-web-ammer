import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AnalysisComponent} from './page/analysis/analysis.component';

const routes: Routes = [
  {
    path: '',
    component: AnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalysisRoutingModule {
}
