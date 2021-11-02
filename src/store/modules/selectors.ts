import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.app || initialState;

export const selectIsAuthenticated = createSelector(
  [selectDomain],
  appState => appState.token,
);

export const selectNavigation = createSelector(
  [selectDomain],
  appState => appState.navigation,
);

export const selectFooterNavigation = createSelector([selectDomain], appState =>
  appState.navigation.filter(navItem => navItem.footerNav),
);

export const selectContacts = createSelector(
  [selectDomain],
  appState => appState.contacts.data,
);

export const selectError = createSelector(
  [selectDomain],
  appState => appState.error,
);
