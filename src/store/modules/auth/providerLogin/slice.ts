import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { FetchPayloadErrorType, FetchTriggerPayload } from './types';
import { initialState } from './state';

const providerLoginSlice = createSlice({
  name: 'providerLogin',
  initialState,
  reducers: {
    fetchTrigger(state, action: PayloadAction<FetchTriggerPayload>) {
      state.loading = true;
      state.done = false;
      state.error = null;
    },
    fetchSuccess(state) {
      state.done = true;
    },
    fetchFailed(state, action: PayloadAction<FetchPayloadErrorType>) {
      state.error = action.payload;
    },
    fetchFulfilled(state) {
      state.loading = false;
      state.done = false;
    },
  },
});

export const { actions, reducer, name } = providerLoginSlice;
