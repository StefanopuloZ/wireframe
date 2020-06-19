import * as ACTION_TYPES from '../action-types';

export const testAction = testText => ({
  type: ACTION_TYPES.TEST,
  testText,
});

export const testFetchRequest = () => ({
  type: ACTION_TYPES.TEST_FETCH_REQUESTED,
});
