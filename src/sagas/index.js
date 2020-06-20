import { all } from 'redux-saga/effects';
import AppWatchers from './AppSagaWatcher';
import ArticlesWatchers from './ArticlesSagasWatchers';

export default function* rootSaga() {
  const allWatchers = [];

  for (const watcher in AppWatchers) {
    // eslint-disable-next-line
    if (AppWatchers.hasOwnProperty(watcher)) {
      allWatchers.push(AppWatchers[watcher]());
    }
  }

  for (const watcher in ArticlesWatchers) {
    // eslint-disable-next-line
    if (ArticlesWatchers.hasOwnProperty(watcher)) {
      allWatchers.push(ArticlesWatchers[watcher]());
    }
  }

  yield all(allWatchers);
}
