import { takeLatest, all } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import * as ArticlesSagas from './ArticlesSagas';

const ArticlesWatchers = {
  watchTestSaga: function* () {
    yield takeLatest(ActionTypes.FETCH_SEARCH_TOP_ARTICLES, ArticlesSagas.searchTopArticlesSaga);
  },
};

export default ArticlesWatchers;
