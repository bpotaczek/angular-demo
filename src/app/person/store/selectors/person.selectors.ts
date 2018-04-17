import { createSelector } from '@ngrx/store';

import * as fromPerson from '../reducers/person.reducer';
import { PersonState, getPersonFeatureState } from '../reducers';

// tasks
export const getPersonState = createSelector(getPersonFeatureState,
    (state: PersonState) => state.person);

export const getPersonEntities = createSelector(getPersonState, fromPerson.getEntities);
export const getPersonSelectedId = createSelector(getPersonState, fromPerson.getSelectedId);

export const getPersonSelectedEntity = createSelector(getPersonEntities, getPersonSelectedId, (entities, id) => {
    return entities.find(x => x.id === id);
});
