import { createSlice } from 'utils/@reduxjs/toolkit';
import { initialState } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import { AutoLoginSetSuccessPayload, ContactsItem, IProductsState } from './types';
import {IProducts} from 'types/models/products'


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
    fetchDataTrigger(state) {
      state.error = null;
    },

    //fetchAsideCategories
    fetchAsideCategoriesTrigger(state) {
      state.categories.loading = true;
      state.categories.done = false;
      state.categories.error = null;
    },
    fetchAsideCategoriesSuccess(state, action: PayloadAction<[]>) {
      state.categories.done = true;
      state.categories.data = [...state.categories.data ,...action.payload];
    },
    fetchAsideCategoriesFailed(state, action) {
      state.categories.error = action.payload;
    },
    fetchAsideCategoriesFulfilled(state) {
      state.categories.loading = false;
      state.categories.done = false;
    },

    //fetchAllProducts
    fetchAllProductsTrigger(state) {
      state.allProducts.loading = true;
      state.allProducts.done = false;
      state.allProducts.error = null;
    },
    fetchAllProductsSuccess(state, action) {
      state.allProducts.done = true;
      state.allProducts.data = action.payload;
    },
    fetchAllProductsFailed(state, action) {
      state.allProducts.error = action.payload;
    },
    fetchAllProductsFulfilled(state) {
      state.allProducts.loading = false;
      state.allProducts.done = false;
    },

  },
});

export const { actions, reducer, name } = appSlice;
