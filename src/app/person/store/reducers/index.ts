
import * as fromPerson from './person.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface PersonState {
    person: fromPerson.State;
}

export const reducers: ActionReducerMap<PersonState> = {
    person: fromPerson.reducer
};

export const getPersonFeatureState = createFeatureSelector<PersonState>('person');
