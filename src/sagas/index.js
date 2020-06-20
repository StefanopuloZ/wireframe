import { all } from 'redux-saga/effects';
import ArticlesWatchers from './ArticlesSagasWatchers';

export default function* rootSaga() {
  const allWatchers = [];

  for (const watcher in ArticlesWatchers) {
    allWatchers.push(ArticlesWatchers[watcher]());
  }

  yield all(allWatchers);
}
