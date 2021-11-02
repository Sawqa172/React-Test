import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as providerLoginActions } from './slice';
import * as services from './services';
import {
  setAuthAccessToken,
  setHasBeenAlreadyAuthBefore,
} from '../../services';
import { actions as appActions } from '../../slice';

/**
 * Provider Login request/response handler
 */
export function* fetchProviderLoginSaga({
  payload,
}: ReturnType<typeof providerLoginActions.fetchTrigger>) {
  try {
    console.log('before service');

    const { accessToken } = yield call(services.providerLoginService, payload);

    yield put(providerLoginActions.fetchSuccess());
    yield put(appActions.autoLoginSetToken({ token: accessToken }));
    yield call(setAuthAccessToken, accessToken);
    yield call(setHasBeenAlreadyAuthBefore);
  } catch (err) {
    yield put(providerLoginActions.fetchFailed(err));
  } finally {
    yield put(providerLoginActions.fetchFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* providerLoginSaga() {
  yield takeLatest(
    providerLoginActions.fetchTrigger.type,
    fetchProviderLoginSaga,
  );
}
