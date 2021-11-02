import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as loginActions } from './slice';
import { actions as appActions } from 'store/modules/slice';
import * as services from './services';
import {
  setAuthAccessToken,
  setHasBeenAlreadyAuthBefore,
} from '../../services';

/**
 * Login request/response handler
 */
export function* fetchLoginSaga({
  payload,
}: ReturnType<typeof loginActions.fetchDataTrigger>) {
  try {
    const { accessToken } = yield call(services.loginService, payload);

    yield put(loginActions.fetchDataSuccess());
    yield put(appActions.autoLoginSetToken({ token: accessToken }));
    yield call(setAuthAccessToken, accessToken);
    yield call(setHasBeenAlreadyAuthBefore);
  } catch (err) {
    yield put(loginActions.fetchDataFailed(err));
  } finally {
    yield put(loginActions.fetchDataFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* loginSaga() {
  yield takeLatest(loginActions.fetchDataTrigger.type, fetchLoginSaga);
}
