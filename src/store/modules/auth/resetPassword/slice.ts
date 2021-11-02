/*

 * ResetPassword Slice
 *
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { initialState } from './state';
import { FetchPayloadErrorType, FetchTriggerPayload } from './types';

const slice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    fetchDataTrigger(state, action: PayloadAction<FetchTriggerPayload>) {
      state.loading = true;
      state.done = false;
      state.error = null;
    },
    fetchDataSuccess(state) {
      state.done = true;
    },
    fetchDataFailed(state, action: PayloadAction<FetchPayloadErrorType>) {
      state.error = action.payload;
    },
    fetchDataFulfilled(state) {
      state.loading = false;
      state.done = false;
    },
  },
});

export const { actions, reducer, name } = slice;
