import { Component } from '@angular/core';
import { AuthService } from '../../core/services';
import { Store, select } from '@ngrx/store';

import * as fromCore from '../../core/store';
import { Observable } from 'rxjs';
import { User } from 'shared-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loggedIn$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private store: Store<fromCore.CoreState>) {
    this.loggedIn$ = this.store.pipe(select(fromCore.getLoggedIn));
    this.user$ = this.store.pipe(select(fromCore.getUser));
  }
}
