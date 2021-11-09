import { call, put, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import {
  setAuthAccessToken,
  getContactsData,
  fetchSingleProduct,
  fetchCategoryProducts,
  fetchAllProducts,
  fetchAsideCategories,
} from './services';
import { actions as appActions } from './slice';
import { actions as logoutActions } from 'store/modules/auth/logout/slice';
// import { actions } from './static/home/slice';
import axios from 'axios';
import { log } from 'util';




// auth check state
export function* autoLoginSaga() {
  const token = yield localStorage.getItem('access_token');

  if (token) {
    const decodedInfo = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    // @ts-ignore
    console.log(decodedInfo.exp);
    console.log(currentTime);

    // @ts-ignore
    if (decodedInfo?.exp > currentTime) {
      yield call(setAuthAccessToken, token);
      yield put(appActions.autoLoginSetToken({ token }));
    } else {
      yield put(logoutActions.fetchDataTrigger());
    }
  } else {
    yield put(appActions.autoLoginRestrictToken());
    yield put(logoutActions.fetchDataTrigger());
  }
}




export function* fetchContactsDataSaga() {
  try {
    const { data } = yield call(getContactsData);
    yield put(appActions.fetchContactsDataSuccess(data));
  } catch (err) {
    // yield put(appActions.fetchContactsDataFailed(err));
  } finally {
    yield put(appActions.fetchContactsDataFulfilled());
  }
}


//FetchAsideCategories

export function* fetchAsideCategoriesSaga() {

  try {
    const  data = yield call(fetchAsideCategories);

    yield put(appActions.fetchAsideCategoriesSuccess(data));
    } catch (err) {
      yield put(appActions.fetchAsideCategoriesFailed(err));
    }
    // finally {
    //   yield put(appActions.fetchAsideCategoriesFulfilled());
    // }

}

//FetchAllProducts
export function* fetchAllProductsSaga() {
  try {
    const data  = yield call(fetchAllProducts);
    yield put(appActions.fetchAllProductsSuccess(data));
  } catch (err) {
    yield put(appActions.fetchAllProductsFailed(err));
  }
  // finally {
  //   yield put(appActions.fetchAllProductsFulfilled());
  // }

}

export function* fetchCategoryAllProductsSaga(that) {

  try {
    const data = yield call(fetchCategoryProducts,that.payload);

    yield put(appActions.fetchCategoryAllProductsSuccess(data));
  } catch (err) {
    yield put(appActions.fetchCategoryAllProductsFailed(err));
  }
  // finally {
  //   yield put(appActions.fetchAllProductsFulfilled());
  // }

}

export function* fetchSingleProductSaga(param) {
  try {
    const data  = yield call(fetchSingleProduct, param);

    yield put(appActions.fetchSingleProductSuccess(data));
  } catch (err) {
    yield put(appActions.fetchSingleProductFailed(err));
  } finally {
    yield put(appActions.fetchSingleProductFulfilled());
  }

}
//bag
export function* bagSaga(that) {
  try {
    yield put(appActions.setBagSuccess(that.payload));
  } catch (err) {
    yield put(appActions.setBagFailed(err));
  } finally {
    yield put(appActions.setBagFulfilled());
    // yield
  }

}

//update bag
export function* updateBagSaga(that) {
  try {
    yield put(appActions.updateBagSuccess(that.payload));
  } catch (err) {
    yield put(appActions.updateBagFailed(err));
  } finally {
    yield put(appActions.updateBagFulfilled());
    // yield
  }

}


/**
 * Root saga manages watcher lifecycle
 */
export function* appSaga() {
  yield takeLatest(appActions.autoLoginTrigger.type, autoLoginSaga);
  yield takeLatest(
    appActions.fetchContactsDataTrigger.type,
    fetchContactsDataSaga,
  );
  yield takeLatest(appActions.fetchAsideCategoriesTrigger,fetchAsideCategoriesSaga);
  yield takeLatest(appActions.fetchAllProductsTrigger,fetchAllProductsSaga);
  yield takeLatest(appActions.fetchSingleProductTrigger,fetchSingleProductSaga);
  yield takeLatest(appActions.setBagTrigger,bagSaga);
  yield takeLatest(appActions.updateBagTrigger,updateBagSaga);
  yield takeLatest(appActions.fetchCategoryAllProductsTrigger,fetchCategoryAllProductsSaga);

}
