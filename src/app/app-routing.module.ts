import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentLayoutComponent} from './layout/content-layout/content-layout.component';
import {AuthLayoutComponent} from './layout/auth-layout/auth-layout.component';
import {AuthGuard} from '@app/guards/auth.guard';

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
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('@modules/skiers/skiers.module').then(m => m.SkiersModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
