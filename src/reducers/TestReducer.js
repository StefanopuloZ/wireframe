import * as ActionTypes from '../action-types';

const DEFAULT_STATE = {
  testText: 'default',
  user: 'no-user',
};

const TestReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TEST: {
      return {
        ...state,
        testText: action.testText,
      };
    }
    case ActionTypes.TEST_FETCH_SUCCEEDED: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};

export default TestReducer;
