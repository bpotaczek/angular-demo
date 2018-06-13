import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getUser, CoreState, AuthLogoutAction } from './core/store';

import { User } from './core/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<CoreState>) { }

  ngOnInit() {
    this.user$ = this.store.pipe(select(getUser));
  }

  logout() {
    this.store.dispatch(new AuthLogoutAction());
  }
}
