import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../../core/services';

@Injectable()
export class AuthGuard implements CanActivateChild, CanActivate, CanLoad {
  constructor(private authService: AuthService) {}

  canLoad(): Observable<boolean> {
    return this.check();
  }

  canActivateChild(): Observable<boolean> {
    return this.check();
  }

  canActivate(): Observable<boolean> {
    return this.check();
  }

  check() {
    return of(this.authService.isLoggedIn());
  }
}
