import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as logoutActions } from './slice';
import { actions as appActions } from 'store/modules/slice';
import * as services from './services';

/**
 * Logout request/response handler
 */
export function* fetchLogoutSaga() {
  try {
    // yield call(services.logoutService);

    yield put(logoutActions.fetchDataSuccess());
  } catch (err) {
    yield put(logoutActions.fetchDataFailed(err));
  } finally {
    yield put(logoutActions.fetchDataFulfilled());

    yield call(services.deleteAuthAccessToken);
    yield put(appActions.autoLoginRestrictToken());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* logoutSaga() {
  yield takeLatest(logoutActions.fetchDataTrigger.type, fetchLogoutSaga);
}
