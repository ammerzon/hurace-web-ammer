import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) {
    if (!authService.loggedIn()) {
      authService.login();
    }
  }

  ngOnInit() {
  }

}
