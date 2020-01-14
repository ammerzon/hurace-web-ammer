import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {AuthService} from '@app/services/auth.service';
import {RaceTypePipe} from '@app/pipes/RaceTypePipe';

@NgModule({
  declarations: [RaceTypePipe],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  exports: [
    RaceTypePipe
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule {
}
