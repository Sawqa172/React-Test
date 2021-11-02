import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import * as services from './services';

/**
 * Faq request/response handler
 */
export function* fetchListDataSaga() {
  try {
    const { data } = yield call(services.getListData);

    yield put(actions.fetchListDataSuccess(data));
  } catch (err) {
    yield put(actions.fetchListDataFailed(err));
  } finally {
    yield put(actions.fetchListDataFulfilled());
  }
}

/**
 * Faq send feedback handler
 */
export function* sendFeedbackSaga({
  payload,
}: ReturnType<typeof actions.sendFeedbackTrigger>) {
  try {
    yield call(services.postFeedbackData, payload);

    yield put(actions.sendFeedbackSuccess());
  } catch (err) {
    yield put(actions.sendFeedbackFailed(err));
  } finally {
    yield put(actions.sendFeedbackFulfilled());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* faqSaga() {
  yield takeLatest(actions.fetchListDataTrigger.type, fetchListDataSaga);
  yield takeLatest(actions.sendFeedbackTrigger.type, sendFeedbackSaga);
}
