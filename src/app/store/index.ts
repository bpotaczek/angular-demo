// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { BatchState, getBatchFeatureState } from '../batches/store';
// import { ChangeRequestState, getChangeRequestFeatureState } from '../changerequest/store';
// import { CoreState, getHoldingCompanyState } from '../core/store';

// // import feature state selectors
// const selectOrderBatchesState = createSelector(getBatchFeatureState, (state) => state.batches);
// const selectChangeRequestState = createSelector(getChangeRequestFeatureState, (state) => state.changeRequests);

// const selectOrderBatchLoading = createSelector(selectOrderBatchesState, (state) => state.loading);
// const selectChangeRequestLoading = createSelector(selectChangeRequestState, (state) => state.loading);
// const selectHoldingCompanyLoading = createSelector(getHoldingCompanyState, (state) => state.loading);

// export const getAppLoading = createSelector([
//     selectHoldingCompanyLoading,
//     selectOrderBatchLoading,
//     selectChangeRequestLoading
// ], (holdingCompany, orderbatch, changerequest) => {
//     return holdingCompany || orderbatch || changerequest;
// });
