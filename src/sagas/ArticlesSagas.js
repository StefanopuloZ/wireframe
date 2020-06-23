import { call, put } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import NewsApi from '../apis/newsApi';

export const fetchTopArticlesSaga = function* fetchTopArticlesSaga({
  country,
}) {
  try {
    yield put({ type: ActionTypes.INCREMENT_LOADER_STATUS });
    const result = yield call(NewsApi.getTopArticles, { country });

    const articles = result.articles;

    yield put({ type: ActionTypes.FETCH_TOP_ARTICLES_SUCCESS, articles });
    yield put({ type: ActionTypes.DECREMENT_LOADER_STATUS });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_TOP_ARTICLES_ERROR });
    yield put({ type: ActionTypes.DECREMENT_LOADER_STATUS });
  }
};

export const fetchCategoryArticles = function* fetchCategoryArticles({
  country,
  category,
}) {
  try {
    yield put({ type: ActionTypes.INCREMENT_LOADER_STATUS });
    const result = yield call(NewsApi.getCategoryArticles, {
      country,
      category,
    });

    const articles = result.articles;

    yield put({
      type: ActionTypes.FETCH_CATEGORY_ARTICLES_SUCCESS,
      articles,
      category,
    });
    yield put({ type: ActionTypes.DECREMENT_LOADER_STATUS });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_CATEGORY_ARTICLES_ERROR });
    yield put({ type: ActionTypes.DECREMENT_LOADER_STATUS });
  }
};

export const searchTopArticlesSaga = function* searchTopArticlesSaga({
  country,
  query,
}) {
  try {
    yield put({ type: ActionTypes.INCREMENT_LOADER_STATUS });
    const result = yield call(NewsApi.searchTopArticles, {
      country,
      query,
    });

    const articles = result.articles;

    yield put({
      type: ActionTypes.FETCH_SEARCH_TOP_ARTICLES_SUCCESS,
      articles,
    });
    yield put({ type: ActionTypes.DECREMENT_LOADER_STATUS });
  } catch (e) {
    yield put({
      type: ActionTypes.FETCH_SEARCH_TOP_ARTICLES_ERROR,
      message: e.message,
    });
    yield put({ type: ActionTypes.DECREMENT_LOADER_STATUS });
  }
};
