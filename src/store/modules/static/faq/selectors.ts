import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './state';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.faq || initialState;

export const selectListData = createSelector(
  [selectDomain],
  faqState => faqState.list.data,
);

export const selectListLoading = createSelector(
  [selectDomain],
  faqState => faqState.list.loading,
);

export const selectListDone = createSelector(
  [selectDomain],
  faqState => faqState.list.done,
);

export const selectListError = createSelector(
  [selectDomain],
  faqState => faqState.list.error,
);

export const selectFeedbackLoading = createSelector(
  [selectDomain],
  faqState => faqState.feedback.loading,
);

export const selectFeedbackDone = createSelector(
  [selectDomain],
  faqState => faqState.feedback.done,
);

export const selectFeedbackError = createSelector(
  [selectDomain],
  faqState => faqState.feedback.error,
);
