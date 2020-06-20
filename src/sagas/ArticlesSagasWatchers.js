import { takeLatest, takeEvery } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import * as ArticlesSagas from './ArticlesSagas';

const ArticlesWatchers = {
  watchSearchTopArticlesSaga: function* () {
    yield takeLatest(
      ActionTypes.FETCH_SEARCH_TOP_ARTICLES,
      ArticlesSagas.searchTopArticlesSaga
    );
  },
  watchFetchCategoryArticlesSaga: function* () {
    yield takeEvery(
      ActionTypes.FETCH_CATEGORY_ARTICLES,
      ArticlesSagas.fetchCategoryArticles
    );
  },
  watchFetchTopArticlesSaga: function* () {
    yield takeLatest(
      ActionTypes.FETCH_TOP_ARTICLES,
      ArticlesSagas.fetchTopArticlesSaga
    );
  },
};

export default ArticlesWatchers;
