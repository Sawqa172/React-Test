import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

import { initialState } from './state';
import { FetchPayloadErrorType,FetchPayloadSuccessType } from './types';

// Creating slice with reducers
const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchDataTrigger(state) {
      state.loading = true;
      state.done = false;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<FetchPayloadSuccessType>) {
      state.done = true;
      state.data = action.payload;
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


export const { name, actions, reducer } = slice;
