import * as ActionTypes from '../action-types';
import { LOCALE, ARTICLE_CATEGORIES } from '../enums';
import { articleFunctions } from '../logic-functions';

let categories = ARTICLE_CATEGORIES;

for (const categoryName in ARTICLE_CATEGORIES) {
  categories[categoryName] = [];
}

const DEFAULT_STATE = {
  locale: LOCALE.us,
  topArticles: [],
  categories,
  queryArticles: [],
};

const ArticlesReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOP_ARTICLES_SUCCESS: {
      const topArticles = articleFunctions.mapIdsToArticles(action.articles);

      return {
        ...state,
        topArticles,
      };
    }
    case ActionTypes.FETCH_CATEGORY_ARTICLES_SUCCESS: {
      const categories = JSON.parse(JSON.stringify(state.categories));
      categories[action.category] = articleFunctions.mapIdsToArticles(
        action.articles
      );

      return {
        ...state,
        categories,
      };
    }
    case ActionTypes.FETCH_SEARCH_TOP_ARTICLES_SUCCESS: {
      const queryArticles = articleFunctions.mapIdsToArticles(action.articles);

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
