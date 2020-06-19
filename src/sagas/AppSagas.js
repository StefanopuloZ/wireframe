import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import TestApi from '../apis/testApi';

export const testSaga = function* testSaga(action) {
  try {
    const result = yield call(TestApi.testFetch);
    console.log('result', result);
    const user = result.articles[0].source.name;

    yield put({ type: ActionTypes.TEST_FETCH_SUCCEEDED, user: user });
  } catch (e) {
    yield put({ type: ActionTypes.TEST_FETCH_FAILED, message: e.message });
  }
};
