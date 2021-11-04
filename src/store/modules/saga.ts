import { call, put, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';

import { setAuthAccessToken, getContactsData } from './services';
import { actions as appActions } from './slice';
import { actions as logoutActions } from 'store/modules/auth/logout/slice';
// import { actions } from './static/home/slice';
import axios from 'axios';




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
  const fetchAsideCategories = () => {
    return axios.get('https://fakestoreapi.com/products/categories')
  }
  try {
    const { data } = yield call(fetchAsideCategories);

    yield put(appActions.fetchAsideCategoriesSuccess(data));
    } catch (err) {
      yield put(appActions.fetchAsideCategoriesFailed(err));
    } finally {
      yield put(appActions.fetchAsideCategoriesFulfilled());
    }

}

//FetchAllProducts
export function* fetchAllProductsSaga() {
  const fetchAllProducts = () => {
    return axios.get('https://fakestoreapi.com/products?limit=10')
  }
  try {
    const { data } = yield call(fetchAllProducts);

    yield put(appActions.fetchAllProductsSuccess(data));
  } catch (err) {
    yield put(appActions.fetchAllProductsFailed(err));
  } finally {
    yield put(appActions.fetchAllProductsFulfilled());
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

}
