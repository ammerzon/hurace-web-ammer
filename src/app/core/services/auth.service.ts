import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(private oauthService: OAuthService) {
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  refresh() {
    const hasIdToken = this.oauthService.hasValidIdToken();
    const hasAccessToken = this.oauthService.hasValidAccessToken();
    this.isAuthenticated$.next(hasIdToken && hasAccessToken);
  }
}
