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


export const selectCategories = createSelector(
  [selectDomain],
  appState => appState.categories.data,
);
export const isLoadingCategories = createSelector(
  [selectDomain],
  appState => appState.categories.loading,
);

export const selectAllProducts = createSelector(
  [selectDomain],
  appState => appState.allProducts.data,
);
export const isLoadingAllProducts = createSelector(
  [selectDomain],
  appState => appState.allProducts.loading,
);


export const selectSingleProduct = createSelector(
  [selectDomain],
  appState => appState.singleProduct.data,
);
export const isLoadingSingleProduct = createSelector(
  [selectDomain],
  appState => appState.singleProduct.loading,
);

export const selectBag = createSelector(
  [selectDomain],
  appState => appState.bag.data,
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
