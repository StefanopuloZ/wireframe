import * as ActionTypes from '../action-types';
import { LOCALE, ARTICLE_CATEGORIES } from '../enums';

const categories = Object.keys(ARTICLE_CATEGORIES).map(category => {
  return { [category]: [] };
});

const DEFAULT_STATE = {
  locale: LOCALE.us,
  topArticles: [],
  categories,
  queryArticles: [],
};

const ArticlesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOP_ARTICLES_SUCCESS: {
      const topArticles = action.articles;

      return {
        ...state,
        topArticles,
      };
    }
    case ActionTypes.FETCH_CATEGORY_ARTICLES_SUCCESS: {
      const categories = state.categories;
      categories[action.category] = action.articles;

      return {
        ...state,
        categories,
      };
    }
    case ActionTypes.FETCH_SEARCH_TOP_ARTICLES_SUCCESS: {
      const queryArticles = action.articles;

      return {
        ...state,
        queryArticles,
      };
    }
    default:
      return state;
  }
};

export default ArticlesReducer;
