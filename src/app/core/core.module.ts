import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {AuthService} from '@app/services/auth.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule {
}
