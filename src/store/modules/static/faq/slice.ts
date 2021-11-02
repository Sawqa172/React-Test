import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';
import {
  FetchListPayloadErrorType,
  FetchListPayloadSuccessType,
  SendFeedbackPayloadFailedType,
  SendFeedbackPayloadTriggerType,
} from './types';

// Creating slice with reducers
const slice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    // faq list
    fetchListDataTrigger(state) {
      state.list.loading = true;
      state.list.done = false;
      state.list.error = null;
    },
    fetchListDataSuccess(
      state,
      action: PayloadAction<FetchListPayloadSuccessType>,
    ) {
      state.list.done = true;
      state.list.data = action.payload;
    },
    fetchListDataFailed(
      state,
      action: PayloadAction<FetchListPayloadErrorType>,
    ) {
      state.list.error = action.payload;
    },
    fetchListDataFulfilled(state) {
      state.list.loading = false;
      state.list.done = false;
    },

    // feedback
    sendFeedbackTrigger(
      state,
      payload: PayloadAction<SendFeedbackPayloadTriggerType>,
    ) {
      state.feedback.loading = true;
      state.feedback.done = false;
      state.feedback.error = null;
    },
    sendFeedbackSuccess(state) {
      state.feedback.done = true;
    },
    sendFeedbackFailed(
      state,
      action: PayloadAction<SendFeedbackPayloadFailedType>,
    ) {
      state.feedback.error = action.payload;
    },
    sendFeedbackFulfilled(state) {
      state.feedback.loading = false;
      state.feedback.done = false;
    },
  },
});

export const { name, actions, reducer } = slice;
