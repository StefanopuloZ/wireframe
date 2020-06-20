import { call, put } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import NewsApi from '../apis/newsApi';

export const fetchTopArticlesSaga = function* fetchTopArticlesSaga({
  country,
}) {
  try {
    const result = yield call(NewsApi.getTopArticles, { country });

    const articles = result.articles;

    yield put({ type: ActionTypes.FETCH_TOP_ARTICLES_SUCCESS, articles });
  } catch (e) {
    yield put({ type: ActionTypes.FETCH_TOP_ARTICLES_ERROR });
  }
};

export const fetchCategoryArticles = function* fetchCategoryArticles({
  country,
  category,
}) {
  try {
    const result = yield call(NewsApi.getCategoryArticles, {
      country,
      category,
    });

    const articles = result.articles;

    yield put({ type: ActionTypes.FETCH_CATEGORY_ARTICLES_SUCCESS, articles, category });
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

    const articles = result.articles;

    yield put({ type: ActionTypes.FETCH_SEARCH_TOP_ARTICLES_SUCCESS, articles });
  } catch (e) {
    yield put({
      type: ActionTypes.FETCH_SEARCH_TOP_ARTICLES_ERROR,
      message: e.message,
    });
  }
};
