import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LiveViewComponent} from './page/live-view/live-view.component';

const routes: Routes = [
  {
    path: '',
    component: LiveViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveViewRoutingModule {
}
