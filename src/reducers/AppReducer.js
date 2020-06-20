import * as ActionTypes from '../action-types';
import { LOCALE } from '../enums';

const DEFAULT_STATE = {
  locale: LOCALE.gb,
};

const AppReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOCALE: {
      const locale = action.locale;

      return {
        ...state,
        locale,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
