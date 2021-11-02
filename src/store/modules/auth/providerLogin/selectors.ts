import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.providerLogin || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  providerLoginState => providerLoginState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  providerLoginState => providerLoginState.done,
);

export const selectError = createSelector(
  [selectDomain],
  providerLoginState => providerLoginState.error,
);
