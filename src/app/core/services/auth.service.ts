import {Injectable} from '@angular/core';
import {Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(username: string, password: string): Observable<boolean> {
    if (username === 'username' && password === 'password') {
      return of(true);
    }

    return throwError('Invalid username or password');
  }

  logout(): Observable<boolean> {
    return of(true);
  }

  loggedIn(): boolean {
    return false;
  }
}
