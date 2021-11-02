import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) =>
  state.restorePassword || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  restorePasswordState => restorePasswordState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  restorePasswordState => restorePasswordState.done,
);

export const selectError = createSelector(
  [selectDomain],
  restorePasswordState => restorePasswordState.error,
);
