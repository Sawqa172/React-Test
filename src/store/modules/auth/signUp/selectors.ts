import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.signUp || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  signUpState => signUpState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  signUpState => signUpState.done,
);

export const selectError = createSelector(
  [selectDomain],
  signUpState => signUpState.error,
);
