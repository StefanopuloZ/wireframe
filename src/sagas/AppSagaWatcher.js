import { takeLatest, all } from 'redux-saga/effects';
import * as ActionTypes from '../action-types';
import * as AppSagas from './AppSagas';

const AppWatchers = {
  watchTestSaga: function* () {
    yield takeLatest(ActionTypes.TEST_FETCH_REQUESTED, AppSagas.testSaga);
  },
};

export default AppWatchers;
