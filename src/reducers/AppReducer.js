import * as ActionTypes from '../action-types';
import { LOCALE } from '../enums';

const DEFAULT_STATE = {
  locale: LOCALE.gb,
  loaderStatus: 0,
};

const AppReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOCALE: {
      const locale = action.locale;
      localStorage.setItem('locale', locale);

      return {
        ...state,
        locale,
      };
    }
    case ActionTypes.INCREMENT_LOADER_STATUS: {
      const loaderStatus = state.loaderStatus + 1;

      return {
        ...state,
        loaderStatus,
      };
    }
    case ActionTypes.DECREMENT_LOADER_STATUS: {
      const loaderStatus = state.loaderStatus - 1;

      return {
        ...state,
        loaderStatus,
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
