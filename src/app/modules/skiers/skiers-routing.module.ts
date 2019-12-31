import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SkiersComponent} from './page/skiers/skiers.component';

const routes: Routes = [
  {
    path: '',
    component: SkiersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkiersRoutingModule {
}
