
import * as fromAuth from './auth.reducer';
import { ActionReducerMap, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export interface CoreState {
    auth: fromAuth.State;
    router: fromRouter.RouterReducerState;
}

export const reducers: ActionReducerMap<CoreState> = {
    auth: fromAuth.reducer,
    router: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
        return function(state: CoreState, action: any): CoreState {
          console.log('state', state);
          console.log('action', action);
          return reducer(state, action);
        };
      }

export const metaReducers: MetaReducer<CoreState>[] = !environment.production ? [logger, storeFreeze] : [];
