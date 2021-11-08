import { createSlice } from 'utils/@reduxjs/toolkit';
import { initialState } from './state';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  AutoLoginSetSuccessPayload,
  ContactsItem,
  FetchSingleProductTriggerPayload,
  IProductsState,
  setBagTriggerPayload,
} from './types';
import {IProducts} from 'types/models/products'
import { FetchTriggerPayload } from './auth/login/types';


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
      state.categories.data = action.payload;
      state.categories.data = ['See all', ...state.categories.data]
    },
    fetchAsideCategoriesFailed(state, action) {
      state.categories.error = action.payload;
    },
    // fetchAsideCategoriesFulfilled(state) {
    //   state.categories.loading = false;
    //   state.categories.done = false;
    // },

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
    // fetchAllProductsFulfilled(state) {
    //   state.allProducts.loading = false;
    //   state.allProducts.done = false;
    // },


    //fetchCategoryALlProducts
    fetchCategoryAllProductsTrigger(state,action: PayloadAction<FetchSingleProductTriggerPayload>) {
      state.allProducts.loading = true;
      state.allProducts.done = false;
      state.allProducts.error = null;
    },
    fetchCategoryAllProductsSuccess(state, action) {
      state.allProducts.done = true;
      state.allProducts.data = action.payload;
    },
    fetchCategoryAllProductsFailed(state, action) {
      state.allProducts.error = action.payload;
    },


    //fetchSingleProduct
    fetchSingleProductTrigger(state, action: PayloadAction<FetchSingleProductTriggerPayload>) {
      state.singleProduct.loading = true;
      state.singleProduct.done = false;
      state.singleProduct.error = null;
    },
    fetchSingleProductSuccess(state, action) {
      state.singleProduct.done = true;
      state.singleProduct.data = action.payload;
    },
    fetchSingleProductFailed(state, action) {
      state.singleProduct.error = action.payload;
    },
    fetchSingleProductFulfilled(state) {
      state.singleProduct.loading = false;
      state.singleProduct.done = false;
    },


  //setBag
    setBagTrigger(state, action:PayloadAction<setBagTriggerPayload>) {
      state.bag.done = true;
    },
    setBagSuccess(state, action) {
      state.bag.data = [...state.bag.data, action.payload];
    },
    setBagFailed(state, action) {
      state.bag.error = action.payload;
    },
    setBagFulfilled(state) {
      state.bag.loading = false;
      state.bag.done = false;
    },


    //update Bag
    updateBagTrigger(state, action:PayloadAction<string | null>) {
      state.bag.done = true;
    },
    updateBagSuccess(state, action) {
      state.bag.data = action.payload;
    },
    updateBagFailed(state, action) {
      state.bag.error = action.payload;
    },
    updateBagFulfilled(state) {
      state.bag.loading = false;
      state.bag.done = false;
    },

    // fetchSingleProductFailed(state, action) {
    //   state.singleProduct.error = action.payload;
    // },
    // fetchSingleProductFulfilled(state) {
    //   state.singleProduct.loading = false;
    //   state.singleProduct.done = false;
    // },

  },
});

export const { actions, reducer, name } = appSlice;
