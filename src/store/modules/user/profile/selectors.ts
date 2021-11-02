import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.profile || initialState;

export const selectProfileData = createSelector(
  [selectDomain],
  profileState => {
    if (profileState.profile.data) {
      const { ...data } = profileState.profile.data;

      return data;
    } else {
      return null;
    }
  },
);

export const selectProfileFetchLoading = createSelector(
  [selectDomain],
  profileState => profileState.profile.fetch.loading,
);

export const selectProfileFetchDone = createSelector(
  [selectDomain],
  profileState => profileState.profile.fetch.done,
);

export const selectProfileFetchError = createSelector(
  [selectDomain],
  profileState => profileState.profile.fetch.error,
);

export const selectProfileUpdateLoading = createSelector(
  [selectDomain],
  profileState => profileState.profile.update.loading,
);

export const selectProfileUpdateDone = createSelector(
  [selectDomain],
  profileState => profileState.profile.update.done,
);

export const selectProfileUpdateError = createSelector(
  [selectDomain],
  profileState => profileState.profile.update.error,
);

export const selectPasswordUpdateLoading = createSelector(
  [selectDomain],
  profileState => profileState.password.update.loading,
);

export const selectPasswordUpdateDone = createSelector(
  [selectDomain],
  profileState => profileState.password.update.done,
);

export const selectPasswordUpdateError = createSelector(
  [selectDomain],
  profileState => profileState.password.update.error,
);
