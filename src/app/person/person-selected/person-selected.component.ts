import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { PersonState, PersonSelectedAction, getPersonSelectedEntity, PersonUpdateAction } from '../store';
import { ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Person } from '../../core/models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person-selected',
  templateUrl: './person-selected.component.html',
  styleUrls: ['./person-selected.component.css']
})
export class PersonSelectedComponent implements OnInit {
  person$: Observable<Person>;

  constructor(private store: Store<PersonState>, route: ActivatedRoute) {
    route.params.pipe(
      map(params => {
        const id = parseInt(params.id, 10);
        return new PersonSelectedAction(id);
      }),
      take(1))
    .subscribe(store);
  }

  ngOnInit() {
    this.person$ = this.store.pipe(select(getPersonSelectedEntity)) as Observable<Person>;
  }

  update(person: Person) {
    this.store.dispatch(new PersonUpdateAction(person));
  }
}
