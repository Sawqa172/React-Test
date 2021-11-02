import { createSlice } from 'utils/@reduxjs/toolkit';
import { initialState } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { AutoLoginSetSuccessPayload, ContactsItem } from './types';

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    autoLoginTrigger(state) {
      state.error = null;
    },
    autoLoginSetToken(
      state,
      action: PayloadAction<AutoLoginSetSuccessPayload>,
    ) {
      state.token = action.payload.token;
    },
    autoLoginRestrictToken(state) {
      state.token = null;
    },
    fetchContactsDataTrigger(state) {
      state.contacts.loading = true;
      state.contacts.done = false;
      state.contacts.error = null;
    },
    fetchContactsDataSuccess(
      state,
      action: PayloadAction<Array<ContactsItem>>,
    ) {
      state.contacts.done = true;
      state.contacts.data = action.payload;
    },
    fetchContactsDataFailed(state, action: PayloadAction<ContactsItem>) {
      state.contacts.error = action.payload;
    },
    fetchContactsDataFulfilled(state) {
      state.contacts.loading = false;
      state.contacts.done = false;
    },
  },
});

export const { actions, reducer, name } = appSlice;
