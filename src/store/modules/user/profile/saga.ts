import { call, put, takeLatest } from 'redux-saga/effects';
import { actions as profileActions } from './slice';
import { getProfileData, postProfileData, postPassword } from './services';

/**
 * Fetch Profile request/response handler
 */
export function* fetchProfileDataSaga({
  payload,
}: ReturnType<typeof profileActions.fetchProfileDataTrigger>) {
  try {
    const { data } = yield call(getProfileData, payload);

    yield put(profileActions.fetchProfileDataSuccess(data));
  } catch (err) {
    yield put(profileActions.fetchProfileDataFailed(err));
  } finally {
    yield put(profileActions.fetchProfileDataFulfilled());
  }
}

/**
 * Update Profile request/response handler
 */
export function* updateProfileDataSaga({
  payload,
}: ReturnType<typeof profileActions.updateProfileDataTrigger>) {
  try {
    const { data } = yield call(postProfileData, payload);

    yield put(profileActions.updateProfileDataSuccess(data));
  } catch (err) {
    yield put(profileActions.updateProfileDataFailed(err));
  } finally {
    yield put(profileActions.updateProfileDataFulfilled());
  }
}

/**
 * Update Password request/response handler
 */
export function* updatePasswordDataSaga({
  payload,
}: ReturnType<typeof profileActions.updatePasswordTrigger>) {
  try {
    yield call(postPassword, payload);

    yield put(profileActions.updatePasswordSuccess());
  } catch (err) {
    yield put(profileActions.updatePasswordFailed(err));
  } finally {
    yield put(profileActions.updatePasswordFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* profileSaga() {
  yield takeLatest(
    profileActions.fetchProfileDataTrigger.type,
    fetchProfileDataSaga,
  );
  yield takeLatest(
    profileActions.updateProfileDataTrigger.type,
    updateProfileDataSaga,
  );
  yield takeLatest(
    profileActions.updatePasswordTrigger.type,
    updatePasswordDataSaga,
  );
}
