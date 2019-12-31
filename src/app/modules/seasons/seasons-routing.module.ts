import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SeasonsComponent} from './page/seasons/seasons.component';
import {SeasonDetailComponent} from './page/season-detail/season-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SeasonsComponent
  },
  {
    path: 'seasons/:id',
    component: SeasonDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonsRoutingModule {
}
