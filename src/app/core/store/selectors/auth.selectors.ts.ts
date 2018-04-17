import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

// auth
export const getAuthState = (state: fromFeature.CoreState) => state.auth;
export const getAuthToken = createSelector(getAuthState, fromAuth.getAuthToken);
export const getLoggedIn = createSelector(getAuthState, fromAuth.getLoggedIn);
export const getLoggingIn = createSelector(getAuthState, fromAuth.getLoggingIn);

export const getUser = createSelector(getAuthToken, (token) => token ? token.UserModel : null);
