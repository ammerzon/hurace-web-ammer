import {NgModule} from '@angular/core';
import {AuthGuard} from '@app/guards/auth.guard';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule
  ],
  providers: [
    AuthGuard
  ]
})
export class CoreModule {
}
