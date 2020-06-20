import * as ACTION_TYPES from '../action-types';

export const fetchTopArticlesAction = country => ({
  type: ACTION_TYPES.FETCH_TOP_ARTICLES,
  country,
});

export const fetchCategoryArticlesAction = (country, category) => ({
  type: ACTION_TYPES.FETCH_CATEGORY_ARTICLES,
  country,
  category,
});

export const fetchSearchTopArticlesAction = (country, query) => ({
  type: ACTION_TYPES.FETCH_SEARCH_TOP_ARTICLES,
  country,
  query,
});
