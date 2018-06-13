import { Injectable } from '@angular/core';

import { Observable, of, defer } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { map, switchMap, catchError } from 'rxjs/operators';

import {
    PersonsLoadAction,
    PersonActionTypes,
    PersonsLoadSuccessAction,
    PersonsLoadFailureAction,
    PersonUpdateAction,
    PersonUpdateSuccessAction,
    PersonUpdateFailureAction
} from '../actions';

import { PersonService } from '../../../core/services';
import { Person } from '../../../core/models';
import { NavigationGoAction } from '../../../core/store';

@Injectable()
export class PersonEffects {

    @Effect()
    $load: Observable<Action> = this.actions$.pipe(
        ofType<PersonsLoadAction>(PersonActionTypes.Load),
        switchMap(() => {
            return this.personService.getPersons().pipe(
                map((data) => new PersonsLoadSuccessAction(data)),
                catchError((err) => of(new PersonsLoadFailureAction(err)))
            );
        })
    );

    @Effect()
    $update: Observable<Action> = this.actions$.pipe(
        ofType<PersonUpdateAction>(PersonActionTypes.Update),
        map((action: PersonUpdateAction) => action.payload),
        switchMap((person: Person) => {
            return this.personService.update(person).pipe(
                map((data) => new PersonUpdateSuccessAction(data)),
                catchError((err) => of(new PersonUpdateFailureAction(err)))
            );
        })
    );

    @Effect()
    $updated: Observable<Action> = this.actions$.pipe(
        ofType<PersonUpdateSuccessAction>(PersonActionTypes.Update_Success),
        switchMap(() => {
            return of(new NavigationGoAction({path: ['person/list']}));
        })
    );

    @Effect()
    $init: Observable<Action> = defer(() => {
        return of(new PersonsLoadAction());
    });

    constructor(private actions$: Actions, private personService: PersonService) { }
}
