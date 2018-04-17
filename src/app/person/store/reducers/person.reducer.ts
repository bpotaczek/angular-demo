import { Action } from '@ngrx/store';
import { PersonActionTypes, PersonActions } from '../actions';
import { Person } from '../../../core/models';

export interface State {
    loaded: boolean;
    loading: boolean;
    saving: boolean;
    entities: Person[];
    selectedId: number;
}

const initialState: State = {
    loaded: false,
    loading: false,
    saving: false,
    entities: [],
    selectedId: null
};

export function reducer(state: State = initialState, action: PersonActions): State {
    switch (action.type) {
        case PersonActionTypes.Load_Success: {
            return Object.assign({}, state, {
                entities: action.payload
            });
        }
        case PersonActionTypes.Update_Success: {
            const person = action.payload;
            return Object.assign({}, state, {
                entities: state.entities.map(x => {
                    if (x.id === person.id) {
                        return person;
                    } else {
                        return x;
                    }
                })
            });
        }
        case PersonActionTypes.Selected: {
            return Object.assign({}, state, {
                selectedId: action.payload
            });
        }
        default:
            return state;
    }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getSaving = (state: State) => state.saving;
export const getEntities = (state: State) => state.entities;
export const getSelectedId = (state: State) => state.selectedId;
