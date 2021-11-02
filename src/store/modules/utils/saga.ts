import { call, put, takeLatest } from 'redux-saga/effects';

import { actions as resetActions } from './slice';
import utilsService from './services';

/**
 * Upload file request/response handler
 */
export function* uploadFileSaga({
  payload,
}: ReturnType<typeof resetActions.uploadFileTrigger>) {
  try {
    const {
      data: { url },
    } = yield call(utilsService, payload);

    yield put(resetActions.uploadFileSuccess(url));
  } catch (err) {
    yield put(resetActions.uploadFileFailure(err));
  } finally {
    yield put(resetActions.uploadFileFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* utilsSaga() {
  yield takeLatest(resetActions.uploadFileTrigger.type, uploadFileSaga);
}
