import { Injectable } from '@angular/core';

import { Observable, of, defer } from 'rxjs';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AuthService } from '../../../core/services';
import {
    AuthActionTypes,
    AuthLoginAction,
    AuthLoginFailureAction,
    AuthLoginSuccessAction,
    AuthLogoutAction,
    AuthTokenSetAction,
    NavigationGoAction
} from '../actions';
import { AuthToken, User, Login } from '../../models';
import { tap, map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

    @Effect()
    $login: Observable<Action> = this.actions$.pipe(
        ofType(AuthActionTypes.Login),
        map((action: AuthLoginAction) => {
            return action.payload;
        }),
        switchMap((user: Login) => {
            return this.authService.login(user).pipe(
                map(data => {
                    return new AuthLoginSuccessAction(data);
                }),
                catchError((err) => {
                    return of(new AuthLoginFailureAction(err));
                })
            );
        })
    );

    @Effect()
    $loggedin: Observable<Action> = this.actions$.pipe(
        ofType(AuthActionTypes.Login_Success),
        map((action: AuthLoginSuccessAction) => {
            this.authService.setLogin(action.payload);
            return new AuthTokenSetAction();
        })
    );

    @Effect()
    $auth: Observable<Action> = this.actions$.pipe(
        ofType(AuthActionTypes.Login_TokenSet),
        map((action: AuthTokenSetAction) => new NavigationGoAction({ path: ['']}))
    );

    @Effect()
    $startup: Observable<Action> = defer(() => {
        const auth = this.authService.getLogin();
        if (auth) {
            return of(new AuthLoginSuccessAction(auth));
        }
    });

    @Effect({dispatch: false})
    $logout: Observable<Action> = this.actions$.pipe(
        ofType(AuthActionTypes.Logout),
        tap((action: AuthLogoutAction) => this.authService.clear())
    );

    constructor(private authService: AuthService, private actions$: Actions) { }
}
