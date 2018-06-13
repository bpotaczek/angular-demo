import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { AuthToken, User } from 'shared-components';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
    if (this.isExpired()) {
      this.clear();
    }
  }

  login(user: User): Observable<AuthToken> {
    // return this.http.post<AuthToken>(environment.serverUrl + 'api/Authentication/', user);
    return of({
      Token: 'testtoken',
      Expires: new Date(2020, 1, 1),
      UserModel: Object.assign({}, user, {
        FirstName: 'Brady',
        LastName: 'Potaczek',
        HoldingCompanyId: 1
      })
    });
  }

  setLogin(token: AuthToken): void {
    localStorage.setItem('session', token.Token);
    localStorage.setItem('expires_at', JSON.stringify(token.Expires));
    localStorage.setItem('user', JSON.stringify(token.UserModel));
  }

  getLogin(): AuthToken {
    if (this.isExpired()) {
      return null;
    }
    const session = localStorage.getItem('session');
    const expires = localStorage.getItem('expires_at');
    const user = localStorage.getItem('user');
    if (!session || !expires || !user) {
      return null;
    }
    return {
      Token: session,
      Expires: JSON.parse(expires),
      UserModel: JSON.parse(user)
    };
  }

  isExpired(): boolean {
    const exp = localStorage.getItem('expires_at');
    if (exp) {
      const expires = JSON.parse(exp);
      if (new Date(expires) > new Date()) {
        return false;
      }
    }
    return true;
  }

  isLoggedIn() {
    const token = localStorage.getItem('session');
    if (!token || this.isExpired()) {
      return false;
    }
    return true;
  }

  clear() {
    localStorage.clear();
  }
}

