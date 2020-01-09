import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SkiersComponent} from './page/skiers/skiers.component';
import {SkierDetailComponent} from '@modules/skiers/page/skier-detail/skier-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SkiersComponent
  },
  {
    path: ':id',
    component: SkierDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkiersRoutingModule {
}
