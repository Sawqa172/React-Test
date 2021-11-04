import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.home || initialState;

// export const selectData = createSelector(
//   [selectDomain],
//   homeState => homeState.data,
// );
export const homeCategories = createSelector(
  [selectDomain],
  homeState => homeState.data
)
export const selectLoading = createSelector(
  [selectDomain],
  homeState => homeState.loading,
);

export const selectDone = createSelector(
  [selectDomain],
  homeState => homeState.done,
);

export const selectError = createSelector(
  [selectDomain],
  homeState => homeState.error,
);
