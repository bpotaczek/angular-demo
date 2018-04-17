import { Component } from '@angular/core';
import { AuthService } from '../../core/services';
import { Store } from '@ngrx/store';

import * as fromCore from '../../core/store';
import { AuthLoginAction } from '../../core/store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private store: Store<fromCore.CoreState>) { }

  login() {
    this.store.dispatch(new AuthLoginAction({Username: this.username, Password: this.password}));
  }
}
