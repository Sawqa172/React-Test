import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as loginActions } from 'store/modules/auth/login/slice';
import { actions as resetActions } from './slice';
import resetPasswordService from './services';

/**
 * Reset Password request/response handler
 */
export function* fetchResetPasswordSaga({
  payload,
}: ReturnType<typeof resetActions.fetchDataTrigger>) {
  try {
    yield call(resetPasswordService, payload);
    yield put(resetActions.fetchDataSuccess());

    // auto login
    const email = payload.email;
    const password = payload.password;
    const reffererUrl = null;

    yield put(loginActions.fetchDataTrigger({ email, password, reffererUrl }));
  } catch (err) {
    yield put(resetActions.fetchDataFailed(err));
  } finally {
    yield put(resetActions.fetchDataFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* resetPasswordSaga() {
  yield takeLatest(resetActions.fetchDataTrigger.type, fetchResetPasswordSaga);
}
