import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.resetPassword || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  resetPasswordState => resetPasswordState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  resetPasswordState => resetPasswordState.done,
);

export const selectError = createSelector(
  [selectDomain],
  resetPasswordState => resetPasswordState.error,
);
