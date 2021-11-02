import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.logout || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  logoutState => logoutState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  logoutState => logoutState.done,
);

export const selectError = createSelector(
  [selectDomain],
  logoutState => logoutState.error,
);
