import {NgModule} from '@angular/core';
import {AuthGuard} from '@app/guards/auth.guard';
import {SharedModule} from '@shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    AuthGuard
  ]
})
export class CoreModule {
}
