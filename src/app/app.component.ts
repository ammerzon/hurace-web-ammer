import {Component} from '@angular/core';
import {AuthConfig, JwksValidationHandler, OAuthService, OAuthSuccessEvent} from 'angular-oauth2-oidc';
import {AuthService} from '@app/services/auth.service';

export const authConfig: AuthConfig = {
  issuer: 'https://demo.identityserver.io',
  redirectUri: window.location.origin + '/skiers',
  clientId: 'interactive.public',
  responseType: 'code',
  scope: 'openid profile email api offline_access ',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hurace';

  constructor(private oauthService: OAuthService, private authService: AuthService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.events.subscribe(event => {
      if (event instanceof OAuthSuccessEvent) {
        this.authService.refresh();
      }
    });
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.oauthService.setupAutomaticSilentRefresh();
  }
}
