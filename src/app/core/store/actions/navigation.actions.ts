import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum NavigationActionTypes {
    Go = '[Router] GO',
    Back = '[Router] BACK',
    Forward = '[Router] FORWARD'
}

export class NavigationGoAction implements Action {
  readonly type = NavigationActionTypes.Go;

  constructor(public payload: {
    path: any[];
    query?: object;
    extras?: NavigationExtras;
  }) {}
}

export class NavigationBackAction implements Action {
  readonly type = NavigationActionTypes.Back;
}

export class NavigationForwardAction implements Action {
  readonly type = NavigationActionTypes.Forward;
}

export type Actions
  = NavigationGoAction
  | NavigationBackAction
  | NavigationForwardAction;
