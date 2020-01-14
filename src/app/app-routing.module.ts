import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: 'analysis',
        loadChildren: () =>
          import('@modules/analysis/analysis.module').then(m => m.AnalysisModule)
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'live-view',
        loadChildren: () =>
          import('@modules/live-view/live-view.module').then(m => m.LiveViewModule)
      },
      {
        path: 'seasons',
        loadChildren: () =>
          import('@modules/seasons/seasons.module').then(m => m.SeasonsModule)
      },
      {
        path: 'skiers',
        loadChildren: () =>
          import('@modules/skiers/skiers.module').then(m => m.SkiersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
