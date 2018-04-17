import { Action } from '@ngrx/store';
import { User, Login, AuthToken } from '../../models';

export enum AuthActionTypes {
    Login = '[Auth] LOGIN',
    Login_Success = '[Auth] LOGIN_SUCCESS',
    Login_Failure = '[Auth] LOGIN_FAILURE',
    Login_TokenSet = '[Auth] TOKEN_SET',
    Logout = '[Auth] LOGOUT',
}

export class AuthLoginAction implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload: Login) { }
}

export class AuthLoginSuccessAction implements Action {
    readonly type = AuthActionTypes.Login_Success;

    constructor(public payload: AuthToken) { }
}

export class AuthLoginFailureAction implements Action {
    readonly type = AuthActionTypes.Login_Failure;

    constructor(public payload: Error) { }
}

export class AuthLogoutAction implements Action {
    readonly type = AuthActionTypes.Logout;

    constructor() { }
}

export class AuthTokenSetAction implements Action {
    readonly type = AuthActionTypes.Login_TokenSet;

    constructor() { }
}

export type AuthActions =
    AuthLoginAction |
    AuthLoginSuccessAction |
    AuthLoginFailureAction |
    AuthLogoutAction |
    AuthTokenSetAction;
