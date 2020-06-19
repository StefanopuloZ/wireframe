import { all } from 'redux-saga/effects';
import AppWatchers from './AppSagaWatcher';

export default function* rootSaga() {
  const allWatchers = [];

  for (const watcher in AppWatchers) {
    // eslint-disable-next-line
    if (AppWatchers.hasOwnProperty(watcher)) {
      allWatchers.push(AppWatchers[watcher]());
    }
  }

  yield all(allWatchers);
}
