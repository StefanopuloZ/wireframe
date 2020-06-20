import { takeLatest } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import * as ArticlesSagas from './ArticlesSagas';

const ArticlesWatchers = {
  watchSearchTopArticlesSaga: function* () {
    yield takeLatest(
      ActionTypes.FETCH_SEARCH_TOP_ARTICLES,
      ArticlesSagas.searchTopArticlesSaga
    );
  },
  watchFetchCategoryArticlesSagas: function* () {
    yield takeLatest(
      ActionTypes.FETCH_CATEGORY_ARTICLES,
      ArticlesSagas.fetchCategoryArticles
    );
  },
};

export default ArticlesWatchers;
