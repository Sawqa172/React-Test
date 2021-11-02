import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as signUpActions } from './slice';
import { actions as loginActions } from 'store/modules/auth/login/slice';
import * as services from './services';

/**
 * SignUp request/response handler
 */
export function* fetchSignUpSaga({
  payload,
}: ReturnType<typeof signUpActions.fetchDataTrigger>) {
  try {
    yield call(services.signUpService, payload);

    yield put(signUpActions.fetchDataSuccess());

    // auto login
    yield put(
      loginActions.fetchDataTrigger({
        email: payload.email,
        password: payload.password,
        reffererUrl: payload.reffererUrl,
      }),
    );
  } catch (err) {
    yield put(signUpActions.fetchDataFailed(err));
  } finally {
    yield put(signUpActions.fetchDataFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* signUpSaga() {
  yield takeLatest(signUpActions.fetchDataTrigger.type, fetchSignUpSaga);
}
