import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.utils || initialState;

export const selectFileData = createSelector(
  [selectDomain],
  utilsState => utilsState.file.data,
);

export const selectFileUploadLoading = createSelector(
  [selectDomain],
  utilsState => utilsState.file.loading,
);

export const selectFileUploadDone = createSelector(
  [selectDomain],
  utilsState => utilsState.file.done,
);

export const selectFileUploadError = createSelector(
  [selectDomain],
  utilsState => utilsState.file.error,
);
