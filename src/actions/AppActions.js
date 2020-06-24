import * as ACTION_TYPES from '../action-types';

export const setLocaleAction = locale => ({
  type: ACTION_TYPES.SET_LOCALE,
  locale,
});

export const incrementLoaderStatus = () => ({
  type: ACTION_TYPES.INCREMENT_LOADER_STATUS,
});

export const decrementLoaderStatus = () => ({
  type: ACTION_TYPES.DECREMENT_LOADER_STATUS,
});
