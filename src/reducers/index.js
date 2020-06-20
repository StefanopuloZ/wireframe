import { combineReducers } from 'redux';
import ArticlesReducer from './ArticlesReducer';
import AppReducer from './AppReducer';

export default combineReducers({
  ArticlesReducer,
  AppReducer,
});
