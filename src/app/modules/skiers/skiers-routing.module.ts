import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SkiersComponent} from './page/skiers/skiers.component';
import {SkierCreateComponent} from '@modules/skiers/page/skier-create/skier-create.component';
import {SkierEditComponent} from '@modules/skiers/page/skier-edit/skier-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SkiersComponent
  },
  {
    path: 'create',
    component: SkierCreateComponent
  },
  {
    path: ':id',
    component: SkierEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkiersRoutingModule {
}
