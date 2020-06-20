import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import NewsApi from '../apis/newsApi';

const country = 'gb';
const query = 'trump';

/* searchTopHeadlines */
export const testSaga = function* testSaga(action) {
  try {
    const result = yield call(NewsApi.searchTopHeadlines, {
      country,
      query,
    });
    console.log('result', result);
    // const user = result.articles[0].source.name;
    const user = 'qqqqq';

    yield put({ type: ActionTypes.TEST_FETCH_SUCCEEDED, user: user });
  } catch (e) {
    yield put({ type: ActionTypes.TEST_FETCH_FAILED, message: e.message });
  }
};
