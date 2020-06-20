import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import NewsApi from '../apis/newsApi';

// const country = 'gb';
// const category = 'sports';
// const query = 'trump';

// /* getTopHeadlines */
// export const testSaga = function* testSaga(action) {
//   try {
//     const result = yield call(NewsApi.getTopHeadlines, { country });
//     console.log('result', result);
//     // const user = result.articles[0].source.name;
//     const user = 'qqqqq';

//     yield put({ type: ActionTypes.TEST_FETCH_SUCCEEDED, user: user });
//   } catch (e) {
//     yield put({ type: ActionTypes.TEST_FETCH_FAILED, message: e.message });
//   }
// };

export const fetchCategoryArticles = function* fetchCategoryArticles({
  country,
  category,
}) {
  try {
    const result = yield call(NewsApi.getCategoryArticles, {
      country,
      category,
    });

    console.log('result', result);

    yield put({ type: ActionTypes.FETCH_CATEGORY_ARTICLES_SUCCESS });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_CATEGORY_ARTICLES_ERROR });
  }
};

export const searchTopArticlesSaga = function* searchTopArticlesSaga({
  country,
  query,
}) {
  try {
    const result = yield call(NewsApi.searchTopArticles, {
      country,
      query,
    });

    console.log('result', result);

    yield put({ type: ActionTypes.FETCH_SEARCH_TOP_ARTICLES_SUCCESS });
  } catch (e) {
    yield put({
      type: ActionTypes.FETCH_SEARCH_TOP_ARTICLES_ERROR,
      message: e.message,
    });
  }
};
