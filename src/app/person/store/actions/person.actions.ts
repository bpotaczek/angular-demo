import { Action } from '@ngrx/store';
import { Person } from '../../../core/models';

export enum PersonActionTypes {
    Load = '[Person] LOAD',
    Load_Success = '[Person] LOAD_SUCCESS',
    Load_Failure = '[Person] LOAD_FAILURE',
    Selected = '[Person] SELECTED',
    Selected_Success = '[Person] SELECTED_SUCCESS',
    Selected_Failure = '[Person] SELECTED_FAILURE',
    Update = '[Person] UPDATE',
    Update_Success = '[Person] UPDATE_SUCCESS',
    Update_Failure = '[Person] UPDATE_FAILURE',
}

export class PersonsLoadAction implements Action {
    readonly type = PersonActionTypes.Load;

    constructor() { }
}

export class PersonsLoadSuccessAction implements Action {
    readonly type = PersonActionTypes.Load_Success;

    constructor(public payload: Person[]) { }
}

export class PersonsLoadFailureAction implements Action {
    readonly type = PersonActionTypes.Load_Failure;

    constructor(public payload: Error) { }
}

export class PersonSelectedAction implements Action {
    readonly type = PersonActionTypes.Selected;

    constructor(public payload: number) { }
}

export class PersonSelectedSuccessAction implements Action {
    readonly type = PersonActionTypes.Selected_Success;

    constructor(public payload: Person) { }
}

export class PersonSelectedFailureAction implements Action {
    readonly type = PersonActionTypes.Selected_Failure;

    constructor(public payload: Error) { }
}

export class PersonUpdateAction implements Action {
    readonly type = PersonActionTypes.Update;

    constructor(public payload: Person) { }
}

export class PersonUpdateSuccessAction implements Action {
    readonly type = PersonActionTypes.Update_Success;

    constructor(public payload: Person) { }
}

export class PersonUpdateFailureAction implements Action {
    readonly type = PersonActionTypes.Update_Failure;

    constructor(public payload: Error) { }
}

export type PersonActions =
    PersonsLoadAction |
    PersonsLoadSuccessAction |
    PersonsLoadFailureAction |
    PersonSelectedAction |
    PersonSelectedSuccessAction |
    PersonSelectedFailureAction |
    PersonUpdateAction |
    PersonUpdateSuccessAction |
    PersonUpdateFailureAction;
