import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/services/auth.service';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.component.html',
  styleUrls: ['./login-bar.component.scss']
})
export class LoginBarComponent implements OnInit {

  private isAuthenticated: boolean;

  constructor(private authService: AuthService) {
    authService.isAuthenticated$.subscribe(value => {
      this.isAuthenticated = value;
    });
  }

  ngOnInit() {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
