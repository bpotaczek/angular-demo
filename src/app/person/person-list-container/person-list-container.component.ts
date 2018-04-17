import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Person } from '../../core/models';
import { PersonState, getPersonEntities } from '../store';

@Component({
  selector: 'app-person-list-container',
  templateUrl: './person-list-container.component.html'
})
export class PersonListContainerComponent implements OnInit {
  people$: Observable<Person[]>;

  constructor(private store: Store<PersonState>) { }

  ngOnInit() {
    this.people$ = this.store.select(getPersonEntities);
  }
}
