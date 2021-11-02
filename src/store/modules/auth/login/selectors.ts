import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.login || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  loginState => loginState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  loginState => loginState.done,
);

export const selectError = createSelector(
  [selectDomain],
  loginState => loginState.error,
);
