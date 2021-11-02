/*

 * Utils Slice
 *
 */

import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { initialState } from './state';
import {
  UploadFileFailurePayload,
  UploadFileSuccessPayload,
  UploadFileTriggerPayload,
} from './types';

const slice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    uploadFileTrigger(state, action: PayloadAction<UploadFileTriggerPayload>) {
      state.file.loading = true;
      state.file.done = false;
      state.file.error = null;
    },
    uploadFileSuccess(state, action: PayloadAction<UploadFileSuccessPayload>) {
      state.file.data = action.payload;
      state.file.done = true;
    },
    uploadFileFailure(state, action: PayloadAction<UploadFileFailurePayload>) {
      state.file.error = action.payload;
    },
    uploadFileFulfilled(state) {
      state.file.loading = false;
      state.file.done = false;
    },
  },
});

export const { actions, reducer, name } = slice;
