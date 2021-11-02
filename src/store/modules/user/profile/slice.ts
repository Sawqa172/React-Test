import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { initialState } from './state';

// types
import {
  FetchDataFailurePayload,
  FetchDataTriggerPayload,
  UpdateDataFailurePayload,
  UpdateDataTriggerPayload,
  UpdatePasswordTriggerPayload,
  UpdatePasswordFailurePayload,
} from './types';
import Profile from 'types/models/profile';

const slice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // fetch
    fetchProfileDataTrigger(
      state,
      action: PayloadAction<FetchDataTriggerPayload>,
    ) {
      state.profile.fetch.loading = true;
      state.profile.fetch.done = false;
      state.profile.fetch.error = null;
    },
    fetchProfileDataSuccess(state, action: PayloadAction<Profile>) {
      state.profile.data = action.payload;
      state.profile.fetch.done = true;
    },
    fetchProfileDataFailed(
      state,
      action: PayloadAction<FetchDataFailurePayload>,
    ) {
      state.profile.fetch.error = action.payload;
    },
    fetchProfileDataFulfilled(state) {
      state.profile.fetch.loading = false;
    },

    // update
    updateProfileDataTrigger(
      state,
      action: PayloadAction<UpdateDataTriggerPayload>,
    ) {
      state.profile.update.loading = true;
      state.profile.update.done = false;
      state.profile.update.error = null;
    },
    updateProfileDataSuccess(state, action: PayloadAction<Profile>) {
      state.profile.data = action.payload;
      state.profile.update.done = true;
    },
    updateProfileDataFailed(
      state,
      action: PayloadAction<UpdateDataFailurePayload>,
    ) {
      state.profile.update.error = action.payload;
    },
    updateProfileDataFulfilled(state) {
      state.profile.update.loading = false;
      state.profile.update.done = false;
    },

    // update password
    updatePasswordTrigger(
      state,
      action: PayloadAction<UpdatePasswordTriggerPayload>,
    ) {
      state.password.update.loading = true;
      state.password.update.done = false;
      state.password.update.error = null;
    },
    updatePasswordSuccess(state) {
      state.password.update.done = true;
    },
    updatePasswordFailed(
      state,
      action: PayloadAction<UpdatePasswordFailurePayload>,
    ) {
      state.password.update.error = action.payload;
    },
    updatePasswordFulfilled(state) {
      state.password.update.loading = false;
      state.password.update.done = false;
    },

    // clean profile data
    cleanProfileData(state) {
      state.profile.data = null;
    },
  },
});

export const { actions, reducer, name } = slice;
