import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as restorePasswordActions } from './slice';
import * as services from './services';

/**
 * Restore Password request/response handler
 */
export function* fetchRestorePasswordSaga({
  payload,
}: ReturnType<typeof restorePasswordActions.fetchDataTrigger>) {
  try {
    yield call(services.restorePasswordService, payload);

    yield put(restorePasswordActions.fetchDataSuccess());
  } catch (err) {
    yield put(restorePasswordActions.fetchDataFailed(err));
  } finally {
    yield put(restorePasswordActions.fetchDataFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* restorePasswordSaga() {
  yield takeLatest(
    restorePasswordActions.fetchDataTrigger.type,
    fetchRestorePasswordSaga,
  );
}
