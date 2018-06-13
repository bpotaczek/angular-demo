import { Action } from '@ngrx/store';
import { User } from 'shared-components';
import { AuthActions, AuthActionTypes } from '../actions';
import { AuthToken } from 'shared-components';

export interface State {
    loggedin: boolean;
    loggingin: boolean;
    token: AuthToken;
}

const initialState: State = {
    loggedin: false,
    loggingin: false,
    token: null
};

export function reducer(state: State = initialState, action: AuthActions): State {
    switch (action.type) {
        case AuthActionTypes.Login: {
            return Object.assign({}, state, {
                loggingin: true
            });
        }
        case AuthActionTypes.Login_Success: {
            const data = action.payload;
            return {
                loggedin: true,
                loggingin: false,
                token: data
            };
        }
        case AuthActionTypes.Logout:
        case AuthActionTypes.Login_Failure: {
            return Object.assign({}, state, {
                loggingin: false,
                loggedin: false,
                token: null
            });
        }
        default:
            return state;
    }
}

export const getLoggedIn = (state: State) => state.loggedin;
export const getLoggingIn = (state: State) => state.loggingin;
export const getAuthToken = (state: State) => state.token;
